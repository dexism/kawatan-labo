/**
 * @file battle-logic.js
 * @description 戦闘の進行、状態管理、ルール判定、アクション解決を担当するモジュール。
 */
export const version = "1.26.94"; // UI分離リファクタリング完了版

import * as charManager from './character-manager.js';
import * as ui from './ui-manager.js';
import { performDiceRoll } from './dice-roller.js';
// import { showDamageCalculationModal, showDamageModal } from './interaction-manager.js';
import * as data from './data-handler.js';
import * as stateManager from './state-manager.js';
// import { calculateManeuverRange } from './battle-helpers.js';
import { checkTargetAvailability } from './menu-builder.js';

// ===================================================================================
//  戦闘状態 (State)
// ===================================================================================

let battleState = {
    isStarted: false,
    turn: 1,
    count: 0,
    activeActors: [],
    potentialActors: [],
    actorsForThisCount: new Set(),
    phase: 'SETUP',
    actionQueue: [],
    rapidQueue: [],
    judgeQueue: [],
    damageQueue: [],
    moveQueue: [],
    shouldScrollToCount: false,
};

// ===================================================================================
//  共通処理 (Internal Helpers)
// ===================================================================================

function startCount(newCount) {
    // ターン開始時 (newCountが最初のカウント) またはカウントが進んだ場合にログを出力
    if (battleState.count !== newCount) {
        ui.addLog(`【カウント ${newCount}（ターン ${battleState.turn}） 開始】`);
    }

    battleState.count = newCount;
    battleState.shouldScrollToCount = true;
    resetAndStartNewCount();
    determineNextStep();
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
    stateManager.autoSave();
}

function applyAutoBuffsAtActionEnd() {
    const actionDeclarations = battleState.actionQueue;
    let appliedBuffsLog = new Map();

    actionDeclarations.forEach(declaration => {
        const { performer, target, sourceManeuver } = declaration;
        if (!performer) return;

        performer.skills.forEach(skillName => {
            const maneuver = data.getManeuverByName(skillName);
            if (!maneuver || maneuver.timing !== 'オート' || !maneuver.effects) return;

            maneuver.effects.forEach(effect => {
                if (effect.ref !== 'APPLY_CONDITIONAL_BUFF') return;

                const params = effect.params;
                let conditionMet = false;

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
                }

                if (conditionMet) {
                    params.buffs.forEach(buff => {
                        charManager.addBuff(performer.id, {
                            source: maneuver.name,
                            stat: buff.stat,
                            value: buff.value,
                            duration: 'onetime_next_action'
                        });
                    });
                    
                    if (!appliedBuffsLog.has(performer.id)) {
                        appliedBuffsLog.set(performer.id, new Set());
                    }
                    appliedBuffsLog.get(performer.id).add(maneuver.name);
                }
            });
        });
    });

    appliedBuffsLog.forEach((skillNames, performerId) => {
        const performer = charManager.getCharacterById(performerId);
        if (performer) {
            ui.addLog(`> [オート] ${performer.name}の【${Array.from(skillNames).join('】【')}】が適用されます。`);
        }
    });
}

function expandParams(template, params) {
    let templateString = JSON.stringify(template);
    templateString = templateString.replace(/"\$params\.(\w+)"/g, (match, key) => {
        return params.hasOwnProperty(key) ? JSON.stringify(params[key]) : 'null';
    });
    return JSON.parse(templateString);
}

// ===================================================================================
//  公開 API (Public API)
// ===================================================================================

/**
 * 【新設】UIからのインタラクションを一元的に受け付ける窓口
 * @param {object} interaction - ユーザー操作の情報 (例: { type: 'resolve-action', index: 0 })
 */
export function handleUserInteraction(interaction) {
    if (!interaction || !interaction.type) return;

    switch (interaction.type) {
        case 'resolve-action':
            resolveActionByIndex(interaction.index, interaction.diceResult || null);
            break;

        case 'resolve-rapid':
            resolveRapidByIndex(interaction.index);
            break;
        
        case 'resolve-judge':
            checkJudgeItem(interaction.index);
            break;

        case 'resolve-damage':
            const item = battleState.damageQueue[interaction.index];
            if (!item) return;
            
            // ダメージ宣言(declaration)の解決ロジックのみを残す
            if (item.type === 'declaration') {
                if (item.checked) return;
                const declaration = item;
                const maneuver = declaration.sourceManeuver;

                const takeDamageEffect = maneuver.effects?.some(e => e.ref === 'TAKE_DAMAGE_FOR_ALLY');
                if (takeDamageEffect) {
                    const targetDamage = battleState.damageQueue.find(d => 
                        d.type === 'instance' && !d.applied && d.target.id === declaration.target.id
                    );
                    
                    if (targetDamage) {
                        redirectDamage(targetDamage.id, declaration.performer);
                        declaration.checked = true; 
                        determineNextStep(); 
                    } else {
                        ui.showToastNotification("庇う対象のダメージが見つかりません。", 2000);
                        declaration.checked = true;
                        determineNextStep();
                    }
                    return;
                }

                const defenseEffect = maneuver.effects?.some(e => e.ref === 'GENERIC_DEFENSE');
                if (defenseEffect) {
                    declaration.checked = true;
                    charManager.addBuff(declaration.performer.id, { 
                        source: maneuver.name, 
                        stat: 'defense', 
                        value: maneuver.effects.find(e => e.ref === 'GENERIC_DEFENSE').params.value || 0, 
                        duration: 'until_damage_applied' 
                    });
                    ui.addLog(`> ${declaration.performer.name}の【${maneuver.name}】の効果が適用されます。`);
                    determineNextStep();
                    return;
                }
                
                const damageIncreaseEffect = maneuver.effects?.some(e => e.ref === 'INCREASE_DAMAGE_DEALT');
                if (damageIncreaseEffect) {
                    declaration.checked = true;
                    charManager.addBuff(declaration.performer.id, { 
                        source: maneuver.name, 
                        stat: 'damageBonus', 
                        value: maneuver.effects.find(e => e.ref === 'INCREASE_DAMAGE_DEALT').params.value || 0, 
                        duration: 'until_damage_applied' 
                    });
                    ui.addLog(`> ${declaration.performer.name}の【${maneuver.name}】の効果が適用されます。`);
                    determineNextStep();
                    return;
                }
            }
            break;
    }
}

export function getBattleState() {
    return {
        ...battleState,
        activeActorIds: new Set(battleState.activeActors.map(a => a.id))
    };
}

export function startBattle() {
    battleState.isStarted = true;
    battleState.turn = 1;
    const allChars = charManager.getCharacters();
    const initialCount = Math.max(0, ...allChars.map(c => c.actionValue));
    startCount(initialCount);
}

export function clearScrollFlag() {
    battleState.shouldScrollToCount = false;
}

export function declareManeuver(char, maneuver, target = null, judgeTargetDeclaration = null) {
    const performerId = char.id;

    // コスト支払い処理（updateCharacterによる参照破壊の可能性に対処）
    const cost = isNaN(Number(maneuver.cost)) ? 0 : Number(maneuver.cost);
    if (cost > 0) {
        charManager.updateCharacter(performerId, { actionValue: char.actionValue - cost });
    }
    // 使用済み回数の記録
    const currentCharacter = charManager.getCharacterById(performerId);
    let finalTarget = target;
    // targetが設定されておらず、かつマニューバの射程が「自身」の場合
    if (!finalTarget && maneuver.range === '自身') {
        // 宣言者自身をターゲットとして設定する
        finalTarget = currentCharacter;
    }
    if (currentCharacter.turnLimitedManeuvers.has(maneuver.name)) {
        currentCharacter.usedManeuvers.add(maneuver.name);
    }
    
    // ★★★ ここからが今回の修正の核心です ★★★

    // キューに追加する直前に、常に最新のキャラクターオブジェクトを再取得する
    const currentPerformer = charManager.getCharacterById(performerId);
    if (!currentPerformer) {
        console.error(`宣言の解決中にパフォーマー(ID: ${performerId})が見つかりませんでした。`);
        return;
    }

    // 全ての宣言オブジェクトが持つべき必須プロパティをここで完全に定義する
    const declaration = {
        id: `decl_${Date.now()}_${Math.random()}`,
        performer: currentPerformer, // 最新のオブジェクトを必ず設定
        target: target,
        sourceManeuver: maneuver,
        timing: maneuver.timing,
        summary: { name: maneuver.name },
        checked: false, // ★ checked プロパティを必ず初期化
        type: 'declaration' // デフォルトのタイプ
    };

    // ★★★ 修正はここまでです ★★★

    switch (maneuver.timing) {
        case 'ラピッド':
            battleState.rapidQueue.push(declaration);
            ui.addLog(`◆ [ラピッド] ${currentPerformer.name}が【${maneuver.name}】を宣言`);
            break;
        case 'ジャッジ':
            declaration.judgeTarget = judgeTargetDeclaration;
            battleState.judgeQueue.push(declaration);
            ui.addLog(`◆ [ジャッジ] ${currentPerformer.name}が【${maneuver.name}】を宣言`);
            break;
        case 'ダメージ':
            battleState.damageQueue.push(declaration);
            let logMessage = `◆ [ダメージ] ${currentCharacter.name}が【${maneuver.name}】を宣言`;
            // ログ表示もfinalTargetを参照するように修正
            if (finalTarget && finalTarget.id !== currentCharacter.id) {
                logMessage += ` (対象: ${finalTarget.name})`;
            }
            ui.addLog(logMessage);
            break; 
        case 'アクション':
        default:
            if (maneuver.timing === 'アクション') {
                // アクション宣言の場合のみ、hasActedThisCountを更新し、typeを上書き
                charManager.updateCharacter(performerId, { hasActedThisCount: true });
                declaration.type = 'action';
                battleState.actionQueue.push(declaration);
                ui.addLog(`◆ [アクション] ${currentPerformer.name}が【${maneuver.name}】を宣言`);
            }
            break;
    }
    
    determineNextStep();
}

export function determineNextStep() {
    if (!battleState.isStarted) {
        battleState.phase = 'SETUP';
        battleState.activeActors = [];
        battleState.potentialActors = [];
        ui.updateAllUI();
        return;
    }
    
    const potentialActorIds = Array.from(battleState.actorsForThisCount).filter(id => {
        const char = charManager.getCharacterById(id);
        return char && !char.hasActedThisCount && char.actionValue > 0;
    });
    const potentialActors = potentialActorIds.map(id => charManager.getCharacterById(id));
    battleState.potentialActors = potentialActors;
    
    const actingEnemies = potentialActors.filter(c => c.type === 'enemy');
    battleState.activeActors = actingEnemies.length > 0 ? actingEnemies : potentialActors.filter(c => c.type === 'pc');

    const prevPhase = battleState.phase;
    const hasUnresolvedRapids = battleState.rapidQueue.some(r => !r.checked);
    const hasUnresolvedActions = battleState.actionQueue.some(a => !a.checked);

    // ダメージキューに「未解決のダメージインスタンス」または「未解決のダメージ宣言」が残っているかを確認
    const hasPendingDamage = battleState.damageQueue.some(item => {
        if (item.type === 'instance') {
            return !item.applied; // ダメージインスタンスはappliedプロパティで判断
        } else if (item.type === 'declaration') {
            return !item.checked; // ダメージ宣言はcheckedプロパティで判断
        }
        return false; // それ以外のタイプは無視
    });

    if (battleState.activeActors.length > 0) {
        battleState.phase = 'ACTION_DECLARATION';
    } else if (hasUnresolvedRapids) {
        battleState.phase = 'RAPID_RESOLUTION';
    } else if (hasUnresolvedActions) {
        battleState.phase = 'ACTION_RESOLUTION';
    } else if (hasPendingDamage) {
        battleState.phase = 'DAMAGE_RESOLUTION';
    } else {
        const canAnyoneActInFuture = charManager.getCharacters().some(c => c.actionValue > 0 && !c.isDestroyed && !c.hasWithdrawn);
        battleState.phase = (battleState.count > 0 && canAnyoneActInFuture) ? 'COUNT_END' : 'TURN_END_PREPARATION';
    }

    if (prevPhase === 'ACTION_DECLARATION' && battleState.phase !== 'ACTION_DECLARATION') {
        applyAutoBuffsAtActionEnd();
    }
    
    ui.updateAllUI();
}

export function advanceCount() {
    const allCharacters = charManager.getCharacters().filter(c => !c.isDestroyed && !c.hasWithdrawn);
    const nextPossibleActionValues = allCharacters
        .map(c => c.actionValue)
        .filter(val => val < battleState.count);

    if (nextPossibleActionValues.length > 0) {
        startCount(Math.max(...nextPossibleActionValues));
    } else {
        startMadnessPhase();
    }
}

export function startMadnessPhase() {
    battleState.phase = 'MADNESS_PHASE';
    ui.addLog("【ターン終了】各ドールは未練に狂気点を1点加えます。");
}

export function proceedToNextTurn() {
    battleState.turn++;
    charManager.getCharacters().forEach(char => {
        if (char.activeBuffs) char.activeBuffs = char.activeBuffs.filter(buff => buff.duration !== 'end_of_turn');
    });
    charManager.startNewTurn();
    const allChars = charManager.getCharacters().filter(c => !c.isDestroyed && !c.hasWithdrawn);
    const maxActionValue = allChars.length > 0 ? Math.max(0, ...allChars.map(c => c.actionValue)) : 0;
    startCount(maxActionValue);
    determineNextStep();
}

export function toggleActionCheckedState(index) {
    const action = battleState.actionQueue[index];
    if (action) {
        action.checked = !action.checked;
        ui.addLog(`- ${action.performer.name}の【${action.sourceManeuver.name}】をチェックしました。`);
    }
    determineNextStep();
}

export function advancePhase() {
    const prevPhase = battleState.phase;
    switch (battleState.phase) {
        case 'ACTION_DECLARATION':
            if (battleState.activeActors.length === 0) {
                if (battleState.rapidQueue.length > 0) {
                    battleState.phase = 'RAPID_RESOLUTION';
                } else if (battleState.actionQueue.length > 0) {
                    battleState.phase = 'ACTION_RESOLUTION';
                } else {
                    battleState.phase = 'COUNT_END';
                }
            }
            break;
    }
    if (prevPhase !== battleState.phase) {
        determineNextStep();
    }
}

async function resolveRapidByIndex(index) {
    const declaration = battleState.rapidQueue[index];
    if (!declaration || declaration.checked) return;

    // 全てのラピッドマニューバを効果解決エンジンに通すように統一
    await resolveSingleAction(declaration);

    declaration.checked = true;
    determineNextStep();
}

async function resolveActionByIndex(index, diceResult = null) {
    const declaration = battleState.actionQueue[index];
    if (!declaration || declaration.checked) return;
    
    // totalBonusは不要になり、diceResultを直接渡す
    await resolveSingleAction(declaration, diceResult); 
    declaration.checked = true;

    if (battleState.actionQueue.every(d => d.checked)) {
        resolveQueuedMoves();
    } else {
        determineNextStep();
    }
}

function checkJudgeItem(index) {
    const declaration = battleState.judgeQueue[index];
    if (declaration && !declaration.checked) {
        declaration.checked = true;
        ui.addLog(`> 解決：[ジャッジ] ${declaration.performer.name}【${declaration.sourceManeuver.name}】`);
    }
    determineNextStep();
}

export function applySupport(judgeIndex, targetDeclarationId) {
    const judgeDeclaration = battleState.judgeQueue[judgeIndex];
    // ★ ここでは actionQueue しか見ていないが、ラピッド攻撃なども対象になる可能性があるため、両方を検索する
    const allDeclarations = [...battleState.actionQueue, ...battleState.rapidQueue];
    const targetDeclaration = allDeclarations.find(d => d.id === targetDeclarationId);

    if (judgeDeclaration && targetDeclaration) {
        // 1. このジャッジが「支援」なのか「妨害」なのかを判断する
        const isTargetAlly = judgeDeclaration.performer.type === targetDeclaration.performer.type;
        const modType = isTargetAlly ? 'support' : 'hindrance';

        // 2. 判断結果を宣言オブジェクトに記録する
        judgeDeclaration.modType = modType;

        // 格納先のプロパティを .target から .judgeTarget に変更します
        judgeDeclaration.judgeTarget = targetDeclaration;

        judgeDeclaration.checked = true;
        
        // ログをより分かりやすくする
        const typeText = modType === 'support' ? '支援' : '妨害';
        ui.addLog(`> ${judgeDeclaration.performer.name}が【${judgeDeclaration.sourceManeuver.name}】で「${targetDeclaration.sourceManeuver.name}」を${typeText}しました`);
        
        determineNextStep();
    }
}

export function applyDamage(index) {
    const damageInfo = battleState.damageQueue[index];
    if (damageInfo && damageInfo.type === 'instance' && !damageInfo.applied) {
        damageInfo.applied = true;
        const targetId = damageInfo.target.id;
        
        // ★★★ 関連するダメージ宣言も "解決済み" としてマークする ★★★
        battleState.damageQueue.forEach(item => {
            if (item.type === 'declaration') {
                // 【庇う】のように、このダメージインスタンスの対象者をターゲットにしていた宣言
                if (item.target?.id === targetId) {
                    item.checked = true;
                }
                // 【ジェットノズル】のように、このダメージインスタンスの実行者をパフォーマーとする宣言
                if (damageInfo.sourceAction?.performer.id === item.performer.id) {
                    item.checked = true;
                }
            }
        });

        // バフ解除などのクリーンアップ
        charManager.clearTemporaryBuffs(targetId, 'until_damage_applied');
        charManager.clearTemporaryBuffs(damageInfo.sourceAction.performer.id, 'until_damage_applied');
    }
    determineNextStep();
}

function resolveQueuedMoves() {
    if (battleState.moveQueue.length > 0) {
        ui.addLog("--- 移動解決フェーズ ---");

        const finalMoveQueue = battleState.moveQueue.map(move => {
            const originalDeclaration = battleState.actionQueue.find(decl => decl.id === move.declarationId);
            
            let totalDebuff = 0;
            if (originalDeclaration && originalDeclaration.debuffs) {
                originalDeclaration.debuffs.forEach(debuff => {
                    totalDebuff += debuff.value || 0;
                });
            }

            const rows = ["奈落", "地獄", "煉獄", "花園", "楽園"];
            const char = charManager.getCharacterById(move.characterId);
            const currentIndex = rows.indexOf(char.area);
            const targetIndex = rows.indexOf(move.targetArea);
            const originalDistance = Math.abs(targetIndex - currentIndex);
            
            const finalDistance = Math.max(0, originalDistance + totalDebuff);

            if (finalDistance < originalDistance) {
                ui.addLog(`→ ${char.name}の移動は妨害され、移動距離が${originalDistance - finalDistance}減少！`);
            }

            if (finalDistance === 0) {
                 if (originalDistance > 0) ui.addLog(`→ ${char.name}の移動は完全に妨害された！`);
                return null;
            }
            
            let finalIndex;
            if (targetIndex > currentIndex) {
                finalIndex = Math.min(rows.length - 1, currentIndex + finalDistance);
            } else {
                finalIndex = Math.max(0, currentIndex - finalDistance);
            }
            
            const newTargetArea = rows[finalIndex];
            if (char.area !== newTargetArea) {
                ui.addLog(`→ ${char.name}は「${newTargetArea}」へ移動`);
            }
            
            return {
                characterId: move.characterId,
                targetArea: newTargetArea
            };
        }).filter(move => move !== null);
        
        charManager.applyQueuedMoves(finalMoveQueue);
        battleState.moveQueue = [];
    }
    checkAllDamageApplied();
}

function checkAllDamageApplied() {
    const pendingDamage = battleState.damageQueue.some(d => !d.applied);
    if (pendingDamage) {
        battleState.phase = 'DAMAGE_RESOLUTION';
        ui.addLog("--- ダメージ解決フェーズ開始 ---");
    } else {
        battleState.phase = 'COUNT_END';
        // ui.addLog("--- カウント終了 ---");
    }
    determineNextStep();
}

export function redirectDamage(damageId, newTarget) {
    const damageInfo = battleState.damageQueue.find(d => d.id === damageId);
    if (damageInfo && newTarget) {
        ui.addLog(`＞ ${newTarget.name} が ${damageInfo.target.name} へのダメージを肩代わりしました。`);
        damageInfo.target = newTarget;
    }
    // ★ ここで determineNextStep() を呼び出す必要はありません。
    //   呼び出し元の handleDamageItemClick で宣言をチェック済みにした後に呼び出されるためです。
}

export function restoreBattleState(turn, characters) {
    battleState.isStarted = true;
    battleState.turn = turn;
    const newCount = Math.max(0, ...characters.map(c => c.actionValue));
    startCount(newCount);
}

export function resetToSetupPhase() {
    battleState = {
        isStarted: false, turn: 1, count: 0, activeActors: [], potentialActors: [],
        actorsForThisCount: new Set(), phase: 'SETUP', actionQueue: [], rapidQueue: [],
        judgeQueue: [], damageQueue: [], moveQueue: [], shouldScrollToCount: false,
    };
    determineNextStep();
}

// ===================================================================================
//  効果解決エンジン (Effect Resolution Engine)
// ===================================================================================

async function resolveSingleAction(declaration, diceResult = null) {
    const { performer, sourceManeuver, target, timing } = declaration;

    // --- 解決直前の前提条件（特に射程）を再チェック ---
    let isStillValid = true;
    let characterToTestRange = null; // 射程チェックの対象となるキャラクター

    // 移動妨害の場合、ターゲットは「移動宣言の実行者」
    if (sourceManeuver.tags?.includes('移動妨害') && target) {
        characterToTestRange = target.performer;
    } 
    // 通常の対象指定マニューバの場合
    else if (target) {
        characterToTestRange = target;
    }

    // 射程チェックが必要なマニューバか判定
    if (characterToTestRange) {
        const { hasTarget } = checkTargetAvailability(performer, sourceManeuver, [characterToTestRange]);
        if (!hasTarget) {
            isStillValid = false;
        }
    }
    
    // 前提条件を満たさなくなった場合は、マニューバを失敗させて終了
    if (!isStillValid) {
        ui.addLog(`→ [${timing}] ${performer.name}の【${sourceManeuver.name}】は 対象が射程外になったため失敗`);
        return; // この後の処理をすべて中断
    }

    // ui.addLog(`> 解決：${performer.name}【${sourceManeuver.name}】`);

    if (sourceManeuver.isEscapeAttempt) {
        await performEscapeRoll({ performer, declaration });
        return; 
    }
    if (!sourceManeuver.effects || sourceManeuver.effects.length === 0) {
        if (sourceManeuver.name === '待機') ui.addLog(`${performer.name}は状況をうかがっている。`);
        else ui.addLog(`※ 効果の定義がありません`);
        return;
    }
    // ★★★ ここからが今回の修正箇所です ★★★
    // context オブジェクトを構築する際に、performer を正しく含めます
    const context = { performer, target: declaration.target, declaration, diceResult };
    // ★★★ 修正はここまでです ★★★

    let allOnHitEffects = [];
    for (const effectRef of sourceManeuver.effects) {
        const onHitEffects = await executeEffect(effectRef, context);
        allOnHitEffects.push(...onHitEffects);
    }

    if (allOnHitEffects.length > 0) {
        ui.addLog(`→ 追加効果(${allOnHitEffects.join(',')})が発動！`);
        for (const effectName of allOnHitEffects) {
            await executeEffect({ ref: effectName, params: {} }, context);
        }
    }
}

async function executeEffect(effectRef, context) {
    let onHitEffects = [];
    const effectDefinition = data.getEffectDefinition(effectRef.ref);
    if (!effectDefinition) {
        // 効果定義が見つからない場合は警告を出し、何もしない
        console.warn(`※ [Engine] Effect definition not found for: ${effectRef.ref}`);
        return onHitEffects;
    }
    
    const params = effectRef.params || {};
    for (const actionTemplate of effectDefinition.actions) {
        const concreteAction = expandParams(actionTemplate, params);
        switch (concreteAction.action_type) {
            case 'attack_roll':
                const { hit, on_hit } = await performAttackRoll(concreteAction, context);
                if (hit && on_hit) onHitEffects.push(...on_hit);
                break;
            case 'move_character':
                performMoveCharacter(concreteAction, context);
                break;
            case 'apply_buff':
                performApplyBuff(concreteAction, context);
                break;
            case 'escape_roll':
                await performEscapeRoll(context);
                break;
            case 'modify_action_value':
                performModifyActionValue(concreteAction, context);
                break;
            
            case 'modify_move_distance':
                // 移動妨害効果を対象の移動宣言に紐付ける処理
                const { performer, declaration } = context;
                // 移動妨害マニューバの宣言時、targetには対象の「移動宣言」が入っている
                const moveDeclaration = declaration.target; 

                if (moveDeclaration && moveDeclaration.sourceManeuver.tags.includes('移動')) {
                    if (!moveDeclaration.debuffs) {
                        moveDeclaration.debuffs = [];
                    }
                    moveDeclaration.debuffs.push({
                        source: declaration.sourceManeuver.name,
                        value: concreteAction.value || 0
                    });
                    ui.addLog(`${performer.name}が【${declaration.sourceManeuver.name}】で${moveDeclaration.performer.name}の移動を妨害！`);
                }
                break;

            case 'deal_damage':
            case 'chain_attack':
            case 'severance_roll':
                // これらは on_hit などで呼び出されるキーワード効果であり、ここでは何もしない
                break;
            default:
                ui.addLog(`※ [Engine] 未対応: ${concreteAction.action_type}`);
        }
    }
    return onHitEffects;
}

async function performAttackRoll(action, context) {
    const { performer, target, declaration, diceResult } = context; 
    // damageQueueに追加するオブジェクトのperformerは、必ず元の宣言(declaration)から取得する
    const originalPerformer = declaration.performer;

    if (!target) {
        ui.addLog(`攻撃対象がいません`);
        return { hit: false, on_hit: [] };
    }

    // ダイスロールの結果がなければ、処理を中断
    if (!diceResult) {
        console.error("performAttackRollにdiceResultが渡されていません。攻撃が解決されませんでした。");
        // 本来ここに来ることはないが、安全のために失敗として扱う
        return { hit: false, on_hit: [] };
    }

    const { result, hitLocation, rollValue } = diceResult;
    const onHitEffects = action.on_hit_effects || action.on_hit || [];

    let damageBonus = 0;
    if (performer.activeBuffs) {
        performer.activeBuffs.forEach(buff => {
            if (buff.duration === 'onetime_next_action' && buff.stat === 'damageBonus') {
                damageBonus += buff.value;
            }
        });
    }
    
    if (result === '大失敗') {
        // ▼▼▼ ここからが修正箇所です ▼▼▼

        const maneuver = declaration.sourceManeuver;
        let candidates = [];
        
        // 1. 「攻撃対象エリア」にいる味方を候補に追加
        const targetArea = target.area;
        const alliesInTargetArea = charManager.getCharacters().filter(c => 
            c.type === performer.type && // 味方である
            c.area === targetArea &&      // 攻撃対象と同じエリアにいる
            !c.isDestroyed && 
            !c.isWithdrawn
        );
        candidates.push(...alliesInTargetArea);

        // 2. 「攻撃者自身」を候補に追加（重複しないように確認）
        if (!candidates.some(c => c.id === performer.id)) {
            candidates.push(performer);
        }

        let selected = null;
        
        if (candidates.length > 0) {
            selected = await new Promise(res => {
                const items = candidates.map(c => ({ label: c.name, onClick: () => res(c) }));
                ui.showModal({ 
                    title: '大失敗：誤爆対象を選択', 
                    items,
                    closable: false
                    // onRenderは不要
                });
            });
        }
        
        if (selected) {
            // 3. ダメージと効果を元のマニューバから引き継ぐ
            const baseDamage = action.damage || 0;
            const onHitEffects = action.on_hit_effects || action.on_hit || [];

            battleState.damageQueue.push({
                id: `damage_${Date.now()}_${Math.random()}`,
                type: 'instance',
                performer: originalPerformer,
                target: selected,
                amount: baseDamage, // ★ 元のマニューバのダメージ量を適用
                finalAmount: baseDamage, // 最終ダメージ量（この時点では増減なし）
                baseAmount: baseDamage,  // 基本ダメージ量を記録
                bonusAmount: 0,          // ボーナスダメージ量を記録
                location: '防御側任意',   // ★「防御側任意」に修正
                sourceAction: declaration,
                applied: false,
                checked: false,
                rollValue: rollValue || 0,
                isFumble: true,
                onHitEffects: onHitEffects // ★ 元のマニューバの効果を引き継ぐ
            });
            ui.addLog(`→ ${selected.name}に誤爆！ ${baseDamage}点のダメージ！`);
        } else {
            // 候補者がいなかった場合（通常は発生しないが安全のため）
            ui.addLog("→ 攻撃は大失敗したが、誤爆対象がいなかった。");
        }
        
        // ▲▲▲ 修正はここまでです ▲▲▲

        return { hit: false, on_hit: [] };
    }

    const hit = result.includes('成功');
    if (hit) {
        let locationText = hitLocation;
        if (rollValue >= 11) {
            locationText = '攻撃側任意';
        } else if (rollValue === 6) {
            locationText = '防御側任意';
        }
        
        const baseDamage = action.damage || 0;
        // ログ出力用に、防御を考慮しない「初期合計ダメージ」を計算する
        let initialTotalDamage = baseDamage + damageBonus; // damageBonusはスキル/バフのボーナス
        if (rollValue >= 11) {
            initialTotalDamage += (rollValue - 10); // 大成功ボーナスを加算
        }

        ui.addLog(`→ ${target.name}に命中！`);
        battleState.damageQueue.push({
            id: `damage_${Date.now()}_${Math.random()}`,
            type: 'instance',
            performer: originalPerformer,
            target,
            // ▼▼▼ ここを修正 ▼▼▼
            baseAmount: baseDamage, // 基本ダメージのみを記録
            location: locationText,
            // finalAmount, bonusAmount は削除
            // ▲▲▲ 修正ここまで ▲▲▲
            sourceAction: declaration,
            applied: false,
            checked: false,
            rollValue: rollValue || 0,
            onHitEffects: action.on_hit_effects || action.on_hit || [],
            damageBonusSources: originalPerformer.activeBuffs?.filter(b => b.duration === 'onetime_next_action' && b.stat === 'damageBonus').map(b => ({ source: b.source, value: b.value })) || []
        });
        // ログ出力には、計算した initialTotalDamage を使用する
        ui.addLog(`→ ${target.name}に${initialTotalDamage}点のダメージ！`);    
    } else {
        ui.addLog(`→ 攻撃失敗`);
    }
    
    charManager.clearTemporaryBuffs(originalPerformer.id, 'onetime_next_action');
    return { hit, on_hit: onHitEffects };
}

function performMoveCharacter(action, context) {
    const { performer, target, declaration } = context;
    const moveTarget = action.target === 'self' ? performer : target;
    if (!moveTarget) return;

    const directionOrArea = declaration.sourceManeuver.targetArea;
    if (!directionOrArea) return;

    let movePower = 1;
    if (action.distance) {
        const rangeParts = String(action.distance).split('-');
        movePower = parseInt(rangeParts[1] || rangeParts[0], 10);
    }

    let moveBonus = 0;
    const allActorManeuvers = [
        ...moveTarget.skills.map(name => data.getManeuverByName(name)),
        ...Object.values(moveTarget.partsStatus).flat().filter(p => !p.damaged).map(p => data.getManeuverByName(p.name))
    ].filter(m => m);

    for (const actorManeuver of allActorManeuvers) {
        if (actorManeuver.timing === 'オート' && actorManeuver.effects) {
            for (const effect of actorManeuver.effects) {
                if (effect.ref === 'APPLY_BUFF' && effect.params?.stat === 'moveDistanceBonus') {
                    const condition = effect.params.condition;
                    if (condition && Array.isArray(condition)) {
                        const maneuverTags = declaration.sourceManeuver.tags || [];
                        if (condition.some(cond => maneuverTags.includes(cond))) {
                            moveBonus += effect.params.value || 0;
                        }
                    } else {
                        moveBonus += effect.params.value || 0;
                    }
                }
            }
        }
    }
    const baseMovePower = movePower + moveBonus;

    // 宣言に紐付いた移動妨害デバフを計算
    let totalDebuff = 0;
    if (declaration.debuffs) {
        declaration.debuffs.forEach(debuff => {
            totalDebuff += debuff.value || 0;
        });
    }

    const finalMovePower = Math.max(0, baseMovePower + totalDebuff);

    if (totalDebuff < 0) {
        ui.addLog(`${moveTarget.name}は移動妨害により、移動距離 -${Math.abs(totalDebuff)}`);
    }
    
    if (finalMovePower === 0) {
        if (baseMovePower > 0) ui.addLog(`→ ${moveTarget.name}の移動は完全に妨害された！`);
        return; // 移動しないのでここで処理終了
    }

    const rows = ["奈落", "地獄", "煉獄", "花園", "楽園"];
    const currentIndex = rows.indexOf(moveTarget.area);
    let newArea;

    if (directionOrArea.endsWith('方向')) {
        let newIndex = currentIndex;
        if (directionOrArea === '奈落方向') newIndex = Math.max(0, currentIndex - finalMovePower);
        else newIndex = Math.min(rows.length - 1, currentIndex + finalMovePower);
        newArea = rows[newIndex];
    } else {
        newArea = directionOrArea;
    }

    // ラピッドタイミングの移動は即時解決する
    if (declaration.timing === 'ラピッド') {
        if (moveTarget.area !== newArea) {
            ui.addLog(`→ [ラピッド] ${moveTarget.name}は「${newArea}」へ移動`);
        }
        charManager.updateCharacter(moveTarget.id, { area: newArea });
    } else {
        // アクションタイミングの移動は従来通りmoveQueueに予約する
        if (moveTarget.area !== newArea) {
            ui.addLog(`→ ${moveTarget.name}は「${newArea}」へ移動を企図`);
        }
        battleState.moveQueue.push({ characterId: moveTarget.id, targetArea: newArea, declarationId: declaration.id });
    }
}

function performApplyBuff(action, context) {
    const { performer } = context;
    const buff = action.buff ? action.buff : action;
    switch (buff.stat) {
        case 'maxActionValue':
            charManager.updateCharacter(performer.id, {
                baseActionValue: (performer.baseActionValue || 6) + buff.value
            });
            ui.addLog(`${performer.name}：最大行動値 ${buff.value > 0 ? '+' : ''}${buff.value}`);
            break;
        case 'attackCheckBonus':
            performer.activeBuffs.push({
                source: context.declaration.sourceManeuver.name, stat: buff.stat,
                value: buff.value, duration: buff.duration
            });
            // ui.addLog(`→ ${performer.name}の【${context.declaration.sourceManeuver.name}】：ターン終了まで攻撃判定 +${buff.value}`);
            ui.addLog(`→ ターン終了まで攻撃判定 +${buff.value}`);
            break;
    }
}
//
function performModifyActionValue(action, context) {
    const target = context.target;
    if (!target) return;
    const value = action.value || 0;
    if (value === 0) return;
    charManager.updateCharacter(target.id, { actionValue: target.actionValue + value });
    if (value < 0) ui.addLog(`→ ${target.name} は転倒した！ (行動値${value})`);
    else ui.addLog(`→ ${target.name} の行動値が ${value > 0 ? '+' : ''}${value} された。`);
}

async function performEscapeRoll(context) {
    const { performer } = context;
    ui.addLog(`> ${performer.name}の逃走判定`);
    return new Promise(resolve => {
        performDiceRoll({
            command: 'NC', showToast: true,
            callback: (result) => {
                if (result.includes('成功')) {
                    ui.addLog(`→ 逃走成功！ ${performer.name}は戦場から離脱`);
                    charManager.updateCharacter(performer.id, { hasWithdrawn: true });
                } else {
                    ui.addLog(`→ 逃走失敗！ ${performer.name}は戦場に残留`);
                }
                // 状態変更が完了したことを呼び出し元に伝えるために resolve() する
                resolve();
            }
        });
    });
}