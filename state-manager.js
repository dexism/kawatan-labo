/**
 * @file state-manager.js
 * @description アプリケーションのセッション状態の保存と復元を担当するモジュール
 */
export const version = "2.1.4"; // 大幅なロジック変更のためメジャーバージョンアップ

import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { convertVampireBloodSheet } from './character-converter.js';
import * as data from './data-handler.js';

const STORAGE_KEY = 'nechronica-battle-session-v2'; // ★キーを変更して旧データとの競合を回避
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

/**
 * 現在の状態をlocalStorageに保存する
 */
// state-manager.js
export function saveState() {
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

            // 戦闘準備中、または新規キャラクターの場合に初期状態を更新/作成
            if (isSetupPhase || existingIndex === -1) {
                const initialState = {
                    charId: char.id,
                    sourceType: char.sheetId ? 'sheet' : 'template',
                    id: char.sheetId || char.templateId,
                    type: char.type,
                    img: char.img,
                    area: char.area, // 初期配置エリアとして保存
                    stackCount: char.stackCount,
                    regrets: char.regrets.map(r => ({ name: r.name, points: r.points }))
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
                area: char.area, // 戦闘中の現在エリアを保存
                actionValue: char.actionValue,
                isDestroyed: char.isDestroyed || false,
                hasWithdrawn: char.hasWithdrawn || false,
                damagedPartNames: Object.values(char.partsStatus).flat()
                    .filter(p => p.damaged).map(p => p.name),
                usedManeuvers: Array.from(char.usedManeuvers)
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
    }
}

/**
 * localStorageからセッションを復元する
 */
export async function loadState(undeadTemplates) {
    const savedDataString = localStorage.getItem(STORAGE_KEY);
    if (!savedDataString) return false;

    isLoading = true;
    ui.showLoadingProgress('セッションデータを準備中...');

    try {
        const savedState = JSON.parse(savedDataString);
        
        charManager.clearCharacters();
        battleLogic.resetToSetupPhase();

        // ★★★ initialStates が配列になったことに伴うループ処理の変更 ★★★
        const totalChars = savedState.initialStates.length;
        let loadedCount = 0;

        for (const initialState of savedState.initialStates) {
            const charName = initialState.id;
            ui.updateLoadingProgress(loadedCount, totalChars, charName);
            
            let charObject;
            if (initialState.sourceType === 'sheet') {
                const sourceData = await fetchVampireBloodSheet(initialState.id);
                charObject = convertVampireBloodSheet(sourceData);
                charObject.sheetId = initialState.id;
            } else {
                const template = undeadTemplates[initialState.id];
                if (!template) throw new Error(`テンプレートID: ${initialState.id} が見つかりません`);
                charObject = JSON.parse(JSON.stringify(template));
                charObject.templateId = initialState.id;
            }

            // 初期状態のデータでキャラクターを生成
            const newChar = charManager.addCharacterFromObject(charObject, initialState.type);
            
            // 初期状態のカスタム値（配置など）を適用
            charManager.updateCharacter(newChar.id, {
                area: initialState.area,
                stackCount: initialState.stackCount,
                img: initialState.img,
                regrets: initialState.regrets
            });

            loadedCount++;
            ui.updateLoadingProgress(loadedCount, totalChars, newChar.name);
            if (initialState.sourceType === 'sheet') {
                await new Promise(resolve => setTimeout(resolve, 200));
            } else {
                await new Promise(resolve => setTimeout(resolve, 50));
            }
            // await new Promise(resolve => setTimeout(resolve, 50)); // 短い待機
        }

        if (savedState.turn > 0) {
            savedState.currentStates.forEach(currentState => {
                const charToUpdate = charManager.getCharacters().find(c => c.id === currentState.charId);
                if (charToUpdate) {
                    // currentStates の情報でキャラクターの状態を上書きする
                    charManager.updateCharacter(charToUpdate.id, {
                        area: currentState.area, // ★ 戦闘中の最新エリアを適用
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
            battleLogic.restoreBattleState(savedState.turn, charManager.getCharacters());
        } else {
            ui.renderCharacterCards();
            ui.updateBattleStatusUI();
        }
        ui.checkBattleStartCondition();

        ui.updateLoadingProgress(totalChars, totalChars, "読み込み完了");
        await new Promise(resolve => setTimeout(resolve, 500)); // 待機
        
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
        ui.hideLoadingProgress();
    }
}

/**
 * 「初期画面に戻る」ための関数
 */
export async function restoreInitialState() { // ★ async を追加
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

        // ★★★ for...of ループに変更し、await を使用 ★★★
        for (const initialState of initialStates) {
            let charObject;
            if (initialState.sourceType === 'sheet') {
                // 保管所からデータを再取得
                const sourceData = await fetchVampireBloodSheet(initialState.id);
                charObject = convertVampireBloodSheet(sourceData);
                charObject.sheetId = initialState.id;

            } else {
                // テンプレートからデータを取得
                charObject = JSON.parse(JSON.stringify(data.getUndeadTemplates()[initialState.id]));
                charObject.templateId = initialState.id;
            }
            
            // 取得したデータでキャラクターを再生成
            const newChar = charManager.addCharacterFromObject(charObject, initialState.type);

            // 保存されていた初期状態（配置、スタック数など）を適用
            charManager.updateCharacter(newChar.id, {
                area: initialState.area,
                stackCount: initialState.stackCount,
                img: initialState.img,
                regrets: initialState.regrets
            });
        }
        
    } catch (error) {
        console.error("初期状態への復元に失敗しました:", error);
        // エラーが発生してもUIは更新を試みる
    }
    
    // UI更新は呼び出し元で行うため、ここでは行わない
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