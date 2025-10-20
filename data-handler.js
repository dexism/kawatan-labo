/**
 * @file data-handler.js
 * @description アプリケーションのすべてのマスターデータ（JSON）の読み込み、管理、提供を担当するモジュール。
 *              UIはこのモジュールを通じてデータにアクセスする。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.6.1"; // パッチバージョンを更新: 新規データソース追加

// ===================================================================================
//  モジュール内 プライベート変数
// ===================================================================================

let allManeuverData = {};
let maneuverNameMap = {};
let regretMasterData = {};
let takaramonoMasterData = {};
let memoryFragmentsData = {};
let memoryFragmentsAlphaData = {}; // 追加
let memoryFragmentsBetaData = {}; // 追加
let awakeningLocationsData = {}; // 追加
let posthumousHistoryData = {}; // 追加
let maneuverEffectsDB = {};
let undeadMasterData = {};
let coreData = {}; 
let hintMasterData = {};

// ===================================================================================
//  エクスポートされる関数 (Public API)
// ===================================================================================

export async function loadAllData() {
  try {
    // ファイル名を配列で管理
    const maneuverFiles = [
      'positions.json', 
      'classes.json', 
      'basic_parts.json',
      'armed_parts.json', 
      'mutant_parts.json', 
      'custom_parts.json',
      'tegoma_skills.json', 
      'tegoma_parts.json', 
      'tegoma_parts0.json' 
    ];

    // 各ファイルへのfetchリクエストを生成
    const maneuverPromises = maneuverFiles.map(file => fetch(`/data/maneuvers/${file}`).then(res => res.json()));
    
    const [
      hintRes,
      regretRes, takaramonoRes, memoryRes, undeadRes, coreRes, effectsDbRes,
      awakeningRes, // 追加
      posthumousRes, // 追加
      memoryAlphaRes, // 追加
      memoryBetaRes, // 追加
      ...maneuverResults
    ] = await Promise.all([
      fetch('/data/hint.json'),
      fetch('/data/regret.json'), 
      fetch('/data/takaramono.json'),
      fetch('/data/memory_fragments.json'), 
      fetch('/data/undead.json'),
      fetch('/data/core-data.json'), 
      fetch('/data/effects_db.json'),
      fetch('/data/awakening_locations.json'), // 追加
      fetch('/data/posthumous_history.json'), // 追加
      fetch('/data/memory_fragments_alpha.json'), // 追加
      fetch('/data/memory_fragments_beta.json'), // 追加
      ...maneuverPromises
    ]);

    // 分割したファイルをマージする
    allManeuverData = maneuverResults.reduce((acc, current) => ({ ...acc, ...current }), {});

    [
        hintMasterData, 
        regretMasterData, 
        takaramonoMasterData, 
        memoryFragmentsData,
        undeadMasterData, 
        coreData, 
        maneuverEffectsDB,
        awakeningLocationsData, // 追加
        posthumousHistoryData, // 追加
        memoryFragmentsAlphaData, // 追加
        memoryFragmentsBetaData // 追加
    ] = await Promise.all([
        hintRes.json(), 
        regretRes.json(),
        takaramonoRes.json(), 
        memoryRes.json(),
        undeadRes.json(), 
        coreRes.json(), 
        effectsDbRes.json(),
        awakeningRes.json(), // 追加
        posthumousRes.json(), // 追加
        memoryAlphaRes.json(), // 追加
        memoryBetaRes.json() // 追加
    ]);

    maneuverNameMap = {};
    for (const id in allManeuverData) {
      const maneuver = allManeuverData[id];
      if (maneuver && maneuver.name) {
        maneuverNameMap[maneuver.name] = { id, ...maneuver };
      }
    }
    
    console.log("Data handler initialized successfully with new datasets!");

  } catch (error) {
    console.error("Error in data handler initialization:", error);
    throw error;
  }
}

export function getAllManeuvers() { return allManeuverData; }
export function getManeuverByName(name) { return maneuverNameMap[name]; }
export function getRegretData() { return regretMasterData; }
export function getTakaramonoData() { return takaramonoMasterData; }
export function getMemoryFragmentsData() { return memoryFragmentsData; }
export function getMemoryFragmentsAlphaData() { return memoryFragmentsAlphaData; } // 追加
export function getMemoryFragmentsBetaData() { return memoryFragmentsBetaData; } // 追加
export function getAwakeningLocationsData() { return awakeningLocationsData; } // 追加
export function getPosthumousHistoryData() { return posthumousHistoryData; } // 追加
export function getManeuverEffects() { return maneuverEffectsDB; }
export function getUndeadTemplates() { return undeadMasterData; }
export function getCoreData() { return coreData; }
export function getEffectDefinition(ref) { return maneuverEffectsDB[ref]; }
export function getHintData() { return hintMasterData; }

/**
 * 未練マスターデータの中からランダムに1つ未練を取得する
 * @returns {Object} ランダムに選ばれた未練オブジェクト {id, name, ...}
 */
export function getRandomRegret() {
    const regretIds = Object.keys(regretMasterData);
    if (regretIds.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * regretIds.length);
    const randomId = regretIds[randomIndex];
    
    return { id: randomId, ...regretMasterData[randomId] };
}

/**
 * undead.jsonに登録されている全てのキャラクター画像のパスを重複なく取得する
 * @returns {Array<string>} - 画像パスの文字列配列
 */
export function getAllCharacterImagePaths() {
    const allTemplates = getUndeadTemplates();
    const imagePaths = new Set(); 

    for (const id in allTemplates) {
        if (allTemplates[id] && allTemplates[id].img) {
            imagePaths.add(allTemplates[id].img);
        }
    }

    return [...imagePaths];
}

/**
 * 実行中に新しいマニューバデータを動的に追加する
 * @param {object} maneuverData - 追加するマニューバのデータオブジェクト
 */
export function addManeuverData(maneuverData) {
    if (!maneuverData || !maneuverData.name) {
        console.warn('追加しようとしたマニューバデータが無効です:', maneuverData);
        return;
    }

    if (maneuverNameMap[maneuverData.name]) {
        return;
    }
    
    const newId = `CSTM_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    maneuverData.id = newId;

    allManeuverData[newId] = maneuverData;
    maneuverNameMap[maneuverData.name] = maneuverData;

    console.log(`カスタムマニューバ「${maneuverData.name}」を動的に追加しました。`);
}

// data-handler.js の末尾に関数を追加

/**
 * 姉妹への未練マスターデータの中からランダムに1つ未練を取得する
 * @returns {Object|null} ランダムに選ばれた未練オブジェクト {id, name, ...} または null
 */
export function getRandomSisterRegret() {
    if (!regretMasterData) return null;

    // "SI-"で始まるキーのみを抽出
    const sisterRegretIds = Object.keys(regretMasterData).filter(key => key.startsWith('SI-'));
    
    if (sisterRegretIds.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * sisterRegretIds.length);
    const randomId = sisterRegretIds[randomIndex];
    
    return { id: randomId, ...regretMasterData[randomId] };
}