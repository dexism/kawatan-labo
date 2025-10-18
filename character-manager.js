/**
 * @file character-manager.js
 * @description 戦場に参加しているキャラクターインスタンスの生成、管理、状態変更を担当するモジュール。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.8.15";

// --- モジュールのインポート ---
import * as data from './data-handler.js';
import * as stateManager from './state-manager.js';
// import { convertVampireBloodSheet } from './character-converter.js';
// import * as battleLogic from './battle-logic.js';

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

    // 1. 本来の名前を originalName として保存
    newChar.originalName = characterObject.name || '名称未設定';
    // 2. 表示名を displayName として設定（デフォルトは本来の名前）
    newChar.displayName = characterObject.name || '名称未設定';
    // 3. 互換性のために従来の name プロパティも displayName を指すようにする
    Object.defineProperty(newChar, 'name', {
        get() { return this.displayName; },
        set(value) { this.displayName = value; }
    });

    newChar.treasures = characterObject.treasures || [];

    // ▼▼▼ 変更箇所 (たからものをpartsStatusに追加する処理) ▼▼▼
    // 既存パーツの処理
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

    newChar.madnessPoints = {};
    newChar.statusEffects = [];
    newChar.activeBuffs = [];
    newChar.isMentallyBroken = false;
    newChar.isDestroyed = false;
    newChar.hasWithdrawn = false;
    newChar.regrets = characterObject.regrets || [];
    newChar.stackCount = characterObject.stackCount || 1;
    newChar.hasActedThisCount = false;
    newChar.spineBonus = 0;
    newChar.lastUsedSpineCount = -1;
    // newChar.treasures = characterObject.treasures || [];
    
    return newChar;
}

/**
 * 【新設】キャラクターが同じエリアにいる同名レギオンと合流する
 * この関数は外部から直接呼び出されることは想定せず、内部でのみ使用する
 */
function mergeCharactersOnBoard() {
    const charactersToMerge = characters.filter(c => c.skills && c.skills.includes('合流'));
    if (charactersToMerge.length < 2) return;

    const groups = new Map();
    // 同じ名前、同じエリア、同じタイプ(PC/Enemy)でグループ化する
    charactersToMerge.forEach(char => {
        const key = `${char.name}-${char.area}-${char.type}`;
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(char);
    });

    let merged = false;
    groups.forEach(group => {
        if (group.length < 2) return;

        // グループの最初のキャラクターを代表として残す
        const representative = group[0];
        
        // 2体目以降のキャラクターを代表に合算し、盤面から削除する
        for (let i = 1; i < group.length; i++) {
            const charToMerge = group[i];
            representative.stackCount += charToMerge.stackCount;
            
            // characters 配列から直接削除する
            const indexToRemove = characters.findIndex(c => c.id === charToMerge.id);
            if (indexToRemove !== -1) {
                characters.splice(indexToRemove, 1);
            }
        }
        merged = true;
    });

    if (merged) {
        console.log("レギオンが合流しました。");
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
        
        // 1. まず、マニューバの effect に "limit_per_turn": "none" が含まれているかチェック
        const hasNoLimitEffect = maneuver.effects?.some(effect => 
            effect.params && effect.params.limit_per_turn === 'none'
        );

        if (hasNoLimitEffect) {
            // "limit_per_turn": "none" があれば、ターン制限はない
            hasTurnLimit = false;
        } else {
            // 2. 上記で見つからない場合、従来のタイミングに基づくルールを適用
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
    if (character.treasures && character.treasures.length > 0) {
        const treasureName = character.treasures[0]; // 最初のたからものを代表とする
        character.regrets.push({
          id: `treasure_${character.id}`,
          name: `${treasureName}への依存`,
          points: 3,
          category: 'たからもの'
        });
    }
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
    const template = undeadTemplates[templateId];
    if (!template) {
        console.error(`テンプレートIDが見つかりません: ${templateId}`);
        return; // ★ 失敗した場合はここで終了
    }

    const count = (template.category === 'レギオン') ? 5 : 1;
    let lastName = '';

    for (let i = 0; i < count; i++) {
        const newChar = createCharacterInstance(templateId, type, initialArea);
        if (!newChar) continue;

        newChar.area = initialArea || newChar.initialArea || ((type === 'pc') ? '煉獄' : '奈落');
        if (type === 'pc') {
            initializeRegretsForPC(newChar);
        }
        recalculateMaxActionValue(newChar);
        newChar.actionValue = newChar.maxActionValue;
        initializeManeuverLimits(newChar);
        characters.push(newChar);
        lastName = newChar.name;
    }

    if (lastName) {
        console.log(`${lastName} (${type}) を${count > 1 ? count + '体' : ''}戦場に追加しました。`);
    }

    // ループ完了後に合流処理を一度だけ呼び出す
    mergeCharactersOnBoard();
    
    // 自動保存の命令のみ行い、UI更新の命令は削除
    stateManager.autoSave();

    // ★★★ 以下のUI更新命令をすべて削除 ★★★
    // ui.renderCharacterCards();
    // ui.checkBattleStartCondition();
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
    // mergeCharactersOnBoard(); // ★★★ この行を削除 ★★★
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
        // 'name' への更新は 'displayName' への更新として扱う
        if (updates.name) {
            updates.displayName = updates.name;
            delete updates.name;
        }
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
        char.spineBonus = 0;
        char.lastUsedSpineCount = -1;
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

    // 1. ユーザーが編集可能なプロパティと、戦闘中の状態を退避
    const preservedState = {
        id: char.id,
        sheetId: char.sheetId,
        type: char.type,
        
        // ユーザーが編集する可能性のあるプロパティ
        displayName: char.displayName, 
        img: char.img,
        area: char.area,

        // 戦闘中の状態
        actionValue: char.actionValue,
        regrets: char.regrets,
        madnessPoints: char.madnessPoints,
        isMentallyBroken: char.isMentallyBroken,
        hasActedThisCount: char.hasActedThisCount,

        // 再読み込み時にリセットされる状態
        isDestroyed: false, 
        hasWithdrawn: false, 
    };

    // 退避前の originalName を保持しておく
    const oldOriginalName = char.originalName;

    // 2. キャラクターオブジェクトを一旦リセットし、保管所の新しいデータで上書き
    Object.keys(char).forEach(key => delete char[key]);
    Object.assign(char, newData);

    // 3. 名前関連のプロパティを正しく設定
    char.originalName = char.name; // 新しい name を originalName にコピー

    // ユーザーが表示名を編集していなかった場合のみ、displayName も更新する
    if (preservedState.displayName === oldOriginalName || !preservedState.displayName) {
        preservedState.displayName = char.name;
    }

    // 4. 退避しておいたプロパティを書き戻す
    Object.assign(char, preservedState);

    // 5. 新しいパーツリストに基づいて、パーツ状態や行動値などを再初期化
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
    // 行動値が最大値を超えないように調整
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

/**
 * 指定されたキャラクターにバフを追加する
 * @param {string} characterId - 対象キャラクターのID
 * @param {object} buff - 追加するバフオブジェクト
 */
export function addBuff(characterId, buff) {
    const character = getCharacterById(characterId);
    if (character) {
        if (!character.activeBuffs) {
            character.activeBuffs = [];
        }
        character.activeBuffs.push(buff);
    }
}

/**
 * 指定されたキャラクターから特定の期間を持つバフを削除する
 * @param {string} characterId - 対象キャラクターのID
 * @param {string} durationType - 削除するバフの期間 (例: 'until_damage_applied')
 */
export function clearTemporaryBuffs(characterId, durationType) {
    const character = getCharacterById(characterId);
    if (character && character.activeBuffs) {
        character.activeBuffs = character.activeBuffs.filter(buff => buff.duration !== durationType);
    }
}