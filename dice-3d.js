/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "2.0.5"; // パッチバージョンを更新

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

// ===== Settings =====
const settings = {
    gravity:           -1.00,   // 重力加速度 (m/s²) -9.82
    dice: {
        radius:         0.01,   // ダイスの外接球半径 (m)
        mass:           0.01,  // 質量 (kg)
        angularDamping: 0.1,    // 回転の減衰 (0-1)
        initialPosition: { xPercent: 75, yPercent: 75 }, // 右下(%)
        initialHeight:  0.05,   // 投擲する高さ (m)
        throw: {
            speed:           { min: 0.1, max: 0.2 }, // 初速 [m/s]
            azimuth:         { min: 320, max: 350 }, // 水平方向 [deg]
            elevation:       { min: -10, max:  40 }, // 射出角度 [deg]
            angularVelocity: { min:   5, max:  10 }  // [rad/s]
        }
    },
    physics: {
        frictionGround:    0.1, // 床の摩擦
        frictionWall:      0.1, // 壁の摩擦
        restitutionGround: 0.3, // 床の反発係数
        restitutionWall:   0.9  // 壁の反発係数
    },
    camera: {
        fov:   20,              // 視野角 (ズーム)
        height: 0.5             // 視点高
    },
    tray: {
        sizeRatio:     1.0,     // 画面サイズに対するトレイの比率
        wallHeight:    0.6,     // 壁と天井の高さ（共通）
        wallThickness: 0.5      // 壁の厚み
    },
    timeouts: {
        stopCheck:    100,      // 停止チェックの間隔 (ms)
        forceResult: 3000,      // 強制終了までの時間 (ms)
        hide:        1000       // 結果表示後に非表示になるまでの時間 (ms)
    }
};

// ===== モジュール内変数 =====
// let THREE, CANNON, FBXLoader;
let scene, camera, renderer, world;
// let diceObject, diceBody;
let diceMaterial, groundMaterial, wallMaterial;
let rollCallback = null;
let isRolling = false;
let stopCheckTimeout;
let forceResultTimeout;
let containerElement;
let viewportSize;
let isDiceReady = false;

// ★★★ 複数ダイス管理用の変数 ★★★
const MAX_DICE_COUNT = 5; // 同時に振れるダイスの最大数
let dicePool = []; // 生成したダイスインスタンスを保持するプール
let activeDice = []; // 現在ロール中のダイスを保持する配列

// 面の法線ベクトルと対応する出目（モデルの向きに合わせて調整が必要）
// これはD10モデルの各面がどの方向を向いているかを定義します。
// 0から9の10面分定義する必要があります。
const faceNormals = [
    // この値はあなたのモデルに合わせて調整が必要です
    // 開発者ツールでconsole.log(worldNormal.toArray())などを使い、
    // どの面がどの値に対応するかを見つける作業が必要です。
    // 上半分 (y > 0)
    { value: 8,  normal: new THREE.Vector3(0.000,  0.894,  0.447) },
    { value: 10,  normal: new THREE.Vector3(0.851,  0.447,  0.276) },
    { value: 2,  normal: new THREE.Vector3(0.526,  0.447, -0.724) },
    { value: 6,  normal: new THREE.Vector3(-0.526, 0.447, -0.724) },
    { value: 4,  normal: new THREE.Vector3(-0.851, 0.447,  0.276) },
    // 下半分 (y < 0)
    { value: 1,  normal: new THREE.Vector3(0.000, -0.894, -0.447) },
    { value: 5,  normal: new THREE.Vector3(0.851, -0.447, -0.276) },
    { value: 3,  normal: new THREE.Vector3(0.526, -0.447,  0.724) },
    { value: 7,  normal: new THREE.Vector3(-0.526, -0.447,  0.724) },
    { value: 9, normal: new THREE.Vector3(-0.851, -0.447, -0.276) }
];

// ===== 主要関数 =====

/**
 * 3Dダイスの初期化
 * @param {HTMLElement} container - 3Dキャンバスを追加するコンテナ要素
 */
export async function init(container) {
    containerElement = container;

    // --- 初期サイズは0x0のままでOK ---
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

    // 1. 環境光 (AmbientLight)
    scene.add(new THREE.AmbientLight(0xffeedd, 0.9));

    // 2. 平行光源 (DirectionalLight)
    const dirLight = new THREE.DirectionalLight(0xddeeff, 5);
    // dirLight.position.set(1, 5, 2);
    dirLight.position.set(-1, 5, 2);
    scene.add(dirLight);

    // 補助ライト（フィルライト）
    const fillLight = new THREE.DirectionalLight(0xeeffee, 0.5);
    fillLight.position.set(5, 2, -1); // メインとは逆の左手前から当てる
    scene.add(fillLight);

    world = new CANNON.World();
    world.gravity.set(0, settings.gravity, 0);

    // GSソルバー(GSSolver)を使用し、計算の反復回数を増やす
    world.solver.iterations = 30; // デフォルトは10。値を大きくすると精度が上がる。反復回数
    world.solver.tolerance = 0.0; // デフォルトは0.1。値を小さくすると精度が上がる。誤りしきい値

    diceMaterial = new CANNON.Material('dice');
    groundMaterial = new CANNON.Material('ground');
    wallMaterial = new CANNON.Material('wall'); // ★★★ 壁のマテリアルを追加 ★★★

    world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, groundMaterial, {
        restitution: settings.physics.restitutionGround, friction: settings.physics.frictionGround
    }));
    world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, wallMaterial, {
        restitution: settings.physics.restitutionWall, friction: settings.physics.frictionWall
    }));
    // ★★★ ダイス同士の接触ルールを追加 ★★★
    world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, diceMaterial, {
        restitution: 0.5, // 反発係数 (0-1)。少し弾むように設定
        friction:    0.1  // 摩擦係数 (0-1)。滑りやすく設定
    }));
    // 物理床
    const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    groundBody.addShape(new CANNON.Plane());
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);

/*    // 物理蓋
    const ceilingBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    ceilingBody.addShape(new CANNON.Plane());
    // X軸に180度回転させて下を向かせる
    ceilingBody.quaternion.setFromEuler(Math.PI / 2, 0, 0);
    ceilingBody.position.set(0, settings.tray.wallHeight, 0); // 壁と同じ高さを参照
    world.addBody(ceilingBody);
*/
    createWalls();

    const loadPromises = [];
    for (let i = 0; i < MAX_DICE_COUNT; i++) {
        loadPromises.push(loadDiceModel()); // loadDiceModelがPromiseを返すように変更
    }
    await Promise.all(loadPromises);

    isDiceReady = true; // ★★★ 準備完了フラグを立てる ★★★
    console.log("3D Dice pool ready.");

    animate();
    window.addEventListener('resize', onWindowResize);
    
    setTimeout(onWindowResize, 0);
}

/**
 * ダイスを投げる
 * @param {object} rollConfig - ロールの設定 { dices: [{ color: 0xffffff }, ...] }
 * @param {function(Array)} callback - 結果を返すコールバック関数
 */
export function rollDice(rollConfig, callback) {
    if (isRolling || !isDiceReady) return;

    const requiredDiceCount = rollConfig.dices.length;
    const availableDice = dicePool.filter(d => !d.inUse);

    if (availableDice.length < requiredDiceCount) {
        console.error("リクエストされた数のダイスが不足しています。");
        return;
    }
    
    activeDice = [];
    rollCallback = callback;
    isRolling = true;
    
    clearTimeout(forceResultTimeout);
    containerElement.classList.add('is-visible');
    onWindowResize();

    const trayWidth = viewportSize.width * settings.tray.sizeRatio;
    const trayHeight = viewportSize.height * settings.tray.sizeRatio;
    
    // 1. ダイスの数に応じた配置パターンを定義
    const diceArrangements = {
        1: [{ x: 0,    z: 0,    y: 0.00 }], // 中央
        2: [{ x: -1,   z: 0,    y: 0.01 }, { x: 1,    z: 0,    y: 0.00 }], // 左右
        3: [{ x: -1,   z: 1,    y: 0.02 }, { x: 1,    z: 1,    y: 0.01 }, { x: 0,    z: -1,   y: 0.00 }], // 三角形
        // ★★★ 4個の場合：三角錐の頂点 ★★★
        4: [
            { x: 0,    z: 1.5,  y: 0.00 }, // 手前の底面頂点
            { x: -1.2, z: -0.5, y: 0.01 }, // 奥左の底面頂点
            { x: 1.2,  z: -0.5, y: 0.02 }, // 奥右の底面頂点
            { x: 0,    z: 0,    y: 0.05 }  // 上部の頂点
        ],
        // ★★★ 5個の場合：三角錐を2つ合わせた形 ★★★
        5: [
            { x: 0,    z: 1.5,  y: 0.00 }, // 手前の頂点
            { x: -1.2, z: -0.5, y: 0.01 }, // 中央左の頂点
            { x: 1.2,  z: -0.5, y: 0.02 }, // 中央右の頂点
            { x: 0,    z: -1.5, y: 0.04 }, // 奥の頂点
            { x: 0,    z: 0,    y: 0.07 }  // 最上部の頂点
        ]
    };

    // 2. 基準点と間隔を定義
    const centerX = (settings.dice.initialPosition.xPercent / 100 - 0.5) * trayWidth;
    const centerZ = (settings.dice.initialPosition.yPercent / 100 - 0.5) * trayHeight;
    const spacing = settings.dice.radius * 2.5; // 直径の1.25倍の間隔

    // 3. 適用する配置パターンを取得
    const arrangement = diceArrangements[requiredDiceCount] || diceArrangements[5];

    for (let i = 0; i < requiredDiceCount; i++) {
        const die = availableDice[i];
        const config = rollConfig.dices[i];
        
        die.inUse = true;
        die.model.visible = true;
        die.id = config.id;
        
        die.model.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set(config.color);
            }
        });

        // 4. パターンに基づいて各ダイスの3次元位置を計算
        const offset = arrangement[i];
        const dieX = centerX + offset.x * spacing;
        const dieZ = centerZ + offset.z * spacing;
        const dieY = settings.dice.initialHeight + offset.y; // 高さにもバリエーションを追加

        die.body.position.set(dieX, dieY, dieZ);

        // ... 速度や角速度の設定 (ほぼ変更なし) ...
        const randomInRange = (range) => Math.random() * (range.max - range.min) + range.min;
        // ...
        const speed = randomInRange(settings.dice.throw.speed);
        const azimuth = randomInRange(settings.dice.throw.azimuth);
        const elevation = randomInRange(settings.dice.throw.elevation);
        const azimuthRad = THREE.MathUtils.degToRad(azimuth);
        const elevationRad = THREE.MathUtils.degToRad(elevation);
        const horizontalSpeed = speed * Math.cos(elevationRad);
        const verticalSpeed = speed * Math.sin(elevationRad);
        const speedX = horizontalSpeed * Math.sin(azimuthRad);
        const speedZ = -horizontalSpeed * Math.cos(azimuthRad);
        die.body.velocity.set(speedX, verticalSpeed, speedZ);
        const angVelRange = settings.dice.throw.angularVelocity;
        die.body.angularVelocity.set(
            randomInRange(angVelRange) * (Math.random() < 0.5 ? 1 : -1),
            randomInRange(angVelRange) * (Math.random() < 0.5 ? 1 : -1),
            randomInRange(angVelRange) * (Math.random() < 0.5 ? 1 : -1)
        );

        world.addBody(die.body);
        die.body.wakeUp();
        activeDice.push(die);
    }
    checkIfStopped();
    
    forceResultTimeout = setTimeout(() => {
        if (isRolling) {
            console.warn("Dice roll timed out. Forcing result.");
            finishRoll();
        }
    }, settings.timeouts.forceResult);
}

// ===== 内部ヘルパー関数 (省略なし) =====

// dice-3d.js L:203
function loadDiceModel() {
    // ★★★ Promiseで全体をラップする ★★★
    return new Promise((resolve, reject) => {
        const fbxLoader = new FBXLoader();
        const texLoader = new THREE.TextureLoader();
        const basePath = '/models/';
        const modelFile = 'Dice_10.fbx';
        const textureFiles = {
            map: 'Dice_10_Albedo.png',
            normalMap: 'Dice_10_Normal.png',
            metalnessMap: 'Dice_10_Metallic.png',
            roughnessMap: 'Dice_10_Roughness.png',
            aoMap: 'Dice_10_AO.png',
            displacementMap: 'Dice_10_Height.png'
        };

        const textures = {};
        let texturesLoaded = 0;
        const numTextures = Object.keys(textureFiles).length;

        Object.entries(textureFiles).forEach(([key, file]) => {
            texLoader.load(basePath + file, 
                (texture) => { // onSuccess
                    texture.colorSpace = THREE.SRGBColorSpace;
                    textures[key] = texture;
                    texturesLoaded++;
                    if (texturesLoaded === numTextures) {
                        loadModelWithTextures();
                    }
                },
                undefined, // onProgress (使用しない)
                (err) => reject(err) // onError
            );
        });

        function loadModelWithTextures() {
            fbxLoader.load(basePath + modelFile, 
                (object) => { // onSuccess
                    object.traverse((child) => {
                        if (child.isMesh) {
                            child.material = new THREE.MeshStandardMaterial({
                                map: textures.map,
                                normalMap: textures.normalMap,
                                displacementMap: textures.displacementMap,
                                aoMap: textures.aoMap,
                                metalnessMap: textures.metalnessMap,
                                roughnessMap: textures.roughnessMap,
                                metalness: 1.0,
                                roughness: 1.0,
                                normalScale: new THREE.Vector2(2, 2),
                                displacementScale: 0.00,
                                aoMapIntensity: 0.5
                            });
                        }
                    });

                    recenterGeometryToOrigin(object);
                    const currentR = computeBoundingRadiusFromObject(object);
                    const scaleFactor = settings.dice.radius / currentR;
                    bakeUniformScale(object, scaleFactor);

                    const { vertices, indices } = collectLocalTrimeshData(object);
                    const shape = new CANNON.Trimesh(vertices, indices);

                    const body = new CANNON.Body({
                        mass: settings.dice.mass,
                        material: diceMaterial,
                        shape: shape,
                        angularDamping: settings.dice.angularDamping,
                        allowSleep: true,
                    });
                    object.visible = false;
                    dicePool.push({ 
                        model: object, body: body, inUse: false, color: null, id: null 
                    });
                    scene.add(object);
                    // world.addBody(body);
                    
                    resolve(); // ★★★ モデルとボディの準備が完了したらPromiseを解決 ★★★
                },
                undefined, // onProgress
                (err) => reject(err) // onError
            );
        }
    });
}

function checkIfStopped() {
    clearTimeout(stopCheckTimeout);
    
    const allDiceSleeping = activeDice.length > 0 && activeDice.every(die => die.body.sleepState === CANNON.Body.SLEEPING);

    if (allDiceSleeping) {
        clearTimeout(forceResultTimeout);
        setTimeout(finishRoll, 200);
    } else if (isRolling) { // isRolling中のみ次のチェックを予約
        stopCheckTimeout = setTimeout(checkIfStopped, settings.timeouts.stopCheck);
    }
}

/**
 * 使用済みのダイスを非表示にし、プールに戻すヘルパー関数
 */
function cleanupDice() {
    activeDice.forEach(die => {
        die.inUse = false;
        die.model.visible = false;
        die.id = null;
        world.removeBody(die.body);
    });
    activeDice = [];
}

function finishRoll() {
    if (!isRolling) {
        console.log("finishRoll called, but isRolling is already false. Aborting.");
        return;
    }
    console.log("finishRoll triggered. Calculating results and setting up hide timer.");

    const results = activeDice.map(die => {
        let currentColor = 0;
        const mesh = die.model.getObjectByProperty('isMesh', true);
        if (mesh) {
            currentColor = mesh.material.color.getHex();
        }
        return {
            id: die.id,
            color: currentColor,
            value: getDiceValue(die.model)
        };
    });

    if (rollCallback) {
        rollCallback(results); // ★ 1. 先に結果をコールバックで返す
    }
    
    isRolling = false; // ★ 2. isRollingフラグをここでfalseにする

    // ★ 3. hideタイマーの中で、ダイスのクリーンアップとコンテナ非表示の両方を行う
    setTimeout(() => {
        console.log(`Hiding container and cleaning up dice. (After ${settings.timeouts.hide}ms)`);
        cleanupDice(); // ダイスを非表示にし、プールに戻す
        containerElement.classList.remove('is-visible'); // 背景（床）を非表示にする
    }, settings.timeouts.hide);
}

function getDiceValue(diceObject) {
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

/**
 * 現在のダイスの各面の向きをコンソールに出力するデバッグ関数
 */
function debug_checkNormals() {
    console.log("--- Dice Stopped: Normal Check ---");
    const upVector = new THREE.Vector3(0, 1, 0);
    
    const results = faceNormals.map(face => {
        const worldNormal = face.normal.clone().applyQuaternion(diceObject.quaternion);
        const dot = worldNormal.dot(upVector);
        return { 
            value: face.value, 
            dot: parseFloat(dot.toFixed(4)), // 小数点以下4桁に丸める
            normal: `new THREE.Vector3(${parseFloat(face.normal.x.toFixed(3))}, ${parseFloat(face.normal.y.toFixed(3))}, ${parseFloat(face.normal.z.toFixed(3))})`
        };
    });

    // dot値（真上との近さ）で降順にソート
    results.sort((a, b) => b.dot - a.dot);

    // 最も上を向いている面をハイライト
    console.log(`%cMost upward face is likely: ${results[0].value} (dot product: ${results[0].dot})`, "color: lime; font-weight: bold;");
    
    // 全ての結果をテーブル形式で表示
    console.table(results);
    console.log("------------------------------------");
}

const walls = [];
const trayMeshes = [];

function createWalls() {
    walls.forEach(wall => world.removeBody(wall));
    walls.length = 0;
    trayMeshes.forEach(mesh => scene.remove(mesh));
    trayMeshes.length = 0;

    if (!viewportSize) return;

    // 1. 表示用の床（ダイストレイ）
    const trayWidth = viewportSize.width * settings.tray.sizeRatio;
    const trayHeight = viewportSize.height * settings.tray.sizeRatio;
/*
    // 2. 表示用の床メッシュを作成 (変数名を統一)
    const trayGeometry = new THREE.PlaneGeometry(trayWidth, trayHeight);
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
*/
    // 3. 物理的な壁のパラメータを定義
    const wallHeight = settings.tray.wallHeight;
    const wallThickness = settings.tray.wallThickness;

    // 4. CANNON.Boxに渡す「半分の長さ」を計算 (変数名を統一)
    const wallShapeX = new CANNON.Box(new CANNON.Vec3(trayWidth / 2, wallHeight / 2, wallThickness / 2));
    const wallShapeZ = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, wallHeight / 2, trayHeight / 2)); // trayDepth を trayHeight に変更
    
    // 5. 物理的な壁を4つ作成 (変数名を統一)
    const wallPositions = [
        new CANNON.Vec3(0, 0, trayHeight / 2),  // ★ Y座標を0に変更
        new CANNON.Vec3(0, 0, -trayHeight / 2), // ★ Y座標を0に変更
        new CANNON.Vec3(trayWidth / 2, 0, 0),  // ★ Y座標を0に変更
        new CANNON.Vec3(-trayWidth / 2, 0, 0)   // ★ Y座標を0に変更
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

    // ★★★ 対角線FOVを基準にビューポートサイズとカメラFOVを再計算 ★★★

    // 1. settingsから基準となる「対角線FOV」を取得 (ラジアンに変換)
    //    現在のcamera.fov = 10 を、対角線FOVの基準値として流用します。
    const diagonalFovRad = THREE.MathUtils.degToRad(settings.camera.fov);

    // 2. 画面の対角線の長さとアスペクト比を計算
    const aspectRatio = width / height;
    const diagonalLength = Math.sqrt(aspectRatio * aspectRatio + 1);

    // 3. カメラから床面までの距離を取得
    const distance = camera.position.y;

    // 4. 対角線FOVと対角線の長さから、ビューポートの高さを計算
    //    (三角関数の関係から導出)
    const vpHeight = 2 * distance * Math.tan(diagonalFovRad / 2) / diagonalLength;
    const vpWidth = vpHeight * aspectRatio;
    viewportSize = { width: vpWidth, height: vpHeight };

    // 5. 新しく計算したビューポートの高さから、three.jsに必要な「垂直FOV」を逆算
    const newVerticalFovRad = 2 * Math.atan(vpHeight / (2 * distance));
    const newVerticalFovDeg = THREE.MathUtils.radToDeg(newVerticalFovRad);

    // 6. 壁を再生成し、カメラのパラメータを更新
    createWalls();
    camera.aspect = aspectRatio;
    camera.fov = newVerticalFovDeg; // ← 計算した新しい垂直FOVを設定
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

    // ★★★ アクティブなダイスすべてを更新 ★★★
    activeDice.forEach(die => {
        die.model.position.copy(die.body.position);
        die.model.quaternion.copy(die.body.quaternion);
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