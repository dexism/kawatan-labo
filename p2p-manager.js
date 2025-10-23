// p2p-manager.js
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.2.9";

// --- Firebaseの初期化 ---
const firebaseConfig = {
  apiKey: "AIzaSyA-BGPA0Ym9pUAuBPTrSYvMYjW5orT8v9U",
  authDomain: "nechronica-st.firebaseapp.com",
  databaseURL: "https://nechronica-st-default-rtdb.firebaseio.com",
  projectId: "nechronica-st",
  storageBucket: "nechronica-st.firebasestorage.app",
  messagingSenderId: "482404051345",
  appId: "1:482404051345:web:2ca518f33dadc4d8f5d230",
  measurementId: "G-LKEH0S06E3"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export { database };

// --- モジュール内変数 ---
const iceConfiguration = { 'iceServers': [{ 'urls': 'stun:stun.l.google.com:19302' }] };
const PLAYER_ID_KEY = 'nechronica-player-id';
let peerConnections = new Map(); // PLごとのPeerConnectionを管理
let dataChannels = new Map(); // PLごとのDataChannelを管理
const plListeners = new Map(); // PLごとのリスナーを管理するMap
let onDataReceivedCallback;
let onConnectionStateChangeCallback;
let onPeerListChangeCallback; // 接続中のピアリストが変更された際のコールバック
let localId; // 自身のユニークID
let sessionRef = null; // ★セッションの参照を保持するための変数を追加
let myRef = null;      // ★自身の参照を保持するための変数を追加
const plsListener = null; // ★ NC用のリスナーを保持する変数を追加
const HOST_ROOM_ID_KEY = 'nechronica-session-host-room-id';

/**
 * 文字列をSHA-256ハッシュ化し、Base64文字列として返す
 * @param {string} text - ハッシュ化する文字列
 * @returns {Promise<string>} - ハッシュ化された文字列
 */
export async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return btoa(String.fromCharCode.apply(null, hashArray));
}

// --- 初期化 ---
export function initialize(dataCallback, connectionCallback, peerListCallback) {
    onDataReceivedCallback = dataCallback;
    onConnectionStateChangeCallback = connectionCallback;
    onPeerListChangeCallback = peerListCallback; // ★コールバックを保存
    localId = `user_${Math.random().toString(36).substr(2, 9)}`;

    // ローカルストレージから永続的なIDを取得する
    let savedId = localStorage.getItem(PLAYER_ID_KEY);
    if (!savedId) {
        // IDがなければ新規に生成して保存する
        savedId = `user_${Math.random().toString(36).substr(2, 9)}`;
        localStorage.setItem(PLAYER_ID_KEY, savedId);
        console.log(`新規プレイヤーIDを生成しました: ${savedId}`);
    } else {
        console.log(`既存のプレイヤーIDを読込みました: ${savedId}`);
    }
    localId = savedId; // モジュール内のlocalIdを永続IDで設定
}

/**
 * データベースのトップレベル `/logs` に操作ログを記録する
 * @param {string} userName - 操作を行ったユーザー名
 * @param {string} action - 操作内容 (例: 'ルーム作成')
 * @param {string} roomId - 関連するルームID
 */
function writeAuditLog(userName, action, roomId) {
    const logRef = database.ref('logs').push(); // 新しいログエントリのためのユニークIDを生成
    logRef.set({
        user: userName,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        action: action,
        roomId: roomId
    });
}

// ===============================================
// NC（ホスト）側の処理
// ===============================================

/**
 * 【修正】ホストセッションを新規作成、または既存のセッションに復帰する
 * @param {string|null} sessionId - 復帰するセッションID。nullの場合は新規作成。
 * @param {string} hostName - ホスト（NC）の名前
 * @returns {Promise<string>} - 確立されたセッションのID
 */
export async function createHostSession(sessionId = null, hostName = 'NC') { // hostName引数を追加
    const db = database.ref('rooms');
    let isNewSession = false;

    if (!sessionId) {
        // sessionIdがなければ、新しいものを生成
        isNewSession = true;
        let roomExists = true;
        while (roomExists) {
            sessionId = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
            const snapshot = await db.child(sessionId).once('value');
            roomExists = snapshot.exists();
        }
    }
    sessionRef = database.ref(`rooms/${sessionId}`);

    if (isNewSession) {
        // const hostName = localStorage.getItem('nechronica-pl-name') || 'NC'; // ローカルから名前を取得
        writeAuditLog(hostName, 'ルーム作成', sessionId);

        // 新規セッションの場合のみ、ルームを初期化
        await sessionRef.set({
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            meta: { status: 'public', passcodeHash: '' }
        });
        console.log(`Firebase: 新規セッション[${sessionId}]を初期化しました。`);
    } else {
        // 復帰セッションの場合
        const snapshot = await sessionRef.once('value');
        if (!snapshot.exists()) {
            localStorage.removeItem(HOST_ROOM_ID_KEY);
            throw new Error(`ルーム[${sessionId}]が見つかりませんでした。`);
        }
        await sessionRef.child('nc').remove(); // 自分の古い情報だけ消す
        console.log(`Firebase: 既存セッション[${sessionId}]に復帰します。`);
    }

    // ローカルストレージにホストしたルーム番号を保存
    localStorage.setItem(HOST_ROOM_ID_KEY, sessionId);

    const plsRef = sessionRef.child('pls');

    // 参加者リスト(/pls)のあらゆる変更（追加、削除、子の変更）をこのリスナーで一元管理する
    plsRef.on('value', (snapshot) => {
        const connectedPlsData = snapshot.val();
        const connectedPlIds = connectedPlsData ? Object.keys(connectedPlsData) : [];

        // 【重要】この時点で plId のリストは必ず一意になる
        console.log('接続中のPL IDリスト（重複排除済）:', connectedPlIds);

        // 1. NC自身のUIを更新するためのコールバックを呼び出す
        //    渡すのは一意なIDの配列のみ。名前の取得やUI構築はコールバック側で行う。
        if (onPeerListChangeCallback) {
            onPeerListChangeCallback(connectedPlIds);
        }

        // 2. 接続している全クライアントに参加者リストをブロードキャストする
        //    これにより、全PLの画面も同期される。
        broadcastToAll({ type: 'peerListUpdate', payload: connectedPlIds });

        // 3. 新規接続者に対するPeerConnectionのセットアップを行う
        connectedPlIds.forEach(plId => {
            // peerConnectionsにまだ存在しないIDは新規接続者とみなす
            if (!peerConnections.has(plId)) {
                console.log(`Firebase: 新規PL[${plId}]との接続を開始します。`);
                setupPeerConnectionForPl(plId, sessionRef);
            }
        });
        
        // 切断されたPLの接続情報とリスナーをクリーンアップする
        const currentPeerIds = new Set(peerConnections.keys());
        const connectedPlIdsSet = new Set(connectedPlIds);
        
        currentPeerIds.forEach(plId => {
            if (!connectedPlIdsSet.has(plId)) {
                console.log(`Firebase: PL[${plId}]の接続が切断されました。クリーンアップします。`);
                
                // 1. PeerConnectionを閉じる
                peerConnections.get(plId)?.close();
                peerConnections.delete(plId);
                dataChannels.delete(plId);

                // 2. 関連するFirebaseリスナーを全て解除する
                if (plListeners.has(plId)) {
                    plListeners.get(plId).forEach(listener => {
                        // 'child_added' イベントの場合は3つの引数が必要
                        if (listener.ref.toString().includes('iceCandidates')) {
                            listener.ref.off('child_added', listener.callback);
                        } else {
                            listener.ref.off('value', listener.callback);
                        }
                    });
                    plListeners.delete(plId);
                    console.log(`[${plId}] のFirebaseリスナーを全て解除しました。`);
                }
            }
        });
    });
    return sessionId;
}

/**
 * 【新設】指定されたPL IDのためのPeerConnectionをセットアップする内部関数
 * @param {string} plId - セットアップ対象のPL ID
 * @param {firebase.database.Reference} sessionRef - セッション全体の参照
 */
async function setupPeerConnectionForPl(plId, sessionRef) {
    // このPLに対する既存のリスナーがあれば、念のため全て解除する
    if (plListeners.has(plId)) {
        plListeners.get(plId).forEach(listener => listener.ref.off('value', listener.callback));
        plListeners.delete(plId);
    }
    
    const pc = new RTCPeerConnection(iceConfiguration);
    peerConnections.set(plId, pc);

    // ▼▼▼ ここからが今回の修正箇所 (1/2) ▼▼▼
    const listeners = []; // この接続に関連するリスナーを格納する配列

    pc.onicecandidate = event => {
        if (event.candidate) {
            sessionRef.child('nc/iceCandidates').push(event.candidate.toJSON());
        }
    };

    const channel = pc.createDataChannel('data');
    setupDataChannel(plId, channel);

    const plRef = sessionRef.child(`pls/${plId}`);

    // SDP(アンサー)をリッスンするコールバック
    const sdpCallback = async (sdpSnapshot) => {
        // PeerConnectionがすでに閉じられていたら、何もしない
        if (pc.signalingState === 'closed') return;
        
        if (sdpSnapshot.exists() && pc.signalingState === 'have-local-offer') {
            try {
                await pc.setRemoteDescription(new RTCSessionDescription(sdpSnapshot.val()));
            } catch (e) {
                console.error(`[${plId}] setRemoteDescription失敗:`, e);
            }
        }
    };
    plRef.child('sdp').on('value', sdpCallback);
    listeners.push({ ref: plRef.child('sdp'), callback: sdpCallback });


    // ICE候補をリッスンするコールバック
    const iceCallback = (iceSnapshot) => {
        // PeerConnectionがすでに閉じられていたら、何もしない
        if (pc.signalingState === 'closed') return;
        
        if (iceSnapshot.exists()) {
            try {
                pc.addIceCandidate(new RTCIceCandidate(iceSnapshot.val()));
            } catch (e) {
                // 'closed' 状態でのエラーは頻発しうるので、警告レベルに留める
                if (e.name === 'InvalidStateError') {
                    console.warn(`[${plId}] addIceCandidate失敗 (接続はすでに閉じられています):`, e.message);
                } else {
                    console.error(`[${plId}] addIceCandidate失敗:`, e);
                }
            }
        }
    };
    plRef.child('iceCandidates').on('child_added', iceCallback);
    listeners.push({ ref: plRef.child('iceCandidates'), callback: iceCallback });

    // このPL IDに対応するリスナーとして保存
    plListeners.set(plId, listeners);
    
    // ▲▲▲ 修正ここまで ▲▲▲

    // オファーを作成して送信
    const offerDescription = await pc.createOffer();
    // オファー設定前に状態をチェック
    if (pc.signalingState !== 'stable') return;
    await pc.setLocalDescription(offerDescription);

    const offer = { sdp: offerDescription.sdp, type: offerDescription.type };
    await sessionRef.child('nc/sdp').set(offer);
}

// ===============================================
// PL（クライアント）側の処理
// ===============================================
export async function joinClientSession(sessionId, plName) {
    sessionRef = database.ref(`rooms/${sessionId}`);

    // ▼▼▼ ルームチェックのロジックを全面的に書き換え ▼▼▼
    const metaSnapshot = await sessionRef.child('meta').once('value');
    if (!metaSnapshot.exists()) {
        throw new Error(`ルーム番号「${sessionId}」は存在しないか、準備ができていません。`);
    }
    const meta = metaSnapshot.val();

    if (meta.status === 'restricted') {
        throw new Error("このルームは現在、新しい参加者を募集していません。");
    }

    if (meta.status === 'locked') {
        let isAuthorized = false;
        while (!isAuthorized) {
            const enteredPasscode = prompt("このルームはパスコードで保護されています。\nパスコードを入力してください：");
            if (enteredPasscode === null) {
                throw new Error("入室をキャンセルしました。");
            }
            const enteredHash = await sha256(enteredPasscode);
            if (enteredHash === meta.passcodeHash) {
                isAuthorized = true;
            } else {
                alert("パスコードが違います。");
            }
        }
    }
    // ▲▲▲ 修正ここまで ▲▲▲

    writeAuditLog(plName, 'ルーム入室', sessionId);

    myRef = sessionRef.child(`pls/${localId}`);
    console.log(`Firebase: ルーム[${sessionId}]への参加を開始します。`);

    // **【重要】接続が切断された場合に、自身のデータをDBから削除するようFirebaseに予約する**
    myRef.onDisconnect().remove();

    // --- 1. PeerConnectionのセットアップ ---
    const pc = new RTCPeerConnection(iceConfiguration);
    peerConnections.set('nc', pc);

    // ICE候補を収集し、Firebaseに書き込む
    pc.onicecandidate = event => {
        if (event.candidate) {
            myRef.child('iceCandidates').push(event.candidate.toJSON());
        }
    };
    
    // NCからのデータチャネル接続を待機
    pc.ondatachannel = event => {
        const channel = event.channel;
        setupDataChannel('nc', channel);
    };

    // --- 2. NCの接続情報をリッスン ---
    // SDP(オファー)をリッスン
    sessionRef.child('nc/sdp').on('value', async (sdpSnapshot) => {
        if (sdpSnapshot.exists()) {
            await pc.setRemoteDescription(new RTCSessionDescription(sdpSnapshot.val()));

            // --- 3. アンサーを作成してFirebaseに書き込む ---
            const answerDescription = await pc.createAnswer();
            await pc.setLocalDescription(answerDescription);

            const answer = { sdp: answerDescription.sdp, type: answerDescription.type };
            await myRef.child('sdp').set(answer);
        }
    });
    // ICE候補をリッスン
    sessionRef.child('nc/iceCandidates').on('child_added', iceSnapshot => {
        if (iceSnapshot.exists()) {
            pc.addIceCandidate(new RTCIceCandidate(iceSnapshot.val()));
        }
    });

    // 自分の存在をNCに通知
    await myRef.child('profile').set({
        name: plName,
        joinedAt: firebase.database.ServerValue.TIMESTAMP
    });
}

/**
 * 【新設】PLが自身のプロファイル情報（名前など）を更新する
 * @param {object} profileData - 更新するプロファイルデータ (例: { name: "新しい名前" })
 */
export function updateMyProfile(profileData) {
    if (myRef && myRef.child) {
        myRef.child('profile').update(profileData);
    }
}

// ===============================================
// 共通処理
// ===============================================

// データチャネルの共通セットアップ
function setupDataChannel(remoteId, channel) {
    channel.onopen = () => {
        console.log(`Data channel with [${remoteId}] is open!`);
        dataChannels.set(remoteId, channel);
        if (onConnectionStateChangeCallback) onConnectionStateChangeCallback(remoteId, 'connected');
    };
    channel.onclose = () => {
        console.log(`Data channel with [${remoteId}] is closed.`);
        if (onConnectionStateChangeCallback) onConnectionStateChangeCallback(remoteId, 'disconnected');
    };
    channel.onmessage = event => {
        if (onDataReceivedCallback) {
            onDataReceivedCallback(JSON.parse(event.data));
        }
    };
}

// NCから全PLへのブロードキャスト
export function broadcastToAll(data) {
    for (const channel of dataChannels.values()) {
        if (channel.readyState === 'open') {
            channel.send(JSON.stringify(data));
        }
    }
}

// PLからNCへのデータ送信
export function sendToHost(data) {
    const channel = dataChannels.get('nc');
    if (channel && channel.readyState === 'open') {
        channel.send(JSON.stringify(data));
    }
}

/**
 * 【新設】指定されたPLをセッションから追放する (NC専用)
 * @param {string} plId - 追放するPLのユニークID
 */
export async function kickPlayer(plId) {
    if (!sessionRef) return;

    // ▼▼▼ ここからが修正箇所です ▼▼▼

    // 1. まず、追放対象のPLのプロファイル(名前など)をFirebaseから非同期で取得
    const plRef = sessionRef.child(`pls/${plId}`);
    const snapshot = await plRef.child('profile').once('value');
    const profile = snapshot.val();
    
    // 取得したプロファイルがあればその名前を、なければIDをログ用に使用
    const plNameToLog = profile ? profile.name : plId;

    // ▲▲▲ 修正はここまでです ▲▲▲

    // 2. PLに追放を通知
    const channel = dataChannels.get(plId);
    if (channel && channel.readyState === 'open') {
        channel.send(JSON.stringify({ type: 'kicked' }));
    }

    // 3. ローカルの接続情報を閉じる
    peerConnections.get(plId)?.close();
    peerConnections.delete(plId);
    dataChannels.delete(plId);

    // 4. FirebaseからPLのデータを完全に削除
    await plRef.remove();

    console.log(`Firebase: PL「${plNameToLog}」を追放しました。`);

    // 5. 追放ログを全端末にブロードキャスト
    broadcastToAll({ type: 'notification', payload: `PL「${plNameToLog}」がセッションから追放されました。` });
}

/**
 * 【新設】現在のセッションから切断する
 */
export function disconnectSession() {
    // 1. 全てのデータチャネルとPeerConnectionを閉じる
    dataChannels.forEach(channel => channel.close());
    dataChannels.clear();
    peerConnections.forEach(pc => pc.close());
    peerConnections.clear();

    // 2. Firebaseのリスナーを全て解除し、データを削除
    if (sessionRef) {
        sessionRef.off(); // この参照に紐づく全てのリスナーを解除

        if (myRef) {
            // PLの場合、自分のデータをDBから削除して退席を通知
            myRef.remove()
                .then(() => console.log("Firebaseから自身のデータを削除しました。"))
                .catch(err => console.error("データ削除エラー:", err));
            myRef = null;
        } else {
            // NCの場合、ルーム全体を削除してセッションを終了
            // ▼▼▼ 以下の行を追加 ▼▼▼
            localStorage.removeItem(HOST_ROOM_ID_KEY);
            // ▲▲▲ 追加ここまで ▲▲▲

            const roomId = sessionRef.key;
            const hostName = localStorage.getItem('nechronica-pl-name') || 'NC';
            writeAuditLog(hostName, 'ルーム削除', roomId);

            sessionRef.remove()
                .then(() => console.log("Firebaseからルーム全体を削除しました。"))
                .catch(err => console.error("ルーム削除エラー:", err));
        }
        sessionRef = null;
    }

    console.log("セッションから切断しました。");
}