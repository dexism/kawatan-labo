/**
 * @file dice-roller.js
 * @description 
 */

/**
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.5.29";

// import { showModal } from './ui-manager.js';
import { showModal, showToastNotification } from './ui-manager.js';
import { init as init3DDice, rollDice as roll3DDice } from './dice-3d.js';

// このファイルで使うマスターデータやグローバル関数を import する
// （script.jsから渡される想定）
let hintMasterData = {};
let regretMasterData = {};
let takaramonoMasterData = {};
let memoryFragmentsData = {};
let memoryFragmentsAlphaData = {}; // 追加
let memoryFragmentsBetaData = {}; // 追加
let awakeningLocationsData = {}; // 追加
let posthumousHistoryData = {}; // 追加
let addLog = () => {};
let is3DInitialized = false; // 初期化済みかを管理するフラグ

// 外部からマスターデータを受け取るための初期化関数
export function initializeDiceRoller(data) {
    hintMasterData = data.hintMasterData;
    regretMasterData = data.regretMasterData;
    takaramonoMasterData = data.takaramonoMasterData;
     memoryFragmentsData = data.memoryFragmentsData; // 正しくはオブジェクトのプロパティとして受け取る
    memoryFragmentsAlphaData = data.memoryFragmentsAlphaData; // ★修正
    memoryFragmentsBetaData = data.memoryFragmentsBetaData; // ★修正
    awakeningLocationsData = data.awakeningLocationsData; // ★修正
    posthumousHistoryData = data.posthumousHistoryData; // ★修正
    addLog = data.addLog;

    // 3Dダイスがまだ初期化されていなければ、ここで初期化する
    if (!is3DInitialized) {
        const diceContainer = document.getElementById('dice3d-container');
        if (diceContainer) {
            init3DDice(diceContainer);
            is3DInitialized = true;
        }
    }
}

// 外部から呼び出されるメインの関数
export function buildDiceMenu() {
    // メニュー項目のデータ構造を定義
    const menuItems = [
        { label: '🎲 ダイスロール', isTitle: true },
        { label: 'NA 攻撃判定', onClick: () => performDiceRoll({ command: 'NA', showToast: true }) },
        { label: 'NC 判定', onClick: () => performDiceRoll({ command: 'NC', showToast: true }) },
        { label: 'NM 姉妹への未練', onClick: () => performDiceRoll({ command: 'NM', showToast: true }) },
        { label: 'NME 敵への未練 (歪曲の舞踏)', onClick: () => performDiceRoll({ command: 'NME', showToast: true }) },
        { label: 'NMN 中立者への未練 (歪曲の舞踏)', onClick: () => performDiceRoll({ command: 'NMN', showToast: true }) },
        { label: 'NT たからもの表', onClick: () => performDiceRoll({ command: 'NT', showToast: true }) },
        { label: 'NK 記憶のカケラ', onClick: () => performDiceRoll({ command: 'NK', showToast: true }) },
        { label: 'NKA 記憶のカケラ-α (最果ての戯曲)', onClick: () => performDiceRoll({ command: 'NKA', showToast: true }) }, // 追加
        { label: 'NKB 記憶のカケラ-β (最果ての戯曲)', onClick: () => performDiceRoll({ command: 'NKB', showToast: true }) }, // 追加
        { label: 'NPH 死後経歴 (最果ての戯曲)', onClick: () => performDiceRoll({ command: 'NPH', showToast: true }) }, // 追加
        { label: 'NAL 目覚めの場所 (最果ての戯曲)', onClick: () => performDiceRoll({ command: 'NAL', showToast: true }) }, // 追加
        { label: 'NH 暗示表', onClick: () => performDiceRoll({ command: 'NH', showToast: true }) },
        { label: '1D10', onClick: () => performDiceRoll({ command: '1d10', showToast: true }) },
        { label: '1D100', onClick: () => performDiceRoll({ command: '1d100', showToast: true }) },
        
        { 
            label: '直接入力', 
            onClick: () => {
                // 標準の prompt() の代わりに、汎用モーダル showModal() を使用する
                const bodyHtml = `
                    <p style="text-align: center; margin-bottom: 15px;">ダイスコマンドを入力してください。</p>
                    <input type="text" id="diceCommandInput" value="5NC" 
                           class="modal-input-text" autofocus
                           inputmode="latin" style="ime-mode: disabled;">
                `;
                const footerHtml = `<button id="executeDiceRollBtn" class="welcome-modal-close-btn">ダイスロール</button>`;

                showModal({
                    title: '🎲 ダイスロール', // ページのタイトルをモーダルのタイトルとして使用
                    bodyHtml: bodyHtml,
                    footerHtml: footerHtml,
                    onRender: (modal, closeFn) => {
                        const inputEl = modal.querySelector('#diceCommandInput');
                        const executeBtn = modal.querySelector('#executeDiceRollBtn');

                        // ダイスを振る処理を関数化
                        const executeRoll = () => {
                            if (inputEl.value) {
                                performDiceRoll({ command: inputEl.value, showToast: true });
                            }
                            closeFn(); // モーダルを閉じる
                        };

                        // ボタンクリックで実行
                        executeBtn.onclick = executeRoll;

                        // Enterキー押下でも実行
                        inputEl.onkeydown = (e) => {
                            if (e.key === 'Enter') {
                                executeRoll();
                            }
                        };
                        
                        // 入力欄のテキストを全選択状態にする
                        inputEl.select();
                    }
                });
            }
        }
    ];

    showModal({ title: '🎲 ダイスロール', items: menuItems });
}

// --- 以下はこのファイル内でのみ使われるヘルパー関数 ---

function onDocumentClickForDice(e) {
    const menu = document.getElementById('diceMenu');
    const roller = document.getElementById('diceRoller');
    if (!menu.contains(e.target) && !roller.contains(e.target)) {
        menu.style.display = 'none';
        document.removeEventListener('click', onDocumentClickForDice);
    }
}

/**
 * D100の3Dダイスロールを実行し、結果を処理する共通ヘルパー関数
 * @param {object} rollData - performDiceRollから渡される元のデータ
 * @param {function(number, string)} processResultCallback - 結果の数値を元に、ログ用テキストを生成するコールバック
 */
function performD100Roll(rollData, processResultCallback) {
    const { command, showToast, callback } = rollData;

    const rollConfig = {
        dices: [
            // { id: 'tens', color: 0xffbb00 },
            { id: 'tens', color: 0xff4444 },
            { id: 'ones', color: 0x0088ff }
        ]
    };

    roll3DDice(rollConfig, (results) => {
        if (!results || results.length < 2) {
            console.error("D100ロールの結果取得に失敗しました。");
            return;
        }
        
        const tensDieResult = results.find(r => r.id === 'tens');
        const onesDieResult = results.find(r => r.id === 'ones');
        
        if (!tensDieResult || !onesDieResult) {
            console.error("D100ロールの結果取得に失敗しました（ダイスの役割を特定できません）。");
            return;
        }

        const tensValue = tensDieResult.value === 10 ? 0 : tensDieResult.value;
        const onesValue = onesDieResult.value === 10 ? 0 : onesDieResult.value;

        let finalResult = (tensValue * 10) + onesValue;
        if (finalResult === 0) {
            finalResult = 100;
        }
        
        const resultText = processResultCallback(finalResult, tensValue, onesValue);

        addLog(resultText);
        if (showToast) {
            showToastNotification(resultText, 3000);
        }
        
        if (callback) {
            callback(finalResult, null, resultText);
        }
    });
}

// ... (performDiceRoll 関数の直前、またはファイルのヘルパー関数セクションに追加)

/**
 * D10の結果を使い、単純なキー（数値または文字列）でマスターデータを検索して結果をフォーマットする
 * @param {string} tableName - 表の名前
 * @param {object} masterData - 検索対象のマスターデータ
 * @param {number} diceResult - D10の出目 (1-10)
 * @returns {{resultText: string, selectedMasterData: object|null}}
 */
function formatSimpleTableResult(tableName, masterData, diceResult) {
    // ② JSONのキーを数値に変換して比較し、一致するキーを探す
    const foundKey = Object.keys(masterData).find(key => parseInt(key, 10) === diceResult);
    const item = foundKey ? masterData[foundKey] : null;
    const displayKey = foundKey || diceResult;

    const resultText = item
        ? `🎲 ${tableName}(${displayKey})<br>【${item.name}】 ${item.description}`
        : `${tableName}データ[${displayKey}]が見つかりませんでした。`;
    
    return { resultText, selectedMasterData: item };
}

export function performDiceRoll(rollData) {
    const input = (typeof rollData === 'string') ? rollData : rollData.command;
    const callback = (typeof rollData === 'object' && rollData.callback) ? rollData.callback : null;

    if (!input) return;
    const cleanedInput = input.toLowerCase().replace(/\s/g, '');

    const d10Pattern = /^(nm|nme|nmn|nt|nh|nal|1?d10)$/; // "nal"を追加
    const systemCommandPattern = /^(\d*)?(nc|na)([+-]\d+|0)?$/;
    const d100Pattern = /^(1?d100)$/;
    const table100Pattern = /^(nk|nka|nkb|nph)$/; // D100表コマンドをまとめた正規表現を追加

    const systemMatch = cleanedInput.match(systemCommandPattern);
    const d10Match = cleanedInput.match(d10Pattern);
    const d100Match = cleanedInput.match(d100Pattern);
    const table100Match = cleanedInput.match(table100Pattern); // 新しいmatch変数を追加

    if (systemMatch) {
        // --- システムコマンド (NA, NC) の場合 ---
        const [, numDiceStr, command, modifierStr] = systemMatch;
        const modifier = modifierStr ? parseInt(modifierStr, 10) : 0;
        const numDice = parseInt(numDiceStr, 10) || 1;

        // rollDataからperformerを取得
        const performer = rollData.performer;
        // performerのタイプに応じてダイスの色を決定
        const diceColor = (performer && performer.type === 'enemy') ? 0xcc00cc : 0xffffff;

        // 振るダイスの設定を作成
        const rollConfig = {
            dices: Array.from({ length: numDice }, (_, i) => ({
                id: `system_d${i}`,
                color: diceColor // 決定した色を適用
            }))
        };
        // 500msの遅延を入れてから roll3DDice を呼び出す
        setTimeout(() => {    
            roll3DDice(rollConfig, (results) => {
                if (!results || results.length < numDice) {
                    console.error("3Dダイスロールの結果が不足しています。");
                    return;
                }
                // let modifier = -9;

                // 1. 各ダイスの出目(1-10)と、それに修正値を加えた「判定値」の配列を計算
                const rawValues = results.map(r => r.value === 0 ? 10 : r.value);
                const finalValues = rawValues.map(v => v + modifier);
                
                // 数値として昇順にソートする (a - b)
                rawValues.sort((a, b) => a - b);
                finalValues.sort((a, b) => a - b);

                // 2. 判定値の最大値(max)と最小値(min)を取得
                const maxFinalValue = Math.max(...finalValues);
                const minFinalValue = Math.min(...finalValues);

                // 3. 最終的な結果を、ご指示の優先順位で決定する
                let bestResult = '';
                let bestResultDetails = '';
                let bestHitLocation = null;

                if (maxFinalValue >= 11) {
                    bestResult = '大成功';
                    // 詳細テキストはコマンドに応じて設定
                    if (command === 'na') { bestResultDetails = `攻撃側任意（追加ダメージ${maxFinalValue - 10}）`; bestHitLocation = '任意'; }

                } else if (maxFinalValue >= 6) {
                    bestResult = '成功';
                    // 詳細テキストはコマンドに応じて設定 (NAのみ)
                    if (command === 'na') {
                        if (maxFinalValue >= 10) { bestResultDetails = '頭（なければ攻撃側任意）'; bestHitLocation = '頭'; }
                        else if (maxFinalValue >= 9) { bestResultDetails = '腕（なければ攻撃側任意）'; bestHitLocation = '腕'; }
                        else if (maxFinalValue >= 8) { bestResultDetails = '胴（なければ攻撃側任意）'; bestHitLocation = '胴'; }
                        else if (maxFinalValue >= 7) { bestResultDetails = '脚（なければ攻撃側任意）'; bestHitLocation = '脚'; }
                        else { bestResultDetails = '防御側任意'; bestHitLocation = '任意'; }
                    }

                } else if (minFinalValue <= 1) {
                    bestResult = '大失敗';
                    // 詳細テキストはコマンドに応じて設定
                    if (command === 'na') { bestResultDetails = '味方か自身に命中'; }
                    else if (command === 'nc') { bestResultDetails = '使用パーツ全損'; }

                } else {
                    bestResult = '失敗';
                }
                
                // 4. ログ用のテキストをお客様の仕様に合わせて組み立て
                const modifierText = modifier > 0 ? `+${modifier}` : (modifier < 0 ? `${modifier}` : "");
                const color = (bestResult === '大成功' || bestResult === '成功') ? '#007bff' : '#dc3545';
                
                const resultText = `<span style="color: ${color};">🎲 ${input.toUpperCase()} ＞ [${rawValues.join(',')}]${modifierText} ＞ ${maxFinalValue}[${finalValues.join(',')}]<br>${bestResult}<br>${bestResultDetails}</span>`;

                // 5. ログとトーストに表示
                addLog(resultText);
                if (rollData.showToast) {
                    showToastNotification(resultText, 2000);
                }

                // 6. battle-logicに最終結果と「判定値」を渡す
                if (callback) {
                    // bestResult, bestHitLocation, resultText に加えて、maxFinalValue を渡す
                    callback(bestResult, bestHitLocation, resultText, maxFinalValue);
                }
            });
        }, 500); // 遅延時間
    } else if (d10Match) {
        const command = d10Match[1];
        
        const rollConfig = { dices: [{ color: 0xffffff }] }; // 1個の白いダイス
        // 500msの遅延を入れてから roll3DDice を呼び出す
        setTimeout(() => {
            roll3DDice(rollConfig, (results) => {
                if (!results || results.length === 0) {
                    console.error("3Dダイスロールの結果がありません。");
                    return;
                }
                let selectedMasterData = null;

                const diceValue = results[0].value;
                const resultValue = diceValue === 0 ? 10 : diceValue;
                let resultText = "";

                switch (command) {
                    case 'nm':
                        resultText = formatRegretResult('SI-', '姉妹への未練表', resultValue);
                        selectedMasterData = regretMasterData[`SI-${String(resultValue).padStart(2, '0')}`];
                        break;
                    case 'nme':
                        resultText = formatRegretResult('EN-', '敵への未練表', resultValue);
                        selectedMasterData = regretMasterData[`EN-${String(resultValue).padStart(2, '0')}`];
                        break;
                    case 'nmn':
                        resultText = formatRegretResult('NP-', '中立者への未練表', resultValue);
                        selectedMasterData = regretMasterData[`NP-${String(resultValue).padStart(2, '0')}`];
                        break;
                    case 'nt':
                        // ★★★ 新しいヘルパー関数を呼び出す ★★★
                        const ntResult = formatSimpleTableResult('たからもの表', takaramonoMasterData, resultValue);
                        resultText = ntResult.resultText;
                        selectedMasterData = ntResult.selectedMasterData;
                        break;
                    case 'nh':
                        // ★★★ 新しいヘルパー関数を呼び出す ★★★
                        const nhResult = formatSimpleTableResult('暗示表', hintMasterData, resultValue);
                        resultText = nhResult.resultText;
                        selectedMasterData = nhResult.selectedMasterData;
                        break;
                    case 'nal':
                        // このコマンドは 10 -> '0' の特殊マッピングがあるため固有ロジックを維持
                        const awakeningKey = resultValue === 10 ? '0' : String(resultValue);
                        selectedMasterData = awakeningLocationsData[awakeningKey];
                        resultText = selectedMasterData ? `🎲 目覚めの場所表(${awakeningKey})<br>【${selectedMasterData.name}】 ${selectedMasterData.description}` : `目覚めの場所データ[${awakeningKey}]が見つかりませんでした。`;
                        break;
                    case '1d10':
                    case 'd10':
                        resultText = `🎲 D10 ＞ ${resultValue}`;
                        break;
                }

                addLog(resultText);
                if ((typeof rollData === 'object' && rollData.showToast)) {
                    showToastNotification(resultText, 3000);
                }
                if (callback) {
                    callback(resultValue, null, resultText, selectedMasterData);
                }
            });
        }, 500); // 遅延時間
    } else if (d100Match || table100Match) {
        // --- D100系コマンドの場合 ---
        // 500msの遅延を入れてから performD100Roll を呼び出す
        setTimeout(() => {
            performD100Roll(rollData, (finalResult, tensValue, onesValue) => {
                if (d100Match) {
                    return `🎲 1D100 ＞ ${finalResult} [${tensValue*10} + ${onesValue}]`;
                } else { // table100Match
                    let item, tableName, data;
                    switch(cleanedInput) {
                        case 'nk': data = memoryFragmentsData; tableName = '記憶のカケラ表'; break;
                        case 'nka': data = memoryFragmentsAlphaData; tableName = '記憶のカケラ-α表'; break;
                        case 'nkb': data = memoryFragmentsBetaData; tableName = '記憶のカケラ-β表'; break;
                        case 'nph': data = posthumousHistoryData; tableName = '死後経歴表'; break;
                    }
                    const diceResultAsNumber = finalResult;
                    const foundKey = Object.keys(data).find(key => {
                        let keyAsNumber = (key === '0') ? 10 : (key === '00') ? 100 : parseInt(key, 10);
                        return keyAsNumber === diceResultAsNumber;
                    });
                    item = foundKey ? data[foundKey] : null;
                    const displayKey = foundKey || finalResult;
                    return item ? `🎲 ${tableName}(${displayKey})<br>【${item.name}】 ${item.description}` : `${tableName}データ[${displayKey}]が見つかりませんでした。`;
                }
            });
        }, 500); // 遅延時間

    } else {
        // --- システムコマンドとD10系以外 (1d8 など) の場合 ---
        // これらは3D演出の対象外
        let resultText = `「${input}」は無効な入力です。`;
        
        
        // 1d6, 2d6+1 などの汎用ダイスロール (変更なし)
        const dicePattern = /^(\d*)d(\d+)([+-]\d+)?$/;
        const match = cleanedInput.match(dicePattern);
        if (match) {
            const numDice = match[1] ? parseInt(match[1], 10) : 1;
            const sides = parseInt(match[2], 10);
            const modifier = match[3] ? parseInt(match[3], 10) : 0;

            if (numDice > 0 && sides > 0 && numDice <= 100) {
                const rolls = Array.from({ length: numDice }, () => Math.floor(Math.random() * sides) + 1);

                // 出目を昇順にソートする
                rolls.sort((a, b) => a - b);

                const sum = rolls.reduce((a, b) => a + b, 0);
                const total = sum + modifier;
                let modifierText = modifier > 0 ? `+${modifier}` : (modifier < 0 ? `${modifier}` : "");
                resultText = `🎲 ${input.toUpperCase()} ＞ ${sum}[${rolls.join(',')}]${modifierText} ＞ ${total}`;
            } else {
                resultText = `「${input}」のダイスの数や種類が正しくありません。`;
            }
        }

        addLog(resultText);
        if ((typeof rollData === 'object' && rollData.showToast) || (typeof rollData === 'string')) {
            showToastNotification(resultText, 3000);
        }
    }
}

/**
 * 3Dダイスの出目に基づいて、regret.jsonから対応する未練の結果をフォーマットする
 * @param {string} prefix - 抽選対象のIDプレフィックス (例: 'SI-')
 * @param {string} tableName - ログに表示する表の名前 (例: '姉妹への未練表')
 * @param {number} diceResult - 3Dダイスの出目 (1-10)
 * @returns {string} - フォーマットされた結果の文字列
 */
function formatRegretResult(prefix, tableName, diceResult) {
    const allRegrets = regretMasterData;
    if (!allRegrets || Object.keys(allRegrets).length === 0) {
        return `未練データが見つかりませんでした。`;
    }

    // プレフィックスと出目を組み合わせてIDを生成 (例: "SI-01", "SI-10")
    const regretId = `${prefix}${String(diceResult).padStart(2, '0')}`;
    const regret = allRegrets[regretId];
    
    return regret 
        ? `🎲 ${tableName}(${regretId})<br>【${regret.name}】[発狂:${regret.madnessName}] ${regret.madnessEffect}` 
        : `未練データ[${regretId}]が見つかりませんでした。`;
}