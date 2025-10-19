/**
 * @file state-manager.js
 * @description アプリケーションのセッション状態の保存と復元を担当するモジュール
 */
export const version = "2.4.17"; // ロード処理の完全な修正版

import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { convertVampireBloodSheet } from './character-converter.js';
import * as data from './data-handler.js';
import { checkAppVersion } from './script.js';

const STORAGE_KEY = 'nechronica-battle-session-v3'; // 新しいデータ構造のため、キーをv3に戻す
const AUTOSAVE_KEY = 'nechronica-autosave-enabled';

let isAutoSaveEnabled = false;
let isLoading = false;

export function initialize() {
    localStorage.removeItem('nechronica-battle-session-v2'); // 古いキーは削除
    const savedSetting = localStorage.getItem(AUTOSAVE_KEY);
    isAutoSaveEnabled = savedSetting !== 'false';
    console.log(`State Manager initialized. Auto-save is ${isAutoSaveEnabled ? 'ON' : 'OFF'}.`);
    return isAutoSaveEnabled;
}

export function setAutoSave(isEnabled) {
    isAutoSaveEnabled = isEnabled;
    localStorage.setItem(AUTOSAVE_KEY, isEnabled);
    if (isEnabled) {
        saveState();
    }
}

export function autoSave() {
    if (isLoading || !isAutoSaveEnabled) return;
    saveState();
}
function createSaveObject() {
    const battleState = battleLogic.getBattleState();
    const characters = charManager.getCharacters();
    const isSetupPhase = !battleState.isStarted;

    let existingState = {};
    try {
        existingState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
        existingState = { characters: [] };
    }
    const existingInitialStatesMap = new Map(
        (existingState.characters || []).map(c => [c.initialState.charId, c.initialState])
    );

    const charactersToSave = characters.map(char => {
        const savedInitialState = existingInitialStatesMap.get(char.id) || {};
        // isCheckedがtrueの未練のみを保存対象とする
        const regretsToSave = char.regrets.filter(r => r.isChecked);
        
        const initialState = {
            charId: char.id,
            sourceType: char.sheetId ? 'sheet' : 'template',
            id: char.sheetId || char.templateId,
            type: char.type,
            displayName: char.displayName,
            img: char.img,
            regrets: regretsToSave, // フィルタリングした未練を保存
            area: savedInitialState.area,
            stackCount: savedInitialState.stackCount,
        };
        if (isSetupPhase) {
            initialState.area = char.area;
            initialState.stackCount = char.stackCount;
        }

        const currentState = {
            charId: char.id,
            area: char.area,
            stackCount: char.stackCount,
            actionValue: char.actionValue,
            isDestroyed: char.isDestroyed || false,
            hasWithdrawn: char.hasWithdrawn || false,
            damagedPartNames: Object.values(char.partsStatus).flat()
                .filter(p => p.damaged).map(p => p.name),
            usedManeuvers: Array.from(char.usedManeuvers || [])
        };

        return { initialState, currentState };
    });

    return {
        savedAt: new Date().toISOString(),
        turn: isSetupPhase ? 0 : battleState.turn,
        characters: charactersToSave
    };
}

/**
 * 【新ロジック】現在の状態をクリーンなスナップショットとしてローカルストレージに保存する
 * @param {boolean} isManualSave - 手動保存かどうか
 */
export function saveState(isManualSave = false) {
    try {
        const stateToSave = createSaveObject();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));

        if (isManualSave) {
            ui.showToastNotification('ブラウザに保存しました', 2000);
        } else if (isAutoSaveEnabled) {
            console.log("Session auto-saved.");
        }
        checkAppVersion();
    } catch (error) {
        console.error("状態の保存に失敗しました:", error);
    }
}

/**
 * 【新ロジック】ファイル保存も新しいデータ構造で行う
 */
export function saveStateToFile() {
    try {
        const stateToSave = createSaveObject();
        
        const jsonString = JSON.stringify(stateToSave, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        
        const now = new Date();
        const timestampJST = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
        const defaultFileName = `nechronica-session-${timestampJST}.json`;

        const fileName = prompt("ファイル名を入力してください:", defaultFileName);
        if (fileName) {
            a.download = fileName.endsWith('.json') ? fileName : `${fileName}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            ui.showToastNotification(`「${a.download}」を保存しました。`, 2000);
        }
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error("ファイルへの保存に失敗しました:", error);
        alert("ファイルへの保存に失敗しました。");
    }
}

export async function loadStateFromFile(jsonString) {
    if (!jsonString) {
        ui.showToastNotification('ファイルが空か、読み込みに失敗しました。', 2000);
        return false; 
    }
    try {
        const parsedState = JSON.parse(jsonString);
        // 新しいデータ構造と、古いファイル形式の両方に対応
        if (parsedState.characters && Array.isArray(parsedState.characters)) {
            return await executeLoad(parsedState);
        } else {
            ui.showToastNotification('セッションデータ形式ではありません。', 2000);
            return false;
        }
    } catch (error) {
        console.error("ファイルからの状態復元に失敗しました:", error);
        alert(`ファイルの解析に失敗しました。\n${error.message}`);
        return false;
    }
}

export async function loadState(undeadTemplates) {
    const savedDataString = localStorage.getItem(STORAGE_KEY);
    if (!savedDataString) return false;
    try {
        const savedState = JSON.parse(savedDataString);
        return await executeLoad(savedState, undeadTemplates);
    } catch (error) {
        console.error("localStorageからの状態復元に失敗しました:", error);
        return false;
    }
}



/**
 * 【新ロジック】新しいデータ構造と古いフラット構造の両方を解釈できるように修正
 */
async function executeLoad(stateObject, undeadTemplates) {
    const templates = undeadTemplates || data.getUndeadTemplates();
    isLoading = true;
    ui.showLoadingProgress('セッションデータを準備中...');

    try {
        const savedCharacters = stateObject.characters;
        if (!savedCharacters) throw new Error("セーブデータ形式が不正です。");
        const turn = stateObject.turn || 0;
        const isSetupPhase = turn === 0;

        charManager.clearCharacters();
        battleLogic.resetToSetupPhase();

        const totalChars = savedCharacters.length;
        // ★★★ ここからが今回の修正箇所です (1/2) ★★★
        let loadedCount = 0; // 削除されていた変数の宣言を戻します

        for (const savedChar of savedCharacters) {
            // データ構造の判別
            const isNewStructure = !!savedChar.initialState;
            const initialState = isNewStructure ? savedChar.initialState : savedChar;
            const currentState = isNewStructure ? savedChar.currentState : savedChar;
            
            const charNameForProgress = initialState.displayName || initialState.id;
            // loadedCount を正しく渡します
            ui.updateLoadingProgress(loadedCount, totalChars, charNameForProgress);
            
            let charObject;
            if (initialState.sourceType === 'sheet') {
                const sourceData = await fetchVampireBloodSheet(initialState.id);
                charObject = convertVampireBloodSheet(sourceData);
                charObject.sheetId = initialState.id;
            } else {
                const template = templates[initialState.id];
                if (!template) throw new Error(`テンプレートID: ${initialState.id} が見つかりません`);
                charObject = JSON.parse(JSON.stringify(template));
                charObject.templateId = initialState.id;
            }

            const newChar = charManager.addCharacterFromObject(charObject, initialState.type);

            // 静的データを initialState から適用
            charManager.updateCharacter(newChar.id, {
                displayName: initialState.displayName || newChar.originalName,
                img: initialState.img,
                regrets: initialState.regrets,
            });

            // 状況に応じて、初期配置 or 戦闘中状態を適用
            if (isSetupPhase) {
                charManager.updateCharacter(newChar.id, {
                    area: initialState.area,
                    stackCount: initialState.stackCount,
                });
            } else {
                charManager.updateCharacter(newChar.id, {
                    area: currentState.area,
                    stackCount: currentState.stackCount,
                    actionValue: currentState.actionValue,
                    isDestroyed: currentState.isDestroyed,
                    hasWithdrawn: currentState.hasWithdrawn,
                    usedManeuvers: new Set(currentState.usedManeuvers || [])
                });
                const damagedNames = new Set(currentState.damagedPartNames);
                Object.values(newChar.partsStatus).flat().forEach(part => {
                    part.damaged = damagedNames.has(part.name);
                });
                charManager.recalculateMaxActionValue(newChar);
            }
            
            // ★★★ ここからが今回の修正箇所です (2/2) ★★★
            loadedCount++; // 削除されていたインクリメント処理を戻します
            ui.updateLoadingProgress(loadedCount, totalChars, newChar.name);

            if (initialState.sourceType === 'sheet') await new Promise(resolve => setTimeout(resolve, 200));
            else await new Promise(resolve => setTimeout(resolve, 50));
        }

        if (!isSetupPhase) {
            battleLogic.restoreBattleState(turn, charManager.getCharacters());
        }
        
        ui.checkBattleStartCondition();
        ui.updateLoadingProgress(totalChars, totalChars, "読み込み完了");
        await new Promise(resolve => setTimeout(resolve, 200));
        ui.showToastNotification('セッションを復元しました。', 2000);
        return true;
    } catch (error) {
        console.error("状態の復元に失敗しました:", error);
        alert(`状態の復元に失敗しました:\n${error.message}`);
        return false;
    } finally {
        isLoading = false;
        ui.hideLoadingProgress();
    }
}

/**
 * 【新ロジック】新しいデータ構造から初期状態のみを復元する
 */
export async function restoreInitialState() {
    const savedDataString = localStorage.getItem(STORAGE_KEY);
    if (!savedDataString) {
        console.warn("保存されたデータが見つかりません。");
        return;
    }
    try {
        const savedState = JSON.parse(savedDataString);
        
        charManager.clearCharacters();
        battleLogic.resetToSetupPhase();

        const savedCharacters = savedState.characters || [];

        for (const savedChar of savedCharacters) {
            const { initialState } = savedChar;
            
            let charObject;
            if (initialState.sourceType === 'sheet') {
                const sourceData = await fetchVampireBloodSheet(initialState.id);
                charObject = convertVampireBloodSheet(sourceData);
                charObject.sheetId = initialState.id;
            } else {
                charObject = JSON.parse(JSON.stringify(data.getUndeadTemplates()[initialState.id]));
                charObject.templateId = initialState.id;
            }
            
            const newChar = charManager.addCharacterFromObject(charObject, initialState.type);

            // initialState の情報のみを使って復元する
            charManager.updateCharacter(newChar.id, {
                area: initialState.area,
                stackCount: initialState.stackCount,
                img: initialState.img,
                regrets: initialState.regrets,
                displayName: initialState.displayName || newChar.originalName
            });
        }
    } catch (error) {
        console.error("初期状態への復元に失敗しました:", error);
    }
}

export function hasSavedState() {
    return localStorage.getItem(STORAGE_KEY) !== null;
}

export function clearSavedState() {
    localStorage.removeItem(STORAGE_KEY);
    ui.showToastNotification('保存データを削除しました。', 2000);
}

export function fetchVampireBloodSheet(sheetId) {
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