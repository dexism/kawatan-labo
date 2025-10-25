/**
 * @file ui-manager.js
 * @description UIの描画、更新、DOM操作全般を担当するモジュール。
 */

/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.20.5";

import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as interactionManager from './interaction-manager.js';
import * as data from './data-handler.js';
// import { getCategoryClass, getManeuverSourceText } from './ui-helpers.js';
import { getCharacterManeuvers } from './menu-builder.js';
import { calculateFinalDamage } from './battle-helpers.js';

let toastTimer = null;
const rows = ["奈落", "地獄", "煉獄", "花園", "楽園"];
const cols = Array.from({ length: 26 }, (_, i) => 20 - i);

export function initialize() { console.log("UI Manager initialized."); }

/**
 * 【新設】アプリケーションのUI全体を、現在の最新状態に基づいて完全に再描画する司令塔
 */
export function updateAllUI() {
    const battleState = battleLogic.getBattleState();
    const characters = charManager.getCharacters();

    // 1. キャラクターカードの再描画
    renderCharacterCards();
    
    // 2. ダメージマーカーの更新処理
    document.querySelectorAll('.damage-prompt-button').forEach(btn => btn.remove());
    
    const damageSummary = {};
    battleState.damageQueue.forEach(damage => {
        if (damage.type === 'instance' && !damage.applied && damage.target) {
            const targetId = damage.target.id;
            if (!damageSummary[targetId]) damageSummary[targetId] = 0;
            
            // ヘルパー関数を呼び出して最新のダメージ量を取得する
            const { finalAmount } = calculateFinalDamage(damage);
            damageSummary[targetId] += finalAmount;
        }
    });
    for (const targetId in damageSummary) {
        // damageSummary[targetId] > 0 という条件を削除
        createDamagePrompt(targetId, damageSummary[targetId]);
        // if (damageSummary[targetId] > 0) createDamagePrompt(targetId, damageSummary[targetId]);
    }

    // 3. バトルグリッド上のマーカーを再描画
    updateMarkers();

    // 4. 右側パネルの全要素を更新
    updateStatusPanel(battleState, characters);

    // 5. 戦闘開始ボタンの状態を更新 ★★★ この行を追加 ★★★
    checkBattleStartCondition();
}

// ===================================================================================
//  UI構築 / 描画関数 (Build / Render)
// ===================================================================================

export function buildGrid() {
  document.documentElement.style.setProperty('--col-count', cols.length);
  document.documentElement.style.setProperty('--row-count', rows.length);
  const battleWrap = document.getElementById('battleWrap');
  battleWrap.innerHTML = '';
  const topLeft = document.createElement('div');
  topLeft.className = 'current-action-cell';
  topLeft.id = 'currentActionValue';
  battleWrap.appendChild(topLeft);
  cols.forEach((cv, c) => {
    const h = document.createElement('div');
    h.className = 'col-header'; h.textContent = cv; h.dataset.col = String(cv);
    h.style.gridColumn = (c + 2).toString(); h.style.gridRow = '1';
    battleWrap.appendChild(h);
  });

  const areaClassMap = {
    '奈落': 'naraku',
    '地獄': 'jigoku',
    '煉獄': 'rengoku',
    '花園': 'hanazono',
    '楽園': 'rakuen'
  };

  rows.forEach((rv, r) => {
    const h = document.createElement('div');
    h.className = 'row-header';
    
    const areaSlug = areaClassMap[rv];
    if (areaSlug) {
      h.classList.add(`area-color-${areaSlug}`);
    }
    
    h.textContent = rv;
    h.style.gridColumn = '1'; h.style.gridRow = (r + 2).toString();
    battleWrap.appendChild(h);
  });

  rows.forEach((rv, r) => {
    cols.forEach((cv, c) => {
      const cell = document.createElement('div');
      cell.className = 'cell';

      const areaSlug = areaClassMap[rv];
      if (areaSlug) {
        cell.classList.add(`cell-area-${areaSlug}`);
      }

      if (cv === 0) cell.classList.add('col-zero');
      else if (cv < 0) cell.classList.add('col-negative');
      cell.dataset.row = String(r); cell.dataset.col = String(cv);
      cell.style.gridColumn = (c + 2).toString(); cell.style.gridRow = (r + 2).toString();
      battleWrap.appendChild(cell);
    });
  });
}

export function showToastNotification(message, duration = 2000) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;

    // 以前のタイマーが残っていればクリア
    if (toastTimer) {
        clearTimeout(toastTimer);
    }

    // onclickを使うことで、古いリスナーを自動的に上書きする
    // これにより、リスナーが重複する問題をシンプルに解決できる
    toast.onclick = () => {
        toast.classList.remove('is-visible');
        if (toastTimer) {
            clearTimeout(toastTimer);
            toastTimer = null;
        }
        toast.onclick = null; // 一度クリックされたら、クリックイベントを自身で解除
    };

    toast.innerHTML = message;
    toast.classList.add('is-visible');

    // 時間経過で閉じるタイマーを設定
    toastTimer = setTimeout(() => {
        toast.classList.remove('is-visible');
        toast.onclick = null; // タイマーで閉じた場合も、クリックイベントを解除
        toastTimer = null;
    }, duration);
}

export function renderCharacterCards() {
    const allCharacters = charManager.getCharacters(); // ★ 全キャラを取得
    const pcs = allCharacters.filter(c => c.type === 'pc');
    const enemies = allCharacters.filter(c => c.type === 'enemy');
    renderCharacterGroup(document.getElementById('pcContainer'), pcs, 'pc');
    renderCharacterGroup(document.getElementById('enemyContainer'), enemies, 'enemy');
    updateMarkers();
    interactionManager.setupCharacterEventListeners();
}

function renderCharacterGroup(container, characters, type) {
  container.innerHTML = '';
  const isSetupPhase = !battleLogic.getBattleState().isStarted;

  characters.forEach(char => {
    const card = createCharacterCard(char, isSetupPhase);
    container.appendChild(card);
  });

  if (isSetupPhase) {
    const addCard = document.createElement('div');
    addCard.className = 'add-char-card';
    const typeText = (type === 'pc') ? '姉妹ドール' : 'NCの手駒';
    addCard.innerHTML = `<div class="add-char-text-2">UNDEAD</div><div class="add-char-plus">+</div><div class="add-char-text">${typeText}を追加</div>`;
    container.appendChild(addCard);
  }
}

function createCharacterCard(char, isSetupPhase) {
    let statusOverlayClasses = '';
    if (char.isMentallyBroken) statusOverlayClasses += ' status-mental-collapse';
    if (char.isDestroyed) statusOverlayClasses += ' status-destroyed';
    if (char.hasWithdrawn) statusOverlayClasses += ' status-withdrawn';

    let cardExtraClasses = '';
    if (char.isDestroyed || char.hasWithdrawn) {
        cardExtraClasses += ' is-inactive';
    }

    const card = document.createElement('div');
    card.className = `char ${cardExtraClasses.trim()}`;
    card.dataset.id = char.id;
    
    const setupPhaseActions = `
        <div class="card-actions-overlay">
            <div class="card-action-row">
                <button class="card-action-btn" data-action="place">配置</button>
                <button class="card-action-btn" data-action="details">詳細</button>
                <button class="card-action-btn" data-action="delete">削除</button>
            </div>
            <div class="card-action-row">
                <button class="card-action-btn" data-action="move-left">←</button>
                <button class="card-action-btn" data-action="move-right">→</button>
            </div>
        </div>`;

    let madnessHtml = '';
    // isCheckedプロパティを持つ未練のみをフィルタリング
    const checkedRegrets = char.regrets ? char.regrets.filter(r => r.isChecked) : [];

    if (checkedRegrets.length > 0) {
        const madnessLines = checkedRegrets.map(regret => {
            const points = regret.points || 0;
            let line = '';
            
            // 1. 未練の種類に応じて、満たされている場合のシンボルを決定
            const filledSymbol = regret.isForTreasure ? '♥' : '◆';

            // 2. シンボルを使ってゲージを生成
            for (let i = 0; i < 4; i++) {
                line += (i < points) ? filledSymbol : '・';
            }
            
            const madnessClass = (points >= 4) ? 'is-madness' : '';
            return `<div class="${madnessClass}">${line}</div>`;
        }).join('');
        madnessHtml = `<div class="char-madness">${madnessLines}</div>`;
    }

    let partsStatusHtml = '';
    if (char.partsStatus) {
        let lines = '';
        
        if (char.category === 'ドール' || char.category === 'サヴァント') {
            const locations = ['head', 'arms', 'torso', 'legs', 'body'];
            const locationNames = { head: '頭', arms: '腕', torso: '胴', legs: '脚', body: '他' };
            const treasureNames = new Set(char.treasures || []);
            // const treasureName = char.treasure;

            lines = locations.map(loc => {
                if (!char.partsStatus[loc] || char.partsStatus[loc].length === 0) return '';
                
                const sortedParts = char.partsStatus[loc]
                  .map(part => {
                    const maneuver = data.getManeuverByName(part.name);
                    const isBasicPart = maneuver && maneuver.id && maneuver.id.startsWith('BP-');
                    // const isTreasure = part.name === treasureName;
                    const isTreasure = treasureNames.has(part.name);
                    return { part, isBasicPart, isTreasure, damaged: part.damaged };
                  })
                  .sort((a, b) => {
                    if (a.isTreasure !== b.isTreasure) return a.isTreasure ? -1 : 1;
                    if (a.isBasicPart !== b.isBasicPart) { return a.isBasicPart ? 1 : -1; }
                    if (a.damaged !== b.damaged) { return a.damaged ? -1 : 1; }
                    return 0;
                  });
                
                const symbols = sortedParts.map(item => {
                    if (item.isTreasure) {
                        return item.damaged ? '・' : '♥';
                    }
                    if (item.isBasicPart) {
                        return item.damaged ? '・' : '■';
                    }
                    return item.damaged ? '・' : '●';
                }).join('');

                if (loc === 'body' && char.partsStatus[loc].every(p => treasureNames.has(p.name))) {
                // if (loc === 'body' && !char.partsStatus[loc].some(p => p.name !== treasureName)) {
                    return '';
                }

                return `<div>${symbols}：${locationNames[loc]}</div>`;
            }).filter(line => line !== '').join('');
        
        } else if (char.category === 'ホラー') {
            const allParts = Object.values(char.partsStatus).flat();
            const basicParts = [];
            const enhancementParts = [];
            allParts.forEach(part => {
                const maneuver = data.getManeuverByName(part.name);
                if (maneuver && maneuver.id && maneuver.id.startsWith('BP-')) {
                    basicParts.push(part);
                } else {
                    enhancementParts.push(part);
                }
            });

            let enhancementLine = '';
            if (enhancementParts.length > 0) {
                const damagedCount = enhancementParts.filter(p => p.damaged).length;
                const symbols = '・'.repeat(damagedCount) + '●'.repeat(enhancementParts.length - damagedCount);
                enhancementLine = `<div>${symbols}：強</div>`;
            }

            let basicLine = '';
            if (basicParts.length > 0) {
                const damagedCount = basicParts.filter(p => p.damaged).length;
                const symbols = '・'.repeat(damagedCount) + '■'.repeat(basicParts.length - damagedCount);
                basicLine = `<div>${symbols}：基</div>`;
            }
            
            lines = basicLine + enhancementLine;

        } else if (char.category === 'レギオン') {
            const stackCount = char.isDestroyed ? 0 : char.stackCount;
            const lineCount = Math.ceil(stackCount / 10);
            const lineArray = [];
            
            for (let i = 0; i < lineCount; i++) {
                const start = i * 10;
                const countInLine = Math.min(stackCount - start, 10);
                if (countInLine > 0) {
                    lineArray.push(`<div>${'●'.repeat(countInLine)}：</div>`);
                }
            }
            lines = lineArray.reverse().join('');
        }

        if (lines) {
            partsStatusHtml = `<div class="char-parts-status">${lines}</div>`;
        }
    }

    const isLegion = char.category === 'レギオン';
    let topRightHtml = '';
    if (isLegion) {
        const stackCount = char.isDestroyed ? 0 : char.stackCount;
        topRightHtml = `<div class="char-stack-count">${stackCount}体</div>`;
    } else {
        const undamagedPartsCount = char.isDestroyed ? 0 : Object.values(char.partsStatus).flat().filter(p => !p.damaged).length;
        topRightHtml = `<div class="char-parts-count">${undamagedPartsCount}</div>`;
    }
    
    const actionValueDisplay = `
        <div class="char-action-display">
            <div class="char-action-value">${char.actionValue}</div>
            <div class="char-action-subtext">行動値</div>
            <div class="char-action-subtext">最大:${char.maxActionValue}</div>
        </div>
    `;

    const areaClassMap = { '奈落': 'naraku', '地獄': 'jigoku', '煉獄': 'rengoku', '花園': 'hanazono', '楽園': 'rakuen' };
    const areaClass = `area-color-${areaClassMap[char.area] || ''}`;

    card.innerHTML = `
        <div class="char-status-overlays ${statusOverlayClasses.trim()}">
            <div class="status-tape status-tape-mental-collapse">BREAKDOWN 精神崩壊 BREAKDOWN</div>
            <div class="status-tape status-tape-destroyed">DESTROYED 完全破壊 DESTROYED</div>
            <div class="status-tape status-tape-withdrawn">ESCAPE 戦場離脱 ESCAPE</div>
        </div>
        <div class="char-img-container">
            <img src="${char.img}" alt="${char.name}">
        </div>
        <div class="char-stats"></div>
            <div class="char-bubble-marker-container" data-id="${char.id}"></div>
            <div class="char-action-marker-container" data-id="${char.id}"></div>
            <div class="damage-prompt-container"></div> 
            <div class="char-area-name ${areaClass}">${char.area}</div>
            <div class="char-name-overlay">${char.name}</div>
            ${topRightHtml}
            ${actionValueDisplay}
            ${madnessHtml} 
            ${partsStatusHtml} 
        ${isSetupPhase ? setupPhaseActions : ''}
    `;
    return card;
}

function placeMarker(char) {
    if (!char) return;
    const { actionValue, area, id, name, img, stackCount } = char;
    const battleWrap = document.getElementById('battleWrap');
    const r = rows.indexOf(area);
    if (r === -1) return;
    const cell = battleWrap.querySelector(`.cell[data-row="${r}"][data-col="${actionValue}"]`);
    if (!cell) return;
    const marker = document.createElement('span');
    marker.className = 'marker';
    marker.dataset.id = id;
    marker.dataset.name = name;
    const imgEl = new Image();
    imgEl.src = img;
    imgEl.className = 'marker-img';
    imgEl.alt = name;
    marker.appendChild(imgEl);
    if (char.category === 'レギオン' && stackCount > 1) {
        const stackDiv = document.createElement('div');
        stackDiv.className = 'marker-stack-count';
        stackDiv.textContent = `x${stackCount}`;
        marker.appendChild(stackDiv);
    }

    cell.appendChild(marker);
}

export function scrollToFirstCharacter(characters) {
    if (!characters || characters.length === 0) return;
    const firstCharacterId = characters[0].id;
    const targetCard = document.querySelector(`.char[data-id="${firstCharacterId}"]`);
    if (!targetCard) return;
    targetCard.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center', 
        inline: 'center' 
    });
}

export function addLog(message) {
    const logArea = document.getElementById('logEntries');
    if (!logArea) return;
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = message;
    logArea.appendChild(entry);
    logArea.scrollTop = logArea.scrollHeight;
}

export function showMadnessModal() {
    const modal = document.getElementById('madnessModal');
    const body = document.getElementById('madnessModalBody');
    body.innerHTML = '';
    const pcs = charManager.getCharacters().filter(c => c.type === 'pc' && !c.isDestroyed && !c.hasWithdrawn);

    if (pcs.length === 0) {
        battleLogic.proceedToNextTurn();
        return;
    }

    pcs.forEach(pc => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'pc-regret-group';
        groupDiv.dataset.pcId = pc.id;
        groupDiv.innerHTML = `<h4>${pc.name}の未練 (1つ選択)</h4>`;
        
        pc.regrets.forEach(regret => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'regret-item';
            itemDiv.dataset.regretId = regret.id;
            itemDiv.textContent = `${regret.name} (狂気点: ${regret.points})`;
            groupDiv.appendChild(itemDiv);
        });
        body.appendChild(groupDiv);
    });

    modal.classList.add('is-visible');
    interactionManager.setupMadnessModalEventListeners(pcs);
}

export function updateSingleCharacterCard(characterId) {
    const character = charManager.getCharacterById(characterId);
    if (!character) return;
    const oldCard = document.querySelector(`.char[data-id="${characterId}"]`);
    if (oldCard) {
        const isSetupPhase = !battleLogic.getBattleState().isStarted;
        const newCard = createCharacterCard(character, isSetupPhase);
        oldCard.replaceWith(newCard);
        interactionManager.setupCharacterEventListeners();
    }
}
export function updateMarkers() {
    const battleWrap = document.getElementById('battleWrap');
    battleWrap.querySelectorAll('.marker').forEach(m => m.remove());
    const charactersOnBoard = charManager.getCharacters().filter(c => !c.isDestroyed && !c.hasWithdrawn); 
    charactersOnBoard.forEach(char => {
        placeMarker(char);
    });
    interactionManager.setupCharacterEventListeners();
}

/**
 * 【改名・修正】右側パネルの状態と、それに関連するUI（ハイライト、マーカー）を更新する
 * @param {object} state - battleLogic.getBattleState() から取得した現在の戦闘状態
 * @param {Array<object>} characters - charManager.getCharacters() から取得したキャラクターのリスト
 */
function updateStatusPanel(state, characters) {
    const { isStarted, turn, count, phase, activeActors, potentialActors, shouldScrollToCount } = state;
    
    // --- DOM要素の取得 ---
    const timingArea = document.getElementById('timingArea');
    const battleWrap = document.getElementById('battleWrap');
    const turnIndicator = document.getElementById('turnIndicator');
    const countIndicator = document.getElementById('countIndicator');
    const cavEl = document.getElementById('currentActionValue');
    const resetBtn = document.getElementById('resetBattleBtn');

    if (timingArea) {
        if (isStarted) {
            timingArea.classList.remove('setup-phase');
            timingArea.classList.add('battle-phase');
            battleWrap.classList.remove('setup-phase');
            if (resetBtn) resetBtn.disabled = false;
        } else {
            timingArea.classList.add('setup-phase');
            timingArea.classList.remove('battle-phase');
            battleWrap.classList.add('setup-phase');
            if (resetBtn) resetBtn.disabled = true;
        }
    }
    
    if (!isStarted) {
        turnIndicator.textContent = '-';
        countIndicator.textContent = '-';
        cavEl.textContent = `カウント -`;
    } else {
        // if (String(turn) !== turnIndicator.textContent) addLog(`【ターン ${turn} 開始】`);
        turnIndicator.textContent = turn;
        countIndicator.textContent = count;
        cavEl.textContent = `カウント ${count}`;
    }
    
    battleWrap.querySelectorAll('.highlight-col').forEach(el => el.classList.remove('highlight-col'));
    if(isStarted) {
        battleWrap.querySelectorAll(`.cell[data-col="${count}"], .col-header[data-col="${count}"]`).forEach(el => el.classList.add('highlight-col'));
        if (shouldScrollToCount) {
            const scrollWrapper = document.querySelector('.battle-grid-scroll-wrapper');
            const targetColHeader = battleWrap.querySelector(`.col-header[data-col="${count}"]`);
            if (scrollWrapper && targetColHeader) {
                // 水平スクロールを実行
                scrollWrapper.scrollTo({ left: targetColHeader.offsetLeft - scrollWrapper.offsetLeft - 104, behavior: 'smooth' });
            }
            battleLogic.clearScrollFlag();
        }
    }

    const activeActorIds = new Set(activeActors.map(c => c.id));
    document.querySelectorAll('.char').forEach(card => {
        card.classList.toggle('highlight-char', activeActorIds.has(card.dataset.id));
    });

    // ▼▼▼ ここからが今回の修正箇所です ▼▼▼
    // --- 現在のフェーズに応じてUI要素へ自動スクロール ---
    /*
    let focusElement = null;
    switch (phase) {
        case 'ACTION_DECLARATION':
            if (activeActors.length > 0) {
                focusElement = document.querySelector(`.char[data-id="${activeActors[0].id}"]`);
            }
            break;
        case 'RAPID_RESOLUTION':
            focusElement = document.getElementById('rapidDeclarationArea');
            break;
        case 'ACTION_RESOLUTION':
            // アクションキューとジャッジキューは同じエリアにあるため、親コンテナにスクロール
            focusElement = document.getElementById('actionDeclarationArea');
            break;
        case 'DAMAGE_RESOLUTION':
            focusElement = document.getElementById('damageProcessingArea');
            break;
    }

    if (focusElement) {
        focusElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
    }
    */
    // ▲▲▲ 修正はここまでです ▲▲▲
    // 新しい実装（横スクロールに限定）
    if (phase === 'ACTION_DECLARATION' && activeActors.length > 0) {
        const activeCharCard = document.querySelector(`.char[data-id="${activeActors[0].id}"]`);
        if (activeCharCard) {
            const container = activeCharCard.closest('.char-container');
            if (container) {
                // 1. スクロール先の中心位置を計算
                //    = (カードの左端位置) - (コンテナの半分の幅) + (カードの半分の幅)
                const targetScrollLeft = activeCharCard.offsetLeft - (container.offsetWidth / 2) + (activeCharCard.offsetWidth / 2);
                
                // 2. 計算した位置にスクロールする
                container.scrollTo({
                    left: targetScrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }

    // 1. フォーカスすべきUI要素を決定する (これは変更なし)
    let focusElement = null;
    switch (phase) {
        case 'ACTION_DECLARATION':
            if (activeActors.length > 0) {
                const firstActorType = activeActors[0].type;
                if (firstActorType === 'pc') {
                    focusElement = document.querySelector('.grid-area-pc-panel');
                } else {
                    focusElement = document.querySelector('.grid-area-enemy-panel');
                }
            }
            break;
        case 'RAPID_RESOLUTION':
            focusElement = document.getElementById('rapidDeclarationArea');
            break;
        case 'ACTION_RESOLUTION':
        case 'JUDGE_RESOLUTION':
            focusElement = document.getElementById('actionDeclarationArea');
            break;
        case 'DAMAGE_RESOLUTION':
            focusElement = document.getElementById('damageProcessingArea');
            break;
    }

    // 2. 縦スクロールを実行する
    if (focusElement) {
        // scrollIntoViewを使いつつ、挙動を制御する
        // block: 'center' で要素が中央に来るように
        // inline: 'nearest' で横スクロールは最小限に
        focusElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'nearest'
        });
    }

    // 3. 盤面(.scroll-wrapper)の横スクロールを中央に補正する（これは維持）
    const scrollWrapper = document.querySelector('.scroll-wrapper');
    const mainPanel = document.querySelector('.grid-area-main-panel');

    if (scrollWrapper && mainPanel) {
        const wrapperWidth = scrollWrapper.clientWidth;
        const panelWidth = mainPanel.offsetWidth;
        const targetScrollLeft = (panelWidth - wrapperWidth) / 2;
        
        if (scrollWrapper.scrollLeft !== targetScrollLeft) {
            scrollWrapper.scrollLeft = targetScrollLeft;
        }
    }

    const potentialActorIds = new Set(potentialActors.map(char => char.id));
    characters.forEach(char => {
        clearBubbleMarkers(char.id, 'char-bubble-marker-container');
        if (isStarted && !char.isDestroyed && !char.hasWithdrawn) {
            const usableManeuvers = getCharacterManeuvers(char);
            if (potentialActorIds.has(char.id)) addBubbleMarker(char.id, 'ACT', 'char-bubble-marker-container', '#36c', 'white');
            if (usableManeuvers.some(m => m.data.timing === 'ラピッド' && m.isUsable)) addBubbleMarker(char.id, 'RPD', 'char-bubble-marker-container', '#c63', 'white');
            if (usableManeuvers.some(m => m.data.timing === 'ジャッジ' && m.isUsable)) addBubbleMarker(char.id, 'JDG', 'char-bubble-marker-container', '#396', 'white');
            if (usableManeuvers.some(m => m.data.timing === 'ダメージ' && m.isUsable)) addBubbleMarker(char.id, 'DMG', 'char-bubble-marker-container', '#933', 'white');
        }
    });

    updatePhaseUI(state);
    updateAllQueuesUI();
    updateActionDeclarationMarkers();
}

export function updateCharacterHighlights(activeActors) {
    const activeActorIds = new Set(activeActors.map(actor => actor.id));
    document.querySelectorAll('.char').forEach(card => {
        card.classList.toggle('highlight-char', activeActorIds.has(card.dataset.id));
    });
}

export function updatePhaseUI(state) {
    if (!state) return;
    // ★★★ actionQueue だけでなく、他のキューも受け取る ★★★
    const { phase, activeActors, actionQueue, rapidQueue, judgeQueue, damageQueue } = state;

    const indicators = {
        action: document.getElementById('actionPhaseIndicator'),
        rapid: document.getElementById('rapidPhaseIndicator'),
        judge: document.getElementById('judgePhaseIndicator'),
        damage: document.getElementById('damagePhaseIndicator'),
    };

    const hasUnresolvedActions = actionQueue.some(a => !a.checked);
    const hasUnresolvedRapids = rapidQueue.some(r => !r.checked);
    const hasUnresolvedJudges = judgeQueue.some(j => !j.checked);
    const hasPendingDamage = damageQueue.some(d => !d.applied);

    // 【アクション】行動可能なアクターがいる場合にのみ点灯 (変更なし)
    const showAction = activeActors.length > 0;

    // 点灯条件：アクション宣言が1つ以上ある
    const conditionToTurnOn = actionQueue.length > 0;
    
    // 消灯条件：ラピッド、ジャッジ、アクションのキューに未解決アイテムが「ない」
    const conditionToTurnOff = !hasUnresolvedRapids && !hasUnresolvedJudges && !hasUnresolvedActions;

    let showRapid = false;
    if (conditionToTurnOn && !conditionToTurnOff) {
        showRapid = true;
    }

    // 【ジャッジ】アクションタイミングが終了し、かつ未解決のアクションが残っている場合に点灯 (変更なし)
    const showJudge = !showAction && hasUnresolvedActions;

    // 【ダメージ】の判定ロジック (変更なし)
    const showDamage = phase === 'DAMAGE_RESOLUTION' || (actionQueue.every(a => a.checked) && hasPendingDamage);

    indicators.action.classList.toggle('active', showAction);
    indicators.rapid.classList.toggle('active', showRapid);
    indicators.judge.classList.toggle('active', showJudge);
    indicators.damage.classList.toggle('active', showDamage);

    const countdownBtn = document.getElementById('countdownBtn');
    const endTurnBtn = document.getElementById('endTurnBtn');

    if (!countdownBtn || !endTurnBtn) return;

    countdownBtn.disabled = true;
    endTurnBtn.disabled = true;

    if (phase === 'COUNT_END') {
        countdownBtn.disabled = false;
    } else if (phase === 'TURN_END_PREPARATION') {
        endTurnBtn.disabled = false;
    }
}

export function updateAllQueuesUI() {
    const { actionQueue, rapidQueue, judgeQueue, damageQueue } = battleLogic.getBattleState();
    updateQueueUI('actionDeclarationList', actionQueue, "アクション宣言");
    updateQueueUI('rapidDeclarationList', rapidQueue, "ラピッド宣言");
    updateQueueUI('judgeDeclarationList', judgeQueue, "ジャッジ宣言");
    updateDamageQueueUI(damageQueue);
    
    document.getElementById('actionDeclarationArea').classList.toggle('is-closed', actionQueue.length === 0);
    document.getElementById('rapidDeclarationArea').classList.toggle('is-closed', rapidQueue.length === 0);
    document.getElementById('judgeDeclarationArea').classList.toggle('is-closed', judgeQueue.length === 0);
    document.getElementById('damageProcessingArea').classList.toggle('is-closed', damageQueue.length === 0);
}

function updateQueueUI(elementId, queue, headerText) {
    const listEl = document.getElementById(elementId);
    if (!listEl) return;
    const container = listEl.closest('.accordion-container');
    const header = container ? container.querySelector('.accordion-header') : null;
    if (!header) return;
    const state = battleLogic.getBattleState();
    
    const isActionTimingActive = state.activeActors.length > 0;
    const hasUncheckedRapids = state.rapidQueue.some(r => !r.checked);
    const hasUncheckedJudges = state.judgeQueue.some(j => !j.checked);

    let textSpan = header.querySelector('span');
    if (!textSpan) {
        const originalText = header.textContent;
        header.innerHTML = '';
        textSpan = document.createElement('span');
        textSpan.textContent = originalText;
        header.appendChild(textSpan);
    }
    if (queue.length === 0) {
        listEl.innerHTML = ''; 
        textSpan.textContent = headerText + "はありません";
    } else {
        textSpan.textContent = headerText;
        listEl.innerHTML = ''; 
        queue.forEach((declaration, index) => {
            const labelEl = document.createElement('label');
            labelEl.className = 'action-queue-item';

            // アクション種別を data-action 属性として設定
            if (elementId === 'rapidDeclarationList') {
                labelEl.dataset.action = 'resolve-rapid';
            } else if (elementId === 'judgeDeclarationList') {
                labelEl.dataset.action = 'resolve-judge';
            } else if (elementId === 'actionDeclarationList') {
                labelEl.dataset.action = 'resolve-action';
            }
            // インデックスを data-index 属性として設定
            labelEl.dataset.index = index;
            // ▲▲▲ 変更ここまで ▲▲▲
            let isDisabled = false;
            // 新しい有効化条件を適用
            if (elementId === 'rapidDeclarationList') {
                isDisabled = isActionTimingActive;
            } else if (elementId === 'judgeDeclarationList') {
                isDisabled = isActionTimingActive || hasUncheckedRapids;
            } else if (elementId === 'actionDeclarationList') {
                isDisabled = isActionTimingActive || hasUncheckedRapids || hasUncheckedJudges;
            }

            if (declaration.checked) isDisabled = true;
            if (isDisabled) labelEl.classList.add('is-disabled');
            if (declaration.checked) labelEl.classList.add('is-checked');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = declaration.checked;
            checkbox.disabled = true;

            labelEl.appendChild(checkbox);
            const textContentSpan = document.createElement('span');
            let text = `<b>${declaration.performer.name}</b>【${declaration.summary.name}】`;
            
            // ▼▼▼ 変更箇所 ▼▼▼
            let targetObject = null;
            // ジャッジ宣言の場合、judgeTargetが対象
            if (declaration.judgeTarget) {
                targetObject = declaration.judgeTarget.performer;
            } 
            // それ以外で、targetプロパティが存在する場合
            else if (declaration.target) {
                // targetがキャラクターオブジェクトか、移動妨害の対象となる宣言オブジェクトかを判定
                if (declaration.target.name) { // キャラクターオブジェクト
                    targetObject = declaration.target;
                } else if (declaration.target.performer) { // 宣言オブジェクト
                    const moveDecl = declaration.target;
                    // 移動の実行者と対象が異なる場合
                    if (moveDecl.target && moveDecl.target.id !== moveDecl.performer.id) {
                        text += `→ <b>${moveDecl.target.name}</b>（${moveDecl.performer.name}【${moveDecl.sourceManeuver.name}】）`;
                    } else {
                        targetObject = moveDecl.performer;
                    }
                }
            }

            if (targetObject) {
                text += `→ <b>${targetObject.name}</b>`;
            }
            // ▲▲▲ 変更ここまで ▲▲▲

            /*
            if (declaration.target) {
                // targetがキャラクターオブジェクト（nameプロパティを持つ）の場合
                if (declaration.target.name) {
                    text += ` → <b>${declaration.target.name}</b>`;
                }
                // targetが宣言オブジェクト（移動妨害の対象）の場合
                else if (declaration.target.performer && declaration.target.sourceManeuver) {
                    const moveDecl = declaration.target; // 妨害対象の移動宣言
                    
                    // 【ワイヤーリール】のように、移動の実行者と対象が異なる場合
                    if (moveDecl.target && moveDecl.target.id !== moveDecl.performer.id) {
                        text += ` → <b>${moveDecl.target.name}</b>（${moveDecl.performer.name}【${moveDecl.sourceManeuver.name}】）`;
                    } 
                    // 【ほね】のように、自身を移動させる場合
                    else {
                        text += ` → <b>${moveDecl.performer.name}【${moveDecl.sourceManeuver.name}】</b>`;
                    }
                }
            }
            */

            textContentSpan.innerHTML = text;
            labelEl.appendChild(textContentSpan);
            listEl.appendChild(labelEl);
        });
    }
}

function updateDamageQueueUI(queue) {
    const listEl = document.getElementById('damageProcessingList');
    if (!listEl) return;
    const container = listEl.closest('.accordion-container');
    const header = container ? container.querySelector('.accordion-header') : null;
    const isDamageActive = battleLogic.getBattleState().phase === 'DAMAGE_RESOLUTION';
    
    if (queue.length === 0) {
        listEl.innerHTML = '';
        if (header) header.textContent = "ダメージ宣言はありません";
    } else {
        if (header) header.textContent = "ダメージ宣言";
        listEl.innerHTML = '';
        queue.forEach((item, index) => {
            const labelEl = document.createElement('label');
            labelEl.className = 'action-queue-item damage-item';
            
            labelEl.dataset.action = 'resolve-damage';
            labelEl.dataset.index = index;

            let isDisabled = true; // デフォルトは無効
            let isChecked = false;
            const textSpan = document.createElement('span');

            // ★★★ type に応じて表示内容と状態を切り替える ★★★
            if (item.type === 'instance') {
                isChecked = item.applied;
                isDisabled = !isDamageActive || isChecked;

                const { finalAmount, baseAmount, totalBonus, totalDefense } = calculateFinalDamage(item);

                const attackerName = item.sourceAction.performer.name;
                
                let calcText = '';
                if (totalBonus > 0 || totalDefense > 0) {
                    const bonusText = totalBonus > 0 ? `+${totalBonus}` : '';
                    const defenseText = totalDefense > 0 ? `-${totalDefense}` : '';
                    calcText = ` (${baseAmount}${bonusText}${defenseText})`;
                }

                textSpan.innerHTML = `<b>${attackerName}</b> → <b>${item.target.name}</b>：${item.location}：<b>${finalAmount}</b>点${calcText}`;

            } else if (item.type === 'declaration') {
                isChecked = item.checked;
                isDisabled = isChecked; // 宣言は一度クリックされたら無効
                let text = `<b>${item.performer.name}</b> 【${item.sourceManeuver.name}】`;
                if (item.target) {
                    text += ` → <b>${item.target.name}</b>`;
                }
                textSpan.innerHTML = text;
            }

            if (isDisabled) labelEl.classList.add('is-disabled');
            if (isChecked) labelEl.classList.add('is-checked');
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = isChecked;
            checkbox.disabled = true;

            labelEl.appendChild(checkbox);
            labelEl.appendChild(textSpan);
            listEl.appendChild(labelEl);
        });
    }
}

export function createDamagePrompt(targetId, damageAmount) {
    const targetCard = document.querySelector(`.char[data-id="${targetId}"]`);
    if (!targetCard) return;

    const container = targetCard.querySelector('.damage-prompt-container');
    let button = container.querySelector('.damage-prompt-button');
    
    // ボタンがまだ存在しない場合にのみ新しく作成する
    if (!button) {
        button = document.createElement('button');
        button.className = 'damage-prompt-button';
        container.appendChild(button);
        
        button.style.pointerEvents = 'auto'; // クリックイベントを受け付けるように変更

        // クリックされたら、interaction-managerの新しい関数を呼び出す
        button.onclick = (e) => {
            e.stopPropagation(); // カード本体へのクリックイベント伝播を停止
            interactionManager.handleDamageMarkerClick(targetId);
        };
    }
    // ボタンのテキスト（ダメージ量）は常に更新する
    button.dataset.damage = damageAmount;
    button.textContent = `ダメージ ${damageAmount}`;
}

export function removeDamagePrompt(characterId) {
    const targetCard = document.querySelector(`.char[data-id="${characterId}"]`);
    if (targetCard) {
        const button = targetCard.querySelector('.damage-prompt-button');
        if (button) button.remove();
    }
}

export function checkBattleStartCondition() {
    const startButton = document.getElementById('startBattleBtn');
    if (!startButton) return; // ★ 修正
    const allCharacters = charManager.getCharacters();
    const hasPcs = allCharacters.some(c => c.type === 'pc');
    const hasEnemies = allCharacters.some(c => c.type === 'enemy');

    startButton.disabled = !(hasPcs && hasEnemies);
}

function getPartLocationText(maneuver, character) {
    if (!maneuver.id || !character.partsStatus) return '';
    const locationMap = { head: '頭', arms: '腕', torso: '胴', legs: '脚', body: '体' };
    for (const loc in character.partsStatus) {
        if (character.partsStatus[loc].some(p => p.name === maneuver.name)) {
            return `${locationMap[loc] || '体'}：`;
        }
    }
    return 'スキル：';
}

export function displayVersionInfo(versionInfo) {
    const versionContainer = document.getElementById('version-info');
    if (versionContainer && versionInfo) {
        const displayOrder = [
            'app', 
            'ui-manager', 
            'interaction-manager', 
            'character-manager', 
            'settings-manager', 
            'state-manager', 
            'battle-logic', 
            'dice-3d', 
            'dice-roller', 
            'menu-builder', 
            'battle-helper', 
            'data-handler', 
            'ui-helpers', 
            'reference', 
            'p2p-manager',
            'p2p-protocol',
            'character-converter',
            'personality-generator'
        ];
        
        const versionHtml = displayOrder
            .map(key => `<span class="responsive-item">${key}: v${versionInfo[key] || 'N/A'}</span>`)
            .join('<span class="hide-on-mobile"> | </span>');

        versionContainer.innerHTML = versionHtml;
    }
}

/**
 * 画面中央に汎用モーダルを表示する
 * @param {object} options - モーダルの設定
 * @param {string} options.title - モーダルのタイトル
 * @param {Array<object>} [options.items] - 表示するメニュー項目の配列 {label, isDisabled, onClick}
 * @param {string} [options.bodyHtml] - ボディに直接挿入するHTML文字列
 * @param {string} [options.footerHtml] - フッターに直接挿入するHTML文字列
 * @param {function(modal, closeFn)} [options.onRender] - モーダルが描画された後に実行されるコールバック関数
 */
export function showModal(options) {
    const modal = document.getElementById('simpleMenuModal');
    const modalTitle = document.getElementById('simpleMenuModalTitle');
    const modalBody = document.getElementById('simpleMenuModalBody');
    const modalFooter = document.getElementById('simpleMenuModalFooter');
    const closeBtn = document.getElementById('closeSimpleMenuModalBtn');

    if (!modal || !modalTitle || !modalBody || !modalFooter || !closeBtn) return;
    
    // ★★★ ここからが修正箇所です ★★★
    // closableオプションのデフォルト値をtrueに設定
    const isClosable = options.closable !== false;

    // isClosable の状態に応じて、is-not-closable クラスを付け外しする
    modal.classList.toggle('is-not-closable', !isClosable);

    closeBtn.style.display = isClosable ? 'block' : 'none';
    
    modalTitle.textContent = options.title || '';
    modalBody.innerHTML = options.bodyHtml || '';
    modalFooter.innerHTML = options.footerHtml || '';
    modalFooter.style.display = options.footerHtml ? 'block' : 'none';

    modalBody.classList.remove('attack-confirm-body');
    if (options.bodyHtml && options.bodyHtml.includes('attack-confirm-summary')) {
        modalBody.classList.add('attack-confirm-body');
    }

    if (options.items) {
        options.items.forEach(itemData => {
            const itemEl = document.createElement('div');
            if (itemData.isTitle) {
                // (省略)
            } else {
                itemEl.textContent = itemData.label;
                itemEl.classList.add('maneuver-item');
                if (itemData.class) {
                    itemEl.classList.add(...itemData.class.split(' '));
                }
                if (itemData.isDisabled) {
                    itemEl.classList.add('is-masked');
                }
                itemEl.onclick = () => {
                    if (itemData.isDisabled) return;
                    closeModal();
                    if (itemData.onClick) {
                        itemData.onClick();
                    }
                };
            }
            modalBody.appendChild(itemEl);
        });
    }

    const closeModal = () => modal.classList.remove('is-visible');

    if (isClosable) {
        closeBtn.onclick = closeModal;
        modal.onclick = (e) => {
            if (e.target === modal) closeModal();
        };
    } else {
        // closable: false の場合、クリックイベントを無効化
        closeBtn.onclick = null;
        modal.onclick = null;
    }

    if (options.onRender) {
        options.onRender(modal, closeModal);
    }

    modal.classList.add('is-visible');
}

/**
 * ローディング進捗バーを表示する
 * @param {string} initialMessage - 表示する初期メッセージ
 */
export function showLoadingProgress(initialMessage) {
    const overlay = document.getElementById('loading-overlay');
    const messageEl = document.getElementById('loading-message');
    const fillEl = document.getElementById('progress-bar-fill');

    if (!overlay || !messageEl || !fillEl) return;

    messageEl.textContent = initialMessage || '処理を開始しています...';
    fillEl.style.width = '0%';
    overlay.classList.add('is-visible');
}

/**
 * ローディング進捗バーの状態を更新する
 * @param {number} current - 現在の処理済み件数
 * @param {number} total - 全体の件数
 * @param {string} itemName - 現在処理中のアイテム名
 */
export function updateLoadingProgress(current, total, itemName) {
    const messageEl = document.getElementById('loading-message');
    const fillEl = document.getElementById('progress-bar-fill');

    if (!messageEl || !fillEl) return;

    const percent = total > 0 ? (current / total) * 100 : 0;
    
    messageEl.textContent = `キャラクターを読み込み中... (${current} / ${total})`;
    if (itemName) {
        messageEl.textContent += `\n「${itemName}」`;
    }
    
    fillEl.style.width = `${percent}%`;
}

/**
 * ローディング進捗バーを非表示にする
 */
export function hideLoadingProgress() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.remove('is-visible');
    }
}
/**
 * 指定したキャラクターカードに「ふきだしマーカー」を追加する
 * @param {string} characterId - 対象キャラクターのID
 * @param {string} text - マーカーに表示する文字列
 * @param {string} containerClass - マーカーを追加するコンテナのクラス名
 * @param {string} [backgroundColor] - マーカーの背景色
 * @param {string} [borderColor] - マーカーの枠線の色
 */
export function addBubbleMarker(characterId, text, containerClass, backgroundColor = 'rgba(0,0,0,0.7)', borderColor = 'white') {
    const container = document.querySelector(`.${containerClass}[data-id="${characterId}"]`);
    if (!container) return;

    const marker = document.createElement('div');
    marker.className = 'bubble-marker';
    marker.textContent = text;
    marker.style.backgroundColor = backgroundColor;
    marker.style.borderColor = borderColor;

    container.appendChild(marker);
}

/**
 * 指定したキャラクターカードの特定のコンテナ内の「ふきだしマーカー」を削除する
 * @param {string} characterId - 対象キャラクターのID
 * @param {string} containerClass - クリアするコンテナのクラス名
 */
export function clearBubbleMarkers(characterId, containerClass) {
    const container = document.querySelector(`.${containerClass}[data-id="${characterId}"]`);
    if (container) {
        container.innerHTML = '';
    }
}

/**
 * 現在のアクションキューに基づいて「ATK」と「TGT」のマーカーを更新する
 */
export function updateActionDeclarationMarkers() {
    const { actionQueue, isStarted } = battleLogic.getBattleState();
    const allCharacters = charManager.getCharacters();

    // 「何をしているか」のコンテナだけをクリアする
    allCharacters.forEach(char => clearBubbleMarkers(char.id, 'char-action-marker-container'));

    if (isStarted) {
        actionQueue.forEach(declaration => {
            if (!declaration.checked) { // 未解決の宣言のみ
                const { performer, target, sourceManeuver } = declaration;

                // --- ① 攻撃者のマーカーを決定 ---
                if (performer) {
                    let markerText = 'ACT';
                    let markerColor = '#666'; // デフォルト (その他)

                    if (sourceManeuver.tags.includes('攻撃')) {
                        markerText = '攻撃';
                        markerColor = '#f0f';
                    } else if (sourceManeuver.tags.includes('移動')) {
                        markerText = '移動';
                        markerColor = '#0f0';
                    } else if (sourceManeuver.category === '支援' || sourceManeuver.tags.includes('支援')) {
                        markerText = '支援';
                        markerColor = '#0ff';
                    } else if (sourceManeuver.category === '妨害' || sourceManeuver.tags.includes('妨害')) {
                        markerText = '妨害';
                        markerColor = '#ff0';
                    }
                    
                    addBubbleMarker(performer.id, markerText, 'char-action-marker-container', markerColor, 'white');
                }

                // --- ② 被攻撃者のマーカー (TGT) ---
                if (target) {
                    addBubbleMarker(target.id, 'TGT', 'char-action-marker-container', '#f00', 'white');
                }
            }
        });
    }
}