/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.1.0"; // パッチバージョンを更新

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// ===== Settings =====
const settings = {
    gravity: -9.82,
    dice: {
        radius: 0.01,
        mass: 0.005,
        angularDamping: 0.1,
        initialPosition: { xPercent: 90, yPercent: 90 },
        initialHeight: 0.1,
        throw: {
            speed:       { min: 2.5, max: 2.8 },
            azimuth:     { min: 320, max: 350 },
            elevation:   { min: 85,  max: 88 },
            angularVelocity: { min: 10, max: 15 }
        }
    },
    physics: {
        frictionGround:    0.2,
        frictionWall:      0.1,
        restitutionGround: 0.3,
        restitutionWall:   0.6
    },
    camera: {
        fov: 10,
        height: 1.0
    },
    tray: {
        sizeRatio: 0.6,
        wallHeight: 1.0,
        wallThickness: 0.5
    },
    timeouts: {
        stopCheck: 100,
        forceResult: 2000,
        hide: 1000
    }
};

// ===== モジュール内変数 =====
let scene, camera, renderer, world;
let diceMaterial, groundMaterial, wallMaterial;
let rollCallback = null;
let isRolling = false;
let stopCheckTimeout;
let forceResultTimeout;
let containerElement;
let viewportSize;
const walls = [];

// ★★★ ダイス管理用の変数を変更 ★★★
const diceArray = []; // Three.jsメッシュとCannon.jsボディをペアで管理
let baseModels = {};  // 読み込んだモデルの原本を保持
let diceShape = null; // ダイスの物理形状を保持

// ===== 面の法線ベクトルと対応する出目 =====
const faceNormals = [
    { value: 8,  normal: new THREE.Vector3(0.000,  0.894,  0.447) },
    { value: 10,  normal: new THREE.Vector3(0.851,  0.447,  0.276) },
    { value: 2,  normal: new THREE.Vector3(0.526,  0.447, -0.724) },
    { value: 6,  normal: new THREE.Vector3(-0.526, 0.447, -0.724) },
    { value: 4,  normal: new THREE.Vector3(-0.851, 0.447,  0.276) },
    { value: 1,  normal: new THREE.Vector3(0.000, -0.894, -0.447) },
    { value: 5,  normal: new THREE.Vector3(0.851, -0.447, -0.276) },
    { value: 3,  normal: new THREE.Vector3(0.526, -0.447,  0.724) },
    { value: 7,  normal: new THREE.Vector3(-0.526, -0.447,  0.724) },
    { value: 9, normal: new THREE.Vector3(-0.851, -0.447, -0.276) }
];

// ===== 主要関数 =====
export function init(container) {
    containerElement = container;

    const width = container.clientWidth;
    const height = container.clientHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(settings.camera.fov, (width / height) || 1, 0.1, 10);
    camera.position.set(0, settings.camera.height, 0);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffeedd, 0.4));
    const dirLight = new THREE.DirectionalLight(0xddeeff, 4);
    dirLight.position.set(-1, 5, 1);
    scene.add(dirLight);
    const fillLight = new THREE.DirectionalLight(0xeeffee, 0.3);
    fillLight.position.set(-1, 1, -1);
    scene.add(fillLight);

    world = new CANNON.World();
    world.gravity.set(0, settings.gravity, 0);
    world.solver.iterations = 20;
    world.solver.tolerance = 0.0;

    diceMaterial = new CANNON.Material('dice');
    groundMaterial = new CANNON.Material('ground');
    wallMaterial = new CANNON.Material('wall');

    world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, groundMaterial, { restitution: settings.physics.restitutionGround, friction: settings.physics.frictionGround }));
    world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, wallMaterial, { restitution: settings.physics.restitutionWall, friction: settings.physics.frictionWall }));

    const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    groundBody.addShape(new CANNON.Plane());
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);

    const ceilingBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    ceilingBody.addShape(new CANNON.Plane());
    ceilingBody.quaternion.setFromEuler(Math.PI / 2, 0, 0);
    ceilingBody.position.set(0, settings.tray.wallHeight, 0);
    world.addBody(ceilingBody);

    createWalls();
    preloadDiceModels(); // ★★★ loadDiceModelから変更 ★★★

    animate();
    window.addEventListener('resize', onWindowResize);
    setTimeout(onWindowResize, 0);
}

/**
 * ダイスを投げる
 * @param {object} diceOptions - 転がすダイスの数 { normal: number, red: number }
 * @param {function(object)} callback - 結果を返すコールバック関数 { normal: number[], red: number[] }
 */
export function rollDice(diceOptions, callback) {
    if (isRolling || (!baseModels.normal || !baseModels.red)) return;

    // 既存のダイスをシーンとワールドから削除
    diceArray.forEach(d => {
        scene.remove(d.mesh);
        world.removeBody(d.body);
    });
    diceArray.length = 0;

    rollCallback = callback;
    isRolling = true;
    clearTimeout(forceResultTimeout);
    containerElement.classList.add('is-visible');
    
    // 指定された数のダイスを生成して投擲
    createAndThrowDice(diceOptions.normal || 0, 'normal');
    createAndThrowDice(diceOptions.red || 0, 'red');
    
    checkIfAllStopped();
    
    forceResultTimeout = setTimeout(() => {
        if (isRolling) {
            console.warn("Dice roll timed out. Forcing result.");
            finishRoll();
        }
    }, settings.timeouts.forceResult);
}

// ===== 内部ヘルパー関数 =====

function preloadDiceModels() {
    const fbxLoader = new FBXLoader();
    const texLoader = new THREE.TextureLoader();
    const basePath = '/models/';
    const modelFile = 'Dice_10.fbx';

    const commonTextureFiles = {
        normalMap: 'Dice_10_Normal.png',
        metalnessMap: 'Dice_10_Metallic.png',
        roughnessMap: 'Dice_10_Roughness.png',
        aoMap: 'Dice_10_AO.png'
    };
    
    const variantTextureFiles = {
        normal: { map: 'Dice_10_Albedo.png' },
        red: { map: 'Dice_10_Red_Albedo.png' }
    };

    const textures = {};
    let texturesLoaded = 0;
    const numTextures = Object.keys(commonTextureFiles).length + Object.keys(variantTextureFiles).length;

    const onLoad = () => {
        texturesLoaded++;
        if (texturesLoaded === numTextures) {
            createBaseModels();
        }
    };

    // 共通テクスチャをロード
    for (const key in commonTextureFiles) {
        texLoader.load(basePath + commonTextureFiles[key], (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            textures[key] = texture;
            onLoad();
        });
    }
    // バリアントテクスチャをロード
    for (const type in variantTextureFiles) {
        texLoader.load(basePath + variantTextureFiles[type].map, (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            textures[type] = { map: texture };
            onLoad();
        });
    }

    function createBaseModels() {
        const createMaterial = (type) => new THREE.MeshStandardMaterial({
            map: textures[type].map,
            normalMap: textures.normalMap,
            metalnessMap: textures.metalnessMap,
            roughnessMap: textures.roughnessMap,
            aoMap: textures.aoMap,
            metalness: 1.0,
            roughness: 1.0,
            normalScale: new THREE.Vector2(2, 2),
            aoMapIntensity: 0.5
        });

        const materialNormal = createMaterial('normal');
        const materialRed = createMaterial('red');

        fbxLoader.load(basePath + modelFile, (object) => {
            recenterGeometryToOrigin(object);
            const scaleFactor = settings.dice.radius / computeBoundingRadiusFromObject(object);
            bakeUniformScale(object, scaleFactor);

            const { vertices, indices } = collectLocalTrimeshData(object);
            diceShape = new CANNON.Trimesh(vertices, indices);
            
            baseModels.normal = object.clone(true);
            baseModels.normal.traverse(child => { if (child.isMesh) child.material = materialNormal; });

            baseModels.red = object.clone(true);
            baseModels.red.traverse(child => { if (child.isMesh) child.material = materialRed; });
        });
    }
}

function createAndThrowDice(count, type) {
    if (count === 0 || !baseModels[type] || !diceShape) return;

    const trayWidth = viewportSize.width * settings.tray.sizeRatio;
    const trayHeight = viewportSize.height * settings.tray.sizeRatio;
    const xPercent = Math.max(10, Math.min(90, settings.dice.initialPosition.xPercent));
    const yPercent = Math.max(10, Math.min(90, settings.dice.initialPosition.yPercent));
    const initialX = (xPercent / 100 - 0.5) * trayWidth;
    const initialZ = (yPercent / 100 - 0.5) * trayHeight;

    const randomInRange = (range) => Math.random() * (range.max - range.min) + range.min;

    for (let i = 0; i < count; i++) {
        const mesh = baseModels[type].clone(true);
        scene.add(mesh);

        const body = new CANNON.Body({
            mass: settings.dice.mass,
            material: diceMaterial,
            shape: diceShape,
            angularDamping: settings.dice.angularDamping,
            allowSleep: true,
        });
        
        body.position.set(
            initialX + (Math.random() - 0.5) * 0.02,
            settings.dice.initialHeight + (Math.random() * 0.05),
            initialZ + (Math.random() - 0.5) * 0.02
        );

        const speed = randomInRange(settings.dice.throw.speed);
        const azimuth = randomInRange(settings.dice.throw.azimuth);
        const elevation = randomInRange(settings.dice.throw.elevation);
        const azimuthRad = THREE.MathUtils.degToRad(azimuth);
        const elevationRad = THREE.MathUtils.degToRad(elevation);
        const horizontalSpeed = speed * Math.cos(elevationRad);
        const verticalSpeed = speed * Math.sin(elevationRad);
        const speedX = horizontalSpeed * Math.sin(azimuthRad);
        const speedZ = -horizontalSpeed * Math.cos(azimuthRad);
        body.velocity.set(speedX, verticalSpeed, speedZ);

        const angVelRange = settings.dice.throw.angularVelocity;
        body.angularVelocity.set(
            randomInRange(angVelRange) * (Math.random() < 0.5 ? 1 : -1),
            randomInRange(angVelRange) * (Math.random() < 0.5 ? 1 : -1),
            randomInRange(angVelRange) * (Math.random() < 0.5 ? 1 : -1)
        );
        
        world.addBody(body);
        diceArray.push({ mesh, body, type });
    }
}

function checkIfAllStopped() {
    clearTimeout(stopCheckTimeout);
    
    const allStopped = diceArray.length > 0 && diceArray.every(d => d.body.sleepState === CANNON.Body.SLEEPING);

    if (allStopped) {
        clearTimeout(forceResultTimeout);
        setTimeout(finishRoll, 200);
    } else {
        stopCheckTimeout = setTimeout(checkIfAllStopped, settings.timeouts.stopCheck);
    }
}

function finishRoll() {
    if (!isRolling) return;
    isRolling = false;
    clearTimeout(forceResultTimeout);
    clearTimeout(stopCheckTimeout);
    
    const results = { normal: [], red: [] };

    diceArray.forEach(d => {
        const value = getDiceValue(d.mesh);
        results[d.type].push(value);
    });

    if (rollCallback) {
        rollCallback(results);
    }

    setTimeout(() => {
        containerElement.classList.remove('is-visible');
    }, settings.timeouts.hide);
}

function getDiceValue(diceMesh) {
    let highestDot = -2;
    let result = -1;
    const upVector = new THREE.Vector3(0, 1, 0);

    faceNormals.forEach(face => {
        const worldNormal = face.normal.clone().applyQuaternion(diceMesh.quaternion);
        const dot = worldNormal.dot(upVector);
        if (dot > highestDot) {
            highestDot = dot;
            result = face.value;
        }
    });
    return result;
}

const trayMeshes = [];
function createWalls() {
    walls.forEach(wall => world.removeBody(wall));
    walls.length = 0;
    trayMeshes.forEach(mesh => scene.remove(mesh));
    trayMeshes.length = 0;

    if (!viewportSize) return;

    const trayWidth = viewportSize.width * settings.tray.sizeRatio;
    const trayHeight = viewportSize.height * settings.tray.sizeRatio;

    const trayGeometry = new THREE.PlaneGeometry(trayWidth, trayHeight);
    const trayMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, transparent: true, opacity: 0.3 });
    const trayMesh = new THREE.Mesh(trayGeometry, trayMaterial);
    trayMesh.rotation.x = -Math.PI / 2;
    trayMesh.position.y = 0.001;
    scene.add(trayMesh);
    trayMeshes.push(trayMesh);

    const wallHeight = settings.tray.wallHeight;
    const wallThickness = settings.tray.wallThickness;
    const wallShapeX = new CANNON.Box(new CANNON.Vec3(trayWidth / 2, wallHeight / 2, wallThickness / 2));
    const wallShapeZ = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, wallHeight / 2, trayHeight / 2));
    const wallPositions = [
        new CANNON.Vec3(0, wallHeight / 2, trayHeight / 2),
        new CANNON.Vec3(0, wallHeight / 2, -trayHeight / 2),
        new CANNON.Vec3(trayWidth / 2, wallHeight / 2, 0),
        new CANNON.Vec3(-trayWidth / 2, wallHeight / 2, 0)
    ];
    const wallBodies = [
        new CANNON.Body({ mass: 0, shape: wallShapeX, position: wallPositions[0], material: wallMaterial }),
        new CANNON.Body({ mass: 0, shape: wallShapeX, position: wallPositions[1], material: wallMaterial }),
        new CANNON.Body({ mass: 0, shape: wallShapeZ, position: wallPositions[2], material: wallMaterial }),
        new CANNON.Body({ mass: 0, shape: wallShapeZ, position: wallPositions[3], material: wallMaterial }),
    ];
    wallBodies.forEach(body => {
        world.addBody(body);
        walls.push(body);
    });
}

function onWindowResize() {
    if (!containerElement) return;
    const width = containerElement.clientWidth;
    const height = containerElement.clientHeight;
    if (width === 0 || height === 0) return;

    const vFOV = THREE.MathUtils.degToRad(camera.fov);
    const vpHeight = 2 * Math.tan(vFOV / 2) * camera.position.y;
    const vpWidth = vpHeight * (width / height);
    viewportSize = { width: vpWidth, height: vpHeight };

    createWalls();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

let lastTime = performance.now();
function animate() {
    requestAnimationFrame(animate);
    const time = performance.now();
    const dt = (time - lastTime) / 1000;
    if (world) {
        world.step(1 / 60, dt, 3);
    }
    lastTime = time;

    diceArray.forEach(d => {
        d.mesh.position.copy(d.body.position);
        d.mesh.quaternion.copy(d.body.quaternion);
    });
    
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

function computeBoundingRadiusFromObject(object) {
    const temp = new THREE.Vector3();
    let maxR = 0;
    object.traverse((child) => {
      if (child.isMesh && child.geometry?.attributes?.position) {
        const pos = child.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            temp.fromBufferAttribute(pos, i);
            const r = temp.length();
            if (r > maxR) maxR = r;
        }
      }
    });
    return maxR;
}

function collectLocalTrimeshData(object) {
    const vertices = [];
    const indices = [];
    let baseIndex = 0;

    object.traverse((child) => {
      if (child.isMesh && child.geometry?.attributes?.position) {
        const geom = child.geometry;
        const pos = geom.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            vertices.push(pos.getX(i), pos.getY(i), pos.getZ(i));
        }
        if (geom.index) {
            const arr = geom.index.array;
            for (let i = 0; i < arr.length; i++) {
                indices.push(baseIndex + arr[i]);
            }
        } else {
            for (let i = 0; i < pos.count; i++) {
                indices.push(baseIndex + i);
            }
        }
        baseIndex += pos.count;
      }
    });
    return { vertices, indices };
}

function recenterGeometryToOrigin(object) {
    const box = new THREE.Box3().setFromObject(object);
    const center = new THREE.Vector3();
    box.getCenter(center);
    object.traverse((child) => {
        if (child.isMesh && child.geometry) {
            child.geometry.translate(-center.x, -center.y, -center.z);
        }
    });
    object.position.set(0, 0, 0);
}

function bakeUniformScale(object, scaleFactor) {
    const m = new THREE.Matrix4().makeScale(scaleFactor, scaleFactor, scaleFactor);
    object.traverse((child) => {
        if (child.isMesh && child.geometry) {
            child.geometry.applyMatrix4(m);
        }
    });
    object.scale.set(1, 1, 1);
}