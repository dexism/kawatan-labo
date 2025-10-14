/**
 * @file script.js
 * @description アプリケーションのメインコントローラー。
 *              各モジュールの初期化と全体の管理を行う。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
const appVersion = "7.10.1501";

// --- モジュールのインポート ---
import * as data from './data-handler.js';
import * as characterManager from './character-manager.js';
import { 
    initialize as initializeUI, 
    addLog as uiAddLog, 
    buildGrid, 
    renderCharacterCards, 
    updateAllUI,
    checkBattleStartCondition, 
    displayVersionInfo, 
    showModal,
    showToastNotification 
} from './ui-manager.js';
import { initialize as initializeSettings } from './settings-manager.js';
import { initialize as initializeInteraction, setupAllEventListeners } from './interaction-manager.js';
import { initializeDiceRoller } from './dice-roller.js';
import * as stateManager from './state-manager.js';

// ★★★ バージョン情報を各モジュールからインポート ★★★
import { version as dataVersion } from './data-handler.js';
import { version as charManagerVersion } from './character-manager.js';
import { version as uiManagerVersion } from './ui-manager.js';
import { version as uiHelpersVersion } from './ui-helpers.js';
import { version as interactionManagerVersion } from './interaction-manager.js';
import { version as battleLogicVersion } from './battle-logic.js';
import { version as battleHelpersVersion } from './battle-helpers.js';
import { version as settingsManagerVersion } from './settings-manager.js';
import { version as stateManagerVersion } from './state-manager.js';
import { version as diceRollerVersion } from './dice-roller.js';
import { version as characterConverterVersion } from './character-converter.js';
import { version as menuBuilderVersion } from './menu-builder.js';
import { version as referenceVersion } from './reference.js';
import { version as Dice3dVersion } from './dice-3d.js';

// ===================================================================================
//  アプリケーション初期化フロー
// ===================================================================================
window.onload = function() {
    document.title = `『永い後日談のネクロニカ』バトルパート支援ツール Ver.${appVersion}`;
};

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // 1. マスターデータの読み込みと各モジュールの初期化
        await data.loadAllData();
        characterManager.initialize(data.getUndeadTemplates());
        initializeUI();
        initializeInteraction();
        initializeSettings();
        initializeDiceRoller({
            hintMasterData: data.getHintData(),
            regretMasterData: data.getRegretData(),
            takaramonoMasterData: data.getTakaramonoData(),
            memoryFragmentsData: data.getMemoryFragmentData(),
            addLog: uiAddLog 
        });

        // 2. UIの骨格を先に描画
        initializeAppUI();

        await new Promise(resolve => setTimeout(resolve, 2000));

        // 3. バージョンチェックを実行し、関連モーダルが閉じるのを待つ
        await checkAppVersion();
        
        // 4. ウェルカムモーダルを表示し、ユーザーが閉じるのを待つ
        await showWelcomeModal();

        // 5. 更新情報を表示し、ユーザーが閉じるのを待つ
        await showUpdateNotesModal();
        
        // 6. 保存データがあれば復元モーダルを表示
        if (stateManager.hasSavedState()) {
            await showRestoreModal();
        }

        // 7. すべての初期化モーダルが完了した後、バージョン情報を表示
        displayAppVersionInfo();

        // 8. スプラッシュ消去
        const splash = document.getElementById('splash');
        splash.classList.add('fade-out');

        // 9. すべての処理の最後に更新完了通知をチェック ★★★
        handleVersionNotification();

        // setTimeout(() => splash.remove(), 1000);

    } catch (error) {
        console.error("アプリケーションの初期化に失敗しました。", error);
        document.body.innerHTML = `<div style="color: red; padding: 20px;">初期化エラー: ${error.stack}</div>`;
    }
});

/**
 * UIの初期描画とインタラクションのセットアップ
 */
function initializeAppUI() {
    buildGrid();
    renderCharacterCards();
    updateAllUI();
    setupAllEventListeners();
    checkBattleStartCondition();
}

/**
 * ウェルカムモーダルを表示し、ユーザーが閉じるのを待つ
 * @returns {Promise<void>}
 */
function showWelcomeModal() {
    return new Promise(resolve => {
        const modal = document.getElementById('welcomeModal');
        const closeBtn = document.getElementById('closeWelcomeModalBtn');

        if (!modal || !closeBtn) {
            console.warn("Welcome modal elements not found, skipping.");
            return resolve();
        }

        modal.classList.add('is-visible');

        const closeModalAndResolve = () => {
            modal.classList.remove('is-visible');
            resolve(); // Promiseを解決して次の処理に進める
        };

        closeBtn.onclick = closeModalAndResolve;
        modal.onclick = (event) => {
            if (event.target === modal) closeModalAndResolve();
        };
    });
}

/**
 * 更新情報モーダルを表示し、ユーザーが閉じるのを待つ
 * @returns {Promise<void>}
 */
function showUpdateNotesModal() {
    return new Promise(resolve => {
        const LATEST_UPDATE_NOTES = `
        <div class="modal-header modal-header-sub">📢主な更新内容 Ver.${appVersion}</div>
        <div class="modal-body welcome-modal-body">
            <p>◆ リファレンスを刷新、<strong>未練・たからもの・記憶のカケラ・暗示</strong>を追加しました。</p>
            <p>◆ 最新バージョンへの<strong>自動更新機能</strong>を実装しました。</p>
            <p>◆ <strong>📖全マニューバリファレンス</strong>を実装しました。</p>
            <p>◆ <strong>防御・妨害・追加ダメージ・転倒・移動妨害</strong>を実装しました。</p>
            <p>◆ <strong>セッションのファイルへの保存・ファイルから読込み</strong>を実装しました。</p>
            <p>◆ <strong>【✏️画像の変更】※透過png対応</strong>：「🪪人形設計図」において<strong>画像の変更</strong>機能を追加しました。
            <p>◆ <strong>状態の自動保存・復元機能</strong>を実装しました。（自動保存ON/OFF対応）</p>
            <p>◆ <strong>データの誤記を訂正</strong>しました。
            <p>◆ <strong>【保管所から読込み】【保管所で見る】【保管所から再読込み】</strong>：キャラクターシート保管所との連携を強化しました。
            <p>◆ 3Dダイス<strong>複数ダイス、D100に対応</strong>しました。
            <p>◆ 試しに<strong>ダイスが転がる</strong>ようにしてみましたが、動作が怪しいです。
            <p>◆ ジャッジウィンドウで<strong>適用されている支援、妨害を確認</strong>できるようになりました。
            <p>◆ <strong>支援</strong>がダイスロールに適用できるようになりました。
            <p>◆ ユーザーが<strong>画像を追加</strong>できるようになりました。
            <p>◆ <strong>【新着/IDリスト】</strong>：キャラクターシート保管所の<strong>キャラクターリスト表示</strong>機能を追加しました。
            <p>◆ <strong>マニューバリスト</strong>を更新し、<strong>表示機能を拡張</strong>しました。
            <p>◆ その他、軽微なUI調整と不具合の修正を行いました。
        </div>
        `;

        showModal({
            title: '更新情報',
            bodyHtml: LATEST_UPDATE_NOTES,
            footerHtml: '<button id="okUpdateBtn" class="welcome-modal-close-btn">OK</button>',
            closable: false,
            onRender: (updateModal, closeUpdateFn) => {
                updateModal.querySelector('#okUpdateBtn').onclick = () => {
                    closeUpdateFn();
                    resolve(); // Promiseを解決して次の処理に進める
                };
            }
        });
    });
}

/**
 * セッション復元モーダルを表示し、ユーザーの選択を待つPromiseを返す
 * @returns {Promise<void>}
 */
function showRestoreModal() {
    return new Promise(resolve => {
        showModal({
            title: 'セッションの復元',
            bodyHtml: '<p>保存された前回のセッションデータが見つかりました。<br>復元しますか？</p>',
            footerHtml: `
                <button id="restoreBtn" class="welcome-modal-close-btn">はい、復元する</button>
                <button id="discardBtn" class="welcome-modal-close-btn">いいえ、新規に開始</button>
            `,
            closable: false, // ★★★ この行を追加 ★★★
            onRender: (modal, closeFn) => {
                modal.querySelector('#restoreBtn').onclick = async () => {
                    closeFn();
                    const success = await stateManager.loadState(data.getUndeadTemplates());
                    
                    if (success) {
                        updateAllUI();
                    }
                    resolve();
                };
                
                modal.querySelector('#discardBtn').onclick = () => {
                    if (confirm('自動保存されたデータが削除されます。本当に新規セッションを開始しますか？')) {
                        stateManager.clearSavedState();
                        closeFn();
                        resolve();
                    }
                };
            }
        });
    });
}

/**
 * サーバー上のバージョンとローカルのバージョンを比較し、
 * バージョンが古ければ自動でリロードする。
 * @returns {Promise<void>}
 */
export async function checkAppVersion() {
    return new Promise(async (resolve) => {
        // オフラインの場合は従来通り通知して終了
        if (!navigator.onLine) {
            showModal({
                title: '更新の確認',
                bodyHtml: '<p>ネットワークに接続されていません。<br>接続が良い環境でページを再読み込みすると、最新バージョンを確認できます。</p>',
                footerHtml: '<button id="okBtn" class="welcome-modal-close-btn">OK</button>',
                onRender: (modal, closeFn) => {
                    modal.querySelector('#okBtn').onclick = () => {
                        closeFn();
                        resolve();
                    };
                }
            });
            return;
        }

        try {
            // タイムアウト処理
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);

            // キャッシュを回避してバージョンファイルを取得
            const response = await fetch(`/version.json?t=${new Date().getTime()}`, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error('バージョンファイルを取得できませんでした。');
            }

            const serverVersionData = await response.json();
            const serverVersion = serverVersionData.version;

            // ★★★ ここからが修正箇所です ★★★
            if (serverVersion && serverVersion !== appVersion) {
                // バージョンが異なる場合
                showModal({
                    title: '新しいバージョンが利用可能です',
                    bodyHtml: `
                        <p>アプリケーションが更新されました。</p>
                        <p>最新バージョン (v${serverVersion}) を読み込むために、ページをリロードしてください。</p>
                    `,
                    footerHtml: '<button id="reloadBtn" class="welcome-modal-close-btn">リロードして更新</button>',
                    onRender: (modal, closeFn) => {
                        modal.querySelector('#reloadBtn').onclick = () => {
                            // trueを指定して、キャッシュを無視したハードリロードを行う
                            location.reload(true);
                        };
                        // このモーダルはリロードするまで閉じさせないため、閉じるボタンの処理は設定しない
                    }
                });

                // バージョンが異なる場合、即座にリロードを実行
                // console.log(`新しいバージョン (v${serverVersion}) を検出しました。自動的にリロードします。`);
                // location.reload(true); // trueを指定してハードリロード
                // リロードが始まるため、このPromiseは解決されずに終了します。
            } else {
                // バージョンが同じ場合は正常に解決
                resolve();
            }
            // ★★★ 修正はここまでです ★★★

        } catch (error) {
            // タイムアウトやその他のネットワークエラーの場合は従来通り通知して終了
            console.warn("バージョンチェックに失敗しました:", error.name, error.message);
            showModal({
                title: '更新の確認',
                bodyHtml: '<p>サーバーへの接続がタイムアウトしました。<br>ネットワーク環境の良い場所で再度お試しいただくと、最新バージョンを確認できます。</p>',
                footerHtml: '<button id="okBtn" class="welcome-modal-close-btn">OK</button>',
                onRender: (modal, closeFn) => {
                    modal.querySelector('#okBtn').onclick = () => {
                        closeFn();
                        resolve();
                    };
                }
            });
        }
    });
}

/**
 * バージョン情報を集約してUIに渡す
 */
function displayAppVersionInfo() {
    const versionInfo = {
        app: appVersion,
        "battle-logic": battleLogicVersion,
        "battle-helper": battleHelpersVersion,
        "character-manager": charManagerVersion,
        "data-handler": dataVersion,
        "dice-roller": diceRollerVersion,
        "dice-3d": Dice3dVersion,
        "interaction-manager": interactionManagerVersion,
        "menu-builder": menuBuilderVersion,
        "ui-helpers": uiHelpersVersion,
        "ui-manager": uiManagerVersion,
        "settings-manager": settingsManagerVersion,
        "state-manager": stateManagerVersion,
        "reference": referenceVersion,
        "character-converter": characterConverterVersion
    };
    displayVersionInfo(versionInfo);
}
/**
 * ローカルストレージと現在のアプリバージョンを比較し、更新された場合に通知を表示する
 */
function handleVersionNotification() {
    const LOCAL_STORAGE_VERSION_KEY = 'nechronica-app-version';
    const storedVersion = localStorage.getItem(LOCAL_STORAGE_VERSION_KEY);

    if (storedVersion && storedVersion !== appVersion) {
        // 保存されていたバージョンと現在のバージョンが異なる場合、更新通知を表示
        showToastNotification(`バージョン ${appVersion} に更新されました！`, 3000);
    }

    // 現在のバージョンをローカルストレージに保存する
    localStorage.setItem(LOCAL_STORAGE_VERSION_KEY, appVersion);
}