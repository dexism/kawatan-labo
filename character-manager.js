/**
 * @file character-manager.js
 * @description 戦場に参加しているキャラクターインスタンスの生成、管理、状態変更を担当するモジュール。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.9.16";

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

    newChar.originalName = characterObject.name || '名称未設定';
    newChar.displayName = characterObject.name || '名称未設定';
    Object.defineProperty(newChar, 'name', {
        get() { return this.displayName; },
        set(value) { this.displayName = value; }
    });

    // 1. テンプレート/オブジェクトから「たからもの」の名前を取得
    const treasureNameFromSource = characterObject.treasure || null;
    // 1. characterObjectからtreasures配列（名前のリスト）を取得
    newChar.treasures = characterObject.treasures || [];

    // 2. partsStatusを構築
    newChar.partsStatus = {};
    let partIdCounter = 0;
    if (newChar.parts && typeof newChar.parts === 'object') {
        Object.keys(newChar.parts).forEach(location => {
            if (Array.isArray(newChar.parts[location])) {
                newChar.partsStatus[location] = newChar.parts[location].map(partName => {
                    // isTreasureフラグはここでは不要。treasures配列に含まれるかで判断する
                    return {
                        id: `${newChar.id}_part_${partIdCounter++}`,
                        name: partName,
                        damaged: false,
                    };
                });
            }
        });
    }

    // 4. (フォールバック) もしparts内にたからものが見つからなかった場合も、
    //    treasures配列には名前を保持しておく（character-converter用）
    if (treasureNameFromSource && newChar.treasures.length === 0) {
         newChar.treasures.push(treasureNameFromSource);
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

/**
 * 【新設】表示名（愛称）の変更に伴い、全姉妹の未練表記を再同期・整理する
 * @param {object} updatedChar - 表示名が変更されたキャラクター
 * @param {string} oldName - 変更前の名前（originalNameまたはdisplayName）
 */
function resyncSisterRegrets(updatedChar, oldName) {
    const pcs = characters.filter(c => c.type === 'pc');
    if (pcs.length < 2) return;

    pcs.forEach(sourceDoll => {
        if (sourceDoll.id === updatedChar.id) return; // 自分自身は対象外

        // 1. 古い名前（oldName）への未練を探す
        const regretForOldName = sourceDoll.regrets.find(r => r.targetName === oldName);
        
        // 2. 新しい表示名（updatedChar.displayName）への未練が、保管所データ等で既に存在するか探す
        const preExistingRegretForNewName = sourceDoll.regrets.find(r => r.targetName === updatedChar.displayName);

        if (regretForOldName) {
            if (preExistingRegretForNewName) {
                // 3. 両方存在する場合：古い名前への未練（特に自動生成されたもの）を削除
                sourceDoll.regrets = sourceDoll.regrets.filter(r => r.id !== regretForOldName.id);
                console.log(`${sourceDoll.name}の未練から、古い名前「${oldName}」への未練を削除（重複のため）`);
            } else {
                // 4. 古い名前への未練のみ存在する場合：名前を新しい表示名に更新
                regretForOldName.name = `${updatedChar.displayName}への${regretForOldName.regretName}`;
                regretForOldName.targetName = updatedChar.displayName;
                console.log(`${sourceDoll.name}の未練を、新しい表示名「${updatedChar.displayName}」に更新しました。`);
            }
        }
    });
}

// ===================================================================================
//  エクスポートされる関数 (Public API)
// ===================================================================================

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
        
        // PCの場合、たからもの未練がなければ追加する（最低限の初期化）
        if (type === 'pc' && newChar.treasures && newChar.treasures.length > 0) {
            if (!newChar.regrets.some(r => r.isForTreasure)) {
                newChar.regrets.push({
                    id: `treasure_${newChar.id}`,
                    name: `たからものへの依存`, points: 3, isForTreasure: true,
                    targetName: 'たからもの', regretName: '依存'
                });
            }
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
    
    // PCで、かつ保管所データにたからもの未練がなかった場合のみ追加
    if (type === 'pc' && newChar.treasures && newChar.treasures.length > 0) {
        if (!newChar.regrets.some(r => r.isForTreasure)) {
            newChar.regrets.push({
                id: `treasure_${newChar.id}`,
                name: `たからものへの依存`, points: 3, isForTreasure: true,
                targetName: 'たからもの', regretName: '依存'
            });
        }
    }

    recalculateMaxActionValue(newChar);
    newChar.actionValue = newChar.maxActionValue;
    initializeManeuverLimits(newChar);
    characters.push(newChar);
    
    // ★★★ 姉妹への未練に関する処理は、ここでは一切行わない ★★★

    console.log(`${newChar.name} (imported ${type}) を戦場に追加しました。`);
    stateManager.autoSave();
    return newChar;
}

export function removeCharacter(id) {
    const char = getCharacterById(id);
    if (!char) return false; // ★ 変数名を char に統一

    let wasPcRemoved = false;
    if (char.type === 'pc') { // ★ 変数名を char に変更
        wasPcRemoved = true;
    }

    // ▼▼▼ ここからが今回の修正の中心 ▼▼▼
    // charToRemove を char に修正
    if (char && char.stackCount > 1) {
        char.stackCount--;
        stateManager.autoSave();
        return true;
    }
    // ▲▲▲ 修正ここまで ▲▲▲

    const index = characters.findIndex(c => c.id === id);
    if (index !== -1) {
        characters.splice(index, 1);

        if (wasPcRemoved) {
            const remainingPcs = characters.filter(c => c.type === 'pc');
            remainingPcs.forEach(pc => {
                // charToRemove を char に修正
                pc.regrets = pc.regrets.filter(r => !r.name.includes(char.name));
            });
            // charToRemove を char に修正
            console.log(`${char.name} への未練を他の姉妹から削除しました。`);
        }

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
        // ▼▼▼ ここからが今回の修正箇所 ▼▼▼

        // 1. 表示名が変更されるかどうかのフラグを立てる
        const isDisplayNameChanging = updates.displayName && updates.displayName !== char.displayName;
        const oldDisplayName = char.displayName;

        // 'name' への更新は 'displayName' への更新として扱う
        if (updates.name) {
            updates.displayName = updates.name;
            delete updates.name;
        }
        
        Object.assign(char, updates);
        
        // 2. 表示名が変更された場合、未練の再同期処理を呼び出す
        if (isDisplayNameChanging) {
            resyncSisterRegrets(char, oldDisplayName);
        }

        // ▲▲▲ 修正ここまで ▲▲▲

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
        // madnessPoints: char.madnessPoints, // madnessPointsはregretsに統合されたため不要
        isMentallyBroken: char.isMentallyBroken,
        hasActedThisCount: char.hasActedThisCount,

        // ▼▼▼ ここが今回の修正の中心 ▼▼▼
        // regrets は保管所のデータを正とするため、退避対象から除外する
        // regrets: char.regrets, // ★★★ この行を削除 ★★★
        // ▲▲▲ 修正ここまで ▲▲▲

        // 再読み込み時にリセットされる状態
        isDestroyed: false, 
        hasWithdrawn: false, 
    };

    const oldOriginalName = char.originalName;

    // 2. キャラクターオブジェクトを一旦リセットし、保管所の新しいデータ(newData)で上書き
    Object.keys(char).forEach(key => delete char[key]);
    Object.assign(char, newData); // ★ ここで newData.regrets が char に設定される

    // 3. 名前関連のプロパティを正しく設定
    char.originalName = char.name;
    if (preservedState.displayName === oldOriginalName || !preservedState.displayName) {
        preservedState.displayName = char.name;
    }

    // 4. 退避しておいたプロパティを書き戻す（regretsは上書きされない）
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

    // 5. 【重要】全ての姉妹の未練データを再検証する
    // これにより、読み込んだばかりの新しい未練データに正しいisCheckedフラグが設定される
    revalidateAllSisterRegrets();

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

/**
 * 【新設・最重要】戦場にいる全てのPCの未練データを、現在の姉妹構成に基づいて再評価・更新する
 * この関数が未練の isChecked プロパティを決定する唯一のソースとなる
 */
export function revalidateAllSisterRegrets() {
    const pcs = characters.filter(c => c.type === 'pc');
    if (pcs.length === 0) return;

    const allSisterNames = pcs.flatMap(p => [p.name, p.displayName]);

    pcs.forEach(char => {
        const otherSisters = pcs.filter(p => p.id !== char.id);
        const otherSisterNames = otherSisters.flatMap(s => [s.name, s.displayName]);
        const processedTargets = new Set();

        // 1. 既存の未練の isChecked を更新
        char.regrets.forEach(regret => {
            if (regret.isForTreasure) {
                regret.isChecked = true; // たからもの未練は常にチェック
            } else if (otherSisterNames.includes(regret.targetName)) {
                regret.isChecked = true; // 現在いる姉妹への未練はチェック
                processedTargets.add(regret.targetName);
            } else {
                regret.isChecked = false; // それ以外（保管所にしかいないキャラへの未練など）はチェックを外す
            }
        });

        // 2. 未練が存在しない姉妹に対して「未設定」の情報を追加（表示用）
        // ※これは表示の問題なので、ここでは行わない。menu-builder側で処理する。
    });
    console.log("全姉妹の未練データを再検証しました。");
}

// character-manager.js に、以下の新しいエクスポート関数を追加

/**
 * 【新設・最重要】指定されたPCの未練データを、現在の姉妹構成に基づいて補完・更新する
 * - isCheckedプロパティを決定する唯一のソース
 * - 不足している姉妹への未練を「（未設定）」として一時的に追加する
 * - ランダムな生成は一切行わない
 * @param {object} char - 更新対象のPCキャラクターオブジェクト
 */
export function updateAndComplementRegrets(char) {
    if (!char || char.type !== 'pc' || !char.regrets) return;

    const otherSisters = characters.filter(c => c.type === 'pc' && c.id !== char.id);
    const sisterNamesAndDisplayNames = otherSisters.flatMap(s => [s.name, s.displayName]);

    // 一時的な「（未設定）」の未練を一旦リセット
    char.regrets = char.regrets.filter(r => !r.isUnset);

    // 1. isCheckedプロパティを再評価
    char.regrets.forEach(regret => {
        if (regret.isForTreasure) {
            regret.isChecked = true;
        } else if (sisterNamesAndDisplayNames.includes(regret.targetName)) {
            regret.isChecked = true;
        } else {
            regret.isChecked = false; // それ以外（戦場にいないキャラへの未練など）は非表示
        }
    });

    // 2. 不足している姉妹への未練を「（未設定）」として追加
    otherSisters.forEach(sister => {
        const hasRegretForSister = char.regrets.some(r => 
            r.targetName === sister.name || r.targetName === sister.displayName
        );

        if (!hasRegretForSister) {
            char.regrets.push({
                name: `${sister.displayName}への未練（未設定）`,
                points: 3,
                isChecked: true, // 仕様通りチェック状態
                isUnset: true,   // 未設定フラグ
                targetName: sister.displayName,
                regretName: '未練（未設定）'
            });
        }
    });
}

/**
 * 【新設】指定されたキャラクターの、特定の姉妹に対する未練の内容を変更する
 * @param {string} sourceDollId - 未練の持ち主のID
 * @param {string} targetDollName - 未練の対象の姉妹の名前
 * @param {object} newRegretMaster - 新しい未練のマスターデータ (regret.jsonの1エントリ)
 */
export function changeSisterRegret(sourceDollId, targetDollName, newRegretMaster) {
    const sourceDoll = getCharacterById(sourceDollId);
    if (!sourceDoll) return;

    // 変更対象の未練を探す
    const regretToChange = sourceDoll.regrets.find(r => 
        r.targetName === targetDollName && !r.isForTreasure
    );

    if (regretToChange) {
        // 既存の未練が見つかった場合、内容を更新
        regretToChange.name = `${targetDollName}への${newRegretMaster.name}`;
        regretToChange.regretName = newRegretMaster.name;
        console.log(`${sourceDoll.name}の${targetDollName}への未練が「${newRegretMaster.name}」に変更されました。`);
    } else {
        // 「（未設定）」の状態から新しく設定する場合
        const newRegret = {
            id: `regret_${sourceDoll.id}_to_${targetDoll.id}_${Date.now()}`,
            name: `${targetDollName}への${newRegretMaster.name}`,
            points: 3,
            isForTreasure: false,
            isChecked: true,
            targetName: targetDollName,
            regretName: newRegretMaster.name
        };
        sourceDoll.regrets.push(newRegret);
        console.log(`${sourceDoll.name}の${targetDollName}への未練が「${newRegretMaster.name}」に設定されました。`);
    }

    // データが変更されたので、UI全体を更新するよう命令
    stateManager.autoSave();
}