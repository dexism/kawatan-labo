// in ui-helpers.js
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.2.10";

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
    // 1. まず「たからもの」タグがあるか最優先でチェック
    if (maneuver.tags && maneuver.tags.includes('たからもの')) {
        return 'たからもの';
    }

    if (!maneuver.id) return 'その他';
    
    const coreData = data.getCoreData();
    if (!coreData || !coreData.positions) return 'データ読込中...';

    const id = maneuver.id;
    const prefix = id.substring(0, 2);
    const typePrefix = id.substring(0, 1);

    let baseText = 'スキル'; // デフォルトのテキスト

    // --- 1. まず、マニューバの基本的な種類を特定する ---
    if (coreData.positions[prefix]) {
        baseText = `ポジションスキル：${coreData.positions[prefix].name}`;
    } else if (coreData.classes[prefix]) {
        if (id.endsWith('-SP')) {
            baseText = `特化スキル：${coreData.classes[prefix].name}`;
        } else {
            baseText = `クラススキル：${coreData.classes[prefix].name}`;
        }
    } else if (prefix === 'BP') {
        baseText = '基本パーツ';
    } else if (['A', 'M', 'R'].includes(typePrefix) && !isNaN(parseInt(id.substring(1, 2), 10))) {
        const enhLevel = id.substring(1, 2);
        baseText = `強化パーツ：${enhLevel}レベル${coreData.enhancementTypes[typePrefix].name}`;
    } else if (id.startsWith('P')) {
        baseText = '手駒専用パーツ';
    } else if (coreData.pawnSkills[prefix]) {
        baseText = coreData.pawnSkills[prefix].name;
    } else if (coreData.commonAction && coreData.commonAction[prefix]) {
        baseText = coreData.commonAction[prefix].name;
    }

    // --- 2. 種類に関わらず、maliceLevel があれば追記する ---
    let maliceText = '';
    if (typeof maneuver.maliceLevel === 'number' && maneuver.maliceLevel > 0) {
        maliceText = `<span class="malice-level">悪意${maneuver.maliceLevel}</span>`;
    }
    
    return baseText + maliceText;
}

/**
マニューバデータから、そのマニューバの出典元（ポジション、クラスなど）を示すテキストを生成する
@param {object} maneuver - マニューバのマスターデータ
@returns {string} - 表示用の出典元テキスト (例: "ポジションスキル：アリス")
*/
export function getManeuverRulebookText(maneuver) {
    // 1. ルールブック情報の整形
    let rulebookInfo = 'その他';
    if (maneuver.source) {
        // ① 表記を「基本ルール」に変更
        let bookName = maneuver.source.book || '';
        if (bookName === '基本ルールブック') {
            bookName = '基本ルール';
        }

        rulebookInfo = bookName;

        if (maneuver.source.page) {
            rulebookInfo += ` p${maneuver.source.page}`;
        }
        // ② エラッタ情報があれば追記
        if (maneuver.source.errata) {
            rulebookInfo += `（エラッタ適用済）`;
        }
    }
    // ▲▲▲ 修正はここまでです ▲▲▲
    return rulebookInfo; // ★返り値を rulebookInfo に変更
}