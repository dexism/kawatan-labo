/**
 * @file interaction-manager.js
 * @description ユーザー操作の受付とイベントリスナーの管理を担当するモジュール
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "2.2.9"; // パッチバージョンを更新

import * as data from './data-handler.js'; 
import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { buildDiceMenu } from './dice-roller.js';
import { 
    buildManeuverMenu, showCharacterSheetModal, 
    showUndeadListModal, buildMoveMenu, 
    buildPlacementMenu, closeAllMenus, 
    showAttackConfirmationModal 
} from './menu-builder.js';
import * as stateManager from './state-manager.js';

// --- モジュール内変数 ---
let isCardDragging = false;
let selectedCardElement = null;

// --- 初期化とイベントリスナー設定 ---

export function initialize() {
    console.log("Interaction Manager initialized.");
}

export function setupAllEventListeners() {
    document.addEventListener('click', (e) => {
        if (selectedCardElement && !selectedCardElement.contains(e.target)) {
            selectedCardElement.classList.remove('actions-visible');
            selectedCardElement = null;
        }
    });

    setupCharacterEventListeners();
    setupDiceRollerEventListeners();
    setupDragToScroll(document.getElementById('pcContainer'));
    setupDragToScroll(document.getElementById('enemyContainer'));
    setupAccordion();

    const startBattleBtn = document.getElementById('startBattleBtn');
    if (startBattleBtn) {
        startBattleBtn.onclick = () => {
            if (startBattleBtn.disabled) return;
            battleLogic.startBattle();
        };
    }

    document.getElementById('countdownBtn').onclick = () => battleLogic.advanceCount();
    document.getElementById('endTurnBtn').onclick = () => battleLogic.startMadnessPhase();

    // セッション管理ボタンのイベントリスナー
    const saveToFileBtn = document.getElementById('saveStateToFileBtn');
    if (saveToFileBtn) {
        saveToFileBtn.onclick = stateManager.saveStateToFile; // ★この行を追加
    }
    
    const saveBtn = document.getElementById('saveStateBtn');
    if (saveBtn) {
        saveBtn.onclick = stateManager.saveState;
    }

    const clearBtn = document.getElementById('clearStateBtn');
    if (clearBtn) {
        clearBtn.onclick = () => {
            if (confirm('ブラウザに保存されたセッションデータを削除します。この操作は取り消せません。よろしいですか？')) {
                stateManager.clearSavedState();
            }
        };
    }
}

export function setupCharacterEventListeners() {
    document.querySelectorAll('.char').forEach((element) => {
        const id = element.dataset.id;
        if (!id) return;
        const char = charManager.getCharacterById(id);
        if (!char) return;

        if (battleLogic.getBattleState().isStarted) {
            element.onclick = (e) => {
                e.stopPropagation();
                if (isCardDragging) { isCardDragging = false; return; }
                buildManeuverMenu(char, element);
            };
        } else {
            element.onclick = (e) => {
                e.stopPropagation();
                if (isCardDragging) { isCardDragging = false; return; }
                if (selectedCardElement === element) {
                    element.classList.remove('actions-visible');
                    selectedCardElement = null;
                } else {
                    if (selectedCardElement) {
                        selectedCardElement.classList.remove('actions-visible');
                    }
                    element.classList.add('actions-visible');
                    selectedCardElement = element;
                }
            };

            const deleteBtn = element.querySelector('[data-action="delete"]');
            if (deleteBtn) { deleteBtn.onclick = (e) => { e.stopPropagation(); charManager.removeCharacter(id); ui.renderCharacterCards(); ui.checkBattleStartCondition(); selectedCardElement = null; }; }
            
            const detailsBtn = element.querySelector('[data-action="details"]');
            if (detailsBtn) { detailsBtn.onclick = (e) => { e.stopPropagation(); showCharacterSheetModal(char); }; }

            const placeBtn = element.querySelector('[data-action="place"]');
            if (placeBtn) { 
                placeBtn.onclick = (e) => { 
                    e.stopPropagation(); 
                    buildPlacementMenu(char, element, e); 
                }; 
            }
            
            const leftBtn = element.querySelector('[data-action="move-left"]');
            if (leftBtn) { leftBtn.onclick = (e) => { e.stopPropagation(); charManager.moveCharacter(id, 'left'); ui.renderCharacterCards(); selectedCardElement = null; }; }
            
            const rightBtn = element.querySelector('[data-action="move-right"]');
            if (rightBtn) { rightBtn.onclick = (e) => { e.stopPropagation(); charManager.moveCharacter(id, 'right'); ui.renderCharacterCards(); selectedCardElement = null; }; }

            const sameTypeChars = charManager.getCharacters().filter(c => c.type === char.type);
            const relativeIndex = sameTypeChars.findIndex(c => c.id === id);
            if (leftBtn) leftBtn.disabled = (relativeIndex === 0);
            if (rightBtn) rightBtn.disabled = (relativeIndex === sameTypeChars.length - 1);
        }

        element.onmouseenter = () => {
            document.querySelector(`.char[data-id="${id}"]`)?.classList.add('hover-highlight');
            document.querySelector(`.marker[data-id="${id}"]`)?.classList.add('hover-highlight');
        };
        element.onmouseleave = () => {
            document.querySelector(`.char[data-id="${id}"]`)?.classList.remove('hover-highlight');
            document.querySelector(`.marker[data-id="${id}"]`)?.classList.remove('hover-highlight');
        };
    });

    document.querySelectorAll('.marker').forEach((marker) => {
        const id = marker.dataset.id;
        if (!id) return;
        const char = charManager.getCharacterById(id);
        if (!char) return;
        if (battleLogic.getBattleState().isStarted) {
             marker.onclick = (e) => {
                e.stopPropagation();
                buildManeuverMenu(char, marker);
            };
        }
        marker.onmouseenter = () => {
            document.querySelector(`.char[data-id="${id}"]`)?.classList.add('hover-highlight');
            marker.classList.add('hover-highlight');
        };
        marker.onmouseleave = () => {
            document.querySelector(`.char[data-id="${id}"]`)?.classList.remove('hover-highlight');
            marker.classList.remove('hover-highlight');
        };
    });

    document.querySelectorAll('.add-char-card').forEach(card => {
        const container = card.closest('.char-container');
        if (container) {
            const type = container.id === 'pcContainer' ? 'pc' : 'enemy';
            card.onclick = null;
            card.onclick = () => { showUndeadListModal(type); };
        }
    });
}

export function setupDragToScroll(container) {
    let isDown = false, startX, scrollLeft, walk;
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        isCardDragging = false;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        walk = 0;
    });
    const stopDragging = () => {
        isDown = false;
        if (Math.abs(walk) > 5) {
            isCardDragging = true;
        }
    };
    container.addEventListener('mouseleave', stopDragging);
    container.addEventListener('mouseup', stopDragging);
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        walk = x - startX;
        container.scrollLeft = scrollLeft - walk;
    });
}

export function setupDiceRollerEventListeners() {
  const diceRoller = document.getElementById('diceRoller');
  let isDragging = false, offsetX, offsetY, clickStartX, clickStartY;
  diceRoller.addEventListener('mousedown', (e) => {
    clickStartX = e.clientX; clickStartY = e.clientY; isDragging = true;
    offsetX = e.clientX - diceRoller.getBoundingClientRect().left;
    offsetY = e.clientY - diceRoller.getBoundingClientRect().top;
    diceRoller.style.cursor = 'grabbing';
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp); e.preventDefault();
  });
  function onMouseMove(e) { if (!isDragging) return; diceRoller.style.left = `${e.clientX - offsetX}px`; diceRoller.style.top = `${e.clientY - offsetY}px`; }
  function onMouseUp() { isDragging = false; diceRoller.style.cursor = 'grab'; document.removeEventListener('mousemove', onMouseMove); document.removeEventListener('mouseup', onMouseUp); }
  diceRoller.addEventListener('click', (e) => { if (Math.abs(e.clientX - clickStartX) > 3 || Math.abs(e.clientY - clickStartY) > 3) return; buildDiceMenu(e); });
}

export function setupAccordion() {
    document.querySelectorAll('.accordion-header').forEach(header => {
        if (header.closest('#maneuverMenu')) return;
        header.addEventListener('click', () => {
            const container = header.closest('.accordion-container');
            if (container) {
                container.classList.toggle('is-closed');
            }
        });
    });
}

export function setupMadnessModalEventListeners(pcs) {
    const modal = document.getElementById('madnessModal');
    const confirmBtn = document.getElementById('confirmMadnessBtn');
    const selections = new Map();
    document.querySelectorAll('.pc-regret-group').forEach(group => {
        group.querySelectorAll('.regret-item').forEach(item => {
            item.onclick = () => {
                group.querySelectorAll('.regret-item').forEach(el => el.classList.remove('is-selected'));
                item.classList.add('is-selected');
                selections.set(group.dataset.pcId, item.dataset.regretId);
                confirmBtn.disabled = selections.size !== pcs.length;
            };
        });
    });
    confirmBtn.disabled = true;
    confirmBtn.onclick = () => {
        selections.forEach((regretId, pcId) => charManager.addMadnessPoint(pcId, regretId));
        modal.classList.remove('is-visible');
        battleLogic.proceedToNextTurn();
    };
}

// --- ユーザー操作の処理（イベントハンドラ）---
export function handleQueueCheck(queueType, index, isChecked) {
    battleLogic.handleQueueCheck(queueType, index, isChecked);
}

export function handleRapidItemClick(index) {
    battleLogic.resolveRapidByIndex(index);
}

export function handleActionItemClick(index) {
    // 1. 宣言内容を取得
    const state = battleLogic.getBattleState();
    const declaration = state.actionQueue[index];
    if (!declaration) return;

    const { performer, target, sourceManeuver } = declaration;

    // 2. 攻撃マニューバかどうかを判定
    if (sourceManeuver.tags.includes('攻撃')) {
        // 3. 攻撃なら確認モーダルを表示
        showAttackConfirmationModal(performer, target, sourceManeuver, index);
    } else {
        // 4. 攻撃でなければ直接解決
        battleLogic.resolveActionByIndex(index);
    }
}

export function handleJudgeItemClick(index) {
    battleLogic.checkJudgeItem(index);
}

export function handleDamageItemClick(index) {
    const { damageQueue } = battleLogic.getBattleState();
    const damageInfo = damageQueue[index];

    if (damageInfo && !damageInfo.applied) {
        const character = charManager.getCharacterById(damageInfo.target.id);
        if (!character) return;
        const onConfirmCallback = () => { battleLogic.applyDamage(index); };

        if (character.category === 'レギオン' || Object.values(character.partsStatus).flat().filter(p => !p.damaged).length <= damageInfo.amount) {
            if (character.category === 'レギオン') {
                ui.addLog(`レギオンへの攻撃！ ${damageInfo.amount}体が失われます。`);
                // charManager.damagePart(character.id, null, damageInfo.amount);
                const wasDestroyed = charManager.damagePart(character.id, null, damageInfo.amount);
                if (wasDestroyed) {
                    ui.showToastNotification(`${character.name}は完全破壊されました`);
                }
            } else {
                ui.addLog(`＞ ${character.name}は残りパーツ数以上のダメージを受け、完全に破壊されました！`);
                charManager.updateCharacter(character.id, { isDestroyed: true });
                ui.showToastNotification(`${character.name}は完全破壊されました`);
            }
            ui.removeDamagePrompt(character.id);
            onConfirmCallback();
        } else {
            showDamageModal(character, damageInfo.amount, damageInfo.location, onConfirmCallback);
        }
    }
}

function showDamageModal(target, damageAmount, hitLocation, onConfirmCallback) {
    const modal = document.getElementById('damageModal');
    const title = modal.querySelector('#damageModalTitle');
    const info = modal.querySelector('#damageModalInfo');
    const partsContainer = modal.querySelector('#partsGridContainer');
    const confirmBtn = modal.querySelector('#confirmDamageBtn');
    
    title.textContent = `${target.name} へのパーツ損傷処理`;
    partsContainer.innerHTML = '';
    let selectedParts = [];

    const updateInfoAndButton = () => {
        info.textContent = `損傷させるパーツを ${damageAmount} 個選択してください (残り: ${damageAmount - selectedParts.length})`;
        confirmBtn.disabled = selectedParts.length !== damageAmount;
    };

    updateInfoAndButton();

    const isHorror = target.category === 'ホラー';
    const locationMap = { '頭': 'head', '腕': 'arms', '胴': 'torso', '脚': 'legs', '体': 'body' };
    const locationKey = locationMap[hitLocation] || null;

    const locationsToDisplay = isHorror ? ['body'] : ['head', 'arms', 'torso', 'legs', 'body'];

    locationsToDisplay.forEach(loc => {
        const partsInLocation = target.partsStatus[loc];
        if (partsInLocation && partsInLocation.length > 0) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'part-location-group';
            groupDiv.dataset.location = loc;
            groupDiv.innerHTML = `<h4>${Object.keys(locationMap).find(key => locationMap[key] === loc) || '他'}</h4>`;
            
            const partsWrapper = document.createElement('div');
            partsWrapper.className = 'parts-wrapper';
            
            partsInLocation.forEach(part => {
                const partDiv = document.createElement('div');
                partDiv.className = 'part-item';
                partDiv.textContent = part.name;
                partDiv.dataset.partId = part.id;

                const maneuverData = data.getManeuverByName(part.name);
                if (maneuverData) {
                    partDiv.addEventListener('mouseenter', () => ui.showManeuverCard(modal.getBoundingClientRect(), partDiv.getBoundingClientRect(), target, { data: maneuverData, isDamaged: part.damaged }));
                    partDiv.addEventListener('mouseleave', () => ui.hideManeuverCard());
                }

                if (part.damaged) {
                    partDiv.classList.add('is-damaged');
                } else {
                    partDiv.onclick = () => {
                        const partId = part.id;
                        const index = selectedParts.indexOf(partId);
                        if (index > -1) {
                            partDiv.classList.remove('is-selected');
                            selectedParts.splice(index, 1);
                        } else {
                            if (selectedParts.length < damageAmount) {
                                partDiv.classList.add('is-selected');
                                selectedParts.push(partId);
                            }
                        }
                        updateInfoAndButton();
                    };
                }
                partsWrapper.appendChild(partDiv);
            });
            groupDiv.appendChild(partsWrapper);
            partsContainer.appendChild(groupDiv);
        }
    });

    if (locationKey) {
        const targetGroup = partsContainer.querySelector(`.part-location-group[data-location="${locationKey}"]`);
        targetGroup?.classList.add('is-highlighted');
    }

    if (locationKey && target.partsStatus[locationKey]) {
        const undamagedPartsInLocation = target.partsStatus[locationKey]
            .filter(p => !p.damaged);

        if (undamagedPartsInLocation.length > 0 && undamagedPartsInLocation.length <= damageAmount) {
            undamagedPartsInLocation.forEach(part => {
                const partDiv = partsContainer.querySelector(`.part-item[data-part-id="${part.id}"]`);
                if (partDiv && !partDiv.classList.contains('is-selected')) {
                    partDiv.classList.add('is-selected');
                    selectedParts.push(part.id);
                }
            });
        }
    }

    updateInfoAndButton();

    confirmBtn.onclick = () => {
        selectedParts.forEach(partId => charManager.damagePart(target.id, partId));
        modal.classList.remove('is-visible');
        ui.hideManeuverCard();
        ui.updateSingleCharacterCard(target.id);
        ui.updateMarkers();
        if (onConfirmCallback) onConfirmCallback();
    };
    
    document.getElementById('closeDamageModalBtn').onclick = () => {
        modal.classList.remove('is-visible');
        ui.hideManeuverCard();
    };
    modal.classList.add('is-visible');
}