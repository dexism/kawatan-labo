/**
 * @file character-manager.js
 * @description 戦場に参加しているキャラクターインスタンスの生成、管理、状態変更を担当するモジュール。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.7.4";

// --- モジュールのインポート ---
import * as data from './data-handler.js';
import * as stateManager from './state-manager.js';
import { convertVampireBloodSheet } from './character-converter.js';
import * as battleLogic from './battle-logic.js';

// ===================================================================================
//  モジュール内 プライベート変数
// ===================================================================================

let undeadTemplates = {};
let characters = [];
let nextUniqueId = 1;

// ===================================================================================
//  内部ヘルパー関数
// ===================================================================================

export function recalculateMaxActionValue(character) {
    let bonus = 0;
    const allManeuverNames = [
        ...(character.skills || []),
        ...Object.values(character.partsStatus || {}).flat().map(p => p.name)
    ];

    allManeuverNames.forEach(name => {
        const maneuver = data.getManeuverByName(name);
        if (!maneuver || !maneuver.effects || maneuver.effects.length === 0) return;
        let partIsDamaged = false;
        if (character.partsStatus) {
        const partObject = Object.values(character.partsStatus).flat().find(p => p.name === name);
        if (partObject) partIsDamaged = partObject.damaged;
        }
        for (const effect of maneuver.effects) {
        if (effect.ref === 'APPLY_BUFF' && effect.params.stat === 'maxActionValue') {
            if (isNaN(partIsDamaged) || !partIsDamaged) bonus += effect.params.value || 0;
        } else if (effect.ref === 'MODIFY_MAX_ACTION_VALUE_ON_DAMAGE') {
            if (partIsDamaged) bonus += effect.params.value || 0;
        }
        }
    });
    character.maxActionValue = (character.baseActionValue || 6) + bonus;
}

function createCharacterInstance(templateId, type, initialArea) {
    const template = undeadTemplates[templateId];
    if (!template) {
        console.error(`テンプレートIDが見つかりません: ${templateId}`);
        return null;
    }
    const newChar = JSON.parse(JSON.stringify(template));
    newChar.templateId = templateId;
    return createCharacterInstanceFromObject(newChar, type, initialArea);
}

function createCharacterInstanceFromObject(characterObject, type, initialArea) {
    const newChar = JSON.parse(JSON.stringify(characterObject));
    newChar.id = `char_${nextUniqueId++}`;
    newChar.type = type;
    
    // 状態の初期化
    newChar.partsStatus = {};
    let partIdCounter = 0;
    if (newChar.parts && typeof newChar.parts === 'object') {
        Object.keys(newChar.parts).forEach(location => {
            if (Array.isArray(newChar.parts[location])) {
                newChar.partsStatus[location] = newChar.parts[location].map(partName => ({
                    id: `${newChar.id}_part_${partIdCounter++}`, name: partName, damaged: false,
                }));
            }
        });
    }
    if (type === 'pc' && newChar.treasure) {
        for (const location in newChar.partsStatus) {
            const part = newChar.partsStatus[location].find(p => p.name === newChar.treasure);
            if (part) {
                part.id = `${newChar.id}_part_treasure`;
                break;
            }
        }
    }
    newChar.madnessPoints = {};
    newChar.statusEffects = [];
    newChar.activeBuffs = [];
    newChar.isMentallyBroken = false;
    newChar.isDestroyed = false;
    newChar.hasWithdrawn = false;
    newChar.regrets = characterObject.regrets || [];
    newChar.stackCount = characterObject.stackCount || 1;
    newChar.hasActedThisCount = false;
    
    return newChar;
}

function mergeCharactersOnBoard() {
    const charactersToMerge = characters.filter(c => c.skills && c.skills.includes('合流'));
    if (charactersToMerge.length < 2) return;
    const groups = new Map();
    charactersToMerge.forEach(char => {
        const key = `${char.position}-${char.area}`;
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(char);
    });
    let merged = false;
    groups.forEach(group => {
        if (group.length < 2) return;
        const representative = group[0];
        for (let i = 1; i < group.length; i++) {
            const charToMerge = group[i];
            representative.stackCount += charToMerge.stackCount;
            const indexToRemove = characters.findIndex(c => c.id === charToMerge.id);
            if (indexToRemove !== -1) {
                characters.splice(indexToRemove, 1);
            }
        }
        merged = true;
    });
    if (merged) {
        console.log("キャラクターが合流しました。");
    }
}

export function initializeManeuverLimits(character) {
    character.usedManeuvers = new Set();
    character.turnLimitedManeuvers = new Set();
    const allManeuverNames = [
        ...(character.skills || []),
        ...Object.values(character.partsStatus || {}).flat().map(p => p.name)
    ];
    allManeuverNames.forEach(name => {
        const maneuver = data.getManeuverByName(name);
        if (!maneuver) return;
        let hasTurnLimit = false;
        if (maneuver.hasOwnProperty('usageLimit')) {
            hasTurnLimit = maneuver.usageLimit;
        } else {
            const limitedTimings = ['ジャッジ', 'ダメージ', 'ラピッド'];
            if (limitedTimings.includes(maneuver.timing)) {
                hasTurnLimit = true;
            }
        }
        if (hasTurnLimit) {
            character.turnLimitedManeuvers.add(name);
        }
    });
}

function initializeRegretsForPC(character) {
    character.regrets = [];
    const otherPCs = characters.filter(c => c.type === 'pc' && c.id !== character.id);
    const treasureName = character.treasure || 'たからもの';
    character.regrets.push({
      id: `treasure_${character.id}`,
      name: `${treasureName}への依存`,
      points: 3,
      category: 'たからもの'
    });
    const allRegretData = data.getRegretData();
    const sisterRegretIds = Object.keys(allRegretData).filter(id => id.startsWith('SI-'));
    otherPCs.forEach(pc => {
        if (sisterRegretIds.length > 0) {
            const randomRegretId1 = sisterRegretIds[Math.floor(Math.random() * sisterRegretIds.length)];
            character.regrets.push({
                id: `regret_${character.id}_to_${pc.id}`,
                name: `${pc.name}への${allRegretData[randomRegretId1].name}`,
                points: 3,
                categoryKey: 'SI'
            });
            const randomRegretId2 = sisterRegretIds[Math.floor(Math.random() * sisterRegretIds.length)];
            pc.regrets.push({
                id: `regret_${pc.id}_to_${character.id}`,
                name: `${character.name}への${allRegretData[randomRegretId2].name}`,
                points: 3,
                categoryKey: 'SI'
            });
        }
    });
}

// ===================================================================================
//  エクスポートされる関数 (Public API)
// ===================================================================================

export function initialize(templates) {
    undeadTemplates = templates;
    console.log("Character Manager initialized.");
}

export function getCharacters(forSetup = false) {
    return characters;
}

export function getCharacterById(id) {
    return characters.find(c => c.id === id);
}

export function addCharacterFromTemplate(templateId, type, initialArea) {
    const newChar = createCharacterInstance(templateId, type, initialArea);
    if (!newChar) return null;

    newChar.area = initialArea || newChar.initialArea || ((type === 'pc') ? '煉獄' : '奈落');

    if (type === 'pc') {
        initializeRegretsForPC(newChar);
    }

    recalculateMaxActionValue(newChar);
    newChar.actionValue = newChar.maxActionValue;
    initializeManeuverLimits(newChar);

    characters.push(newChar);
    
    console.log(`${newChar.name} (${type}) を戦場に追加しました。`);
    mergeCharactersOnBoard();
    stateManager.autoSave();
    return newChar;
}

export function addCharacterFromObject(characterObject, type) {
    const newChar = createCharacterInstanceFromObject(characterObject, type);
    
    newChar.area = characterObject.area || characterObject.initialArea || ((type === 'pc') ? '煉獄' : '奈落');

    if (type === 'pc' && (!newChar.regrets || newChar.regrets.length === 0)) {
        initializeRegretsForPC(newChar);
    }
    
    recalculateMaxActionValue(newChar);
    newChar.actionValue = newChar.maxActionValue;
    initializeManeuverLimits(newChar);

    characters.push(newChar);

    console.log(`${newChar.name} (imported ${type}) を戦場に追加しました。`);
    mergeCharactersOnBoard();
    stateManager.autoSave();
    return newChar;
}

export function removeCharacter(id) {
    const char = getCharacterById(id);
    if (char && char.stackCount > 1) {
        char.stackCount--;
        stateManager.autoSave();
        return true;
    }
    const index = characters.findIndex(c => c.id === id);
    if (index !== -1) {
        characters.splice(index, 1);
        stateManager.autoSave();
        return true;
    }
    return false;
}

export function moveCharacter(id, direction) {
    const index = characters.findIndex(c => c.id === id);
    if (index === -1) return;
    const char = characters[index];
    const sameTypeChars = characters.filter(c => c.type === char.type);
    const relativeIndex = sameTypeChars.findIndex(c => c.id === id);
    let newRelativeIndex;
    if (direction === 'left') {
        if (relativeIndex === 0) return;
        newRelativeIndex = relativeIndex - 1;
    } else {
        if (relativeIndex === sameTypeChars.length - 1) return;
        newRelativeIndex = relativeIndex + 1;
    }
    characters.splice(index, 1);
    const targetCharId = sameTypeChars[newRelativeIndex].id;
    const targetIndex = characters.findIndex(c => c.id === targetCharId);
    if (direction === 'left') {
      characters.splice(targetIndex, 0, char);
    } else {
      characters.splice(targetIndex + 1, 0, char);
    }
}

export function updateCharacter(id, updates) {
    const char = getCharacterById(id);
    if (char) {
        Object.assign(char, updates);
        if (char.isDestroyed || char.hasWithdrawn) {
            char.actionValue = 0;
            if (char.isDestroyed && char.partsStatus) {
                Object.values(char.partsStatus).flat().forEach(part => part.damaged = true);
            }
        }
        recalculateMaxActionValue(char);
        mergeCharactersOnBoard();
    } else {
        console.warn(`更新対象のキャラクターが見つかりません: ${id}`);
    }
}

export function damagePart(characterId, partId, damageAmount = 1) {
    const character = getCharacterById(characterId);
    if (!character) return;
    if (character.category === 'レギオン') {
        character.stackCount -= damageAmount;
        if (character.stackCount <= 0) {
            character.isDestroyed = true;
            character.actionValue = 0;
            return true;
        }
        return false;
    }
    for (const location in character.partsStatus) {
        const part = character.partsStatus[location].find(p => p.id === partId);
        if (part) {
            if (part.damaged) return;
            part.damaged = true;
            recalculateMaxActionValue(character);
            return false;
        }
    }
}

export function addMadnessPoint(characterId, regretId) {
    const character = getCharacterById(characterId);
    if (!character) return;
    const regret = character.regrets.find(r => r.id === regretId);
    if (regret) {
        if (regret.points < 4) {
            regret.points++;
        }
    }
    const hasRegrets = character.regrets && character.regrets.length > 0;
    const allRegretsMaxedOut = hasRegrets && character.regrets.every(r => r.points >= 4);
    if (allRegretsMaxedOut) {
        character.isMentallyBroken = true;
        console.log(`★★★ ${character.name} は精神崩壊しました。 ★★★`);
    }
}

export function startNewTurn() {
    characters.forEach(char => {
        if (char.isDestroyed || char.hasWithdrawn) {
            char.actionValue = 0;
            return;
        }
        char.actionValue += char.maxActionValue;
        char.hasActedThisCount = false;
        char.usedManeuvers.clear();
    });
    mergeCharactersOnBoard();
    console.log("新しいターンが開始され、全キャラクターの行動値が更新されました。");
}

export function applyQueuedMoves(moveQueue) {
    moveQueue.forEach(move => {
        const char = getCharacterById(move.characterId);
        if (char) {
            char.area = move.targetArea;
        }
    });
    console.log("予約された移動を一括で適用しました。");
}

export function updateCharacterFromReload(characterId, newData) {
    const char = getCharacterById(characterId);
    if (!char) return null;
    const preservedState = {
        id: char.id,
        sheetId: char.sheetId,
        img: char.img,
        type: char.type,
        actionValue: char.actionValue,
        regrets: char.regrets,
        madnessPoints: char.madnessPoints,
        isMentallyBroken: char.isMentallyBroken,
        isDestroyed: false,
        hasWithdrawn: false,
        hasActedThisCount: char.hasActedThisCount
    };
    Object.keys(char).forEach(key => delete char[key]);
    Object.assign(char, newData);
    char.area = char.initialArea || ((char.type === 'pc') ? '煉獄' : '奈落');
    Object.assign(char, preservedState);
    char.partsStatus = {};
    let partIdCounter = 0;
    if (char.parts && typeof char.parts === 'object') {
        Object.keys(char.parts).forEach(location => {
            if (Array.isArray(char.parts[location])) {
                char.partsStatus[location] = char.parts[location].map(partName => ({
                    id: `${char.id}_part_${partIdCounter++}`, name: partName, damaged: false,
                }));
            }
        });
    }
    if (char.type === 'pc' && char.treasure) {
        for (const location in char.partsStatus) {
            const part = char.partsStatus[location].find(p => p.name === char.treasure);
            if (part) {
                part.id = `${char.id}_part_treasure`;
                break;
            }
        }
    }
    recalculateMaxActionValue(char);
    char.actionValue = Math.min(char.actionValue, char.maxActionValue);
    initializeManeuverLimits(char);
    console.log(`キャラクター「${char.name}」が保管所のデータで更新されました。`);
    return char;
}

export function clearCharacters() {
    characters = [];
    nextUniqueId = 1;
    console.log("All characters cleared.");
}