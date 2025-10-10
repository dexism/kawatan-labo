/**
 * @file battle-helpers.js
 * @description 戦闘関連の共通計算処理を担当するヘルパーモジュール。
 */
export const version = "1.0.1";

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