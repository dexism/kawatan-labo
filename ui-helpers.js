// in ui-helpers.js
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.0.1";

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