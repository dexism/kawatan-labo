/**
 * @file battle-helpers.js
 * @description 戦闘関連の共通計算処理を担当するヘルパーモジュール。
 */
export const version = "1.1.5";

import * as charManager from './character-manager.js';
import * as data from './data-handler.js';

/**
 * キャラクターとマニューバの情報から、射程ボーナスを考慮した最終的な有効射程を計算する
 * @param {object} character - 行動するキャラクターのオブジェクト
 * @param {object} maneuver - 使用するマニューバのオブジェクト
 * @returns {{minRange: number, maxRange: number}} 最小射程と最大射程
 */
export function calculateManeuverRange(character, maneuver) {
    const range = maneuver.range;
    if (!range || isNaN(parseInt(range[0], 10))) {
        return { minRange: NaN, maxRange: NaN };
    }

    let rangeBonus = 0;

    // キャラクターが持つ全てのスキルと損傷していないパーツをスキャン
    const allActorManeuvers = [
        ...(character.skills || []).map(name => data.getManeuverByName(name)),
        ...Object.values(character.partsStatus || {}).flat().filter(p => !p.damaged).map(p => data.getManeuverByName(p.name))
    ].filter(m => m); // nullを除外

    for (const actorManeuver of allActorManeuvers) {
        if (actorManeuver.timing === 'オート' && actorManeuver.effects) {
            for (const effect of actorManeuver.effects) {
                if (effect.ref === 'APPLY_BUFF' && effect.params?.stat === 'rangeBonus') {
                    const condition = effect.params.condition;
                    if (condition && Array.isArray(condition)) {
                        const maneuverTags = maneuver.tags || [];
                        if (condition.some(cond => maneuverTags.includes(cond))) {
                            rangeBonus += effect.params.value || 0;
                        }
                    } else {
                        rangeBonus += effect.params.value || 0;
                    }
                }
            }
        }
    }

    const rangeParts = String(range).split('～');
    const minRange = parseInt(rangeParts[0], 10);
    const maxRange = parseInt(rangeParts[1] || rangeParts[0], 10) + rangeBonus;
    
    return { minRange, maxRange };
}
/**
 * ダメージインスタンスと現在の戦闘状態から、最終的なダメージ量を計算する
 * @param {object} damageInstance - battleState.damageQueue 内のダメージ情報オブジェクト
 * @returns {{finalAmount: number, baseAmount: number, totalBonus: number, totalDefense: number}}
 */
export function calculateFinalDamage(damageInstance) {
    if (!damageInstance || damageInstance.type !== 'instance') {
        return { finalAmount: 0, baseAmount: 0, totalBonus: 0, totalDefense: 0 };
    }
    
    // 攻撃者(performer)は元の宣言から取得
    const { performer } = damageInstance.sourceAction;
    // ダメージを受ける対象(target)は、ダメージインスタンスから直接取得する
    const { target } = damageInstance;

    const currentPerformer = charManager.getCharacterById(performer.id);
    const currentTarget = charManager.getCharacterById(target.id);

    if (!currentPerformer || !currentTarget) {
        return { finalAmount: 0, baseAmount: 0, totalBonus: 0, totalDefense: 0 };
    }

    const baseAmount = damageInstance.baseAmount || 0;
    let totalBonus = 0;
    let totalDefense = 0;

    // --- ① ボーナスダメージの計算 ---
    // a) 大成功によるボーナス
    if (damageInstance.rollValue >= 11) {
        totalBonus += (damageInstance.rollValue - 10);
    }
    /*
    // b) 【殺劇】など、ダメージインスタンスに記録されたボーナス
    if (damageInstance.bonusAmount) {
        totalBonus += damageInstance.bonusAmount;
    }
    */
    // b) パッシブスキルや宣言されたバフによるボーナス (【スパイク】など)
    (currentPerformer.activeBuffs || []).forEach(buff => {
        if (buff.stat === 'damageBonus' && (buff.duration === 'onetime_next_action' || buff.duration === 'until_damage_applied')) {
            totalBonus += buff.value || 0;
        }
    });

    // --- ② 防御・ダメージ軽減の計算 ---

    // a) 宣言された防御バフ (【うろこ】など)
    // currentTarget (実際にダメージを受けるキャラクター) のバフを見るようにする
    (currentTarget.activeBuffs || []).forEach(buff => {
        if (buff.stat === 'defense' && buff.duration === 'until_damage_applied') {
            totalDefense += buff.value || 0;
        }
    });
    // b) パッシブの防御効果 (【ガントレット】など)
    // currentTarget (実際にダメージを受けるキャラクター) のパーツを見るようにする
    const allManeuvers = Object.values(currentTarget.partsStatus).flat()
        .map(p => !p.damaged ? data.getManeuverByName(p.name) : null)
        .filter(m => m?.timing === 'オート' && m.effects);

    allManeuvers.forEach(maneuver => {
        maneuver.effects.forEach(effect => {
            if (effect.ref === 'APPLY_PASSIVE_DEFENSE' && effect.params?.value) {
                const location = effect.params.condition?.replace('hit_location_is_', '');
                if (damageInstance.location.toLowerCase().includes(location)) {
                    totalDefense += effect.params.value;
                }
            }
        });
    });

    const finalAmount = Math.max(0, baseAmount + totalBonus - totalDefense);

    return { finalAmount, baseAmount, totalBonus, totalDefense };
}