/**
 * @file script.js
 * @description アプリケーションのメインコントローラー。
 *              各モジュールの初期化と全体の管理を行う。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
const appVersion = "1.1.8";

// --- モジュールのインポート ---
import * as data from './data-handler.js';
import * as characterManager from './character-manager.js';
import { initialize as initializeUI, addLog as uiAddLog, buildGrid, renderCharacterCards, updateBattleStatusUI, checkBattleStartCondition, displayVersionInfo, showModal } from './ui-manager.js';
import { initialize as initializeInteraction, setupAllEventListeners } from './interaction-manager.js';
import { initializeDiceRoller } from './dice-roller.js';

// ★★★ バージョン情報を各モジュールからインポート ★★★
import { version as dataVersion } from './data-handler.js';
import { version as charManagerVersion } from './character-manager.js';
import { version as uiManagerVersion } from './ui-manager.js';
import { version as uiHelpersVersion } from './ui-helpers.js';
import { version as interactionManagerVersion } from './interaction-manager.js';
import { version as battleLogicVersion } from './battle-logic.js';
import { version as settingsManagerVersion } from './settings-manager.js';
import { version as diceRollerVersion } from './dice-roller.js';
import { version as characterConverterVersion } from './character-converter.js';
import { version as menuBuilderVersion } from './menu-builder.js';
import { version as Dice3dVersion } from './dice-3d.js';

import { initialize as initializeSettings } from './settings-manager.js';

// ===================================================================================
//  アプリケーション初期化フロー
// ===================================================================================

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // 1. 全てのマスターデータを読み込む
    await data.loadAllData();
    
    // 2. 各モジュールを初期化
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

    // const diceContainer = document.getElementById('dice3d-container');
    // init3DDice(diceContainer);

    // 3. アプリケーションの初期描画とイベントリスナー設定を開始
    initializeApp();

  } catch (error) {
    document.body.innerHTML = `<div style="color: red; padding: 20px;">アプリケーションの初期化に失敗しました。<br>${error.stack}</div>`;
  }
});

/**
 * UIの初期描画とインタラクションのセットアップを呼び出す
 */
function initializeApp() {
  const LATEST_UPDATE_NOTES = `
    <div class="modal-header modal-header-sub">📢主な更新内容:7.10.3.1</div>
    <div class="modal-body welcome-modal-body">
      <p>◆ 試しに<strong>ダイスが転がる</strong>ようにしてみましたが、動作が怪しいです。
      <p>◆ ジャッジウィンドウで<strong>適用されている支援、妨害を確認</strong>できるようになりました。
      <p>◆ <strong>支援</strong>がダイスロールに適用できるようになりました。
      <p>◆ ユーザーが<strong>画像を追加</strong>できるようになりました。
      <p>◆ <strong>【保管所で見る】</strong>：キャラクターシート保管所の<strong>キャラクターへのリンク</strong>を追加しました。
      <p>◆ <strong>【新着/IDリスト】</strong>：キャラクターシート保管所の<strong>キャラクターリスト表示</strong>機能を追加しました。
      <p>◆ <strong>【保管所から読込み】</strong>：<strong>キャラクターシート保管所</strong>からの<strong>キャラクター読込み</strong>機能を追加しました。
      <p>◆ <strong>【✏️画像の変更】</strong>：「🪪人形設計図」において<strong>画像の変更</strong>機能を追加しました。
      <p>◆ <strong>マニューバリスト</strong>を更新し、<strong>表示機能を拡張</strong>しました。
      <p>◆ その他、軽微なUI調整と不具合の修正を行いました。
    </div>
  `;

  // 1. UIの初期描画
  buildGrid();
  renderCharacterCards();
  updateBattleStatusUI();
  
  // 2. HTML要素が確定した後にイベントリスナーを設定
  setupAllEventListeners();
  
  // 3. 初期状態のチェック
  checkBattleStartCondition();

  // ローカルストレージをチェックして、ウェルカムモーダルを初回のみ表示する
  // if (!localStorage.getItem('welcomeModalShown')) {
    const modal = document.getElementById('welcomeModal');
    const closeBtn = document.getElementById('closeWelcomeModalBtn');

    if (modal && closeBtn) {
      // モーダルを表示
      modal.classList.add('is-visible');

      const closeModal = () => {
        modal.classList.remove('is-visible');
        // 注意事項モーダルを閉じた直後に、更新情報モーダルを表示する
        showModal({
            title: '更新情報',
            bodyHtml: LATEST_UPDATE_NOTES,
            footerHtml: '<button id="okUpdateBtn" class="welcome-modal-close-btn">OK</button>',
            onRender: (updateModal, closeUpdateFn) => {
                // 新しく作ったOKボタンに、モーダルを閉じる機能を割り当てる
                updateModal.querySelector('#okUpdateBtn').onclick = closeUpdateFn;
            }
        });
        // 表示したことを記録して、次回以降は表示しないようにする
        // localStorage.setItem('welcomeModalShown', 'true');
      };

      // 閉じるボタンがクリックされたらモーダルを閉じる
      closeBtn.onclick = closeModal;
      // 背景がクリックされたらモーダルを閉じる
      modal.onclick = (event) => {
        if (event.target === modal) {
          closeModal();
        }
      };
    }
  // }

  // ★★★ バージョン情報を集約してUIに渡す ★★★
  const versionInfo = {
      app: appVersion,
      "battle-logic": battleLogicVersion,
      "character-manager": charManagerVersion,
      "data-handler": dataVersion,
      "dice-roller": diceRollerVersion,
      "dice-3d": Dice3dVersion,
      "interaction-manager": interactionManagerVersion,
      "menu-builder": menuBuilderVersion,
      "ui-helpers": uiHelpersVersion,
      "ui-manager": uiManagerVersion,
      "settings-manager": settingsManagerVersion,
      "character-converter": characterConverterVersion
  };
  displayVersionInfo(versionInfo);
}