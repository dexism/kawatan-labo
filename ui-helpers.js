// in ui-helpers.js
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.1.5";

import * as data from './data-handler.js';

/**
 * マニューバのカテゴリ名から、CSSクラスのスラグ名を取得する
 * @param {string} categoryName - マニューバのカテゴリ名 (例: "攻撃")
 * @returns {string} - CSSクラスのスラグ名 (例: "attack")
 */
export function getCategoryClass(categoryName) {
    const coreData = data.getCoreData();
    const category = coreData.maneuverCategories.find(c => c.name === categoryName);
    return category ? category.slug : 'other';
}
/**
 * マニューバデータから、そのマニューバの出典元（ポジション、クラスなど）を示すテキストを生成する
 * @param {object} maneuver - マニューバのマスターデータ
 * @returns {string} - 表示用の出典元テキスト (例: "ポジションスキル：アリス")
 */
export function getManeuverSourceText(maneuver) {
    // IDがなければ"不明"と表示
    if (!maneuver.id) return '不明';
    
    const coreData = data.getCoreData();
    if (!coreData || !coreData.positions) return 'データ読込中...';

    const id = maneuver.id;
    const prefix = id.substring(0, 2);
    
    // 悪意点表示用のヘルパー関数
    const getMaliceText = (m) => {
        if (typeof m.maliceLevel === 'number') {
            return ` <span class="malice-level">：悪意${m.maliceLevel}</span>`;
        }
        return ''; // maliceLevelキーがなければ何も表示しない
    };

    // --- ポジションスキルの判定 ---
    if (coreData.positions[prefix]) {
        return `ポジションスキル：${coreData.positions[prefix].name}`;
    }
    // --- クラススキルの判定 ---
    if (coreData.classes[prefix]) {
        if (id.endsWith('-SP')) return `特化スキル：${coreData.classes[prefix].name}`;
        return `クラススキル：${coreData.classes[prefix].name}`;
    }
    // --- 基本パーツの判定 ---
    if (prefix === 'BP') {
        return `基本パーツ${getMaliceText(maneuver)}`;
    }
    // --- 強化パーツの判定 ---
    const enhType = id.substring(0, 1);
    const enhLevel = id.substring(1, 2);
    if (coreData.enhancementTypes[enhType] && ['1', '2', '3'].includes(enhLevel)) {
        return `強化パーツ：${enhLevel}レベル${coreData.enhancementTypes[enhType].name}${getMaliceText(maneuver)}`;
    }
    // --- 手駒専用スキルの判定 ---
    if (coreData.pawnSkills[prefix]) {
        return coreData.pawnSkills[prefix].name;
    }
    // --- 手駒専用パーツの判定 ---
    if (id.startsWith('P')) {
        // P0パーツとそれ以外で表示を分ける
        const maliceText = typeof maneuver.maliceLevel === 'number' && maneuver.maliceLevel > 0 
            ? `：悪意${maneuver.maliceLevel}` 
            : '';
        return `手駒専用パーツ${maliceText}`;
    }
    // --- 一般動作の判定 ---
    if (coreData.commonAction && coreData.commonAction[prefix]) {
        return coreData.commonAction[prefix].name;
    }
    
    return 'その他'; // どれにも当てはまらない場合のデフォルト
}