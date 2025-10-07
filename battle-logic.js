/**
 * @file battle-logic.js
 * @description 戦闘の進行、状態管理、ルール判定、アクション解決を担当するモジュール。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.19.78"; // 機能修正とリファクタリングのためバージョン更新

import * as charManager from './character-manager.js';
import * as ui from './ui-manager.js';
import { showToastNotification } from './ui-manager.js';
import { performDiceRoll } from './dice-roller.js';
import * as interactionManager from './interaction-manager.js';
import { checkTargetAvailability } from './menu-builder.js';
import * as data from './data-handler.js';
import * as stateManager from './state-manager.js';

// ===================================================================================
//  モジュール内 プライベート変数 (戦闘状態)
// ===================================================================================

let battleState = {
    isStarted: false,
    turn: 1,
    count: 0,
    activeActors: [],
    actorsForThisCount: new Set(), // このカウントで行動する権利を持つキャラクターIDのセット
    phase: 'SETUP',
    actionQueue: [],
    rapidQueue: [],
    judgeQueue: [],
    damageQueue: [],
    moveQueue: [],
    currentAction: null,
    shouldScrollToCount: false,
};

/**
 * 指定されたカウント数で新しいカウント処理を開始する共通関数
 * @param {number} newCount - 開始する新しいカウント数
 */
function startCount(newCount) {
    battleState.count = newCount;
    battleState.shouldScrollToCount = true; // グリッドをスクロールさせるフラグを立てる
    resetAndStartNewCount(); // 行動権利者のリストアップなどを行う
    determineNextStep(); // 最終的な状態評価とUI更新をトリガーする
}

/**
 * アクションタイミング終了時に、条件を満たすオートバフを判定し適用する
 */
function applyAutoBuffsAtActionEnd() {
    const actionDeclarations = battleState.actionQueue;
    let appliedBuffsLog = new Map(); // ログの重複を避けるためのマップ

    actionDeclarations.forEach(declaration => {
        const { performer, target, sourceManeuver } = declaration;
        if (!performer) return;

        // キャラクターが持つ全てのオートタイミングスキルをチェック
        performer.skills.forEach(skillName => {
            const maneuver = data.getManeuverByName(skillName);
            if (!maneuver || maneuver.timing !== 'オート' || !maneuver.effects) return;

            maneuver.effects.forEach(effect => {
                if (effect.ref !== 'APPLY_CONDITIONAL_BUFF') return;

                const params = effect.params;
                let conditionMet = false;

                // --- 条件判定ロジック ---
                switch (params.trigger) {
                    case 'attacking_same_target_as_ally_this_count':
                        if (target) {
                            conditionMet = actionDeclarations.some(otherDecl =>
                                otherDecl.performer.type === 'pc' &&
                                otherDecl.performer.id !== performer.id &&
                                otherDecl.target?.id === target.id
                            );
                        }
                        break;
                    
                    case 'attacking_with_melee':
                        const attackEffect = sourceManeuver.effects?.find(e => e.ref === 'GENERIC_ATTACK');
                        if (attackEffect && attackEffect.params.attack_type === '白兵') {
                            conditionMet = true;
                        }
                        break;
                        
                    // --- 新しい条件はここに追加 ---
                }

                // 条件を満たした場合、バフを適用
                if (conditionMet) {
                    params.buffs.forEach(buff => {
                        charManager.addBuff(performer.id, {
                            source: maneuver.name,
                            stat: buff.stat,
                            value: buff.value,
                            duration: 'onetime_next_action'
                        });
                    });
                    
                    // ログ出力の準備
                    if (!appliedBuffsLog.has(performer.id)) {
                        appliedBuffsLog.set(performer.id, new Set());
                    }
                    appliedBuffsLog.get(performer.id).add(maneuver.name);
                }
            });
        });
    });

    // ログをまとめて出力
    appliedBuffsLog.forEach((skillNames, performerId) => {
        const performer = charManager.getCharacterById(performerId);
        if (performer) {
            ui.addLog(`${performer.name}の【${Array.from(skillNames).join('】【')}】が適用されます。`);
        }
    });

    // UI更新
    ui.renderCharacterCards();
}

// ===================================================================================
//  公開 API (戦闘開始・状態取得)
// ===================================================================================

export function startBattle() {
    battleState.isStarted = true;
    battleState.turn = 1;
    
    const allChars = charManager.getCharacters();
    const initialCount = Math.max(0, ...allChars.map(c => c.actionValue));

    // UIを戦闘モードに切り替えるためにカードを再描画
    ui.renderCharacterCards();
    
    // 共通のカウント開始処理を呼び出す
    startCount(initialCount);
}

export function getBattleState() {
    return { ...battleState };
}

/**
 * スクロールフラグをクリアする
 */
export function clearScrollFlag() {
    battleState.shouldScrollToCount = false;
}

// ===================================================================================
//  アクションの宣言 (interaction-managerから呼び出される)
// ===================================================================================
/**
 * マニューバの宣言を受け付け、新しい「宣言オブジェクト」を生成してキューに追加する
 * @param {object} char - 行動の主体となるキャラクターオブジェクト
 * @param {object} maneuver - maneuvers.json から読み取られたマニューバのマスターデータ
 * @param {object | null} target - ターゲットとなるキャラクターオブジェクト
 * @param {object | null} judgeTargetDeclaration - ジャッジマニューバの対象となるアクション宣言オブジェクト
 */
export function declareManeuver(char, maneuver, target = null, judgeTargetDeclaration = null) {
    const declaration = {
        id: `decl_${Date.now()}_${Math.random()}`,
        performer: char,
        target: target,
        sourceManeuver: maneuver,
        timing: maneuver.timing,
        isResolved: false,
        summary: {
            name: maneuver.name,
            cost: maneuver.cost,
            range: maneuver.range,
            description: maneuver.description
        }
    };
    // コストの支払い
    const cost = isNaN(Number(maneuver.cost)) ? 0 : Number(maneuver.cost);
    if (cost > 0) {
        charManager.updateCharacter(char.id, { actionValue: char.actionValue - cost });
    }
    // 適用されたボーナスの情報をログに出力
    if (maneuver.appliedBonuses && maneuver.appliedBonuses.length > 0) {
        ui.addLog(`オート効果: 【${maneuver.appliedBonuses.join('】【')}】が適用されます。`);
    }
    // ターン制限のあるマニューバを使用済みとしてマーク
    if (char.turnLimitedManeuvers.has(maneuver.name)) {
        char.usedManeuvers.add(maneuver.name);
    }

    switch (maneuver.timing) {
        case 'ラピッド':
            battleState.rapidQueue.push(declaration);
            ui.addLog(`◆[ラピッド] ${char.name}が【${maneuver.name}】を宣言。`);
            break;
        case 'ジャッジ':
            declaration.judgeTarget = judgeTargetDeclaration;
            battleState.judgeQueue.push(declaration);
            ui.addLog(`◆[ジャッジ] ${char.name}が【${maneuver.name}】を宣言。`);
            break;
        case 'ダメージ':
            ui.addLog(`◆[ダメージ] ${char.name}が【${maneuver.name}】を宣言。`);
            
            let effectApplied = false;

            // --- 防御効果の処理 ---
            const defenseEffect = maneuver.effects?.find(e => e.ref === 'GENERIC_DEFENSE');
            if (defenseEffect) {
                const defenseValue = defenseEffect.params.value || 0;
                charManager.addBuff(char.id, {
                    source: maneuver.name,
                    stat: 'defense',
                    value: defenseValue,
                    duration: 'until_damage_applied'
                });
                effectApplied = true;
            }

            // --- 与ダメージ増加効果の処理 ---
            const damageIncreaseEffect = maneuver.effects?.find(e => e.ref === 'INCREASE_DAMAGE_DEALT');
            if (damageIncreaseEffect) {
                // どの攻撃に対する効果かを特定するため、未適用のダメージキューを探す
                const pendingDamage = battleState.damageQueue.find(d => 
                    d.sourceAction.performer.id === char.id && !d.applied
                );
                
                if (pendingDamage) {
                    const damageIncreaseValue = damageIncreaseEffect.params.value || 0;
                    // バフを攻撃者(performer)に付与
                    charManager.addBuff(char.id, {
                        source: maneuver.name,
                        stat: 'damageBonus',
                        value: damageIncreaseValue,
                        duration: 'until_damage_applied' // このダメージ専用の期間
                    });
                    effectApplied = true;
                } else {
                    ui.addLog(`＞ 【${maneuver.name}】の効果対象となるダメージが見つかりません。`);
                }
            }

            if (effectApplied) {
                ui.updateSingleCharacterCard(char.id); // 💡を表示するためにカードを更新
            }
            break;
        case 'アクション':
        default:
            charManager.updateCharacter(char.id, { hasActedThisCount: true });
            battleState.activeActors = battleState.activeActors.filter(actor => actor.id !== char.id);
            battleState.actionQueue.push(declaration);
            // ログ出力の宣言者を char ではなく declaration.performer に統一
            ui.addLog(`◆[アクション] ${declaration.performer.name}が【${maneuver.name}】を宣言。`);
            break;
    }

    ui.renderCharacterCards();
    ui.updateMarkers();
    determineNextStep();
}

/**
 * アクションキュー内の指定された項目のチェック状態だけを更新する。
 * (ジャッジマニューバのように、解決処理を伴わないクリック用)
 * @param {number} index - チェック状態を更新するアクションのインデックス
 */
export function toggleActionCheckedState(index) {
    const action = battleState.actionQueue[index];
    if (action) {
        action.checked = !action.checked;
        ui.addLog(`- ${action.performer.name}の【${action.sourceManeuver.name}】をチェックしました。`);
    }
    determineNextStep();
}

// ===================================================================================
//  戦闘フロー管理 (フェーズ進行)
// ===================================================================================

export function determineNextStep() {
    if (!battleState.isStarted) {
        battleState.phase = 'SETUP';
        battleState.activeActors = [];
        ui.updateBattleStatusUI();
        return;
    }
    
    // 1. 行動権利者リストの中から、「まだアクション宣言をしていない」かつ「行動値が1以上」のキャラクターを抽出する
    const potentialActorIds = Array.from(battleState.actorsForThisCount).filter(id => {
        const char = charManager.getCharacterById(id);
        return char && !char.hasActedThisCount && char.actionValue > 0;
    });

    const potentialActors = potentialActorIds.map(id => charManager.getCharacterById(id));
    
    // 2. 行動権を持つキャラクターを特定
    const actingEnemies = potentialActors.filter(c => c.type === 'enemy');
    
    if (actingEnemies.length > 0) {
        battleState.activeActors = actingEnemies;
    } else {
        battleState.activeActors = potentialActors.filter(c => c.type === 'pc');
    }

    const prevPhase = battleState.phase;

    // 3. フェーズを決定
    const hasAnyPotentialActors = battleState.activeActors.length > 0;
    const hasUnresolvedRapids = battleState.rapidQueue.some(r => !r.checked);
    const hasUnresolvedActions = battleState.actionQueue.some(a => !a.checked);
    const hasPendingDamage = battleState.damageQueue.some(d => !d.applied);
    
    if (hasAnyPotentialActors) {
        battleState.phase = 'ACTION_DECLARATION';
    } else if (hasUnresolvedRapids) {
        battleState.phase = 'RAPID_RESOLUTION';
    } else if (hasUnresolvedActions) {
        battleState.phase = 'ACTION_RESOLUTION';
    } else if (hasPendingDamage) {
        battleState.phase = 'DAMAGE_RESOLUTION';
    } else {
        const canAnyoneActInFuture = charManager.getCharacters().some(c => c.actionValue > 0 && !c.isDestroyed && !c.hasWithdrawn);
        if (battleState.count > 0 && canAnyoneActInFuture) {
            battleState.phase = 'COUNT_END';
        } else {
            battleState.phase = 'TURN_END_PREPARATION';
        }
    }
    
    // アクション宣言フェーズから別のフェーズに移る瞬間を検知
    if (prevPhase === 'ACTION_DECLARATION' && battleState.phase !== 'ACTION_DECLARATION') {
        applyAutoBuffsAtActionEnd();
    }

    ui.updateBattleStatusUI();
}

export function advancePhase() {
    const prevPhase = battleState.phase;
    switch (battleState.phase) {
        case 'ACTION_DECLARATION':
            if (battleState.activeActors.length === 0) {
                if (battleState.rapidQueue.length > 0) {
                    battleState.phase = 'RAPID_RESOLUTION';
                    ui.addLog("--- ラピッド解決フェーズ開始 ---");
                } else if (battleState.actionQueue.length > 0) {
                    battleState.phase = 'JUDGE_RESOLUTION';
                    ui.addLog("--- アクション解決フェーズ開始 ---");
                } else {
                    battleState.phase = 'COUNT_END';
                }
            }
            break;
        case 'RAPID_RESOLUTION':
            resolveRapidQueue().then(() => {
                battleState.phase = 'JUDGE_RESOLUTION';
                ui.addLog("--- アクション解決フェーズ開始 ---"); 
                determineNextStep();
            });
            break;
        case 'JUDGE_RESOLUTION':
            checkAllDamageApplied();
            break;
        case 'DAMAGE_RESOLUTION':
            resolvePostDamageEffects().then(() => {
                battleState.phase = 'COUNT_END';
                ui.addLog("--- カウント終了 ---");
                determineNextStep();
            });
            break;
    }
    if (prevPhase !== battleState.phase) {
        determineNextStep();
    }
}

export function advanceCount() {
    charManager.getCharacters().forEach(c => c.hasActedThisCount = false);
    const allCharacters = charManager.getCharacters().filter(c => !c.isDestroyed && !c.hasWithdrawn);
    const nextPossibleActionValues = allCharacters
        .map(c => c.actionValue)
        .filter(val => val < battleState.count);

    if (nextPossibleActionValues.length > 0) {
        const newCount = Math.max(...nextPossibleActionValues);
        startCount(newCount);
    } else {
        startMadnessPhase();
    }
}

function resetAndStartNewCount() {
    battleState.phase = 'ACTION_DECLARATION';
    battleState.actionQueue = [];
    battleState.rapidQueue = [];
    battleState.judgeQueue = [];
    battleState.damageQueue = [];

    const allCharacters = charManager.getCharacters().filter(c => !c.isDestroyed && !c.hasWithdrawn);
    battleState.actorsForThisCount = new Set(
        allCharacters
            .filter(c => c.actionValue >= battleState.count)
            .map(c => c.id)
    );
    
    allCharacters.forEach(c => c.hasActedThisCount = false);

    ui.updateAllQueuesUI();
    ui.updatePhaseUI(battleState);
    stateManager.autoSave();
}

export function handleQueueCheck(queueType, index, isChecked) {
    let queue = null;
    if (queueType === 'rapid') queue = battleState.rapidQueue;
    else if (queueType === 'judge') queue = battleState.judgeQueue;
    else if (queueType === 'action') queue = battleState.actionQueue;
    if(queue && queue[index]) queue[index].checked = isChecked;
    determineNextStep();
}

export async function resolveRapidByIndex(index) {
    const declaration = battleState.rapidQueue[index];
    if (!declaration || declaration.checked) return;

    // 解決処理の本体は resolveSingleAction を再利用できる
    await resolveSingleAction(declaration);
    declaration.checked = true; // 解決済みにする

    determineNextStep(); // 状態を再評価
}

export async function resolveActionByIndex(index, totalBonus = 0) {
    const declaration = battleState.actionQueue[index];
    if (!declaration || declaration.checked) return;
    
    const { targets } = checkTargetAvailability(declaration.performer, declaration.sourceManeuver);
    if (declaration.target && !targets.some(t => t.id === declaration.target.id)) {
        ui.addLog(`解決失敗: ${declaration.target.name} は射程外です。`);
        declaration.checked = true;
        // ★★★ 修正箇所 ★★★
        // 失敗した場合でも、次のステップに進む前に移動キューを解決する必要があるかチェックする
        const allActionsChecked = battleState.actionQueue.every(d => d.checked);
        if (allActionsChecked) {
            resolveQueuedMoves();
        } else {
            determineNextStep();
        }
        return;
    }
    
    await resolveSingleAction(declaration, totalBonus);
    declaration.checked = true;

    const allActionsChecked = battleState.actionQueue.every(d => d.checked);
    if (allActionsChecked) {
        resolveQueuedMoves();
    } else {
        determineNextStep();
    }
}

export function applySupport(judgeIndex, targetDeclarationId) {
    const judgeDeclaration = battleState.judgeQueue[judgeIndex];
    const targetDeclaration = battleState.actionQueue.find(d => d.id === targetDeclarationId);
    if (judgeDeclaration && targetDeclaration) {
        judgeDeclaration.target = targetDeclaration;
        judgeDeclaration.checked = true;
        ui.addLog(`＞ ${judgeDeclaration.performer.name}が【${judgeDeclaration.sourceManeuver.name}】で「${targetDeclaration.sourceManeuver.name}」を対象にしました。`);
        determineNextStep();
    }
}

function applyAllSupportsToDeclaration(targetDeclaration) {
    // 実装は将来のタスク
}

export async function resolveJudgeByIndex(index) {
    // 実装は将来のタスク
}

export function checkJudgeItem(index) {
    const declaration = battleState.judgeQueue[index];
    if (declaration && !declaration.checked) {
        declaration.checked = true;
        ui.addLog(`＞ [ジャッジ] ${declaration.performer.name}の【${declaration.sourceManeuver.name}】を解決(チェック)しました。`);
    }
    determineNextStep();
}

export function startMadnessPhase() {
    battleState.phase = 'MADNESS_PHASE';
    ui.addLog("【ターン終了】各ドールは未練に狂気点を1点加えます。");
    ui.showMadnessModal();
    ui.updatePhaseUI(battleState);
}

export function proceedToNextTurn() {
    battleState.turn++;
    
    charManager.getCharacters().forEach(char => {
        if (char.activeBuffs) {
            char.activeBuffs = char.activeBuffs.filter(buff => buff.duration !== 'end_of_turn');
        }
    });

    charManager.startNewTurn();
    const allChars = charManager.getCharacters().filter(c => !c.isDestroyed && !c.hasWithdrawn);
    
    const maxActionValue = allChars.length > 0 ? Math.max(0, ...allChars.map(c => c.actionValue)) : 0;
    
    ui.renderCharacterCards();

    startCount(maxActionValue);
}

export function applyDamage(index) {
    const damageInfo = battleState.damageQueue[index];
    if (damageInfo && !damageInfo.applied) {
        damageInfo.applied = true;
        if (damageInfo.sourceAction) {
            damageInfo.sourceAction.damageApplied = true;
        }
        // ダメージ適用後、使用済みの防御バフをクリアする
        const targetId = damageInfo.target.id;
        charManager.clearTemporaryBuffs(targetId, 'until_damage_applied');
        ui.updateSingleCharacterCard(targetId); // バフが消えたのでカードを再描画
    }
    determineNextStep();
}

export function checkAllDamageApplied() {
    const pendingDamage = battleState.damageQueue.some(d => !d.applied);
    if (pendingDamage) {
        battleState.phase = 'DAMAGE_RESOLUTION';
        ui.addLog("--- ダメージ解決フェーズ開始 ---");
    } else {
        battleState.phase = 'COUNT_END';
        ui.addLog("--- カウント終了 ---");
    }
}

// ===================================================================================
//  アクション解決フロー (内部処理)
// ===================================================================================

async function resolveRapidQueue() {
    // 実装は将来のタスク
}

async function resolveActionQueue() {
    // 実装は将来のタスク
}

async function resolvePostDamageEffects() {
    // 実装は将来のタスク
}

function resolveQueuedMoves() {
    if (battleState.moveQueue.length > 0) {
        ui.addLog("--- 移動解決フェーズ ---");
        charManager.applyQueuedMoves(battleState.moveQueue);
        battleState.moveQueue = [];
        ui.updateMarkers();
    }
    checkAllDamageApplied(); 
    determineNextStep();
}

function expandParams(template, params) {
    let templateString = JSON.stringify(template);
    templateString = templateString.replace(/"\$params\.(\w+)"/g, (match, key) => {
        return params.hasOwnProperty(key) ? JSON.stringify(params[key]) : 'null';
    });
    return JSON.parse(templateString);
}

async function executeEffect(effectRef, context) {
    let onHitEffects = []; // ★ forループの前に宣言
    const effectDefinition = data.getEffectDefinition(effectRef.ref);
    if (!effectDefinition) {
        console.warn(`[Engine] 汎用効果 '${effectRef.ref}' の定義が見つかりません。`);
        return onHitEffects; // ★ 空の配列を返す
    }
    const params = effectRef.params || {};
    for (const actionTemplate of effectDefinition.actions) {
        const concreteAction = expandParams(actionTemplate, params);
        switch (concreteAction.action_type) {
            case 'attack_roll':
                const { hit, on_hit } = await performAttackRoll(concreteAction, context);
                if (hit && on_hit) {
                    onHitEffects.push(...on_hit);
                }
                break;
            case 'move_character':
                performMoveCharacter(concreteAction, context);
                break;
            case 'apply_buff':
                performApplyBuff(concreteAction, context);
                break;
            case 'escape_roll':
                performEscapeRoll(concreteAction, context);
                break;
            case 'modify_action_value':
                performModifyActionValue(concreteAction, context);
                break;
            default:
                ui.addLog(`＞ [Engine] 未対応のアクションタイプ: ${concreteAction.action_type}`);
                console.warn(`[Engine] 未対応のアクションタイプです: ${concreteAction.action_type}`);
        }
    }
    return onHitEffects;
}

/**
 * 'move_character' アクションを実行する
 * @param {object} action - パラメータ展開済みの具体的なアクション定義
 * @param {object} context - 実行コンテキスト
 */
function performMoveCharacter(action, context) {
    const { performer, target, declaration } = context;

    // 1. 移動対象を決定（自身か、指定されたターゲットか）
    const moveTarget = action.target === 'self' ? performer : target;
    if (!moveTarget) {
        ui.addLog(`＞ [Engine] 移動対象が見つかりません。`);
        return;
    }
    
    // 2. 移動方向を取得
    const directionOrArea = declaration.sourceManeuver.targetArea;
    if (!directionOrArea) {
        ui.addLog(`＞ [Engine] 移動先または移動方向が指定されていません。`);
        return;
    }

    // 3. 移動距離を計算
    let movePower = 1; // デフォルトの移動力
    if (action.distance) {
        const rangeParts = String(action.distance).split('-');
        movePower = parseInt(rangeParts[1] || rangeParts[0], 10);
    }
    
    // 4. 移動妨害効果を計算 (将来的な拡張)
    let moveDebuff = 0;
    // ここで moveTarget の activeBuffs などを参照して妨害値を計算するロジックを追加可能

    const finalDistance = Math.max(0, movePower - moveDebuff);

    if (finalDistance === 0) {
        ui.addLog(`${moveTarget.name}の移動は妨害されました。`);
        return;
    }

    // 5. 新しいエリアを計算
    const rows = ["奈落", "地獄", "煉獄", "花園", "楽園"];
    const currentIndex = rows.indexOf(moveTarget.area);
    let newArea;

    // '奈落方向' or '楽園方向' の場合
    if (directionOrArea.endsWith('方向')) {
        let newIndex = currentIndex;
        if (directionOrArea === '奈落方向') {
            newIndex = Math.max(0, currentIndex - finalDistance);
        } else { // 楽園方向
            newIndex = Math.min(rows.length - 1, currentIndex + finalDistance);
        }
        newArea = rows[newIndex];
    } 
    // エリア名が直接指定されている場合 (自己移動)
    else {
        newArea = directionOrArea;
    }

    // 6. タイミングに応じて処理を分岐
    if (declaration.timing === 'ラピッド') {
        // ラピッドの場合は即時解決
        ui.addLog(`[ラピッド解決] ${moveTarget.name}が${newArea}へ移動しました。`);
        charManager.updateCharacter(moveTarget.id, { area: newArea });
        ui.updateMarkers();
        ui.updateSingleCharacterCard(moveTarget.id);
    } else {
        // アクションの場合は移動を予約
        ui.addLog(`移動予約: ${moveTarget.name} が ${newArea} へ`);
        battleState.moveQueue.push({
            characterId: moveTarget.id,
            targetArea: newArea
        });
    }
}

function performApplyBuff(action, context) {
    const { performer } = context;

    // actionオブジェクトに 'buffs' プロパティがあるかチェック(APPLY_CONDITIONAL_BUFF用)
    if (action.buffs) {
        // 条件をチェック
        let conditionMet = false;
        if (action.condition === 'attacking_same_target_as_ally_this_count') {
            const targetId = context.target?.id;
            if (targetId) {
                // 同じカウントで、他の姉妹が同じターゲットにアクションを宣言しているかチェック
                conditionMet = battleState.actionQueue.some(decl =>
                    decl.performer.type === 'pc' &&
                    decl.performer.id !== performer.id &&
                    decl.target?.id === targetId
                );
            }
        }

        if (conditionMet) {
            ui.addLog(`＞ 【${context.declaration.sourceManeuver.name}】の効果が発動！`);
            action.buffs.forEach(buff => {
                // 一時的なバフとしてキャラクターに追加
                charManager.addBuff(performer.id, {
                    source: context.declaration.sourceManeuver.name,
                    stat: buff.stat,
                    value: buff.value,
                    duration: 'onetime_next_action' // このアクション1回限りのバフ
                });
                ui.addLog(`＞ (次の攻撃判定に+${buff.value}, 与ダメージに+${buff.value})`);
            });
        }
        return; // APPLY_CONDITIONAL_BUFF の処理はここで終了
    }

    // actionオブジェクトに 'buff' プロパティが存在するかチェック
    const buff = action.buff ? action.buff : action;

    switch (buff.stat) {
        case 'maxActionValue':
            // 永続的な最大行動値の変更 (既存のロジック)
            charManager.updateCharacter(performer.id, {
                baseActionValue: (performer.baseActionValue || 6) + buff.value
            });
            ui.addLog(`${performer.name}の最大行動値が${buff.value > 0 ? '+' : ''}${buff.value}されました。`);
            break;

        case 'attackCheckBonus':
            // 一時的な攻撃判定ボーナスの追加 (新規ロジック)
            performer.activeBuffs.push({
                source: context.declaration.sourceManeuver.name,
                stat: buff.stat,
                value: buff.value,
                duration: buff.duration // 'end_of_turn' など
            });
            ui.addLog(`${performer.name}は【${context.declaration.sourceManeuver.name}】の効果で、ターン終了まで攻撃判定に+${buff.value}の修正を得た！`);
            break;

        default:
            ui.addLog(`＞ [Engine] 未対応のバフタイプ: ${buff.stat}`);
            console.warn(`[Engine] 未対応のバフタイプです: ${buff.stat}`);
    }
}

async function performAttackRoll(action, context) {
    const { performer, target, declaration } = context;
    const bonus = context.totalAttackBonus || 0;
    const diceCommand = `NA${bonus >= 0 ? `+${bonus}` : bonus}`;

    // ★★★ onHit効果を先に整理しておく ★★★
    const onHitEffects = action.on_hit_effects || action.on_hit || [];
    
    return new Promise(resolve => {
        performDiceRoll({
            command: diceCommand,
            showToast: true,
            performer: performer,
            callback: async (result, hitLocation, resultText, rollValue) => { // ★ asyncを追加
                // 1. 大失敗の処理
                if (result === '大失敗') {
                    ui.addLog(`＞ 攻撃は大失敗！誤爆の対象を選択してください。`);

                    // 誤爆対象の候補をリストアップ
                    const friendlyFireCandidates = [];
                    // a) 攻撃者自身を追加
                    friendlyFireCandidates.push(performer);

                    // b) 攻撃対象エリアにいる味方を追加
                    const targetArea = target ? target.area : performer.area; // ターゲットがいなければ自身のエリア
                    const alliesInArea = charManager.getCharacters().filter(c =>
                        c.type === performer.type &&      // 味方で
                        c.id !== performer.id &&           // 自身以外で
                        c.area === targetArea &&           // 対象エリアにいて
                        !c.isDestroyed && !c.isWithdrawn   // 活動中
                    );
                    friendlyFireCandidates.push(...alliesInArea);

                    // 候補者を選択するモーダルを表示
                    const selectedTarget = await new Promise(selectTargetPromise => {
                        const menuItems = friendlyFireCandidates.map(char => ({
                            label: char.name,
                            onClick: () => selectTargetPromise(char)
                        }));
                        ui.showModal({
                            title: '大失敗：誤爆対象を選択',
                            items: menuItems
                        });
                    });
                    
                    // ダメージキューを作成
                    if (selectedTarget) {
                        // 爆発以外の効果は除去
                        const fumbleOnHit = onHitEffects.includes('EXPLOSION') ? ['EXPLOSION'] : [];
                        
                        battleState.damageQueue.push({
                            id: `damage_${Date.now()}_${Math.random()}`,
                            target: selectedTarget, // 選択された対象
                            amount: action.damage || 0,
                            location: '任意', // ルール通り、箇所は任意選択
                            sourceAction: declaration,
                            applied: false,
                            rollValue: rollValue || 0,
                            onHitEffects: fumbleOnHit // 爆発効果のみ引き継ぐ
                        });
                        ui.addLog(`＞ ${selectedTarget.name}に誤爆！ 【${action.damage || 0}】点のダメージ！`);
                    }
                    
                    resolve({ hit: false, on_hit: [] }); // 大失敗なので命中ではない
                    return;
                }

                // 2. 通常の命中/失敗処理
                const hit = result.includes('成功');
                if (hit) {
                    ui.addLog(`＞ ${target.name}に命中！`);
                    let currentDamage = (action.damage || 0);
                    
                    battleState.damageQueue.push({
                        id: `damage_${Date.now()}_${Math.random()}`,
                        target: target,
                        amount: currentDamage,
                        location: hitLocation,
                        sourceAction: declaration,
                        applied: false,
                        rollValue: rollValue || 0,
                        onHitEffects: onHitEffects // 全ての効果を引き継ぐ
                    });
                    ui.addLog(`＞ 【${currentDamage}】点のダメージ！`);
                } else {
                    ui.addLog(`＞ 攻撃は失敗しました。`);
                }
                
                // 使用済みの一回きりのバフをクリア
                charManager.clearTemporaryBuffs(performer.id, 'onetime_next_action');

                resolve({ hit, on_hit: onHitEffects });
            }
        });
    });
}

async function resolveSingleAction(declaration, totalBonus = 0) { // デフォルト値を設定
    const { performer, sourceManeuver } = declaration;
    ui.addLog(`解決: ${performer.name} の【${sourceManeuver.name}】`);

    // 逃走試行フラグがあれば、逃走処理を直接実行して終了
    if (sourceManeuver.isEscapeAttempt) {
        await performEscapeRoll({}, { performer, declaration }); // actionとcontextを渡す
        return; 
    }

    if (!sourceManeuver.effects || sourceManeuver.effects.length === 0) {
        if (sourceManeuver.name === '待機') {
            ui.addLog(`${performer.name}は状況をうかがっている。`);
        } else {
            ui.addLog(`効果の定義がありません。`);
        }
        return;
    }

    const context = {
        performer: declaration.performer,
        target: declaration.target,
        declaration: declaration,
        totalAttackBonus: totalBonus // ★★★ 計算済みのボーナスを context に追加 ★★★
    };

    let allOnHitEffects = [];
    for (const effectRef of declaration.sourceManeuver.effects) {
        const onHitEffects = await executeEffect(effectRef, context);
        allOnHitEffects.push(...onHitEffects);
    }

    if (allOnHitEffects.length > 0) {
        ui.addLog(`＞ 追加効果(${allOnHitEffects.join(',')})が発動！`);
        for (const effectName of allOnHitEffects) {
            // "TUMBLE" などの効果名を effectRef 形式に変換して再度呼び出す
            await executeEffect({ ref: effectName, params: {} }, context);
        }
    }
}

/**
 * 'escape_roll' アクションを実行し、逃走判定を行う
 * @param {object} action - パラメータ展開済みの具体的なアクション定義
 * @param {object} context - 実行コンテキスト
 */
function performEscapeRoll(action, context) {
    const { performer } = context;
    ui.addLog(`＞ ${performer.name}が逃走判定を行います...`);
    performDiceRoll({
        command: 'NC', // 行動判定と同様のダイス
        showToast: true,
        callback: (result) => {
            if (result.includes('成功')) {
                ui.addLog(`＞ 逃走成功！ ${performer.name}は戦場から離脱しました。`);
                charManager.updateCharacter(performer.id, { hasWithdrawn: true });
            } else {
                ui.addLog(`＞ 逃走失敗！ ${performer.name}は戦場に留まります。`);
            }
            // 逃走判定後、必ずUIを更新
            ui.renderCharacterCards();
            ui.updateMarkers();
            determineNextStep();
        }
    });
}

/**
 * 保存された状態から戦闘を復元する
 * @param {number} turn - 復元するターン数
 * @param {Array<object>} characters - 復元されたキャラクターの配列
 */
export function restoreBattleState(turn, characters) {
    battleState.isStarted = true;
    battleState.turn = turn;
    
    ui.renderCharacterCards(); 
    
    const newCount = Math.max(0, ...characters.map(c => c.actionValue));
    startCount(newCount);
}

/**
 * 戦闘状態を初期のセットアップフェーズにリセットする
 */
export function resetToSetupPhase() {
    battleState = {
        isStarted: false,
        turn: 1,
        count: 0,
        activeActors: [],
        phase: 'SETUP',
        actionQueue: [],
        rapidQueue: [],
        judgeQueue: [],
        damageQueue: [],
        moveQueue: [],
        currentAction: null,
        shouldScrollToCount: false,
    };
    
    // UIも準備状態に更新する
    // これらはUI側の責務なので、呼び出し側で行うのがより適切
    // ui.updateAllQueuesUI();
    // ui.updateBattleStatusUI();
}

/**
 * 対象の行動値を変更する汎用関数 (「転倒」などで使用)
 * @param {object} action - パラメータ展開済みの具体的なアクション定義
 * @param {object} context - 実行コンテキスト
 */
function performModifyActionValue(action, context) {
    const target = context.target;
    if (!target) {
        ui.addLog(`＞ 行動値変更の対象がいません。`);
        return;
    }

    const value = action.value || 0;
    if (value === 0) return;

    // 行動値を変更
    charManager.updateCharacter(target.id, {
        actionValue: target.actionValue + value
    });

    // ログ出力 (値がマイナスなら「転倒」と見なす)
    if (value < 0) {
        ui.addLog(`＞ ${target.name} は転倒した！ (行動値${value})`);
    } else {
        ui.addLog(`＞ ${target.name} の行動値が ${value > 0 ? '+' : ''}${value} された。`);
    }

    // UIを更新
    ui.updateMarkers();
    ui.updateSingleCharacterCard(target.id);
}