// p2p-manager.js
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.2.13";

import * as protocol from './p2p-protocol.js'; // ★ p2p-protocolをインポート
import * as battleLogic from './battle-logic.js'; // ★ battle-logicをインポート
import * as charManager from './character-manager.js'; // ★ character-managerをインポート

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
const HOST_ROOM_ID_KEY = 'nechronica-session-host-room-id';

const HEARTBEAT_INTERVAL = 5000; // 5秒ごとにpingを送信
const OFFLINE_THRESHOLD = 15000; // 15秒応答がなければ「切断」
const WAITING_THRESHOLD = 7000;  // 7秒応答がなければ「待機中」

let heartbeatInterval = null; // ハートビートのタイマーID
const peerStatus = new Map(); // 各PLの状態を管理: { status, lastPong, name }

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

    console.log(`[P2P NC] ホストセッションを開始します。ルームID: ${sessionId}`);

    // ローカルストレージにホストしたルーム番号を保存
    localStorage.setItem(HOST_ROOM_ID_KEY, sessionId);

    const plsRef = sessionRef.child('pls');
    // 参加者リストのリスナーを変更
    plsRef.on('value', (snapshot) => {
        const connectedPlsData = snapshot.val() || {};
        const connectedPlIds = Object.keys(connectedPlsData);

        console.log('[P2P NC] /pls 変更を検知。現在の参加者IDリスト:', connectedPlIds);

        // --- 1. 切断されたPLのクリーンアップ ---
        const connectedPlIdsSet = new Set(connectedPlIds);
        peerConnections.forEach((pc, plId) => {
            if (!connectedPlIdsSet.has(plId)) {
                console.log(`%c[P2P NC] DBからPLが消失したため接続をクリーンアップ: ${plId}`, 'color: lightgray');
                pc.close();
                peerConnections.delete(plId);
                dataChannels.delete(plId);
                if (plListeners.has(plId)) {
                    plListeners.get(plId).forEach(listener => {
                        listener.ref.off('value', listener.callback);
                        listener.ref.off('child_added', listener.callback);
                    });
                    plListeners.delete(plId);
                }
                // peerStatusからは削除せず、offlineとして残す
                if (peerStatus.has(plId)) {
                    peerStatus.get(plId).status = 'offline';
                }
            }
        });

        // --- 2. 新規 or 再接続PLのセットアップ ---
        connectedPlIds.forEach(plId => {
            if (!peerConnections.has(plId)) {
                console.log(`%c[P2P NC] 新規または再接続のPLを検知。接続セットアップを開始 -> ${plId}`, 'color: cyan');

                // peerStatusマップにエントリを作成または更新
                peerStatus.set(plId, { 
                    status: 'connecting', 
                    lastPong: Date.now(), 
                    name: connectedPlsData[plId].profile?.name || '読込中...'
                });

                setupPeerConnectionForPl(plId, sessionRef);
            }
            // 既存の接続の名前を更新
            else if (peerStatus.has(plId)) {
                 peerStatus.get(plId).name = connectedPlsData[plId].profile?.name || peerStatus.get(plId).name;
            }
        });

        // --- 3. ハートビートの開始/停止判定 ---
        if (connectedPlIds.length > 0 && !heartbeatInterval) {
            startHeartbeat();
        }
    });
    return sessionId;
}

// ▼▼▼ ここからが今回の修正箇所 (3/4) ▼▼▼
/**
 * 【新設】ハートビートを開始する (NC専用)
 */
function startHeartbeat() {
    if (heartbeatInterval) return;
    console.log('%c[P2P NC] ハートビートを開始します。', 'color: green');

    heartbeatInterval = setInterval(() => {
        // ▼▼▼ ここからが今回の修正箇所 (1/2) ▼▼▼

        // --- ハートビート停止条件のチェック ---
        const activePeers = Array.from(peerStatus.values()).filter(p => p.status !== 'offline');
        if (activePeers.length === 0) {
            console.log('%c[P2P NC] アクティブなPLがいないため、ハートビートを停止します。', 'color: red');
            clearInterval(heartbeatInterval);
            heartbeatInterval = null;
            return; // この回のチェックはここで終了
        }

        // --- ping送信と状態チェック ---
        broadcastToAll({ type: 'ping' });

        const now = Date.now();
        let hasUnresponsivePeer = false; // ★ 返事がないユーザーがいるかどうかのフラグ

        peerStatus.forEach((peer, plId) => {
            const timeSinceLastPong = now - peer.lastPong;
            let newStatus = 'online';

            if (!dataChannels.has(plId) || dataChannels.get(plId).readyState !== 'open') {
                newStatus = 'connecting';
            } else if (timeSinceLastPong > OFFLINE_THRESHOLD) {
                newStatus = 'offline';
            } else if (timeSinceLastPong > WAITING_THRESHOLD) {
                newStatus = 'waiting';
                hasUnresponsivePeer = true; // ★ 返事がないユーザーがいた
            }
            peer.status = newStatus;
        });

        // ★ 返事がないユーザーがいる場合のみログを出力
        if (hasUnresponsivePeer) {
            console.warn('[P2P NC] 一部のPLから応答がありません。状態:', Array.from(peerStatus.entries()));
        }

        // --- UI更新コールバック ---
        if (onPeerListChangeCallback && myRef === null) { 
            const statusArray = Array.from(peerStatus.entries());
            // ▼▼▼ ログ追加 ▼▼▼
            console.log('[P2P NC] UI更新コールバックを呼び出します。現在のステータス:', statusArray);
            onPeerListChangeCallback(statusArray);
        }
    }, HEARTBEAT_INTERVAL);
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

    // --- 1. 既存の接続情報があれば、すべてクリアする ---
    if (peerConnections.has('nc')) {
        peerConnections.get('nc').close();
        peerConnections.delete('nc');
    }
    if (dataChannels.has('nc')) {
        dataChannels.get('nc').close();
        dataChannels.delete('nc');
    }
    // 既存のリスナーも全て解除
    sessionRef.child('nc/sdp').off();
    sessionRef.child('nc/iceCandidates').off();
    
    console.log('[P2P PL] 既存の接続情報をクリアし、再接続を開始します。');

    // --- 2. ルームの存在と状態をチェック (変更なし) ---
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

    // --- 3. 自身の情報をFirebaseに登録 (変更なし) ---
    myRef = sessionRef.child(`pls/${localId}`);
    myRef.onDisconnect().remove();
    await myRef.child('profile').set({
        name: plName,
        joinedAt: firebase.database.ServerValue.TIMESTAMP
    });
    writeAuditLog(plName, 'ルーム入室', sessionId);
    console.log(`[P2P PL] ルーム[${sessionId}]への参加を開始します。`);

    // --- 4. 参加者リストの監視を開始 (変更なし) ---
    const plsRef = sessionRef.child('pls');
    plsRef.on('value', (snapshot) => {
        const connectedPlsData = snapshot.val();
        const connectedPlIds = connectedPlsData ? Object.keys(connectedPlsData) : [];
        if (onPeerListChangeCallback) {
            onPeerListChangeCallback(connectedPlIds);
        }
    });

    // --- 5. 新しいPeerConnectionをセットアップ ---
    const pc = new RTCPeerConnection(iceConfiguration);
    peerConnections.set('nc', pc);

    pc.onicecandidate = event => {
        if (event.candidate) {
            myRef.child('iceCandidates').push(event.candidate.toJSON());
        }
    };
    
    pc.ondatachannel = event => {
        setupDataChannel('nc', event.channel);
    };

    // --- 6. NCからの接続情報をリッスン ---
    sessionRef.child('nc/sdp').on('value', async (sdpSnapshot) => {
        if (sdpSnapshot.exists() && pc.signalingState === 'stable') {
            try {
                await pc.setRemoteDescription(new RTCSessionDescription(sdpSnapshot.val()));
                const answerDescription = await pc.createAnswer();
                await pc.setLocalDescription(answerDescription);
                const answer = { sdp: answerDescription.sdp, type: answerDescription.type };
                await myRef.child('sdp').set(answer);
            } catch (error) {
                console.error('[P2P PL] SDP処理中にエラー:', error);
            }
        }
    });
    
    sessionRef.child('nc/iceCandidates').on('child_added', iceSnapshot => {
        if (iceSnapshot.exists() && pc.remoteDescription) {
            pc.addIceCandidate(new RTCIceCandidate(iceSnapshot.val()));
        }
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
        console.log(`%c[P2P] データチャネル開通: ${remoteId}`, 'color: lime; font-weight: bold;');
        dataChannels.set(remoteId, channel);
        if (onConnectionStateChangeCallback) onConnectionStateChangeCallback(remoteId, 'connected');
        
        // ▼▼▼ この if ブロックを修正 ▼▼▼
        // PL側の場合、データチャネル開通後に「現況要求」を送信する
        if (remoteId === 'nc') {
            // PL側: 現況要求を送信する (変更なし)
            protocol.sendRequestInitialState();
        } else {
            // NC側: PLとのチャネルが開通したことを検知
            console.log(`[P2P NC] ${remoteId} とのデータチャネル確立。ステータスを更新します。`);
            if (peerStatus.has(remoteId)) {
                peerStatus.get(remoteId).status = 'online';
                peerStatus.get(remoteId).lastPong = Date.now();
            }
        }
    };
    channel.onclose = () => {
        // ▼▼▼ ログ修正 ▼▼▼
        console.log(`%c[P2P] データチャネル閉鎖: ${remoteId}`, 'color: orange;');
        if (onConnectionStateChangeCallback) onConnectionStateChangeCallback(remoteId, 'disconnected');
    };
    channel.onmessage = event => {
        const data = JSON.parse(event.data);
        
        const sender = (myRef === null) ? 'NC' : 'PL';
        const recipient = (myRef === null) ? `PL(${remoteId})` : 'NC';
        if (data.type !== 'pong' && data.type !== 'ping') {
             console.log(`[P2P ${sender}] メッセージ受信 <- ${recipient} | type: ${data.type}`);
        }

        if (data.type === 'pong' && peerStatus.has(remoteId)) {
            peerStatus.get(remoteId).lastPong = Date.now();
            // console.log(`[P2P NC] pongを受信 <- ${remoteId}`);
            return;
        }

        if (data.type === 'ping') {
            sendToHost({ type: 'pong' });
            return;
        }

        if (data.type === 'channelOpened' && myRef === null) {
            console.log(`[P2P NC] ${remoteId} のチャネル開通通知を受信。リスト更新をトリガーします。`);
            // ハートビートを待たずに即時更新
            if (onPeerListChangeCallback) {
                onPeerListChangeCallback(Array.from(peerStatus.entries()));
            }
            return;
        }

        // NC側でPLからの現況データ要求を受信した場合の処理
        if (data.type === 'requestInitialState' && myRef === null) {
            console.log(`[P2P NC] 現況要求を受信 <- ${remoteId}`);
            
            const charactersForSend = charManager.getCharacters().map(char => {
                // usedManeuvers を Set から Array に変換する
                return {
                    ...char,
                    usedManeuvers: Array.from(char.usedManeuvers || [])
                };
            });

            const currentState = {
                battleState: battleLogic.getBattleState(),
                characters: charactersForSend // 変換後のキャラクター配列を使用
            };
            
            console.log(`[P2P NC] 現況情報を送信 -> ${remoteId}`);
            protocol.sendGameStateToClient(remoteId, currentState);
            return;
        }
        
        if (onDataReceivedCallback) {
            onDataReceivedCallback(data); // ★ JSON.parse() を削除
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
 * 【新設】NCから特定のPLクライアントへデータを送信する
 * @param {string} plId - 宛先のPLのユニークID
 * @param {object} data - 送信するデータオブジェクト
 */
export function sendToClient(plId, data) {
    const channel = dataChannels.get(plId);
    if (channel && channel.readyState === 'open') {
        channel.send(JSON.stringify(data));
    } else {
        console.warn(`PL[${plId}]へのデータチャネルが存在しないか、開いていません。`);
    }
}

/**
 * 【新設】指定されたPLをセッションから追放する (NC専用)
 * @param {string} plId - 追放するPLのユニークID
 */
export async function kickPlayer(plId) {
    if (!sessionRef) return;

    console.log(`%c[P2P NC] PLを追放します: ${plId}`, 'color: red; font-weight: bold;');

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
    peerStatus.delete(plId);

    // 4. FirebaseからPLのデータを完全に削除
    await plRef.remove();

    console.log(`[P2P NC] FirebaseからPLデータを削除しました: ${plNameToLog}`);

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

    const role = myRef ? 'PL' : 'NC';
    console.log(`%c[P2P ${role}] セッションから切断します。`, 'color: red; font-weight: bold;');

    // 2. Firebaseのリスナーを全て解除し、データを削除
    if (sessionRef) {
        sessionRef.off(); // この参照に紐づく全てのリスナーを解除

        if (myRef) {
            // PLの場合、自分のデータをDBから削除して退席を通知
            // PLの場合、onDisconnectを即座に発火させてから、参照を削除する
            myRef.onDisconnect().cancel(); // 予約をキャンセル
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

    // ▼▼▼ ハートビート停止処理を追加 ▼▼▼
    if (heartbeatInterval) {
        console.log('%c[P2P NC] セッション終了のため、ハートビートを停止します。', 'color: red');
        clearInterval(heartbeatInterval);
        heartbeatInterval = null;
    }
    peerStatus.clear();

    console.log("セッションから切断しました。");
}