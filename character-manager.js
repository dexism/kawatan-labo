/**
 * @file character-manager.js
 * @description 戦場に参加しているキャラクターインスタンスの生成、管理、状態変更を担当するモジュール。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.5.20";

// --- モジュールのインポート ---
import * as data from './data-handler.js';

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

  // 参照するマニューバ名のリストを作成
  const allManeuverNames = [
    ...(character.skills || []),
    ...Object.values(character.partsStatus || {}).flat().map(p => p.name)
  ];

  // キャラクターが持つ全てのスキルとパーツをチェック
  allManeuverNames.forEach(name => {
    const maneuver = data.getManeuverByName(name);
    if (!maneuver || !maneuver.effects || maneuver.effects.length === 0) {
      return; // マニューバデータまたは効果定義がなければスキップ
    }

    // パーツの状態を取得（スキルには存在しない）
    let partIsDamaged = false;
    if (character.partsStatus) {
      const partObject = Object.values(character.partsStatus).flat().find(p => p.name === name);
      if (partObject) {
        partIsDamaged = partObject.damaged;
      }
    }

    // マニューバが持つ効果を一つずつチェック
    for (const effect of maneuver.effects) {
      // ケース1: 通常の最大行動値バフ (APPLY_BUFF)
      if (effect.ref === 'APPLY_BUFF' && effect.params.stat === 'maxActionValue') {
        // ★ isNaN(partIsDamaged) でスキルかどうかを判定
        if (isNaN(partIsDamaged) || !partIsDamaged) {
          bonus += effect.params.value || 0;
        }
      }
      // ケース2: 損傷時に発動する最大行動値バフ (リミッター用)
      else if (effect.ref === 'MODIFY_MAX_ACTION_VALUE_ON_DAMAGE') {
        // この効果を持つパーツが損傷している場合のみボーナスを加算
        if (partIsDamaged) {
           bonus += effect.params.value || 0;
        }
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

    newChar.id = `char_${nextUniqueId++}`;
    newChar.type = type;
    newChar.area = initialArea || template.initialArea || ((type === 'pc') ? '煉獄' : '奈落');
    
    newChar.partsStatus = {};
    let partIdCounter = 0;
    if (template.parts && typeof template.parts === 'object') {
        Object.keys(template.parts).forEach(location => {
            if (Array.isArray(template.parts[location])) {
                newChar.partsStatus[location] = template.parts[location].map(partName => ({
                    id: `${newChar.id}_part_${partIdCounter++}`,
                    name: partName,
                    damaged: false,
                }));
            }
        });
    }
    
    if (type === 'pc' && template.treasure) {
        let treasureFoundAndSet = false;
        // 1. 既存のパーツリストからたからものを探す
        for (const location in newChar.partsStatus) {
            const part = newChar.partsStatus[location].find(p => p.name === template.treasure);
            if (part) {
                // 2. 見つかった場合、そのパーツに特別なIDを付与する
                part.id = `${newChar.id}_part_treasure`;
                treasureFoundAndSet = true;
                break;
            }
        }

        // 3. もし既存のパーツリストにたからものが無かった場合のフォールバック
        if (!treasureFoundAndSet) {
            if (!newChar.partsStatus.body) newChar.partsStatus.body = [];
            newChar.partsStatus.body.push({
                id: `${newChar.id}_part_treasure`,
                name: template.treasure,
                damaged: false,
            });
        }
    }

    newChar.madnessPoints = {};
    newChar.statusEffects = [];
    newChar.activeBuffs = []; // 一時的なバフを保存する配列
    newChar.isMentallyBroken = false;
    newChar.isDestroyed = false;
    newChar.hasWithdrawn = false;
    newChar.regrets = [];
    
    recalculateMaxActionValue(newChar);
    newChar.actionValue = newChar.maxActionValue;

    newChar.skills = template.skills || [];
    newChar.stackCount = 1;
    newChar.hasActedThisCount = false;

    initializeManeuverLimits(newChar);
    
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

/**
 * キャラクターが持つマニューバの使用制限情報を初期化する
 * @param {object} character - 対象のキャラクターオブジェクト
 */
function initializeManeuverLimits(character) {
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

/**
 * 新しく追加されたPCの未練を初期化・設定する
 * @param {object} character - 対象のPCキャラクターオブジェクト
 */
function initializeRegretsForPC(character) {
    character.regrets = [];
    const otherPCs = characters.filter(c => c.type === 'pc' && c.id !== character.id);
    
    // 1. たからものへの未練
    const treasureName = character.treasure || 'たからもの';
    character.regrets.push({
      id: `treasure_${character.id}`,
      name: `${treasureName}への依存`,
      points: 3,
      category: 'たからもの'
    });

    // 2. 他の姉妹への未練 (双方向)
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
    // 戦闘中かどうかに関わらず、常に全キャラクターのリストを返すように単純化
    return characters;
}

export function getCharacterById(id) {
  return characters.find(c => c.id === id);
}

export function addCharacterFromTemplate(templateId, type, initialArea) {
  const newCharacter = createCharacterInstance(templateId, type, initialArea);
  if (!newCharacter) return null;

  if (type === 'pc') {
    // 未練設定のロジックをヘルパー関数に置き換え
    initializeRegretsForPC(newCharacter);
  }

  characters.push(newCharacter); 
  console.log(`${newCharacter.name} (${type}) を戦場に追加しました。`);
  mergeCharactersOnBoard();
  return newCharacter;
}

export function removeCharacter(id) {
  const char = getCharacterById(id);
  if (char && char.stackCount > 1) {
      char.stackCount--;
      console.log(`${char.name}のスタックが1減少しました。`);
      return true;
  }

  const index = characters.findIndex(c => c.id === id);
  if (index !== -1) {
    const removedName = characters[index].name;
    characters.splice(index, 1);

    console.log(`${removedName} を戦場から削除しました。`);
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
            // 完全破壊された場合、すべてのパーツを損傷状態にする
            if (char.isDestroyed && char.partsStatus) {
                Object.values(char.partsStatus).flat().forEach(part => part.damaged = true);
            }
        }
        // isDestroyedが変更された可能性があるので、最大行動値を再計算
        recalculateMaxActionValue(char);
        mergeCharactersOnBoard();
    } else {
        console.warn(`更新対象のキャラクターが見つかりません: ${id}`);
    }
}

export function damagePart(characterId, partId, damageAmount = 1) {
  const character = getCharacterById(characterId);
  if (!character) {
      console.error("損傷対象のキャラクターが見つかりません。", { characterId });
      return;
  }
  
  if (character.category === 'レギオン') {
      character.stackCount -= damageAmount;
      console.log(`${character.name}のスタックが${damageAmount}減少しました。残り: ${character.stackCount}`);
      if (character.stackCount <= 0) {
          character.isDestroyed = true;
          character.actionValue = 0;
          console.log(`${character.name}は完全に破壊されました。`);
          return true;
      }
      return false;
  }

  for (const location in character.partsStatus) {
      const part = character.partsStatus[location].find(p => p.id === partId);
      if (part) {
          if (part.damaged) return;
          part.damaged = true;
          console.log(`${character.name}の[${location}]にある「${part.name}」が損傷しました。`);
          
          // パーツが損傷したら必ず最大行動値を再計算する
          recalculateMaxActionValue(character);
          return false;
      }
  }
  console.error("損傷対象のパーツIDが見つかりません。", { characterId, partId });
}

export function addMadnessPoint(characterId, regretId) {
    const character = getCharacterById(characterId);
    if (!character) return;
    const regret = character.regrets.find(r => r.id === regretId);
    
    if (regret) {
        // 狂気点は4点を上限とする
        if (regret.points < 4) {
            regret.points++;
            console.log(`${character.name}の未練「${regret.name}」に狂気点が1追加されました。(現在: ${regret.points})`);
        }
    }

    // 精神崩壊の条件をチェック
    // 未練が1つ以上存在し、かつ、すべての未練のポイントが4点以上か
    const hasRegrets = character.regrets && character.regrets.length > 0;
    const allRegretsMaxedOut = hasRegrets && character.regrets.every(r => r.points >= 4);

    if (allRegretsMaxedOut) {
        // isMentallyBroken プロパティを true に設定
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

/**
 * battle-logicから渡された移動キューに基づいて、複数のキャラクターのエリアを一度に更新する
 * @param {Array<object>} moveQueue - { characterId: string, targetArea: string } の配列
 */
export function applyQueuedMoves(moveQueue) {
    moveQueue.forEach(move => {
        const char = getCharacterById(move.characterId);
        if (char) {
            char.area = move.targetArea;
        }
    });
    console.log("予約された移動を一括で適用しました。");
}

/**
 * 変換済みのキャラクターオブジェクトからキャラクターを生成し、戦場に追加する
 * @param {object} characterObject - 変換モジュールによって生成されたキャラクターデータ
 * @param {string} type - 'pc' または 'enemy'
 */
export function addCharacterFromObject(characterObject, type) {
    const newChar = JSON.parse(JSON.stringify(characterObject));

    // 必須プロパティを初期化
    newChar.id = `char_${nextUniqueId++}`;
    newChar.type = type;
    newChar.area = newChar.initialArea || ((type === 'pc') ? '煉獄' : '奈落');
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
    newChar.isMentallyBroken = false;
    newChar.isDestroyed = false;
    newChar.activeBuffs = [];
    newChar.hasWithdrawn = false;
    newChar.stackCount = 1;
    newChar.hasActedThisCount = false;
    
    // PCの場合、未練を初期化
    if (type === 'pc') {
        initializeRegretsForPC(newChar);
    } else {
        newChar.regrets = [];
    }

    // 最大行動値を再計算し、現在行動値を設定
    recalculateMaxActionValue(newChar);
    newChar.actionValue = newChar.maxActionValue;
    
    // マニューバの使用制限情報を初期化
    initializeManeuverLimits(newChar);

    characters.push(newChar);
    console.log(`${newChar.name} (imported ${type}) を戦場に追加しました。`);
    mergeCharactersOnBoard();
    return newChar;
}

/**
 * 保管所から再読込みしたデータで既存のキャラクターを更新する
 * テンプレート由来のデータを入れ替え、ランタイムの状態は極力保持する
 * @param {string} characterId - 更新対象のキャラクターID
 * @param {object} newData - character-converterで変換済みの新しいキャラクターデータ
 * @returns {object|null} 更新後のキャラクターオブジェクト
 */
export function updateCharacterFromReload(characterId, newData) {
    const char = getCharacterById(characterId);
    if (!char) {
        console.error(`再読込み対象のキャラクターが見つかりません: ${characterId}`);
        return null;
    }

    // 保持すべき現在のランタイム状態を退避
    const preservedState = {
        id: char.id,
        sheetId: char.sheetId,
        img: char.img,
        type: char.type,
        actionValue: char.actionValue,
        regrets: char.regrets, // 未練は他のPCとの関係性を含むため、そのまま保持する
        madnessPoints: char.madnessPoints,
        isMentallyBroken: char.isMentallyBroken,
        isDestroyed: false, // 再読込み時は非破壊状態に戻す
        hasWithdrawn: false, // 戦場復帰
        hasActedThisCount: char.hasActedThisCount
    };

    // 1. まず新しいデータでキャラクターオブジェクトを上書き
    //    これにより、charへの参照を維持したまま中身を入れ替える
    //    元のプロパティを一度クリア
    Object.keys(char).forEach(key => delete char[key]);
    // 新しいデータをコピー
    Object.assign(char, newData);

    char.area = char.initialArea || ((char.type === 'pc') ? '煉獄' : '奈落');

    // 2. 保持していたランタイム状態を書き戻す
    Object.assign(char, preservedState);

    // 3. partsStatusを新しいデータに基づいて完全に再構築する
    //    これにより、パーツの損傷状態はリセットされる
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
    // たからものIDの再設定
    if (char.type === 'pc' && char.treasure) {
        for (const location in char.partsStatus) {
            const part = char.partsStatus[location].find(p => p.name === char.treasure);
            if (part) {
                part.id = `${char.id}_part_treasure`;
                break;
            }
        }
    }
    
    // 4. 派生データを再計算
    recalculateMaxActionValue(char);
    // 現在行動値が新しい最大行動値を超えないように調整
    char.actionValue = Math.min(char.actionValue, char.maxActionValue);
    
    initializeManeuverLimits(char);
    
    console.log(`キャラクター「${char.name}」が保管所のデータで更新されました。`);
    return char;
}