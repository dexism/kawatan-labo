/**
 * @file settings-manager.js
 * @description アプリケーションの設定（テーマ、セッション管理など）を統括するモジュール
 */
export const version = "3.0.5"; // 責務分離リファクタリング版

import * as stateManager from './state-manager.js';
import * as p2p from './p2p-manager.js';
// import * as protocol from './p2p-protocol.js';
import * as ui from './ui-manager.js';
import * as battleLogic from './battle-logic.js';
import * as charManager from './character-manager.js';

// --- モジュール内変数 ---

// UI要素のキャッシュ
const uiElements = {
    sessionStartBtn: document.getElementById('sessionStartBtn'),
    sessionJoinContainer: document.getElementById('sessionJoinContainer'),
    sessionNcPanel: document.getElementById('sessionNcPanel'),
    sessionPlPanel: document.getElementById('sessionPlPanel'),
    plNameInput: document.getElementById('plNameInput'),
    roomIdInput: document.getElementById('sessionRoomIdInput'),
    joinBtn: document.getElementById('sessionJoinBtn'),
    ncRoomId: document.getElementById('ncRoomId'),
    ncPeerCount: document.getElementById('ncPeerCount'),
    // peerList: document.getElementById('peerList'),
    plRoomId: document.getElementById('plRoomId'),
    plPeerList: document.getElementById('peerList'),
    plConnectionStatus: document.getElementById('plConnectionStatus'),
    ncInviteUrl: document.getElementById('ncInviteUrl')
};

let currentSessionMode = 'offline';
const HOST_ROOM_ID_KEY = 'nechronica-session-host-room-id';
const PLAYER_NAME_KEY = 'nechronica-pl-name';
let resizeTimer = null;

// ===============================================
// 1. 初期化処理
// ===============================================

export async function initialize() {
    // 1-1. 保存されたPL名を読み込んで入力欄に設定
    const savedPlName = localStorage.getItem(PLAYER_NAME_KEY) || '';
    if (uiElements.plNameInput) {
        uiElements.plNameInput.value = savedPlName;
    }
    // 1-2. UI設定（テーマ、自動保存など）のイベントリスナーを登録
    setupStaticEventListeners();

    // 1-3. P2Pマネージャーを初期化し、コールバック関数を設定
    initializeP2PManager();

    // 1-4. セッション開始ボタンの状態を監視
    setupSessionStartButtonObserver();

    // 1-5. ページ読み込み時のセッション状態を判断し、適切なモードに移行
    await determineInitialSessionMode();

    console.log("Settings Manager initialized.");
}

// ===============================================
// 2. イベントリスナー設定（責務ごとに分割）
// ===============================================

/**
 * アプリケーション起動時に一度だけ設定すればよい、静的なイベントリスナーを登録する
 */
function setupStaticEventListeners() {
    // --- テーマ切り替え ---
    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme); // 保存されたテーマを適用
    document.querySelectorAll('input[name="theme-switcher"]').forEach(radio => {
        radio.addEventListener('change', (e) => handleThemeChange(e.target.value));
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        // システム設定が変更された時に、'system'が選択されていれば再適用
        if ((localStorage.getItem('theme') || 'system') === 'system') {
            applyTheme('system');
        }
    });

    // --- 自動保存トグル ---
    const autosaveSwitch = document.querySelector('input[name="autosave-switcher"]');
    autosaveSwitch.checked = stateManager.initialize();
    autosaveSwitch.addEventListener('change', (e) => stateManager.setAutoSave(e.target.checked));

    // --- ファイルI/O ---
    const loadFromFileBtn = document.getElementById('loadStateFromFileBtn');
    const fileInput = document.getElementById('fileInput');
    if (loadFromFileBtn && fileInput) {
        loadFromFileBtn.onclick = () => {
            fileInput.value = ''; // 同じファイルを選択できるようにリセット
            fileInput.click();
        };
        fileInput.onchange = handleFileLoad;
    }
    // セッションデータ管理ボタン
    document.getElementById('saveStateToFileBtn').onclick = stateManager.saveStateToFile;
    document.getElementById('saveStateBtn').onclick = () => stateManager.saveState(true);
    document.getElementById('clearStateBtn').onclick = () => {
        if (confirm('ブラウザに保存されたセッションデータを削除します。よろしいですか？')) {
            stateManager.clearSavedState();
        }
    };
    
    // --- セッション操作ボタン ---
    uiElements.sessionStartBtn.addEventListener('click', handleStartSession);
    uiElements.joinBtn.addEventListener('click', handleJoinSession);
    document.getElementById('ncCopyUrlBtn').addEventListener('click', handleCopyInviteUrl);
    document.getElementById('sessionEndBtn').addEventListener('click', handleEndSession);
    document.getElementById('sessionLeaveBtn').addEventListener('click', handleLeaveSession);
    document.getElementById('setPasscodeBtn').addEventListener('click', handleSetPasscode);

    // --- ルーム状態セレクター ---
    document.querySelectorAll('input[name="room-status"]').forEach(radio => {
        radio.addEventListener('change', (e) => handleRoomStatusChange(e.target.value));
    });
    
    // --- 戦闘リセットボタン ---
    document.getElementById('resetBattleBtn').addEventListener('click', async () => {
        if (confirm('戦闘を中断して、戦闘開始直前の状態に戻します。よろしいですか？')) {
            ui.showToastNotification("盤面を初期状態に戻しています...", 2000);
            await stateManager.restoreInitialState();
            // battleLogic.resetToSetupPhase(); // restoreInitialState内で呼ばれるので不要な場合も
            ui.updateAllUI();
            ui.showToastNotification("初期状態に戻りました。", 2000);
        }
    });

    // document.getElementById('plNameInput').addEventListener('change', (e) => {
    //     localStorage.setItem(PLAYER_NAME_KEY, e.target.value.trim());
    // });

    // --- アカウント名（NC/PL名）の変更を監視 ---
    if (uiElements.plNameInput) {
        uiElements.plNameInput.addEventListener('input', (e) => {
            const newName = e.target.value.trim();
            // 1. ローカルストレージには常に保存する
            localStorage.setItem(PLAYER_NAME_KEY, newName);

            // ▼▼▼ ここからが今回の修正箇所 ▼▼▼
            // 2. PLモードでセッションに参加中の場合のみ、Firebaseのプロファイルを更新する
            if (currentSessionMode === 'pl' && newName) {
                p2p.updateMyProfile({ name: newName });
            }
            // ▲▲▲ 修正ここまで ▲▲▲
        });
    }

    // --- ウィンドウリサイズ時のレイアウト補正 ---
    window.addEventListener('resize', () => {
        // 既存のタイマーがあればクリア
        clearTimeout(resizeTimer);
        
        // 250ミリ秒後に一度だけ中央揃え処理を実行するように予約する
        resizeTimer = setTimeout(() => {
            const scrollWrapper = document.querySelector('.scroll-wrapper');
            const mainPanel = document.querySelector('.grid-area-main-panel');

            if (scrollWrapper && mainPanel) {
                const wrapperWidth = scrollWrapper.clientWidth;
                const panelWidth = mainPanel.offsetWidth;
                const targetScrollLeft = (panelWidth - wrapperWidth) / 2;
                
                // スクロール位置を即座に設定
                scrollWrapper.scrollLeft = targetScrollLeft;
            }
        }, 250); // 250ミリ秒のディレイ
    });
}

/**
 * P2Pマネージャーを初期化し、各種イベントに対するコールバック関数を定義する
 */
function initializeP2PManager() {
    p2p.initialize(
        handleDataReceived,      // データ受信時の処理
        handleConnectionChange,  // 接続状態変更時の処理
        handlePeerListChange     // ピアリスト変更時の処理
    );
}

/**
 * キャラクターの追加・削除を監視し、セッション開始ボタンの有効/無効を切り替える
 */
function setupSessionStartButtonObserver() {
    const check = () => {
        const characters = charManager.getCharacters();
        uiElements.sessionStartBtn.disabled = !(characters.some(c => c.type === 'pc') && characters.some(c => c.type === 'enemy'));
    };
    check();
    new MutationObserver(check).observe(document.getElementById('pcContainer'), { childList: true });
    new MutationObserver(check).observe(document.getElementById('enemyContainer'), { childList: true });
}

// ===============================================
// 3. セッションモード管理
// ===============================================

/**
 * ページ読み込み時にURLパラメータやローカルストレージをチェックし、適切なセッションモードに移行する
 */
async function determineInitialSessionMode() {
    const params = new URLSearchParams(window.location.search);
    const roomIdFromUrl = params.get('room');
    const plNameFromUrl = params.get('plName');
    const hostRoomIdFromStorage = localStorage.getItem(HOST_ROOM_ID_KEY);

    if (roomIdFromUrl) {
        // PLとして参加するが、ここではモードを切り替えるだけ。
        // 実際の初期化は script.js に任せる。
        console.log(`[Settings] URLパラメータを検知。PLモードでルーム[${roomIdFromUrl}]に参加します。`);
        const plName = plNameFromUrl ? decodeURIComponent(plNameFromUrl) : (localStorage.getItem(PLAYER_NAME_KEY) || '名無し');
        await switchToPlMode(roomIdFromUrl, plName);

    } else if (hostRoomIdFromStorage) {
        // NCとしての自動復帰処理
        console.log(`[Settings] 中断されたセッション[${hostRoomIdFromStorage}]に自動で復帰します。`);
        await switchToNcMode(hostRoomIdFromStorage);

    } else {
        // 通常のオフラインモードで起動
        switchToOfflineMode();
    }
}

/**
 * UIと状態をオフラインモードに切り替える
 */
function switchToOfflineMode() {
    currentSessionMode = 'offline';
    document.body.classList.add('nc-mode'); // UIはNCモードと同じ
    uiElements.sessionStartBtn.style.display = 'grid';
    uiElements.sessionJoinContainer.style.display = 'grid'; // or 'flex'
    uiElements.sessionNcPanel.style.display = 'none';
    uiElements.sessionPlPanel.style.display = 'none';
}

/**
 * UIと状態をNCモードに切り替え、セッションを開始または復帰する
 * @param {string|null} sessionId 復帰するID。nullなら新規作成。
 */
async function switchToNcMode(sessionId = null) {
    const plName = document.getElementById('plNameInput').value.trim();
    if (!sessionId && !plName) {
        return alert("セッションを開始する前に、アカウントの「NC/PL名」を入力してください。");
    }

    localStorage.setItem(PLAYER_NAME_KEY, plName); // NCの名前も保存

    currentSessionMode = 'nc';
    document.body.classList.remove('pl-mode');
    document.body.classList.add('nc-mode');

    ui.showToastNotification(sessionId ? `セッション[${sessionId}]に復帰中...` : "ルームを作成中...", 2000);
    
    try {
        const establishedSessionId = await p2p.createHostSession(sessionId, plName);
        
        // 1. 初期表示用のコンテナ全体を非表示にする
        uiElements.sessionJoinContainer.style.display = 'none';
        
        // 2. NC用パネルを表示する
        uiElements.sessionNcPanel.style.display = 'block';

        // 3. PL用パネルも表示する
        uiElements.sessionPlPanel.style.display = 'block';
        
        // 4. PL用パネル内の不要な要素を非表示にする
        // const plPanelTitle = uiElements.sessionPlPanel.querySelector('h3');
        const plPanelInfo = uiElements.sessionPlPanel.querySelector('.session-info');
        const plPanelLeaveBtn = uiElements.sessionPlPanel.querySelector('#sessionLeaveBtn');

        // if(plPanelTitle) plPanelTitle.style.display = 'none';
        if(plPanelInfo) plPanelInfo.style.display = 'none';
        if(plPanelLeaveBtn) plPanelLeaveBtn.style.display = 'none';


        const inviteUrl = `${window.location.origin}${window.location.pathname}?room=${establishedSessionId}`;
        uiElements.ncInviteUrl.value = inviteUrl;
        uiElements.ncRoomId.textContent = establishedSessionId;
        uiElements.plRoomId.textContent = establishedSessionId;
        
        ui.showToastNotification(`ルーム[${establishedSessionId}]の準備ができました`, 2000);
    } catch (error) {
        alert(`セッションの開始/復帰に失敗しました: ${error.message}`);
        switchToOfflineMode();
    }
}

/**
 * UIと状態をPLモードに切り替え、セッションに参加する
 * @param {string} roomId 参加するルームID
 * @param {string} plName 参加者名
 */
async function switchToPlMode(roomId, plName) {
    currentSessionMode = 'pl';
    document.body.classList.remove('nc-mode');
    document.body.classList.add('pl-mode');
    
    uiElements.sessionJoinContainer.style.display = 'none';
    uiElements.sessionPlPanel.style.display = 'block';
    uiElements.plRoomId.textContent = roomId;

    try {
        await p2p.joinClientSession(roomId, plName);

        // ▼▼▼ この行を削除 ▼▼▼
        // protocol.sendRequestInitialState();

    } catch (error) {
        alert(error.message + "\nオフラインモードで起動します。");
        window.location.href = window.location.pathname;
    }
}

// ===============================================
// 4. イベントハンドラ関数
// ===============================================

// --- UI操作ハンドラ ---
function handleThemeChange(theme) {
    localStorage.setItem('theme', theme); // ★ ローカルストレージへの保存処理を追加
    applyTheme(theme);
}

async function handleFileLoad(event) {
    const file = event.target.files[0];
    if (!file) return;
    const jsonString = await file.text();
    const success = await stateManager.loadStateFromFile(jsonString);
    if (success) {
        ui.updateAllUI();
    }
}

// --- セッション操作ハンドラ ---
function handleStartSession() {
    switchToNcMode(null);
}

function handleJoinSession() {
    const plName = document.getElementById('plNameInput').value.trim();
    if (!plName) {
        alert("PL名を入力してください。");
        return;
    }
    localStorage.setItem(PLAYER_NAME_KEY, plName);

    const roomId = uiElements.roomIdInput.value.trim();
    if (!/^\d{4}$/.test(roomId)) {
        alert("4桁のルーム番号を正しく入力してください。");
        return;
    }

    // ▼▼▼ このブロックを修正 ▼▼▼
    const url = new URL(window.location.href);
    url.searchParams.set('room', roomId);
    url.searchParams.set('plName', encodeURIComponent(plName));
    window.location.href = url.toString();
    // switchToPlMode(roomId, plName); // この行を削除またはコメントアウト
    // ▲▲▲ 修正はここのみ ▲▲▲
}

function handleEndSession() {
    if (confirm("セッションを終了し、全員の接続を切断します。よろしいですか？")) {
        p2p.disconnectSession();
        ui.showToastNotification("セッションを終了しました。", 2000);
        setTimeout(() => window.location.reload(), 1000);
    }
}

function handleLeaveSession() {
    if (confirm("現在のセッションから退席します。よろしいですか？")) {
        p2p.disconnectSession();
        ui.showToastNotification("セッションから退席しました。", 2000);
        setTimeout(() => { window.location.href = window.location.pathname; }, 1000);
    }
}

function handleCopyInviteUrl() {
    navigator.clipboard.writeText(uiElements.ncInviteUrl.value).then(() => {
        ui.showToastNotification("招待URLをコピーしました！", 1500);
    });
}

async function handleRoomStatusChange(newStatus) {
    const sessionId = uiElements.ncRoomId.textContent;
    if (!sessionId) return;
    
    await p2p.database.ref(`rooms/${sessionId}/meta/status`).set(newStatus);
    document.getElementById('passcodeArea').style.display = (newStatus === 'locked') ? 'grid' : 'none';
    const statusLabels = { public: '参加受付中', locked: '鍵付き', restricted: '入室制限中' };
    document.getElementById('ncRoomStatusLabel').textContent = statusLabels[newStatus];
    ui.showToastNotification(`ルームを「${statusLabels[newStatus]}」状態に変更しました。`, 1500);
}

async function handleSetPasscode() {
    const passcode = document.getElementById('passcodeInput').value;
    const sessionId = uiElements.ncRoomId.textContent;
    if (!/^\d{4}$/.test(passcode)) {
        alert("パスコードは4桁の数字で入力してください。");
        return;
    }
    if (!sessionId) return;
    try {
        const hash = await p2p.sha256(passcode);
        await p2p.database.ref(`rooms/${sessionId}/meta`).update({ passcodeHash: hash });
        ui.showToastNotification("パスコードを設定/変更しました。", 1500);
    } catch (error) {
        alert("パスコードの設定に失敗しました。");
    }
}

// --- P2Pコールバックハンドラ ---
function handleDataReceived(data) {
    console.log('受信:', data);
    
    // ▼▼▼ ここからが今回の修正箇所 (2/3) ▼▼▼
    switch (data.type) {
        case 'notification':
            ui.showToastNotification(data.payload, 3000);
            break;
        case 'kicked':
            alert("ルームから追放されました。");
            p2p.disconnectSession();
            window.location.href = window.location.pathname;
            break;
        case 'peerListUpdate':
            // PL側でNCからブロードキャストされたリストを受け取る (現在は使用していないが念のため残す)
            // handlePeerListChange(data.payload); 
            break;
        case 'gameStateUpdate':
            if (currentSessionMode === 'pl') {
                console.log("[Settings] 現況データを受信しました。画面を同期します。");
                
                const { battleState, characters: receivedCharacters } = data.payload;

                // 1. まずローカルのキャラクターをクリアする
                charManager.clearCharacters();
                
                // 2. 受信したキャラクターデータを1体ずつ再生成する
                //    usedManeuvers を Set に変換しつつ、character-manager に追加させる
                receivedCharacters.forEach(charData => {
                    const characterWithSet = {
                        ...charData,
                        usedManeuvers: new Set(charData.usedManeuvers || [])
                    };
                    charManager.addCharacterFromObject(characterWithSet, characterWithSet.type);
                });
                
                // 3. battleStateを復元する
                battleLogic.restoreBattleState(battleState);
                
                // 4. UIを完全に再描画する
                ui.updateAllUI();
                console.log("[Settings] 現況データに基づき、UIを更新しました。");
            }
            break;
    }
    // ▲▲▲ 修正ここまで ▲▲▲
}

function handleConnectionChange(id, state) {
    console.log(`接続状態: ${id} is ${state}`);
    if (uiElements.plConnectionStatus) {
        uiElements.plConnectionStatus.textContent = state === 'connected' ? '接続完了' : '接続待機中...';
    }
}

function handlePeerListChange(peerList) { // 引数名を peerStatusList から peerList に戻す
    const isNc = (currentSessionMode === 'nc');
    const listEl = uiElements.plPeerList;
    const countEl = uiElements.ncPeerCount;
    const roomId = isNc ? uiElements.ncRoomId.textContent : uiElements.plRoomId.textContent;
    if (!roomId) return;
    if (listEl) listEl.innerHTML = '';

    // ▼▼▼ ここからが今回の修正箇所です ▼▼▼

    if (isNc) {
        // NCの場合: peerList は [[plId, statusData], ...] という形式の配列
        const peerStatusList = peerList; 
        
        peerStatusList.forEach(([plId, statusData]) => {
            const { status, name } = statusData;
            
            let indicator = '⚪';
            if (status === 'online') indicator = '🟢';
            else if (status === 'waiting') indicator = '🟡';
            else if (status === 'offline') indicator = '🔴';
            
            const kickButtonHtml = `<button class="kick-btn" data-pl-id="${plId}">追放</button>`;
            const itemHtml = `<span class="peer-status">${indicator}</span> <span class="peer-name">${name}</span>${kickButtonHtml}`;

            const itemEl = document.createElement('div');
            itemEl.className = 'peer-list-item';
            itemEl.innerHTML = itemHtml;
            listEl.appendChild(itemEl);

            itemEl.querySelector('.kick-btn').addEventListener('click', () => {
                if (confirm(`PL「${name}」を追放しますか？`)) {
                    p2p.kickPlayer(plId);
                }
            });
        });
        
        if (countEl) {
            countEl.textContent = peerStatusList.length;
        }

     } else {
        // PLの場合: peerList は [plId1, plId2, ...] という形式のID文字列の配列
        const peerIdList = peerList;
        
        // ▼▼▼ この3行を追加 ▼▼▼
        // 接続状態表示を更新
        if (uiElements.plConnectionStatus) {
            uiElements.plConnectionStatus.textContent = '接続完了';
        }

        peerIdList.forEach(plId => {
            p2p.database.ref(`rooms/${roomId}/pls/${plId}/profile`).once('value', snapshot => {
                const profile = snapshot.val();
                if (profile) {
                    const itemHtml = `<span class="peer-name">${profile.name}</span>`;
                    const itemEl = document.createElement('div');
                    itemEl.className = 'peer-list-item';
                    itemEl.innerHTML = itemHtml;
                    listEl.appendChild(itemEl);
                }
            });
        });
    }
    // ▲▲▲ 修正はここまでです ▲▲▲
}

// ===============================================
// 5. 補助関数
// ===============================================
function applyTheme(theme) {
    if (theme === 'system') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
    // ★ inputのchecked状態を更新する処理を追加
    const themeRadio = document.querySelector(`input[name="theme-switcher"][value="${theme}"]`);
    if (themeRadio) {
        themeRadio.checked = true;
    }
}

/**
 * LocalStorageの現在の使用量をバイト単位で推定して返す
 * @returns {number} 推定された使用量 (バイト)
 */
export function getLocalStorageUsage() {
    let totalBytes = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        if (key && value) {
            // キーと値の文字数合計に2を掛けてバイト数を算出 (UTF-16)
            const itemBytes = (key.length + value.length) * 2;
            totalBytes += itemBytes;
        }
    }
    return totalBytes;
}

/**
 * LocalStorageに保存されたユーザー画像をすべて削除する
 */
export function clearLocalImageCache() {
    localStorage.removeItem('userLocalImages');
    console.log("Local image cache cleared.");
}