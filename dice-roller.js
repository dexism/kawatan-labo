/**
 * @file dice-roller.js
 * @description 
 */

/**
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.2.13";

// import { showModal } from './ui-manager.js';
import { showModal, showToastNotification } from './ui-manager.js';
import { init as init3DDice, rollDice as roll3DDice } from './dice-3d.js';

// このファイルで使うマスターデータやグローバル関数を import する
// （script.jsから渡される想定）
let hintMasterData = {};
let regretMasterData = {};
let takaramonoMasterData = {};
let memoryFragmentsData = {};
let addLog = () => {};
let is3DInitialized = false; // 初期化済みかを管理するフラグ

// 外部からマスターデータを受け取るための初期化関数
export function initializeDiceRoller(data) {
    hintMasterData = data.hintMasterData;
    regretMasterData = data.regretMasterData;
    takaramonoMasterData = data.takaramonoMasterData;
    memoryFragmentsData = data.memoryFragmentsData;
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
        { label: 'ダイスロール', isTitle: true },
        { label: 'NA  攻撃判定', onClick: () => performDiceRoll({ command: 'NA', showToast: true }) },
        { label: 'NC  判定', onClick: () => performDiceRoll({ command: 'NC', showToast: true }) },
        { label: 'NM  姉妹への未練', onClick: () => performDiceRoll({ command: 'NM', showToast: true }) },
        { label: 'NME 敵への未練', onClick: () => performDiceRoll({ command: 'NME', showToast: true }) },
        { label: 'NMN 中立者への未練', onClick: () => performDiceRoll({ command: 'NMN', showToast: true }) },
        { label: 'NT  たからもの表', onClick: () => performDiceRoll({ command: 'NT', showToast: true }) },
        { label: 'NK  記憶のカケラ', onClick: () => performDiceRoll({ command: 'NK', showToast: true }) },
        { label: 'NH  暗示表', onClick: () => performDiceRoll({ command: 'NH', showToast: true }) },
        { label: '1D10', onClick: () => performDiceRoll({ command: '1d10', showToast: true }) },
        { label: '1D100', onClick: () => performDiceRoll({ command: '1d100', showToast: true }) },
        
        { 
            label: '直接入力', 
            onClick: () => {
                // 標準の prompt() の代わりに、汎用モーダル showModal() を使用する
                const bodyHtml = `
                    <p style="text-align: center; margin-bottom: 15px;">ダイスコマンドを入力してください。</p>
                    <input type="text" id="diceCommandInput" value="3d6" 
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

    showModal({ title: 'ダイスロール', items: menuItems });
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

export function performDiceRoll(rollData) {
    const input = (typeof rollData === 'string') ? rollData : rollData.command;
    const callback = (typeof rollData === 'object' && rollData.callback) ? rollData.callback : null;

    if (!input) return;
    const cleanedInput = input.toLowerCase().replace(/\s/g, '');
    let resultText = `「${input}」は無効な入力です。`;
    let finalResultForCallback = null;
    let hitLocation = null;

    if (cleanedInput === 'nm') {
        resultText = rollOnRegretTable('SI-', '姉妹への未練表');
    } else if (cleanedInput === 'nme') {
        resultText = rollOnRegretTable('EN-', '敵への未練表');
    } else if (cleanedInput === 'nmn') {
        resultText = rollOnRegretTable('NP-', '中立者への未練表');

    } else if (cleanedInput === 'nt') {
        const roll = Math.floor(Math.random() * 10) + 1;
        const takaramono = takaramonoMasterData[roll];
        resultText = takaramono ? `🎲 たからもの表(${roll}) ＞ 【${takaramono.name}】 ${takaramono.description}` : `たからものデータ[${roll}]が見つかりませんでした。`;
    } else if (cleanedInput === 'nk') {
        const roll = Math.floor(Math.random() * 100) + 1;
        const fragment = memoryFragmentsData[roll];
        resultText = fragment ? `🎲 記憶のカケラ表(${roll}) ＞ 【${fragment.name}】 ${fragment.description}` : `記憶のカケラデータ[${roll}]が見つかりませんでした。`;
    } else if (cleanedInput === 'nh') { // ★ このelse ifブロックを追加
        const roll = Math.floor(Math.random() * 10) + 1;
        const hint = hintMasterData[roll];
        resultText = hint ? `🎲 暗示表(${roll}) ＞ 【${hint.name}】 ${hint.description}` : `暗示データ[${roll}]が見つかりませんでした。`;
    } else {
        const systemCommandPattern = /^(\d*)?(nc|na)([+-]\d+)?$/;
        const systemMatch = cleanedInput.match(systemCommandPattern);
        
        if (systemMatch) {
            const [, numDiceStr, command, modifierStr] = systemMatch;
            const numDice = numDiceStr ? parseInt(numDiceStr, 10) : 1;
            const modifier = modifierStr ? parseInt(modifierStr, 10) : 0;
            const rawRolls = Array.from({ length: numDice }, () => Math.floor(Math.random() * 10) + 1);
            
            const highestRawRoll = Math.max(...rawRolls);
            const lowestRawRoll = Math.min(...rawRolls);
            const finalValue = highestRawRoll + modifier;
            
            let modifierText = modifier > 0 ? `+${modifier}` : (modifier < 0 ? `${modifier}` : "");
            
            let result = '', details = '', color = '#dc3545';
            
            if (command === 'nc') {
                if (finalValue >= 11) { result = '大成功'; color = '#007bff'; }
                else if (lowestRawRoll + modifier <= 1) { result = '大失敗'; details = '＞ 使用パーツ全損'; }
                else if (finalValue >= 6) { result = '成功'; color = '#007bff'; }
                else result = '失敗';
                finalResultForCallback = result;
            } else if (command === 'na') {
                if (finalValue >= 11) { result = '大成功'; details = `＞ 攻撃側任意（追加ダメージ${finalValue - 10}）`; color = '#007bff'; hitLocation = '任意'; }
                else if (finalValue >= 10) { result = '成功'; details = '＞ 頭（なければ攻撃側任意）'; color = '#007bff'; hitLocation = '頭'; }
                else if (finalValue >= 9) { result = '成功'; details = '＞ 腕（なければ攻撃側任意）'; color = '#007bff'; hitLocation = '腕'; }
                else if (finalValue >= 8) { result = '成功'; details = '＞ 胴（なければ攻撃側任意）'; color = '#007bff'; hitLocation = '胴'; }
                else if (finalValue >= 7) { result = '成功'; details = '＞ 脚（なければ攻撃側任意）'; color = '#007bff'; hitLocation = '脚'; }
                else if (finalValue >= 6) { result = '成功'; details = '＞ 防御側任意'; color = '#007bff'; hitLocation = '任意'; }
                else if (finalValue >= 2) result = '失敗';
                else { result = '大失敗'; details = '＞ 味方か自身に命中'; }
                finalResultForCallback = result;
            }
            
            const rollsStr = `[${rawRolls.join(',')}]`;
            resultText = `<span style="color: ${color};">🎲 ${input.toUpperCase()} ＞ ${highestRawRoll}${rollsStr}${modifierText} ＞ ${finalValue} ＞ ${result} ${details}</span>`;

            // 2Dの結果をログに出力
            addLog(resultText);

            // 3Dダイスを振る
            roll3DDice((resultValue) => {
                const finalResultText = `🎲 1D10 ＞ ${resultValue}`;
                showToastNotification(finalResultText, 4000);
                
                if (callback) {
                    callback(finalResultForCallback, hitLocation, resultText);
                }
            });
            
            return; 
        } else {
            const dicePattern = /^(\d*)d(\d+)([+-]\d+)?$/;
            const match = cleanedInput.match(dicePattern);
            if (match) {
                const numDice = match[1] ? parseInt(match[1], 10) : 1;
                const sides = parseInt(match[2], 10);
                const modifier = match[3] ? parseInt(match[3], 10) : 0;

                if (numDice > 0 && sides > 0 && numDice <= 100) {
                    const rolls = Array.from({ length: numDice }, () => Math.floor(Math.random() * sides) + 1);
                    const sum = rolls.reduce((a, b) => a + b, 0);
                    const total = sum + modifier;
                    let modifierText = modifier > 0 ? `+${modifier}` : (modifier < 0 ? `${modifier}` : "");
                    resultText = `🎲 ${input.toUpperCase()} ＞ ${sum}[${rolls.join(',')}]${modifierText} ＞ ${total}`;
                } else {
                    resultText = `「${input}」のダイスの数や種類が正しくありません。`;
                }
            }
        }
    }

    addLog(resultText);

    if ((typeof rollData === 'object' && rollData.showToast) || (typeof rollData === 'string')) { 
        showToastNotification(resultText, 4000);
    }

    if (callback) {
        callback(finalResultForCallback, hitLocation, resultText);
    }
}

/**
 * ★★★ 新しく追加するヘルパー関数 ★★★
 * regret.json から指定されたプレフィックスを持つ未練をランダムに抽選する
 * @param {string} prefix - 抽選対象のIDプレフィックス (例: 'SI-')
 * @param {string} tableName - ログに表示する表の名前 (例: '姉妹への未練表')
 * @returns {string} - フォーマットされた結果の文字列
 */
function rollOnRegretTable(prefix, tableName) {
    const allRegrets = regretMasterData;
    if (!allRegrets || Object.keys(allRegrets).length === 0) {
        return `未練データが見つかりませんでした。`;
    }

    // 指定されたプレフィックスで未練IDをフィルタリング
    const filteredIds = Object.keys(allRegrets).filter(id => id.startsWith(prefix));

    if (filteredIds.length === 0) {
        return `${tableName} に該当する未練データが見つかりませんでした。`;
    }

    // フィルタリングされたIDの中からランダムに1つ選ぶ
    const randomId = filteredIds[Math.floor(Math.random() * filteredIds.length)];
    const regret = allRegrets[randomId];
    
    return regret 
        ? `🎲 ${tableName}(${randomId}) ＞ 【${regret.name}】[発狂:${regret.madnessName}] ${regret.madnessEffect}` 
        : `未練データ[${randomId}]が見つかりませんでした。`;
}