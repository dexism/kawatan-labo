/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.0.10"; // パッチバージョンを更新

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// ===== Settings =====
// const tableSize = 0.4;         // 仮想的なテーブル幅（m）
const d10Radius = 0.01;        // ダイス外接球半径（m）
// const initialHeight = 0.5;     // 初期高さ（m）
const gravity = -9.82;         // 重力加速度（m/s²）
const frictionGround = 0.2;    // 床摩擦
const frictionWall = 0.3;      // 壁摩擦
const restitutionGround = 0.3; // 床反発
const restitutionWall = 0.9;   // 壁反発

// ===== モジュール内変数 =====
// let THREE, CANNON, FBXLoader;
let scene, camera, renderer, world;
let diceObject, diceBody;
let diceMaterial, groundMaterial, wallMaterial;
let rollCallback = null;
let isRolling = false;
let stopCheckTimeout;
let forceResultTimeout;
let containerElement;
let viewportSize;

// 面の法線ベクトルと対応する出目（モデルの向きに合わせて調整が必要）
// これはD10モデルの各面がどの方向を向いているかを定義します。
// 0から9の10面分定義する必要があります。
const faceNormals = [
    // この値はあなたのモデルに合わせて調整が必要です
    // 開発者ツールでconsole.log(worldNormal.toArray())などを使い、
    // どの面がどの値に対応するかを見つける作業が必要です。
    { normal: new THREE.Vector3(0, 1, 0), value: 1 },   // 仮：上面が0
    { normal: new THREE.Vector3(0, -1, 0), value: 9 }, // 仮：底面が9
    { normal: new THREE.Vector3(0.951, 0, 0.309), value: 10 },
    { normal: new THREE.Vector3(0.588, 0, -0.809), value: 2 },
    { normal: new THREE.Vector3(-0.588, 0, -0.809), value: 7 },
    { normal: new THREE.Vector3(-0.951, 0, 0.309), value: 4 },
    { normal: new THREE.Vector3(0, 0.851, 0.526), value: 8 },
    { normal: new THREE.Vector3(0, 0.851, -0.526), value: 6},
    { normal: new THREE.Vector3(0, -0.851, 0.526), value: 3 },
    { normal: new THREE.Vector3(0, -0.851, -0.526), value: 5 },
];

// ===== 主要関数 =====

/**
 * 3Dダイスの初期化
 * @param {HTMLElement} container - 3Dキャンバスを追加するコンテナ要素
 */
export function init(container) {
    containerElement = container;

    // --- 初期サイズは0x0のままでOK ---
    const width = container.clientWidth;
    const height = container.clientHeight;

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(30, (width / height) || 1, 0.1, 10);
    camera.position.set(0, 0.5, 0);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(1, 2, 1);
    scene.add(dirLight);

    world = new CANNON.World();
    world.gravity.set(0, gravity, 0);

    diceMaterial = new CANNON.Material('dice');
    groundMaterial = new CANNON.Material('ground');
    wallMaterial = new CANNON.Material('wall'); // ★★★ 壁のマテリアルを追加 ★★★

    world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, groundMaterial, {
        restitution: restitutionGround, friction: frictionGround
    }));
    // ★★★ 壁とダイスの接触設定を追加 ★★★
    world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, wallMaterial, {
        restitution: restitutionWall, friction: frictionWall
    }));

    // 物理床
    const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    groundBody.addShape(new CANNON.Plane());
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // 水平にする
    world.addBody(groundBody);

    // ★★★ ここから蓋の追加 ★★★
//    const ceilingBody = new CANNON.Body({ mass: 0, material: groundMaterial });
//    ceilingBody.addShape(new CANNON.Plane());
    // X軸に180度回転させて下を向かせる
//    ceilingBody.quaternion.setFromEuler(Math.PI / 2, 0, 0);
//    ceilingBody.position.set(0, 0.25, 0); // 初期高さより少し上に配置
//    world.addBody(ceilingBody);

    // ★★★ 壁の生成処理をinitから呼び出す ★★★
    createWalls();

    loadDiceModel();
    animate();
    window.addEventListener('resize', onWindowResize);
    
    setTimeout(onWindowResize, 0);
}

/**
 * ダイスを投げる
 * @param {function(number)} callback - 結果を返すコールバック関数
 */
export function rollDice(callback) {
    if (!diceBody || isRolling) return;
    rollCallback = callback;
    isRolling = true;
    
    clearTimeout(forceResultTimeout);
    
    containerElement.classList.add('is-visible');
    onWindowResize();

    // ★★★ ここから修正 ★★★
    // 1. ダイスの初期位置を、画面中央の上空に固定
    diceBody.position.set(0.0, 0.1, 0.0); // Y座標(高さ)を0.2mに設定
    // diceBody.position.set(0.0, 0.1, 0.0); // Y座標(高さ)を0.2mに設定

    // 2. 初速をゼロにし、真下に自然落下させる
    // diceBody.velocity.set(-0.1, 0.0, -0.4);
    diceBody.velocity.set(0, 2.4, 0);

    // 3. 回転（角速度）のみをランダムに与える
    diceBody.angularVelocity.set(
        Math.random() * 20 + 10, // 回転の強さをお好みで調整してください (例: 20 -> 30)
        Math.random() * 20 + 10,
        Math.random() * 20 + 10 
    );
    // ★★★ 修正はここまで ★★★
    
    diceBody.wakeUp();
    checkIfStopped();
    
    forceResultTimeout = setTimeout(() => {
        if (isRolling) {
            console.warn("Dice roll timed out. Forcing result.");
            finishRoll();
        }
    }, 2000);
}

// ===== 内部ヘルパー関数 (省略なし) =====

function loadDiceModel() {
    const fbxLoader = new FBXLoader();
    const texLoader = new THREE.TextureLoader();
    const basePath = 'models/';
    const modelFile = 'Dice_10.fbx';
    const textureFiles = {
        map: 'Dice_10_Albedo.png',
        normalMap: 'Dice_10_Normal.png',
        metalnessMap: 'Dice_10_Metallic.png',
        roughnessMap: 'Dice_10_Roughness.png',
        aoMap: 'Dice_10_AO.png'
    };

    // ★★★ 複数のテクスチャを読み込む ★★★
    const textures = {};
    let texturesLoaded = 0;
    const numTextures = Object.keys(textureFiles).length;

    Object.entries(textureFiles).forEach(([key, file]) => {
        texLoader.load(basePath + file, (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace;
            textures[key] = texture;
            texturesLoaded++;
            // すべてのテクスチャが読み込み終わったらモデルを処理
            if (texturesLoaded === numTextures) {
                loadModelWithTextures();
            }
        });
    });
    function loadModelWithTextures() {
        fbxLoader.load(basePath + modelFile, (object) => {
            object.traverse((child) => {
                if (child.isMesh) {
                    // ★★★ 読み込んだテクスチャをマテリアルに設定 ★★★
                    child.material = new THREE.MeshStandardMaterial({
                        map: textures.map,
                        normalMap: textures.normalMap,
                        metalnessMap: textures.metalnessMap,
                        roughnessMap: textures.roughnessMap,
                        aoMap: textures.aoMap,
                        metalness: 1.0, // metalnessMapを使うときは1.0にするのが一般的
                        roughness: 1.0, // roughnessMapを使うときは1.0にするのが一般的
                        aoMapIntensity: 1.0 // AOマップの強度
                    });
                }
            });

            // ... (recenter, bakeUniformScale, scene.add などの処理は変更なし) ...
            recenterGeometryToOrigin(object);
            const currentR = computeBoundingRadiusFromObject(object);
            const scaleFactor = d10Radius / currentR;
            bakeUniformScale(object, scaleFactor);

            scene.add(object);
            diceObject = object;

            // ★★★ 物理ボディをTrimeshに戻します ★★★
            const { vertices, indices } = collectLocalTrimeshData(object);
            const shape = new CANNON.Trimesh(vertices, indices);

            diceBody = new CANNON.Body({
                mass: 0.005, // 質量を1に戻します（Trimeshの方が重さの調整がシビアなため）
                material: diceMaterial,
                shape: shape,
                angularDamping: 0.0, // 回転の減衰
                allowSleep: true,
            });
            world.addBody(diceBody);
        });
    }
}

function checkIfStopped() {
    clearTimeout(stopCheckTimeout);
    
    // cannon-esのsleep状態をチェックするのが最も確実
    if (diceBody.sleepState === CANNON.Body.SLEEPING) {
        // ★★★ タイムアウトをクリア ★★★
        clearTimeout(forceResultTimeout);
        setTimeout(finishRoll, 200);
    } else {
        stopCheckTimeout = setTimeout(checkIfStopped, 100);
    }
}

function finishRoll() {
    // ★★★ isRolling チェックを追加 ★★★
    if (!isRolling) return; // 既に処理済みなら何もしない

    isRolling = false;
    // ★★★ タイムアウトをクリア ★★★
    clearTimeout(forceResultTimeout);
    clearTimeout(stopCheckTimeout);
    
    const resultValue = getDiceValue();

    if (rollCallback) {
        rollCallback(resultValue);
    }

    setTimeout(() => {
        containerElement.classList.remove('is-visible');
    }, 1500);
}

function getDiceValue() {
    let highestDot = -2;
    let result = -1;
    const upVector = new THREE.Vector3(0, 1, 0);

    faceNormals.forEach(face => {
        const worldNormal = face.normal.clone().applyQuaternion(diceObject.quaternion);
        const dot = worldNormal.dot(upVector);

        if (dot > highestDot) {
            highestDot = dot;
            result = face.value;
        }
    });
    return result;
}

const walls = [];
const trayMeshes = [];

function createWalls() {
    walls.forEach(wall => world.removeBody(wall));
    walls.length = 0;
    trayMeshes.forEach(mesh => scene.remove(mesh));
    trayMeshes.length = 0;

    if (!viewportSize) return;

    // ★★★ ここから壁の計算ロジックを全面的に修正 ★★★
    
    // 1. 表示用の床（ダイストレイ）のサイズを定義
    const trayWidth = viewportSize.width * 0.9;
    const trayDepth = viewportSize.height * 0.9;

    // 2. 表示用の床メッシュを作成
    const trayGeometry = new THREE.PlaneGeometry(trayWidth, trayDepth);
    const trayMaterial = new THREE.MeshStandardMaterial({
        color: 0x333333,
        transparent: true,
        opacity: 0.3
    });
    const trayMesh = new THREE.Mesh(trayGeometry, trayMaterial);
    trayMesh.rotation.x = -Math.PI / 2;
    trayMesh.position.y = 0.001;
    scene.add(trayMesh);
    trayMeshes.push(trayMesh);

    // 3. 物理的な壁のパラメータを定義
    const wallHeight = 0.5; // 壁の高さ
    const wallThickness = 0.1; // 壁の厚み

    // 4. CANNON.Boxに渡す「半分の長さ」を計算
    const wallShapeX = new CANNON.Box(new CANNON.Vec3(trayWidth / 2, wallHeight / 2, wallThickness / 2));
    const wallShapeZ = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, wallHeight / 2, trayDepth / 2));
    
    // 5. 物理的な壁を4つ作成
    const wallPositions = [
        new CANNON.Vec3(0, wallHeight / 2, trayDepth / 2),  // 奥
        new CANNON.Vec3(0, wallHeight / 2, -trayDepth / 2), // 手前
        new CANNON.Vec3(trayWidth / 2, wallHeight / 2, 0),  // 右
        new CANNON.Vec3(-trayWidth / 2, wallHeight / 2, 0)  // 左
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

    // ★★★ viewportSizeの計算をここで行う ★★★
    const vFOV = THREE.MathUtils.degToRad(camera.fov);
    const vpHeight = 2 * Math.tan(vFOV / 2) * 0.5;
    const vpWidth = vpHeight * (width / height);
    viewportSize = { width: vpWidth, height: vpHeight };

    // ★★★ 壁を再生成する ★★★
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

    if (diceObject && diceBody) {
        // ★★★ 修正点3: デバッグ用のNaNチェックを削除 ★★★
        // if (isRolling && (isNaN(diceBody.position.x))) { ... }

        diceObject.position.copy(diceBody.position);
        diceObject.quaternion.copy(diceBody.quaternion);
    }
    
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