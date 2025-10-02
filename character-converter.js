/**
 * @file character-converter.js
 * @description 外部キャラクターシートデータを内部形式に変換するモジュール
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.1.17";

import * as data from './data-handler.js';

/**
 * 【完全変換版】
 * Vampire Blood形式のキャラクターシートデータを内部形式に変換する
 * @param {object} sourceData - キャラクターシートの元データ (chara オジェクト)
 * @returns {object|null} - 変換後のキャラクターオブジェクト、またはエラーの場合はnull
 */
export function convertVampireBloodSheet(sourceData) {
    if (!sourceData) {
        console.error("[Converter] 変換対象のデータ(sourceData)が存在しません。");
        return null;
    }

    try {
        const converted = {};

        // --- 基本情報の変換 ---
        converted.name = sourceData.Name || sourceData.pc_name || sourceData.data_title || '名称未設定';
        converted.description = `${sourceData.data_title || ''} | ${sourceData.Position_Name || ''}（${sourceData.MCLS_Name || ''}・${sourceData.SCLS_Name || ''}）`;
        // converted.name = sourceData.data_title || '名称未設定';
        // converted.description = `${sourceData.Position_Name || ''}（${sourceData.MCLS_Name || ''}・${sourceData.SCLS_Name || ''}）`;
        converted.img = "/images/noimage.png";
        converted.category = "ドール";
        converted.initialArea = "煉獄";
        converted.baseActionValue = 6;

        // --- ポジションとクラス ---
        converted.position = sourceData.Position_Name || '';
        converted.mainClass = sourceData.MCLS_Name || '';
        converted.subClass = sourceData.SCLS_Name || '';
        
        // --- 強化値 ---
        const bonusMap = { '1': '武装', '2': '変異', '3': '改造' };
        converted.enhancementValue = { bonus: bonusMap[sourceData.ST_Bonus] || '武装' };

        // --- スキルとパーツの振り分け ---
        converted.skills = [];
        converted.parts = { head: [], arms: [], torso: [], legs: [], body: [] };
        
        const locationTypeMap = { '4': 'head', '5': 'arms', '6': 'torso', '7': 'legs' };
        const timingMap = { '1': 'オート', '2': 'アクション', '3': 'ジャッジ', '4': 'ダメージ', '5': 'ラピッド' };
        const categoryMap = { '1': '攻撃', '2': '攻撃', '3': '行動値', '4': '補助', '5': '妨害', '6': '防御', '7': '移動' };
        const powerRecordCount = sourceData.Power_name?.length || 0;

        // ★★★ ここからが修正箇所です (たからものの事前特定) ★★★
        let treasureName = null;
        let treasureIndex = -1;

        // 1. まず「所属(shozoku)」に「たから」が含まれるものを最優先で探す
        treasureIndex = sourceData.Power_shozoku?.findIndex(s => s && s.includes('たから'));
        if (treasureIndex > -1) {
            treasureName = sourceData.Power_name[treasureIndex];
        } else {
            // 2. 所属で見つからなければ、「効果(memo)」に「たからもの」が含まれ、かつスキルではないものを探す
            treasureIndex = sourceData.Power_memo?.findIndex((memo, i) => {
                const hanteiCode = sourceData.Power_hantei[i];
                // hanteiCodeが 1,2,3 (スキル) ではない、かつ memo に「たからもの」が含まれる
                return !['1', '2', '3'].includes(hanteiCode) && memo && memo.includes('たからもの');
            });
            if (treasureIndex > -1) {
                treasureName = sourceData.Power_name[treasureIndex];
            }
        }
        converted.treasure = treasureName;
        // ★★★ 修正はここまでです ★★★

        for (let i = 0; i < powerRecordCount; i++) {
            const name = sourceData.Power_name[i];
            if (!name) continue;

            // 事前に特定したたからものと名前が一致したら、ループ内の処理をスキップ
            if (name === treasureName) continue;

            const hanteiCode = sourceData.Power_hantei[i];
            const location = locationTypeMap[hanteiCode];

            // --- データベースにないマニューバを動的に追加 ---
            if (!data.getManeuverByName(name)) {
                const typeCode = sourceData.Power_Type[i];
                const newManeuver = {
                    name: name,
                    timing: timingMap[sourceData.Power_timing[i]] || 'オート',
                    cost: sourceData.Power_cost[i] || 'なし',
                    range: sourceData.Power_range[i] || '自身',
                    effect: sourceData.Power_memo[i] || '効果不明',
                    description: sourceData.Power_memo[i] || '効果不明',
                    category: ['1', '2', '3'].includes(hanteiCode) ? 'スキル' : (categoryMap[typeCode] || '強化パーツ'),
                };
                data.addManeuverData(newManeuver);
            }
            
            if (['1', '2', '3'].includes(hanteiCode)) {
                converted.skills.push(name);
            } else if (location) {
                converted.parts[location].push(name);
            } else {
                converted.skills.push(name); // 箇所不定はスキルとする
            }
        }
        
        // --- たからものをパーツリストに追加 ---
        if (treasureName) {
            const hanteiCode = sourceData.Power_hantei[treasureIndex];
            const location = locationTypeMap[hanteiCode];
            if (location) {
                converted.parts[location].push(treasureName);
            } else {
                converted.parts.body.push(treasureName); // 箇所不定のたからものはbodyへ
            }
        }
        
        // --- 未練のインポート ---
        converted.regrets = [];
        const regretRecordCount = sourceData.roice_name?.length || 0;
        for (let i = 0; i < regretRecordCount; i++) {
            const targetName = sourceData.roice_name[i];
            const regretName = sourceData.roice_pos[i];
            if (targetName && regretName) {
                const regret = {
                    name: `${targetName}への${regretName}`,
                    points: parseInt(sourceData.roice_damage[i], 10) || 3
                };
                if (targetName === 'たからもの' && converted.treasure) {
                    regret.name = `${converted.treasure}への${regretName}`;
                    regret.category = 'たからもの';
                } else {
                    regret.categoryKey = 'SI';
                }
                converted.regrets.push(regret);
            }
        }
        
        // --- 記憶のカケラのインポート ---
        converted.memories = [];
        const memoryRecordCount = sourceData.kakera_name?.length || 0;
        for (let i = 0; i < memoryRecordCount; i++) {
            const name = sourceData.kakera_name[i];
            const memo = sourceData.kakera_memo[i];
            if (name) {
                converted.memories.push({ name, memo });
            }
        }

        // --- パーソナルデータのインポート ---
        converted.personalData = {
            title: sourceData.data_title || '',
            tags: sourceData.pc_tags || '',
            race: sourceData.shuzoku || 'ドール',
            age: sourceData.age || '',
            sex: sourceData.sex || '', 
            height: sourceData.pc_height || '',
            weight: sourceData.pc_weight || '',
            karma: sourceData.pc_carma || '', 
            hairColor: sourceData.color_hair || '',
            eyeColor: sourceData.color_eye || '',
            skinColor: sourceData.color_skin || '',
            memo: sourceData.pc_making_memo || ''
        };

        return converted;

    } catch (error) {
        console.error("キャラクターシートの変換中にエラーが発生しました:", error);
        return null;
    }
}