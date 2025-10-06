// battle-logic.js の全体を置き換える

/**
 * @file battle-logic.js
 * @description 戦闘の進行、状態管理、ルール判定、アクション解決を担当するモジュール。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.16.67"; // パッチバージョンを更新

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
    phase: 'SETUP',
    actionQueue: [],
    rapidQueue: [],
    judgeQueue: [],
    damageQueue: [],
    moveQueue: [],
    currentAction: null,
    shouldScrollToCount: false,
};

// ===================================================================================
//  公開 API (戦闘開始・状態取得)
// ===================================================================================

export function startBattle() {
    battleState.isStarted = true;
    battleState.turn = 1;
    
    const allChars = charManager.getCharacters();
    battleState.count = Math.max(0, ...allChars.map(c => c.actionValue));

    ui.renderCharacterCards();
    battleState.shouldScrollToCount = true;
    
    determineNextStep();
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
    // ターン制限のあるマニューバを使用済みとしてマーク
    // (タイミングに関わらず先に処理)
    if (char.turnLimitedManeuvers.has(maneuver.name)) {
        char.usedManeuvers.add(maneuver.name);
    }

    // ★★★ 宣言を各種キューに追加し、アクションタイミングの場合のみ追加処理を行う ★★★
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
            // ダメージタイミングは通常即時解決のため、キューには追加しない
            break;
        case 'アクション':
        default: // 'アクション' または 不明なタイミングはこちら
            // 1. hasActedThisCountフラグを立てる
            charManager.updateCharacter(char.id, { hasActedThisCount: true });

            // 2. activeActorsリストから宣言者を除外する
            battleState.activeActors = battleState.activeActors.filter(actor => actor.id !== char.id);
            
            // 3. アクションキューに追加
            battleState.actionQueue.push(declaration);
            ui.addLog(`◆[アクション] ${char.name}が【${maneuver.name}】を宣言。`);
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
    // isStarted フラグに基づいて処理を分岐
    if (!battleState.isStarted) {
        // 【戦闘準備中】
        battleState.phase = 'SETUP';
        battleState.activeActors = [];
        ui.updateBattleStatusUI();
        return;
    }

    // 【戦闘中】
    // 1. 行動権を持つキャラクターを特定
    const potentialActors = charManager.getCharacters().filter(c =>
        c.actionValue >= battleState.count &&
        !c.hasActedThisCount &&
        !c.isDestroyed &&
        !c.hasWithdrawn
    );
    const actingEnemies = potentialActors.filter(c => c.type === 'enemy');
    
    if (actingEnemies.length > 0) {
        battleState.activeActors = actingEnemies;
    } else {
        battleState.activeActors = potentialActors.filter(c => c.type === 'pc');
    }

    // 2. フェーズを決定
    const hasAnyPotentialActors = battleState.activeActors.length > 0;
    const hasUncheckedRapids = battleState.rapidQueue.some(a => !a.checked);
    const hasUncheckedActions = battleState.actionQueue.some(a => !a.checked);
    const hasPendingDamage = battleState.damageQueue.some(d => !d.applied);
    
    if (hasAnyPotentialActors) {
        battleState.phase = 'ACTION_DECLARATION';
    } else if (hasUncheckedRapids) {
        battleState.phase = 'RAPID_RESOLUTION';
    } else if (hasUncheckedActions) { // judgeキューは考慮しない方がシンプル
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

    // 3. UIを更新
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
        battleState.count = Math.max(...nextPossibleActionValues);
        battleState.shouldScrollToCount = true;
        resetAndStartNewCount();
        determineNextStep();
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

    // 1. カウント開始時点で行動権を持つキャラクターをリストアップして保持する
    const allCharacters = charManager.getCharacters().filter(c => !c.isDestroyed && !c.hasWithdrawn);
    battleState.activeActors = allCharacters.filter(c => c.actionValue >= battleState.count);
    
    // 2. hasActedThisCountフラグをリセット
    //    (activeActorsの判定とは独立させる)
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

export async function resolveActionByIndex(index, totalBonus = 0) { // デフォルト値を設定
    const declaration = battleState.actionQueue[index];
    if (!declaration || declaration.checked) return;
    
    const { targets } = checkTargetAvailability(declaration.performer, declaration.sourceManeuver);
    if (declaration.target && !targets.some(t => t.id === declaration.target.id)) {
        ui.addLog(`＞ 解決失敗: ${declaration.target.name} は射程外です。`);
        declaration.checked = true;
        determineNextStep();
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
    
    // ターン終了時に 'end_of_turn' のバフをクリアする
    charManager.getCharacters().forEach(char => {
        char.activeBuffs = char.activeBuffs.filter(buff => buff.duration !== 'end_of_turn');
    });

    charManager.startNewTurn();
    const allChars = charManager.getCharacters();
    const maxActionValue = Math.max(0, ...allChars.map(c => c.actionValue));
    battleState.count = maxActionValue > 0 ? maxActionValue : 0;
    battleState.shouldScrollToCount = true;
    ui.renderCharacterCards();
    resetAndStartNewCount();
    determineNextStep();
}

export function applyDamage(index) {
    const damageInfo = battleState.damageQueue[index];
    if (damageInfo && !damageInfo.applied) {
        damageInfo.applied = true;
        if (damageInfo.sourceAction) {
            damageInfo.sourceAction.damageApplied = true;
        }
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

function performMoveCharacter(action, context) {
    const { performer, declaration } = context;
    const targetArea = declaration.sourceManeuver.targetArea;
    if (!targetArea) {
        ui.addLog(`＞ [Engine] 移動先が指定されていません。`);
        return;
    }
    ui.addLog(`＞ 移動予約: ${performer.name} が ${targetArea} へ`);
    battleState.moveQueue.push({
        characterId: performer.id,
        targetArea: targetArea
    });
}

function performApplyBuff(action, context) {
    const { performer } = context;
    // actionオブジェクトに 'buff' プロパティが存在するかチェック
    const buff = action.buff ? action.buff : action;

    switch (buff.stat) {
        case 'maxActionValue':
            // 永続的な最大行動値の変更 (既存のロジック)
            charManager.updateCharacter(performer.id, {
                baseActionValue: (performer.baseActionValue || 6) + buff.value
            });
            ui.addLog(`＞ ${performer.name}の最大行動値が${buff.value > 0 ? '+' : ''}${buff.value}されました。`);
            break;

        case 'attackCheckBonus':
            // 一時的な攻撃判定ボーナスの追加 (新規ロジック)
            performer.activeBuffs.push({
                source: context.declaration.sourceManeuver.name,
                stat: buff.stat,
                value: buff.value,
                duration: buff.duration // 'end_of_turn' など
            });
            ui.addLog(`＞ ${performer.name}は【${context.declaration.sourceManeuver.name}】の効果で、ターン終了まで攻撃判定に+${buff.value}の修正を得た！`);
            break;

        default:
            ui.addLog(`＞ [Engine] 未対応のバフタイプ: ${buff.stat}`);
            console.warn(`[Engine] 未対応のバフタイプです: ${buff.stat}`);
    }
}

async function performAttackRoll(action, context) {
    const { performer, target, declaration } = context;
    if (!target) {
        ui.addLog(`＞ 攻撃対象がいません。`);
        return;
    }
    const bonus = context.totalAttackBonus || 0;
    const diceCommand = `NA${bonus >= 0 ? `+${bonus}` : bonus}`;
    return new Promise(resolve => {
        performDiceRoll({
            command: diceCommand,
            showToast: true,
            callback: (result, hitLocation) => {
                const hit = result && !result.includes('失敗');
                if (hit) {
                    ui.addLog(`＞ ${target.name}に命中！`);
                    let currentDamage = action.damage || 0;
                    battleState.damageQueue.push({
                        id: `damage_${Date.now()}_${Math.random()}`,
                        target: target,
                        amount: currentDamage,
                        location: hitLocation,
                        sourceAction: declaration,
                        applied: false
                    });
                    ui.addLog(`＞ 【${currentDamage}】点のダメージ！`);
                } else {
                    ui.addLog(`＞ 攻撃は失敗しました。`);
                }
                // ★ 命中結果とon_hit情報をオブジェクトで解決
                resolve({ hit, on_hit: action.on_hit || [] });
            }
        });
    });
}

async function resolveSingleAction(declaration, totalBonus = 0) { // デフォルト値を設定
    const { performer, sourceManeuver } = declaration;
    ui.addLog(`＞ 解決: ${performer.name} の【${sourceManeuver.name}】`);

    // 逃走試行フラグがあれば、逃走処理を直接実行して終了
    if (sourceManeuver.isEscapeAttempt) {
        await performEscapeRoll({}, { performer, declaration }); // actionとcontextを渡す
        return; 
    }

    if (!sourceManeuver.effects || sourceManeuver.effects.length === 0) {
        if (sourceManeuver.name === '待機') {
            ui.addLog(`＞ ${performer.name}は状況をうかがっている。`);
        } else {
            ui.addLog(`＞ 効果の定義がありません。`);
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
    
    // 復元されたキャラクターの行動値から現在のカウントを決定
    battleState.count = Math.max(0, ...characters.map(c => c.actionValue));
    battleState.shouldScrollToCount = true;

    // UIを戦闘モードに移行させる
    ui.renderCharacterCards(); 
    
    // カウントの初期化と次のステップの決定
    resetAndStartNewCount();
    determineNextStep(); 
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