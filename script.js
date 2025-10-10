/**
 * @file script.js
 * @description アプリケーションのメインコントローラー。
 *              各モジュールの初期化と全体の管理を行う。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
const appVersion = "1.3.20";

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
    showModal 
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
import { version as Dice3dVersion } from './dice-3d.js';

// ===================================================================================
//  アプリケーション初期化フロー
// ===================================================================================

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

        // 3. ウェルカムモーダルと更新情報を表示し、ユーザーが閉じるのを待つ
        await showWelcomeAndUpdates();

        // 4. ウェルカムモーダルが閉じた後、保存データがあれば復元モーダルを表示
        if (stateManager.hasSavedState()) {
            await showRestoreModal();
        }

        // 5. すべての初期化モーダルが完了した後、バージョン情報を表示
        displayAppVersionInfo();

        // 6. スプラッシュ消去
        const splash = document.getElementById('splash');
        splash.classList.add('fade-out');
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
 * ウェルカムモーダルと更新情報を順番に表示し、完了を待つPromiseを返す
 * @returns {Promise<void>}
 */
function showWelcomeAndUpdates() {
    return new Promise(resolve => {
        const LATEST_UPDATE_NOTES = `
        <div class="modal-header modal-header-sub">📢主な更新内容:7.10.11.2</div>
        <div class="modal-body welcome-modal-body">
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

        const modal = document.getElementById('welcomeModal');
        const closeBtn = document.getElementById('closeWelcomeModalBtn');

        if (!modal || !closeBtn) {
            console.warn("Welcome modal elements not found, skipping.");
            return resolve(); // モーダル要素がなければ即座に解決
        }

        modal.classList.add('is-visible');

        const closeWelcomeAndShowUpdates = () => {
            modal.classList.remove('is-visible');
            showModal({
                title: '更新情報',
                bodyHtml: LATEST_UPDATE_NOTES,
                footerHtml: '<button id="okUpdateBtn" class="welcome-modal-close-btn">OK</button>',
                onRender: (updateModal, closeUpdateFn) => {
                    updateModal.querySelector('#okUpdateBtn').onclick = () => {
                        closeUpdateFn();
                        resolve(); // ★ 更新モーダルが閉じられたらPromiseを解決
                    };
                }
            });
        };

        closeBtn.onclick = closeWelcomeAndShowUpdates;
        modal.onclick = (event) => {
            if (event.target === modal) closeWelcomeAndShowUpdates();
        };
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
            onRender: (modal, closeFn) => {
                // 「はい、復元する」ボタンの処理
                modal.querySelector('#restoreBtn').onclick = async () => {
                    closeFn();
                    // loadState の返り値（成功したかどうか）を受け取る
                    const success = await stateManager.loadState(data.getUndeadTemplates());
                    
                    // ロードが成功した場合のみ、UIを更新する
                    if (success) {
                        updateAllUI();
                    }
                    resolve();
                };
                
                // 「いいえ、新規に開始」ボタンの処理
                modal.querySelector('#discardBtn').onclick = () => {
                    // ★★★ 確認ダイアログを追加 ★★★
                    if (confirm('自動保存されたデータが削除されます。本当に新規セッションを開始しますか？')) {
                        stateManager.clearSavedState();
                        closeFn();
                        resolve();
                    }
                    // "キャンセル"が押された場合は、モーダルを閉じずに何もしない
                };
            }
        });
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
        "character-converter": characterConverterVersion
    };
    displayVersionInfo(versionInfo);
}