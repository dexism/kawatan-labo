/**
 * @file character-converter.js
 * @description 外部キャラクターシートデータを内部形式に変換するモジュール
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.4.7"; // 緊急修正

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
        const name = sourceData.Name || sourceData.pc_name || sourceData.data_title || '名称未設定';
        converted.name = name;
        converted.displayName = name;
        converted.originalName = name;
        
        converted.description = `${sourceData.data_title || ''} | ${sourceData.Position_Name || ''}（${sourceData.MCLS_Name || ''}・${sourceData.SCLS_Name || ''}）`;
        converted.img = "/images/noimage.png";
        converted.category = "ドール";
        converted.initialArea = sourceData.sex || "煉獄";
        converted.baseActionValue = 6;
        
        const rawHintInput = sourceData.pc_carma;
        if (rawHintInput) {
            const allHints = data.getHintData();
            let foundHintName = null;
            for (const key in allHints) {
                const masterHintName = allHints[key].name;
                if (rawHintInput.includes(masterHintName)) {
                    foundHintName = masterHintName;
                    break;
                }
            }
            if (foundHintName) {
                const hintKey = Object.keys(allHints).find(key => allHints[key].name === foundHintName);
                converted.hint = {
                    key: hintKey,
                    name: foundHintName,
                    description: allHints[hintKey].description
                };
            } else {
                converted.hint = { name: rawHintInput, description: 'マスタデータに詳細が見つかりませんでした。' };
            }
        } else {
            converted.hint = null;
        }

        converted.position = sourceData.Position_Name || '';
        converted.mainClass = sourceData.MCLS_Name || '';
        converted.subClass = sourceData.SCLS_Name || '';
        
        const bonusMap = { '1': '武装', '2': '変異', '3': '改造' };
        converted.enhancementValue = { bonus: bonusMap[sourceData.ST_Bonus] || '武装' };

        converted.skills = [];
        converted.parts = { head: [], arms: [], torso: [], legs: [], body: [] };
        converted.treasures = []; // treasures配列を初期化

        const locationTypeMap = { '4': 'head', '5': 'arms', '6': 'torso', '7': 'legs' };
        const timingMap = { '1': 'オート', '2': 'アクション', '3': 'ジャッジ', '4': 'ダメージ', '5': 'ラピッド' };
        const categoryMap = { '1': '攻撃', '2': '攻撃', '3': '行動値', '4': '補助', '5': '妨害', '6': '防御', '7': '移動' };
        const powerRecordCount = sourceData.Power_name?.length || 0;

        // ループの前に一度だけたからものマスターデータを取得
        const allTreasures = data.getTakaramonoData();
        const treasureNames = Object.values(allTreasures).map(t => t.name);
        // ▲▲▲ 修正ここまで ▲▲▲

        for (let i = 0; i < powerRecordCount; i++) {
            const name = sourceData.Power_name[i];
            if (!name) continue;

            const hanteiCode = sourceData.Power_hantei[i];
            const location = locationTypeMap[hanteiCode];

            // ▼▼▼ ここからが今回の修正の中心 (2/2) ▼▼▼
            // isTreasureの判定を、上で定義したtreasureNamesを使って行う
            const isTreasure = treasureNames.includes(name);

            if (isTreasure) {
                if (!converted.treasures.includes(name)) {
                    converted.treasures.push(name);
                }
            }
            // ▲▲▲ 修正ここまで ▲▲▲

            // マニューバデータにない未知のものの処理
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
                    tags: [] 
                };
                data.addManeuverData(newManeuver);
            }
            
            // 既知のマニューバ、またはカスタム作成されたマニューバをリストに追加
            if (['1', '2', '3'].includes(hanteiCode)) {
                converted.skills.push(name);
            } else if (location) {
                converted.parts[location].push(name);
            } else {
                converted.skills.push(name);
            }
        }
        
        // --- 未練の変換 ---
        converted.regrets = [];
        const regretRecordCount = sourceData.roice_name?.length || 0;

        for (let i = 0; i < regretRecordCount; i++) {
            const targetName = sourceData.roice_name[i];
            const regretName = sourceData.roice_pos[i];
            if (targetName && regretName) {

                // ▼▼▼ ここからが今回の修正箇所 ▼▼▼
                
                // 1. sourceDataから値を取得し、数値に変換
                const pointsFromSheet = parseInt(sourceData.roice_damage[i], 10);

                // 2. 変換結果が数値でなければ(NaNであれば)、デフォルト値の3を設定
                const finalPoints = !isNaN(pointsFromSheet) ? pointsFromSheet : 3;

                const hasTreasureKeyword = targetName.includes('たからもの');
                const hasTreasureItemName = treasureNames.some(tName => targetName.includes(tName));
                const isForTreasure = hasTreasureKeyword || hasTreasureItemName;

                const regret = {
                    name: `${targetName}への${regretName}`,
                    points: finalPoints, // ★ 修正した値を代入
                    targetName: targetName,
                    regretName: regretName,
                    isForTreasure: isForTreasure
                };
                converted.regrets.push(regret);
                
                // ▲▲▲ 修正ここまで ▲▲▲
            }
        }
        
        converted.memories = [];
        // const allMemories = data.getMemoryFragmentData();
        const allMemories = data.getMemoryFragmentsData();
        const memoryRecordCount = sourceData.kakera_name?.length || 0;
        for (let i = 0; i < memoryRecordCount; i++) {
            const rawInput = sourceData.kakera_name[i];
            const memo = sourceData.kakera_memo[i];
            if (!rawInput) continue;

            let foundMemoryName = null;
            for (const key in allMemories) {
                const masterMemoryName = allMemories[key].name;
                if (rawInput.includes(masterMemoryName)) {
                    foundMemoryName = masterMemoryName;
                    break;
                }
            }
            const finalName = foundMemoryName || rawInput.trim();
            converted.memories.push({ name: finalName, memo });
        }

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