/**
 * @file settings-manager.js
 * @description アプリケーションの設定（テーマなど）を管理するモジュール。
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "2.1.15";

import * as stateManager from './state-manager.js';
import * as p2p from './p2p-manager.js';
import { database } from './p2p-manager.js';
import * as ui from './ui-manager.js';
import * as charManager from './character-manager.js';


export async function initialize() {
    // --- テーマ・自動保存などの既存機能の初期化 ---
    // (この部分は変更なし)
    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme);
    document.querySelector(`input[name="theme-switcher"][value="${savedTheme}"]`).checked = true;
    document.querySelectorAll('input[name="theme-switcher"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            applyTheme(e.target.value);
            localStorage.setItem('theme', e.target.value);
        });
    });
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if ((localStorage.getItem('theme') || 'system') === 'system') applyTheme('system');
    });
    const autosaveSwitch = document.querySelector('input[name="autosave-switcher"]');
    autosaveSwitch.checked = stateManager.initialize();
    autosaveSwitch.addEventListener('change', (e) => stateManager.setAutoSave(e.target.checked));


    // --- セッション管理ロジック ---

    // UI要素の取得
    const sessionStartBtn = document.getElementById('sessionStartBtn');
    const sessionJoinContainer = document.getElementById('sessionJoinContainer');
    const sessionNcPanel = document.getElementById('sessionNcPanel');
    const sessionPlPanel = document.getElementById('sessionPlPanel');

    // P2Pマネージャーの初期化
    // P2Pマネージャーの初期化 (コールバックを修正)
    p2p.initialize(
        (data) => {
            console.log('受信:', data);
            // ▼▼▼ 受信データの処理を追加 ▼▼▼
            if (data.type === 'notification') {
                ui.showToastNotification(data.payload, 3000);
            } else if (data.type === 'kicked') {
                alert("ルームから追放されました。");
                p2p.disconnectSession();
                window.location.href = window.location.pathname;
            }
        },
        (id, state) => {
            console.log(`接続状態: ${id} is ${state}`);
            const statusEl = document.getElementById('plConnectionStatus');
            if (statusEl) {
                statusEl.textContent = state === 'connected' ? '接続完了' : '接続待機中...';
            }
        },
        (peerList) => { // NC専用: 接続者リスト更新コールバック
            const listEl = document.getElementById('ncPeerList');
            const countEl = document.getElementById('ncPeerCount');
            if (listEl && countEl) {
                // ▼▼▼ PL名と追放ボタンを表示するように修正 ▼▼▼
                listEl.innerHTML = ''; // 一旦クリア
                
                // peerListはIDの配列なので、各IDの詳細情報をFirebaseから取得
                peerList.forEach(plId => {
                    const plRef = p2p.database.ref(`rooms/${document.getElementById('ncRoomId').textContent}/pls/${plId}/profile`);
                    plRef.once('value', snapshot => {
                        const profile = snapshot.val();
                        if (profile) {
                            const itemEl = document.createElement('div');
                            itemEl.className = 'peer-list-item';
                            itemEl.innerHTML = `
                                <span class="peer-name">${profile.name}</span>
                                <button class="kick-btn" data-pl-id="${plId}">追放</button>
                            `;
                            listEl.appendChild(itemEl);

                            // 追放ボタンにイベントリスナーを設定
                            itemEl.querySelector('.kick-btn').addEventListener('click', (e) => {
                                const targetPlId = e.target.dataset.plId;
                                if (confirm(`PL「${profile.name}」を追放しますか？`)) {
                                    p2p.kickPlayer(targetPlId);
                                }
                            });
                        }
                    });
                });
                countEl.textContent = peerList.length;
                // ▲▲▲ 修正ここまで ▲▲▲
            }
        }
    );

    // セッション開始ボタンの有効/無効をチェックする関数
    const checkSessionStartability = () => {
        const characters = charManager.getCharacters();
        const hasPcs = characters.some(c => c.type === 'pc');
        const hasEnemies = characters.some(c => c.type === 'enemy');
        sessionStartBtn.disabled = !(hasPcs && hasEnemies);
    };

    // 初期チェックを実行
    checkSessionStartability();
    // ★キャラクターの追加/削除に合わせてボタン状態を更新するための仕組み(例)
    // (より堅牢な実装は、イベントディスパッチャなどを使うと良い)
    new MutationObserver(checkSessionStartability).observe(document.getElementById('pcContainer'), { childList: true });
    new MutationObserver(checkSessionStartability).observe(document.getElementById('enemyContainer'), { childList: true });


    // --- イベントリスナーの設定 ---

    // 1. 最初にURLパラメータとローカルストレージから値を取得する
    const params = new URLSearchParams(window.location.search);
    const roomIdFromUrl = params.get('room');
    const plNameFromUrl = params.get('plName');
    const HOST_ROOM_ID_KEY = 'nechronica-session-host-room-id';
    const hostRoomIdFromStorage = localStorage.getItem(HOST_ROOM_ID_KEY);

    // 2. 取得した値を使って、PL参加かNC復帰かを判断する
    if (roomIdFromUrl && plNameFromUrl) {
        // PLとして参加
        document.body.classList.add('pl-mode');
        sessionStartBtn.style.display = 'none';
        sessionJoinContainer.style.display = 'none';
        sessionNcPanel.style.display = 'none';
        sessionPlPanel.style.display = 'block';
        document.getElementById('plRoomId').textContent = roomIdFromUrl;
        
        try {
            await p2p.joinClientSession(roomIdFromUrl, decodeURIComponent(plNameFromUrl));
        } catch (error) {
            alert(error.message + "\n通常モードで起動します。");
            window.location.href = window.location.pathname;
        }
    } else if (roomIdFromUrl && !plNameFromUrl) {
        // PL名がない場合は入力を促す
        alert("PL名が指定されていません。入室画面に戻ります。");
        window.location.href = window.location.pathname;
        
    } else if (hostRoomIdFromStorage) {
        // NCとしてセッションに復帰
        if (confirm(`前回のセッション[${hostRoomIdFromStorage}]が中断されています。復帰しますか？`)) {
            try {
                ui.showToastNotification(`セッション[${hostRoomIdFromStorage}]に復帰しています...`, 2000);
                
                const rejoinedSessionId = await p2p.createHostSession(hostRoomIdFromStorage);
                
                sessionStartBtn.style.display = 'none';
                sessionJoinContainer.style.display = 'none';
                sessionNcPanel.style.display = 'block';

                const inviteUrl = `${window.location.origin}${window.location.pathname}?room=${rejoinedSessionId}`;
                document.getElementById('ncInviteUrl').value = inviteUrl;
                document.getElementById('ncRoomId').textContent = rejoinedSessionId;
                document.body.classList.add('nc-mode');

                ui.showToastNotification(`セッション[${rejoinedSessionId}]に復帰しました`, 2000);
            } catch (error) {
                alert(`セッションへの復帰に失敗しました: ${error.message}\n新規セッションとして開始します。`);
                localStorage.removeItem(HOST_ROOM_ID_KEY);
            }
        } else {
            localStorage.removeItem(HOST_ROOM_ID_KEY);
            database.ref(`rooms/${hostRoomIdFromStorage}`).remove();
            alert("セッションへの復帰をキャンセルし、古いルーム情報を削除しました。新規セッションとして開始します。");
        }
    } else {
        // 通常起動
        document.body.classList.add('nc-mode');
    }

    // 「ルームを作成」ボタン
    sessionStartBtn.addEventListener('click', async () => {
        ui.showToastNotification("ルームを作成しています...", 2000);
        try {
            const newSessionId = await p2p.createHostSession();
            
            // UIをNC管理パネルに切り替え
            sessionStartBtn.style.display = 'none';
            sessionJoinContainer.style.display = 'none';
            sessionNcPanel.style.display = 'block';

            // 招待URLを生成して表示
            const inviteUrl = `${window.location.origin}${window.location.pathname}?room=${newSessionId}`;
            document.getElementById('ncInviteUrl').value = inviteUrl;
            document.getElementById('ncRoomId').textContent = newSessionId;
            ui.showToastNotification(`ルーム[${newSessionId}]を作成しました`, 2000);
        } catch (error) {
            console.error("ルーム作成エラー:", error);
            alert("ルームの作成に失敗しました。");
        }
    });
    
    // 「招待URLをコピー」ボタン
    document.getElementById('ncCopyUrlBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(document.getElementById('ncInviteUrl').value).then(() => {
            ui.showToastNotification("招待URLをコピーしました！", 1500);
        });
    });

    // PLモードで「ルームに入室」ボタン (ロジックを修正)
    document.getElementById('sessionJoinBtn').addEventListener('click', () => {
        const plName = document.getElementById('plNameInput').value.trim();
        const roomId = document.getElementById('sessionRoomIdInput').value.trim();
        
        if (!plName) {
            alert("PL名を入力してください。");
            return;
        }

        if (/^\d{4}$/.test(roomId)) {
            // URLにPL名をクエリパラメータとして追加して遷移
            const url = new URL(window.location.href);
            url.searchParams.set('room', roomId);
            url.searchParams.set('plName', encodeURIComponent(plName));
            window.location.href = url.toString();
        } else {
            alert("4桁のルーム番号を正しく入力してください。");
        }
    });

    if (roomIdFromUrl && plNameFromUrl) { // PL名も必須
        // PLモードで即時接続開始
        document.body.classList.add('pl-mode');
        sessionStartBtn.style.display = 'none';
        sessionJoinContainer.style.display = 'none';
        sessionNcPanel.style.display = 'none';
        sessionPlPanel.style.display = 'block';
        document.getElementById('plRoomId').textContent = roomIdFromUrl;
        
        try {
            // joinClientSessionにPL名を渡す
            await p2p.joinClientSession(roomIdFromUrl, decodeURIComponent(plNameFromUrl));
        } catch (error) {
            alert(error.message + "\n通常モードで起動します。");
            // エラー時はクエリパラメータを削除してリダイレクト
            window.location.href = window.location.pathname;
        }
    } else if (roomIdFromUrl && !plNameFromUrl) {
        // PL名がない場合は入力を促す
        alert("PL名が指定されていません。入室画面に戻ります。");
        window.location.href = window.location.pathname;
    }
    
    // NC: ルーム状態セレクター
    document.querySelectorAll('input[name="room-status"]').forEach(radio => {
        radio.addEventListener('change', async (event) => {
            const newStatus = event.target.value;
            const sessionId = document.getElementById('ncRoomId').textContent;
            if (!sessionId) return;
            
            // ★ firebase.database() をインポートした database に変更
            await database.ref(`rooms/${sessionId}/meta/status`).set(newStatus);
            
            // passcodeAreaの表示/非表示を切り替え
            document.getElementById('passcodeArea').style.display = (newStatus === 'locked') ? 'grid' : 'none';
            
            const statusLabels = { public: '参加受付中', locked: '鍵付き部屋', restricted: '入室制限中' };
            document.getElementById('ncRoomStatusLabel').textContent = statusLabels[newStatus];
            ui.showToastNotification(`ルームを「${statusLabels[newStatus]}」状態に変更しました。`, 1500);
        });
    });

    // NC: 「パスコードを設定/変更」ボタン
    document.getElementById('setPasscodeBtn').addEventListener('click', async () => {
        const passcode = document.getElementById('passcodeInput').value;
        const sessionId = document.getElementById('ncRoomId').textContent;

        if (!/^\d{4}$/.test(passcode)) {
            alert("パスコードは4桁の数字で入力してください。");
            return;
        }
        if (!sessionId) return;

        try {
            const hash = await p2p.sha256(passcode);
            // ★ firebase.database() をインポートした database に変更
            const metaRef = database.ref(`rooms/${sessionId}/meta`);
            await metaRef.update({
                passcodeHash: hash
            });
            ui.showToastNotification("パスコードを設定/変更しました。", 1500);
        } catch (error) {
            console.error("パスコード設定エラー:", error);
            alert("パスコードの設定に失敗しました。");
        }
    });

    // PLモードで「セッションから退席する」ボタン
    document.getElementById('sessionLeaveBtn').addEventListener('click', () => {
        if (confirm("現在のセッションから退席します。よろしいですか？")) {
            p2p.disconnectSession();
            ui.showToastNotification("セッションから退席しました。", 2000);
            setTimeout(() => {
                window.location.href = window.location.pathname;
            }, 1000);
        }
    });
    
    // NCモードで「セッションを終了」ボタン
    document.getElementById('sessionEndBtn').addEventListener('click', () => {
        if (confirm("セッションを終了し、全員の接続を切断します。よろしいですか？")) {
            p2p.disconnectSession();
            ui.showToastNotification("セッションを終了しました。", 2000);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    });

    console.log("Settings Manager initialized.");
}

/**
 * 指定されたテーマをHTMLに適用する
 * @param {string} theme - 'light', 'dark', or 'system'
 */
function applyTheme(theme) {
    if (theme === 'system') {
        // 'system' の場合は、手動設定用の属性を削除する
        document.documentElement.removeAttribute('data-theme');
    } else {
        // 'light' または 'dark' の場合は、属性を設定する
        document.documentElement.setAttribute('data-theme', theme);
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

// --- 使用例 ---
/*
const usageInBytes = getLocalStorageUsage();
const usageInKB = usageInBytes / 1024;
const usageInMB = usageInKB / 1024;

console.log(`現在のLocalStorage使用量 (推定):`);
console.log(`- ${usageInBytes.toLocaleString()} バイト`);
console.log(`- ${usageInKB.toFixed(2)} KB`);
console.log(`- ${usageInMB.toFixed(4)} MB`);
*/

/**
 * LocalStorageの残りの利用可能な容量をバイト単位で推定する (注意: 処理が重い)
 * @returns {Promise<number>} 推定された空き容量 (バイト)
 */
function estimateRemainingQuota() {
    return new Promise((resolve) => {
        const testKey = '___QUOTA_TEST___';
        let remainingBytes = 0;
        let low = 0;
        // ほとんどのブラウザの上限である10MBから探索を開始
        let high = 10 * 1024 * 1024;

        // 二分探索で空き容量を探す
        const check = (size) => {
            try {
                localStorage.setItem(testKey, 'a'.repeat(size));
                localStorage.removeItem(testKey);
                return true; // 保存成功
            } catch (e) {
                return false; // 保存失敗 (容量オーバー)
            }
        };

        // 非同期で処理を分割し、ブラウザが固まるのを防ぐ
        const step = () => {
            if (low <= high) {
                const mid = Math.floor((low + high) / 2);
                if (check(mid)) {
                    remainingBytes = mid;
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
                setTimeout(step, 0); // 次のステップを非同期で実行
            } else {
                resolve(remainingBytes);
            }
        };
        
        step();
    });
}


// --- 使用例 (開発者ツールのコンソールなどで実行) ---
/*
console.log("LocalStorageの空き容量を推定します... (少し時間がかかります)");
estimateRemainingQuota().then(bytes => {
    const remainingKB = bytes / 1024;
    const remainingMB = remainingKB / 1024;
    console.log(`推定される空き容量: ${remainingMB.toFixed(2)} MB`);
});
*/

/**
 * LocalStorageに保存されたユーザー画像をすべて削除する
 */
export function clearLocalImageCache() {
    localStorage.removeItem('userLocalImages');
    console.log("Local image cache cleared.");
}