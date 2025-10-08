/**
 * @file state-manager.js
 * @description アプリケーションのセッション状態の保存と復元を担当するモジュール
 */
export const version = "2.1.12"; // ファイルロード機能の実装とリファクタリング

import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { convertVampireBloodSheet } from './character-converter.js';
import * as data from './data-handler.js';

const STORAGE_KEY = 'nechronica-battle-session-v2';
const AUTOSAVE_KEY = 'nechronica-autosave-enabled';

let isAutoSaveEnabled = false;
let isLoading = false;

export function initialize() {
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
    // ★ 手動保存ではないので、引数なしで呼び出す
    saveState();
}

/**
 * 現在の状態をlocalStorageに保存する
 * @param {boolean} [isManualSave=false] - 手動保存ボタンからの呼び出しかどうかを示すフラグ
 */
export function saveState(isManualSave = false) {
    try {
        const battleState = battleLogic.getBattleState();
        const characters = charManager.getCharacters();
        let existingState = {};
        try {
            existingState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        } catch (e) {
            existingState = {};
        }

        const isSetupPhase = !battleState.isStarted;
        
        let initialStates = Array.isArray(existingState.initialStates) ? [...existingState.initialStates] : [];

        characters.forEach(char => {
            const existingIndex = initialStates.findIndex(is => is.charId === char.id);

            if (isSetupPhase || existingIndex === -1) {
                const initialState = {
                    charId: char.id,
                    sourceType: char.sheetId ? 'sheet' : 'template',
                    id: char.sheetId || char.templateId,
                    type: char.type,
                    img: char.img,
                    area: char.area,
                    stackCount: char.stackCount,
                    regrets: char.regrets.map(r => ({ name: r.name, points: r.points })),
                    displayName: char.displayName
                };
                if (existingIndex === -1) {
                    initialStates.push(initialState);
                } else {
                    initialStates[existingIndex] = initialState;
                }
            }
        });
        
        const currentCharIds = new Set(characters.map(c => c.id));
        initialStates = initialStates.filter(is => currentCharIds.has(is.charId));

        const stateToSave = {
            turn: isSetupPhase ? 0 : battleState.turn,
            initialStates: initialStates,
            currentStates: characters.map(char => ({
                charId: char.id,
                area: char.area,
                stackCount: char.stackCount,
                displayName: char.displayName,
                actionValue: char.actionValue,
                actionValue: char.actionValue,
                isDestroyed: char.isDestroyed || false,
                hasWithdrawn: char.hasWithdrawn || false,
                damagedPartNames: Object.values(char.partsStatus).flat()
                    .filter(p => p.damaged).map(p => p.name),
                usedManeuvers: Array.from(char.usedManeuvers)
            }))
        };
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));

        if (isManualSave) {
            ui.showToastNotification('現在の状態を保存しました', 2000);
        } else if (isAutoSaveEnabled) {
            console.log("Session auto-saved.");
        }

    } catch (error) {
        console.error("状態の保存に失敗しました:", error);
    }
}

/**
 * 【新設】ファイルから読み込んだJSON文字列を元に状態を復元する
 * @param {string} jsonString - ファイルから読み込んだJSON文字列
 */
export async function loadStateFromFile(jsonString) {
    if (!jsonString) {
        ui.showToastNotification('ファイルが空か、読み込みに失敗しました。', 2000);
        return;
    }
    try {
        const parsedState = JSON.parse(jsonString);
        
        if (
            (parsedState.initialStates && parsedState.currentStates) || // v2形式
            (parsedState.characters && Array.isArray(parsedState.characters)) // ファイル形式
           ) 
        {
             await executeLoad(parsedState);
        } else {
            ui.showToastNotification('セッションデータ形式ではありません。', 2000);
        }
    } catch (error) {
        console.error("ファイルからの状態復元に失敗しました:", error);
        alert(`ファイルの解析に失敗しました。有効なJSONファイルではありません。\n${error.message}`);
    }
}

/**
 * 【修正】localStorageからセッションを復元する
 */
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
 * 【修正版】状態を復元する共通の実行関数
 * @param {object} stateObject - 復元する状態オブジェクト
 * @param {object} [undeadTemplates] - undead.json のマスターデータ
 */
async function executeLoad(stateObject, undeadTemplates) {
    const templates = undeadTemplates || data.getUndeadTemplates();
    
    isLoading = true;
    ui.showLoadingProgress('セッションデータを準備中...');

    try {
        const initialStates = stateObject.initialStates || (stateObject.characters || []).map((c, index) => ({
            charId: `char_file_${index}`,
            sourceType: c.sourceType,
            id: c.id,
            type: c.type,
            img: c.img,
            area: c.area,
            stackCount: c.stackCount,
            regrets: c.regrets,
            displayName: c.displayName
        }));

        const currentStates = stateObject.currentStates || stateObject.characters;
        const turn = stateObject.turn || 0;

        charManager.clearCharacters();
        battleLogic.resetToSetupPhase();

        const totalChars = initialStates.length;
        let loadedCount = 0;
        const idMap = new Map();

        for (const initialState of initialStates) {
            const charNameForProgress = initialState.id;
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
            idMap.set(initialState.charId, newChar.id);
            
            // ★★★ 修正箇所 ★★★
            // ここでは initialState の情報のみを適用する
            charManager.updateCharacter(newChar.id, {
                displayName: initialState.displayName || newChar.originalName
                // area や stackCount は、後の currentStates で上書きされるので、ここでは適用しない
            });

            loadedCount++;
            ui.updateLoadingProgress(loadedCount, totalChars, newChar.name);
            
            if (initialState.sourceType === 'sheet') {
                await new Promise(resolve => setTimeout(resolve, 200));
            } else {
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        }

        if (turn > 0) {
            currentStates.forEach(currentState => {
                const originalCharId = currentState.charId || initialStates[currentStates.indexOf(currentState)].charId;
                const newCharId = idMap.get(originalCharId);
                const charToUpdate = charManager.getCharacterById(newCharId);
                
                if (charToUpdate) {
                    // ★★★ 修正箇所 ★★★
                    // currentState の全ての情報をここで適用する
                    charManager.updateCharacter(charToUpdate.id, {
                        area: currentState.area,
                        stackCount: currentState.stackCount,
                        displayName: currentState.displayName || charToUpdate.originalName,
                        actionValue: currentState.actionValue,
                        isDestroyed: currentState.isDestroyed,
                        hasWithdrawn: currentState.hasWithdrawn,
                        usedManeuvers: new Set(currentState.usedManeuvers)
                    });
                    const damagedNames = new Set(currentState.damagedPartNames);
                    Object.values(charToUpdate.partsStatus).flat().forEach(part => {
                        if (damagedNames.has(part.name)) {
                            part.damaged = true;
                        }
                    });
                    charManager.recalculateMaxActionValue(charToUpdate);
                }
            });
            battleLogic.restoreBattleState(turn, charManager.getCharacters());
        } else {
            // 戦闘準備中の場合は initialStates の情報を適用
            initialStates.forEach(initialState => {
                const newCharId = idMap.get(initialState.charId);
                if(newCharId) {
                    charManager.updateCharacter(newCharId, {
                        area: initialState.area,
                        stackCount: initialState.stackCount,
                        img: initialState.img,
                        regrets: initialState.regrets,
                    });
                }
            });
            ui.renderCharacterCards();
            ui.updateBattleStatusUI();
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

        const initialStates = savedState.initialStates || [];

        for (const initialState of initialStates) {
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

            charManager.updateCharacter(newChar.id, {
                area: initialState.area,
                stackCount: initialState.stackCount,
                img: initialState.img,
                regrets: initialState.regrets
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

export function saveStateToFile() {
    try {
        const battleState = battleLogic.getBattleState();
        const characters = charManager.getCharacters();

        const stateToSave = {
            savedAt: new Date().toISOString(),
            turn: battleState.isStarted ? battleState.turn : 0,
            characters: characters.map((char) => ({
                sourceType: char.sheetId ? 'sheet' : 'template',
                id: char.sheetId || char.templateId,
                displayName: char.displayName,
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
        
        const jsonString = JSON.stringify(stateToSave, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const date = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        const timestampJST = `${year}${month}${date}-${hours}${minutes}`;
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