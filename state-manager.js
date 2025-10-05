/**
 * @file state-manager.js
 * @description アプリケーションのセッション状態の保存と復元を担当するモジュール
 */
export const version = "1.2.8"; 

import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { convertVampireBloodSheet } from './character-converter.js';
import * as data from './data-handler.js'; // ★ この行を削除

const STORAGE_KEY = 'nechronica-battle-session';
const AUTOSAVE_KEY = 'nechronica-autosave-enabled';

let isAutoSaveEnabled = false;
let isLoading = false;
/**
 * モジュールの初期化。ローカルストレージから自動保存設定を読み込む。
 */
export function initialize() {
    const savedSetting = localStorage.getItem(AUTOSAVE_KEY);
    isAutoSaveEnabled = savedSetting !== 'false';
    console.log(`State Manager initialized. Auto-save is ${isAutoSaveEnabled ? 'ON' : 'OFF'}.`);
    return isAutoSaveEnabled;
}

/**
 * 自動保存の設定を切り替える
 * @param {boolean} isEnabled - 自動保存を有効にするか
 */
export function setAutoSave(isEnabled) {
    isAutoSaveEnabled = isEnabled;
    localStorage.setItem(AUTOSAVE_KEY, isEnabled);
    console.log(`Auto-save has been set to ${isEnabled ? 'ON' : 'OFF'}.`);
    if (isEnabled) {
        saveState(); // 有効にしたタイミングで一度保存する
    }
}

/**
 * 自動保存が有効な場合のみ、現在の状態を保存するラッパー関数
 */
export function autoSave() {
    // 復元処理中と自動保存OFFの場合は何もしない
    if (isLoading || !isAutoSaveEnabled) return;
    saveState();
}

/**
 * 現在の戦闘状態をローカルストレージに保存する
 */
export function saveState() {
    try {
        const battleState = battleLogic.getBattleState();
        const characters = charManager.getCharacters();

        const stateToSave = {
            savedAt: new Date().toISOString(),
            turn: battleState.isStarted ? battleState.turn : 0,
            characters: characters.map((char) => ({
                sourceType: char.sheetId ? 'sheet' : 'template',
                id: char.sheetId || char.templateId,
                type: char.type,
                img: char.img, // ★変更点1
                area: char.area,
                stackCount: char.stackCount,
                actionValue: char.actionValue,
                isDestroyed: char.isDestroyed || false,
                hasWithdrawn: char.hasWithdrawn || false,
                damagedPartNames: Object.values(char.partsStatus).flat()
                    .filter(p => p.damaged).map(p => p.name),
                usedManeuvers: Array.from(char.usedManeuvers),
                activeBuffs: char.activeBuffs,
                regrets: char.regrets
            }))
        };

        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));

        if (!isAutoSaveEnabled) {
            ui.showToastNotification('現在の状態を保存しました', 2000);
        } else {
            console.log("Session auto-saved.");
        }
    } catch (error) {
        console.error("状態の保存に失敗しました:", error);
        alert("状態の保存に失敗しました。");
    }
}

/**
 * ローカルストレージから状態を復元する
 * @param {object} undeadTemplates - data-handlerから読み込まれたアンデッドのテンプレートデータ
 */
export async function loadState(undeadTemplates) {
    const savedDataString = localStorage.getItem(STORAGE_KEY);
    // 保存データがない場合は何もしない（念のためのガード処理）
    if (!savedDataString) {
        console.warn("loadState was called, but no saved data was found.");
        return false;
    }

    isLoading = true;
    ui.showToastNotification('状態を復元しています...', 5000);

    try {
        const savedState = JSON.parse(savedDataString);
        charManager.clearAllCharacters();
        battleLogic.resetToSetupPhase();

        // --- フェーズ1: 全キャラクターのベースデータを準備 ---
        const charCreationData = await Promise.all(savedState.characters.map(async (charData) => {
            let baseData;
            if (charData.sourceType === 'sheet') {
                const sourceData = await fetchVampireBloodSheet(charData.id);
                const converted = convertVampireBloodSheet(sourceData);
                if (!converted) throw new Error(`ID: ${charData.id} の変換に失敗`);
                converted.sheetId = charData.id;
                baseData = converted;
            } else {
                const template = undeadTemplates[charData.id];
                if (!template) throw new Error(`テンプレートID: ${charData.id} が見つかりません`);
                baseData = JSON.parse(JSON.stringify(template));
                baseData.templateId = charData.id;
            }
            return { baseData, savedState: charData };
        }));

        // --- フェーズ2: キャラクターの生成と状態適用をまとめて実行 ---
        const restoredCharacters = charCreationData.map(({ baseData, savedState }) => {

            // ステップA: まずデフォルトのデータでキャラクターを生成
            const newChar = charManager.createCharacterForLoad(baseData, savedState.type);
            
            // ステップB: ★★★ 生成された直後に、保存されたデータで状態を上書き ★★★
            charManager.updateCharacter(newChar.id, {
                img:           savedState.img, // 画像パスをここで上書き
                area:          savedState.area,
                actionValue:   savedState.actionValue,
                stackCount:    savedState.stackCount,
                isDestroyed:   savedState.isDestroyed,
                hasWithdrawn:  savedState.hasWithdrawn,
                usedManeuvers: new Set(savedState.usedManeuvers),
                activeBuffs:   savedState.activeBuffs || [],
                regrets:       savedState.regrets
            });

            // ステップC: 損傷パーツを適用
            const damagedPartNames = new Set(savedState.damagedPartNames);
            Object.values(newChar.partsStatus).flat().forEach(part => {
                if (damagedPartNames.has(part.name)) {
                    part.damaged = true;
                }
            });

            // ステップD: 最終的な値を再計算
            charManager.recalculateMaxActionValue(newChar);

            return newChar;
        });

        // --- フェーズ3: 戦闘状態の復元 ---
        if (savedState.turn === 0) {
            battleLogic.resetToSetupPhase();
            ui.renderCharacterCards();
            ui.updateMarkers();
            ui.checkBattleStartCondition();
        } else {
            battleLogic.restoreBattleState(savedState.turn, restoredCharacters);
        }

        ui.showToastNotification('セッションを復元しました。', 2000);
        return true;

    } catch (error) {
        console.error("状態の復元に失敗しました:", error);
        alert(`状態の復元に失敗しました:\n${error.message}`);
        clearSavedState();
        setTimeout(() => window.location.reload(), 1000);
        return false;
    } finally {
        isLoading = false;
    }
}

export function hasSavedState() {
    return localStorage.getItem(STORAGE_KEY) !== null;
}

export function clearSavedState() {
    localStorage.removeItem(STORAGE_KEY);
    ui.showToastNotification('保存データを削除しました。', 2000);
}

/**
 * Vampire Blood形式のキャラクターシートをJSONP形式で取得する (menu-builder.jsから移植)
 * @param {string} sheetId - シートID
 * @returns {Promise<object>} - 取得したキャラクターデータ
 */
function fetchVampireBloodSheet(sheetId) {
    return new Promise((resolve, reject) => {
        const callbackName = `jsonpCallback_${Date.now()}`;
        window[callbackName] = (data) => {
            document.head.removeChild(script);
            delete window[callbackName];
            resolve(data);
        };
        const script = document.createElement('script');
        script.onerror = () => {
            delete window[callbackName];
            document.head.removeChild(script);
            reject(new Error('シートの読込みに失敗しました。'));
        };
        script.src = `https://charasheet.vampire-blood.net/${sheetId}.js?callback=${callbackName}`;
        script.charset = 'UTF-8';
        document.head.appendChild(script);
    });
}
/**
 * 現在のセッション状態をJSONファイルとしてダウンロードする
 */
export function saveStateToFile() {
    try {
        const battleState = battleLogic.getBattleState();
        const characters = charManager.getCharacters();

        // saveStateと同じロジックで保存用オブジェクトを生成
        const stateToSave = {
            savedAt: new Date().toISOString(),
            turn: battleState.isStarted ? battleState.turn : 0,
            characters: characters.map((char) => ({
                sourceType: char.sheetId ? 'sheet' : 'template',
                id: char.sheetId || char.templateId,
                type: char.type,
                img: char.img,
                area: char.area,
                stackCount: char.stackCount,
                actionValue: char.actionValue,
                isDestroyed: char.isDestroyed || false,
                hasWithdrawn: char.hasWithdrawn || false,
                damagedPartNames: Object.values(char.partsStatus).flat()
                    .filter(p => p.damaged).map(p => p.name),
                usedManeuvers: Array.from(char.usedManeuvers),
                activeBuffs: char.activeBuffs,
                regrets: char.regrets
            }))
        };
        
        // データをJSON文字列に変換
        const jsonString = JSON.stringify(stateToSave, null, 2); // null, 2で見やすく整形

        // Blobオブジェクトを作成
        const blob = new Blob([jsonString], { type: 'application/json' });

        // ダウンロード用のURLを生成
        const url = URL.createObjectURL(blob);

        // aタグを動的に生成してダウンロードを実行
        const a = document.createElement('a');
        a.href = url;
        
        // デフォルトのファイル名をJSTで生成 (例: nechronica-session-20251005-1530.json)
        const now = new Date();
        const year = now.getFullYear();
        // getMonth()は0-11を返すため+1し、padStartで2桁にフォーマット
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        const timestampJST = `${year}${month}${date}-${hours}${minutes}`;
        const defaultFileName = `nechronica-session-${timestampJST}.json`;

        // ★★★ ファイル名の入力を求める ★★★
        const fileName = prompt("ファイル名を入力してください:", defaultFileName);

        if (fileName) { // ユーザーがキャンセルしなかった場合のみダウンロード
            a.download = fileName.endsWith('.json') ? fileName : `${fileName}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            ui.showToastNotification(`「${a.download}」を保存しました。`, 2000);
        }

        // 生成したURLを解放
        URL.revokeObjectURL(url);

    } catch (error) {
        console.error("ファイルへの保存に失敗しました:", error);
        alert("ファイルへの保存に失敗しました。");
    }
}