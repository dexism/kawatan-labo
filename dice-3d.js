/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.0.11"; // パッチバージョンを更新

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

// ===== Settings =====
const settings = {
    gravity: -9.82,             // 重力加速度 (m/s²)
    dice: {
        radius: 0.01,           // ダイスの外接球半径 (m)
        mass: 0.005,            // 質量 (kg)
        angularDamping: 0.1,    // 回転の減衰 (0-1)
        initialPosition: { xPercent: 90, yPercent: 90 }, // 右下(%)
        initialHeight: 0.1,    // 投擲する高さ (m)
        throw: {
            speed:       { min: 2.5, max: 2.8 }, // 初速 [m/s]
            azimuth:     { min: 320, max: 350 }, // 水平方向 [deg]
            elevation:   { min: 85,  max: 88 },  // 射出角度 [deg]
            angularVelocity: { min: 10, max: 15 } // [rad/s]
        }
    },
    physics: {
        frictionGround:    0.2, // 床の摩擦
        frictionWall:      0.1, // 壁の摩擦
        restitutionGround: 0.3, // 床の反発係数
        restitutionWall:   0.6  // 壁の反発係数
    },
    camera: {
        fov: 10,                // 視野角 (ズーム)
        height: 1.0             // 高さ
    },
    tray: {
        sizeRatio: 0.6,         // 画面サイズに対するトレイの比率
        wallHeight: 1.0,        // 壁と天井の高さ（共通）
        wallThickness: 0.5      // 壁の厚み
    },
    timeouts: {
        stopCheck: 100,         // 停止チェックの間隔 (ms)
        forceResult: 2000,      // 強制終了までの時間 (ms)
        hide: 3000              // 結果表示後に非表示になるまでの時間 (ms)
    }
};

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
export function init(container) {
    containerElement = container;

    // --- 初期サイズは0x0のままでOK ---
    const width = container.clientWidth;
    const height = container.clientHeight;

    scene = new THREE.Scene();

    const fov = 20;
    camera = new THREE.PerspectiveCamera(settings.camera.fov, (width / height) || 1, 0.1, 10);
    camera.position.set(0, settings.camera.height, 0);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // 1. 環境光 (AmbientLight)
    scene.add(new THREE.AmbientLight(0xffeedd, 0.4));

    // 2. 平行光源 (DirectionalLight)
    const dirLight = new THREE.DirectionalLight(0xddeeff, 4);
    dirLight.position.set(1.5, 3, 1);
    scene.add(dirLight);

    // 補助ライト（フィルライト）
    const fillLight = new THREE.DirectionalLight(0xeeffee, 0.3);
    fillLight.position.set(-1, 1, -1); // メインとは逆の左手前から当てる
    scene.add(fillLight);

    world = new CANNON.World();
    world.gravity.set(0, settings.gravity, 0);

    // GSソルバー(GSSolver)を使用し、計算の反復回数を増やす
    world.solver.iterations = 20; // デフォルトは10。値を大きくすると精度が上がる。反復回数
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

    // 物理床
    const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    groundBody.addShape(new CANNON.Plane());
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);

    // 物理蓋
    const ceilingBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    ceilingBody.addShape(new CANNON.Plane());
    // X軸に180度回転させて下を向かせる
    ceilingBody.quaternion.setFromEuler(Math.PI / 2, 0, 0);
    ceilingBody.position.set(0, settings.tray.wallHeight, 0); // 壁と同じ高さを参照
    world.addBody(ceilingBody);

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

    // 1. トレイのサイズを取得
    const trayWidth = viewportSize.width * settings.tray.sizeRatio;
    const trayHeight = viewportSize.height * settings.tray.sizeRatio;

    // 2. 設定されたパーセント値を 10% ～ 90% の範囲に制限(クランプ)
    const xPercent = Math.max(10, Math.min(90, settings.dice.initialPosition.xPercent));
    const yPercent = Math.max(10, Math.min(90, settings.dice.initialPosition.yPercent));

    // 3. パーセントから物理座標を計算
    // (0,0)がトレイ中央なので、-0.5してから掛ける
    const initialX = (xPercent / 100 - 0.5) * trayWidth;
    const initialZ = (yPercent / 100 - 0.5) * trayHeight;

    // 4. ダイスの初期位置を設定
    diceBody.position.set(
        initialX,
        settings.dice.initialHeight,
        initialZ
    );

    // 1. 各パラメータの範囲内でランダムな値を生成するヘルパー関数
    const randomInRange = (range) => Math.random() * (range.max - range.min) + range.min;

    // 2. 投擲パラメータをランダムに決定
    const speed = randomInRange(settings.dice.throw.speed);
    const azimuth = randomInRange(settings.dice.throw.azimuth);
    const elevation = randomInRange(settings.dice.throw.elevation);
    
    // 3. 角度をラジアンに変換
    const azimuthRad = THREE.MathUtils.degToRad(azimuth);
    const elevationRad = THREE.MathUtils.degToRad(elevation);

    // 4. 速度ベクトルを三角関数で計算 (計算式自体は変更なし)
    const horizontalSpeed = speed * Math.cos(elevationRad);
    const verticalSpeed = speed * Math.sin(elevationRad);
    const speedX = horizontalSpeed * Math.sin(azimuthRad);
    const speedZ = -horizontalSpeed * Math.cos(azimuthRad);

    diceBody.velocity.set(speedX, verticalSpeed, speedZ);

    // 5. 回転（角速度）もランダムに与える (ヘルパー関数を利用するように変更)
    const angVelRange = settings.dice.throw.angularVelocity;
    diceBody.angularVelocity.set(
        randomInRange(angVelRange) * (Math.random() < 0.5 ? 1 : -1),
        randomInRange(angVelRange) * (Math.random() < 0.5 ? 1 : -1),
        randomInRange(angVelRange) * (Math.random() < 0.5 ? 1 : -1)
    );
    
    diceBody.wakeUp();
    checkIfStopped();
    
    forceResultTimeout = setTimeout(() => {
        if (isRolling) {
            console.warn("Dice roll timed out. Forcing result.");
            finishRoll();
        }
    }, settings.timeouts.forceResult);
}

// ===== 内部ヘルパー関数 (省略なし) =====

function loadDiceModel() {
    const fbxLoader = new FBXLoader();
    const texLoader = new THREE.TextureLoader();
    const basePath = '/models/';
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
                        // 法線マップ（凹凸）の強さ
                        // new THREE.Vector2(x, y) で、X方向とY方向の強度を個別に設定
                        // (1, 1) がデフォルト。値を大きくすると凹凸が深くなる。
                        normalScale: new THREE.Vector2(2, 2),

                        // AOマップ（影）の強さ
                        // 0.0（効果なし）から 1.0（最大）の範囲。
                        aoMapIntensity: 0.5 // AOマップの強度

                        // 発光マップの強さ（今回は使っていませんが参考）
                        // emissiveMap: textures.emissiveMap,
                        // emissiveIntensity: 1.0,
                        // emissive: new THREE.Color(0xffffff), // 発光色
                    });
                }
            });

            recenterGeometryToOrigin(object);
            const currentR = computeBoundingRadiusFromObject(object);
            
            const scaleFactor = settings.dice.radius / currentR;
            bakeUniformScale(object, scaleFactor);

            scene.add(object);
            diceObject = object;

            // ★★★ 物理ボディをTrimeshに戻します ★★★
            const { vertices, indices } = collectLocalTrimeshData(object);
            const shape = new CANNON.Trimesh(vertices, indices);

            diceBody = new CANNON.Body({
                mass: settings.dice.mass,
                material: diceMaterial,
                shape: shape,
                angularDamping: settings.dice.angularDamping,
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
    if (!isRolling) return;
    isRolling = false;
    clearTimeout(forceResultTimeout);
    clearTimeout(stopCheckTimeout);
    
    // ★★★ 修正箇所：デバッグ情報を出力してから、出目を判定する ★★★
    // debug_checkNormals(); // デバッグ関数を呼び出す
    const resultValue = getDiceValue();

    if (rollCallback) {
        rollCallback(resultValue);
    }

    setTimeout(() => {
        containerElement.classList.remove('is-visible');
    }, settings.timeouts.hide);
}

function getDiceValue() {
    let highestDot = -2; // 比較のために-2から始める
    let result = -1;
    const upVector = new THREE.Vector3(0, 1, 0); // 世界座標の「真上」

    faceNormals.forEach(face => {
        // ダイスの現在の回転を考慮した、世界座標での面の向きを計算
        const worldNormal = face.normal.clone().applyQuaternion(diceObject.quaternion);
        // 「真上」との角度（内積）を計算。1に近いほど真上を向いている。
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
        new CANNON.Vec3(0, wallHeight / 2, trayHeight / 2),  // 奥
        new CANNON.Vec3(0, wallHeight / 2, -trayHeight / 2), // 手前
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

    // FOVが狭くなれば、計算されるviewportSizeも自動的に小さくなる
    const vFOV = THREE.MathUtils.degToRad(camera.fov);
    const vpHeight = 2 * Math.tan(vFOV / 2) * camera.position.y;
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