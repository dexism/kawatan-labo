/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "2.1.10"; // パッチバージョンを更新

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';

// ===== Settings =====
const settings = {
    gravity:            -1.00,   // 重力加速度 (m/s²) -9.82
    dice: {
        radius:          0.01,   // ダイスの外接球半径 (m)
        collisionRadius: 0.017,  // ダイスの衝突距離 (m)
        mass:            0.01,   // 質量 (kg)
        angularDamping:  0.1,    // 回転の減衰 (0-1)
        initialPosition: { xPercent: 80, yPercent: 80 }, // 右下(%)
        initialHeight:   0.05,    // 投擲する高さ (m)
        throw: {
            speed:           { min: 0.3, max: 0.4 }, // 初速 [m/s]
            azimuth:         { min: 280, max: 350 }, // 水平方向 [deg]
            elevation:       { min: -10, max:   0 }, // 射出角度 [deg]
            angularVelocity: { min:  -5, max:   5 }  // [rad/s]
        }
    },
    physics: {
        frictionGround:    0.1, // 床の摩擦
        frictionWall:      0.0, // 壁の摩擦
        restitutionDice:   0.8, // ダイスの反発係数
        restitutionGround: 0.5, // 床の反発係数
        restitutionWall:   0.9  // 壁の反発係数
    },
    camera: {
        height:               0.5,    // 視点高
        breakpoint_px:      768,      // ★ 追加：PC/スマホを切り替える画面幅
        scaleMobile_m_per_px: 0.0002, // ★ スマホ時のスケール (2cm / 100px)
        scalePC_m_per_px:     0.0002  // ★ PC時のスケール (2cm / 100px)
    },
    tray: {
        sizeRatio:      0.9,    // 画面サイズに対するトレイの比率
        wallHeight:     0.5,    // 壁と天井の高さ（共通）
        wallThickness:  0.1     // 壁の厚み
    },
    solver: {
        iterations:    30,      // 反復回数：デフォルトは10。値を大きくすると精度が上がる
        tolerance:      0.0     // 誤りしきい値：デフォルトは0.1。値を小さくすると精度が上がる
    },
    timeouts: {
        stopCheck:    100,      // 停止チェックの間隔 (ms)
        forceResult: 4000,      // 強制終了までの時間 (ms)
        hide:        2000       // 結果表示後に非表示になるまでの時間 (ms)
    },
    manualStopDetection: {
        velocityThreshold:        0.001, // この速度(m/s)未満を「静止」と見なす
        angularVelocityThreshold: 0.01,   // この回転速度(rad/s)未満を「静止」と見なす
        stopDuration:           300       // この時間(ms)以上「静止」が続いたら停止したと判断
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
let boundaries = { x: 0, z: 0 };

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

    // camera = new THREE.PerspectiveCamera(1, (width / height) || 1, 0.1, 10);
    camera = new THREE.PerspectiveCamera(1, (width / height) || 1, 0.1, 1);
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
    world.solver.iterations = settings.solver.iterations;
    world.solver.tolerance = settings.solver.tolerance;
    
    diceMaterial = new CANNON.Material('dice');
    groundMaterial = new CANNON.Material('ground');
    wallMaterial = new CANNON.Material('wall'); // ★★★ 壁のマテリアルを追加 ★★★

    world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, groundMaterial, {
        restitution: settings.physics.restitutionGround, friction: settings.physics.frictionGround
    }));
    world.addContactMaterial(new CANNON.ContactMaterial(diceMaterial, wallMaterial, {
        restitution: settings.physics.restitutionWall, friction: settings.physics.frictionWall
    }));

    // 物理床
    const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    groundBody.addShape(new CANNON.Plane());
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);

    createWalls();

    const loadPromises = [];
    for (let i = 0; i < MAX_DICE_COUNT; i++) {
        loadPromises.push(loadDiceModel());
    }
    await Promise.all(loadPromises);

    isDiceReady = true;
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

        die.stillTime = 0
        
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
                        model: object, 
                        body: body, 
                        inUse: false, 
                        color: null, 
                        id: null,
                        stillTime: 0 
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

    let allDiceStopped = true;
    const { velocityThreshold, angularVelocityThreshold, stopDuration } = settings.manualStopDetection;

    activeDice.forEach(die => {
        // 速度と角速度の大きさを取得
        const velocityMagnitude = die.body.velocity.length();
        const angularVelocityMagnitude = die.body.angularVelocity.length();

        // 速度と角速度が両方とも閾値未満であるかチェック
        if (velocityMagnitude < velocityThreshold && angularVelocityMagnitude < angularVelocityThreshold) {
            // 静止していると見なし、静止時間を加算
            die.stillTime += settings.timeouts.stopCheck;
        } else {
            // 動いていると見なし、静止時間をリセット
            die.stillTime = 0;
        }

        // 1つでもダイスが指定時間以上静止していなければ、全体としては「停止していない」
        if (die.stillTime < stopDuration) {
            allDiceStopped = false;
        }
    });

    if (allDiceStopped && activeDice.length > 0) {
        // 全てのダイスが停止したと判断されたら、ロールを終了
        clearTimeout(forceResultTimeout);
        setTimeout(finishRoll, 200);
    } else if (isRolling) {
        // まだ動いているダイスがあれば、次のチェックを予約
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
}

function onWindowResize() {
    if (!containerElement) return;

    const width = containerElement.clientWidth;
    const height = containerElement.clientHeight;

    if (width === 0 || height === 0) return;

    // 1. 画面幅に応じて、適用するスケールを決定
    const scaleFactor = (width <= settings.camera.breakpoint_px)
        ? settings.camera.scaleMobile_m_per_px
        : settings.camera.scalePC_m_per_px;

    // 2. 画面のピクセル高とスケールから、3D空間で見えるべき高さを計算
    const visibleHeight = height * scaleFactor;

    // 3. カメラから床面までの距離を取得
    const distance = camera.position.y;

    // 4. 見えるべき高さと距離から、three.jsに必要な「垂直FOV」を逆算
    //    公式: visibleHeight = 2 * tan(fov / 2) * distance
    const newVerticalFovRad = 2 * Math.atan(visibleHeight / (2 * distance));
    const newVerticalFovDeg = THREE.MathUtils.radToDeg(newVerticalFovRad);

    // 5. ビューポートサイズを計算 (壁の生成に使う)
    const aspectRatio = width / height;
    const vpHeight = visibleHeight;
    const vpWidth = vpHeight * aspectRatio;
    viewportSize = { width: vpWidth, height: vpHeight };

    // 跳ね返りの境界線を計算して保持する
    boundaries.x = (viewportSize.width * settings.tray.sizeRatio) / 2;
    boundaries.z = (viewportSize.height * settings.tray.sizeRatio) / 2;

    // 6. 壁を再生成し、カメラのパラメータを更新
    createWalls();
    camera.aspect = aspectRatio;
    camera.fov = newVerticalFovDeg; // 計算した新しい垂直FOVを設定
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

    // --- 手動でのダイス同士の衝突判定と反発処理 ---
    const collisionThreshold = settings.dice.collisionRadius; // ダイスの衝突距離
    const restitution = settings.physics.restitutionDice; // ダイスの反発係数

    for (let i = 0; i < activeDice.length; i++) {
        for (let j = i + 1; j < activeDice.length; j++) {
            const dieA = activeDice[i];
            const dieB = activeDice[j];

            const posA = dieA.body.position;
            const posB = dieB.body.position;

            const dx = posB.x - posA.x;
            const dz = posB.z - posA.z;
            
            const distance = Math.sqrt(dx * dx + dz * dz);

            if (distance < collisionThreshold) {
                // 衝突発生
                
                // 1. 反発軸ベクトルを計算（正規化）
                const normal = new CANNON.Vec3(dx / distance, 0, dz / distance);
                
                // 2. めり込みを補正
                const overlap = collisionThreshold - distance;
                posA.x -= normal.x * overlap / 2;
                posA.z -= normal.z * overlap / 2;
                posB.x += normal.x * overlap / 2;
                posB.z += normal.z * overlap / 2;

                // 3. 速度を反発させる
                const vA = dieA.body.velocity;
                const vB = dieB.body.velocity;
                
                // 接触面に対する相対速度
                const relativeVelocity = new CANNON.Vec3(vB.x - vA.x, 0, vB.z - vA.z);
                const velocityAlongNormal = relativeVelocity.dot(normal);

                if (velocityAlongNormal < 0) {
                    const impulse = -(1 + restitution) * velocityAlongNormal / 2; // 質量が同じなので /2
                    
                    vA.x -= impulse * normal.x;
                    vA.z -= impulse * normal.z;
                    vB.x += impulse * normal.x;
                    vB.z += impulse * normal.z;

                    // 4. 角速度（回転）も反転させてリアルさを出す
                    const angVelA = dieA.body.angularVelocity;
                    const angVelB = dieB.body.angularVelocity;
                    angVelA.y *= -1;
                    angVelB.y *= -1;
                }
            }
        }
    }

    // アクティブなダイスすべてを更新
    activeDice.forEach(die => {
        die.model.position.copy(die.body.position);
        die.model.quaternion.copy(die.body.quaternion);

        const pos = die.body.position;
        const vel = die.body.velocity;
        const angVel = die.body.angularVelocity;

        // X軸（左右）の境界チェックと反転
        if (pos.x < -boundaries.x) {
            pos.x = -boundaries.x;
            if (vel.x < 0) {
                vel.x *= -1;
                angVel.z *= -1;
            }
        } else if (pos.x > boundaries.x) {
            pos.x = boundaries.x;
            if (vel.x > 0) {
                vel.x *= -1;
                angVel.z *= -1;
            }
        }

        // Z軸（前後）の境界チェックと反転
        if (pos.z < -boundaries.z) {
            pos.z = -boundaries.z;
            if (vel.z < 0) {
                vel.z *= -1;
                angVel.x *= -1;
            }
        } else if (pos.z > boundaries.z) {
            pos.z = boundaries.z;
            if (vel.z > 0) {
                vel.z *= -1;
                angVel.x *= -1;
            }
        }
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