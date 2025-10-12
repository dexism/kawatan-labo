/**
 * @file state-manager.js
 * @description アプリケーションのセッション状態の保存と復元を担当するモジュール
 */
export const version = "2.2.15"; // ロード処理の完全な修正版

import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { convertVampireBloodSheet } from './character-converter.js';
import * as data from './data-handler.js';
import { checkAppVersion } from './script.js';


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
    saveState();
}

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
        const initialStatesMap = new Map(initialStates.map(is => [is.charId, is]));

        characters.forEach(char => {
            let initialState = initialStatesMap.get(char.id) || {
                charId: char.id,
                sourceType: char.sheetId ? 'sheet' : 'template',
                id: char.sheetId || char.templateId,
                type: char.type
            };
            
            // initialStatesには、戦闘中に変化しない基本情報のみを保存する
            initialState.displayName = char.displayName;
            initialState.img = char.img;
            initialState.regrets = char.regrets.map(r => ({ name: r.name, points: r.points }));
            
            // 戦闘準備中のみ、初期配置として area と stackCount を保存
            if (isSetupPhase) {
                initialState.area = char.area;
                initialState.stackCount = char.stackCount;
            }
            
            initialStatesMap.set(char.id, initialState);
        });
        
        const currentCharIds = new Set(characters.map(c => c.id));
        const finalInitialStates = Array.from(initialStatesMap.values()).filter(is => currentCharIds.has(is.charId));

        const stateToSave = {
            turn: isSetupPhase ? 0 : battleState.turn,
            initialStates: finalInitialStates,
            currentStates: characters.map(char => ({
                charId: char.id,
                // ★★★ ここからが修正箇所です (1/2) ★★★
                // 戦闘中に変動する可能性のある情報は currentStates に保存する
                area: char.area,
                stackCount: char.stackCount,
                // ★★★ 修正はここまでです (1/2) ★★★
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
            ui.showToastNotification('ローカルストレージに保存しました', 2000);
        } else if (isAutoSaveEnabled) {
            console.log("Session auto-saved.");
        }

        checkAppVersion();

    } catch (error) {
        console.error("状態の保存に失敗しました:", error);
    }
}

export async function loadStateFromFile(jsonString) {
    if (!jsonString) {
        ui.showToastNotification('ファイルが空か、読み込みに失敗しました。', 2000);
        return false; 
    }
    try {
        const parsedState = JSON.parse(jsonString);
        if (
            (parsedState.initialStates && parsedState.currentStates) ||
            (parsedState.characters && Array.isArray(parsedState.characters))
           ) 
        {
            return await executeLoad(parsedState);
        } else {
            ui.showToastNotification('セッションデータ形式ではありません。', 2000);
            return false;
        }
    } catch (error) {
        console.error("ファイルからの状態復元に失敗しました:", error);
        alert(`ファイルの解析に失敗しました。有効なJSONファイルではありません。\n${error.message}`);
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

async function executeLoad(stateObject, undeadTemplates) {
    const templates = undeadTemplates || data.getUndeadTemplates();
    
    isLoading = true;
    ui.showLoadingProgress('セッションデータを準備中...');

    try {
        let initialStates;
        let currentStates;

        if (stateObject.initialStates) {
            initialStates = stateObject.initialStates;
            currentStates = stateObject.currentStates;
        } else if (stateObject.characters) {
            initialStates = stateObject.characters.map((c, index) => ({
                charId: `char_file_${index}`,
                sourceType: c.sourceType, id: c.id, type: c.type,
                img: c.img, area: c.area, stackCount: c.stackCount,
                regrets: c.regrets, displayName: c.displayName
            }));
            // ファイル形式の場合、currentStatesも同じものを使う
            currentStates = stateObject.characters.map((c, index) => ({
                ...c,
                charId: `char_file_${index}`
            }));
        }

        const turn = stateObject.turn || 0;

        if (!initialStates) {
            throw new Error("セーブデータ形式が不正です (initialStates または characters が見つかりません)");
        }

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

            loadedCount++;
            ui.updateLoadingProgress(loadedCount, totalChars, newChar.name);
            
            if (initialState.sourceType === 'sheet') {
                await new Promise(resolve => setTimeout(resolve, 200));
            } else {
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        }

        // --- ステップA: 全てのキャラクターに initialStates から基本情報を適用 ---
        initialStates.forEach(initialState => {
            const newCharId = idMap.get(initialState.charId);
            const charToUpdate = charManager.getCharacterById(newCharId);
            if (charToUpdate) {
                charManager.updateCharacter(newCharId, {
                    displayName: initialState.displayName || charToUpdate.originalName,
                    img: initialState.img,
                    regrets: initialState.regrets,
                    // 戦闘準備中の area と stackCount は initialStates から取得
                    area: initialState.area,
                    stackCount: initialState.stackCount
                });
            }
        });

        // --- ステップB: 戦闘中であれば、currentStates から戦闘情報を上書き適用 ---
        if (turn > 0) {
            currentStates.forEach(currentState => {
                const originalCharId = currentState.charId;
                const newCharId = idMap.get(originalCharId);
                const charToUpdate = charManager.getCharacterById(newCharId);
                
                if (charToUpdate) {
                    charManager.updateCharacter(charToUpdate.id, {
                        // area と stackCount は currentStates の方が新しいので上書き
                        area: currentState.area,
                        stackCount: currentState.stackCount,
                        // (displayName, img, regrets は initialStates のものを維持)
                        actionValue: currentState.actionValue,
                        isDestroyed: currentState.isDestroyed,
                        hasWithdrawn: currentState.hasWithdrawn,
                        usedManeuvers: new Set(currentState.usedManeuvers)
                    });
                    const damagedNames = new Set(currentState.damagedPartNames);
                    Object.values(charToUpdate.partsStatus).flat().forEach(part => {
                        part.damaged = damagedNames.has(part.name);
                    });
                    charManager.recalculateMaxActionValue(charToUpdate);
                }
            });
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