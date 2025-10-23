/**
 * @file interaction-manager.js
 * @description ユーザー操作の受付とイベントリスナーの管理を担当するモジュール
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "2.15.37"; // パッチバージョンを更新

import * as data from './data-handler.js'; 
import * as charManager from './character-manager.js';
import { updateAndComplementRegrets } from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { buildDiceMenu, performDiceRoll } from './dice-roller.js';
import { buildReferenceUI } from './reference.js';
import { 
    buildManeuverMenu, 
    showCharacterSheetModal, 
    showUndeadListModal, 
    buildPlacementMenu,  
    showAttackConfirmationModal,
    showRelationshipModal
} from './menu-builder.js';
import * as stateManager from './state-manager.js';
import { calculateFinalDamage } from './battle-helpers.js';


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

    const rightColumn = document.querySelector('.right-column');
    if (rightColumn) {
        rightColumn.addEventListener('click', (e) => {
            const itemElement = e.target.closest('.action-queue-item');

            if (itemElement && !itemElement.classList.contains('is-disabled')) {
                const action = itemElement.dataset.action;
                const index = parseInt(itemElement.dataset.index, 10);

                if (action === 'resolve-action') {
                    const state = battleLogic.getBattleState();
                    const declaration = state.actionQueue[index];
                    if (!declaration) return;

                    ui.addLog(`> 解決：[${declaration.timing}] ${declaration.performer.name}【${declaration.sourceManeuver.name}】`);

                    const { performer, target, sourceManeuver } = declaration;

                    if (sourceManeuver.tags.includes('攻撃')) {
                        showAttackConfirmationModal(
                            performer, 
                            target, 
                            sourceManeuver, 
                            index,
                            (totalBonus) => {
                                performDiceRoll({
                                    command: `NA${totalBonus > 0 ? `+${totalBonus}` : totalBonus}`,
                                    showToast: true,
                                    performer,
                                    callback: (result, hitLocation, resultText, rollValue) => {
                                        battleLogic.handleUserInteraction({
                                            type: 'resolve-action',
                                            index: index,
                                            diceResult: { result, hitLocation, resultText, rollValue }
                                        });
                                    }
                                });
                            }
                        );
                    } else {
                        battleLogic.handleUserInteraction({ type: 'resolve-action', index: index });
                    }
                } 
                // ▼▼▼ 復元箇所 ▼▼▼
                else if (action === 'resolve-damage') {
                    const state = battleLogic.getBattleState();
                    const item = state.damageQueue[index];
                    if (!item) return;
                    
                    // 最初に解決ログを出力
                    if (item.type === 'instance') {
                         ui.addLog(`> 解決：[ダメージ] ${item.target.name}`);
                         // ui.addLog(`> 解決：[ダメージ] ${item.target.name}（${item.sourceAction.performer.name}【${item.sourceAction.sourceManeuver.name}】）`);
                    } else if (item.type === 'declaration') {
                        ui.addLog(`> 解決：[ダメージ] ${item.performer.name}【${item.sourceManeuver.name}】`);
                    }

                    // interaction-managerがアイテムの種類を判断
                    if (item.type === 'instance') {
                        // インスタンスなら、UI表示（モーダル）の責任を持つ
                        if (item.applied) return;
                        const character = charManager.getCharacterById(item.target.id);
                        if (!character) return;
                        
                        showDamageCalculationModal(item, (finalDamageAfterDefense) => {
                            const onConfirmCallback = () => { 
                                // ユーザーの確定後、ロジック実行を依頼
                                battleLogic.applyDamage(index); 
                            };

                            if (finalDamageAfterDefense <= 0) {
                                ui.addLog(`→ ${character.name}への攻撃は完全に防がれ、ダメージはありませんでした。`);
                                ui.removeDamagePrompt(character.id);
                                onConfirmCallback();
                                return;
                            }
                    
                            if (character.category === 'レギオン' || Object.values(character.partsStatus).flat().filter(p => !p.damaged).length <= finalDamageAfterDefense) {
                                if (character.category === 'レギオン') {
                                    ui.addLog(`→ ${finalDamageAfterDefense}体が失われます（レギオン）`);
                                    const wasDestroyed = charManager.damagePart(character.id, null, finalDamageAfterDefense);
                                    if (wasDestroyed) { ui.showToastNotification(`${character.name}は完全破壊されました`); }
                                } else {
                                    ui.addLog(`→ ${character.name}は残りパーツ数以上のダメージを受け、完全に破壊されました！`);
                                    charManager.updateCharacter(character.id, { isDestroyed: true });
                                    ui.showToastNotification(`${character.name}は完全破壊されました`);
                                }
                                ui.removeDamagePrompt(character.id);
                                onConfirmCallback();
                            } else {
                                showDamageModal(character, finalDamageAfterDefense, item.location, onConfirmCallback);
                            }
                        });

                    } else if (item.type === 'declaration') {
                        // 宣言なら、従来通りbattle-logicに依頼するだけ
                        battleLogic.handleUserInteraction({ type: 'resolve-damage', index: index });
                    }
                }
                // ▲▲▲ 復元ここまで ▲▲▲
                else if (action && !isNaN(index)) {
                    const state = battleLogic.getBattleState();
                    let declarationToLog;
                    if (action === 'resolve-rapid') {
                        declarationToLog = state.rapidQueue[index];
                    } else if (action === 'resolve-judge') {
                        declarationToLog = state.judgeQueue[index];
                    }
                    
                    if(declarationToLog) {
                        ui.addLog(`> 解決：[${declarationToLog.timing}] ${declarationToLog.performer.name}【${declarationToLog.sourceManeuver.name}】`);
                    }

                    battleLogic.handleUserInteraction({
                        type: action,
                        index: index
                    });
                }
            }
        });
    }

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
            // ui.updateAllUI(); // ★ UI更新を追加
        };
    }

    document.getElementById('countdownBtn').onclick = () => {
        battleLogic.advanceCount();
        // ui.updateAllUI(); // ★ UI更新を追加
    };

    document.getElementById('endTurnBtn').onclick = () => {
        battleLogic.startMadnessPhase();
        ui.showMadnessModal(); // ★ startMadnessPhaseは状態を変えるだけなので、モーダル表示はここ
    };

    const refBtn = document.getElementById('showReferenceBtn');
    if (refBtn) {
        refBtn.onclick = () => {
            buildReferenceUI();
        };
    }

    const relationshipBtn = document.getElementById('showRelationshipBtn');
    if (relationshipBtn) {
        relationshipBtn.onclick = () => {
            // menu-builder.js からインポートした関数を呼び出す
            showRelationshipModal();
        };
    }

    // セッション管理ボタンのイベントリスナー
    const saveToFileBtn = document.getElementById('saveStateToFileBtn');
    if (saveToFileBtn) {
        saveToFileBtn.onclick = stateManager.saveStateToFile; // ★この行を追加
    }
    
    const saveBtn = document.getElementById('saveStateBtn');
    if (saveBtn) {
        saveBtn.onclick = () => {
            // 手動保存であることを示すフラグを引数として渡す
            stateManager.saveState(true);
        };
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
            if (deleteBtn) {
                deleteBtn.onclick = (e) => {
                    e.stopPropagation();
                    const charToDelete = charManager.getCharacterById(id); // 削除対象を先に取得
                    
                    charManager.removeCharacter(id);

                    // ▼▼▼ ここからが修正箇所 ▼▼▼
                    if (charToDelete && charToDelete.type === 'pc') {
                        charManager.getCharacters().forEach(pc => {
                            if (pc.type === 'pc') {
                                updateAndComplementRegrets(pc);
                            }
                        });
                    }
                    // ▲▲▲ 修正ここまで ▲▲▲

                    ui.updateAllUI();
                    selectedCardElement = null;
                };
            }
            
            const detailsBtn = element.querySelector('[data-action="details"]');
            if (detailsBtn) {
                detailsBtn.onclick = (e) => {
                    e.stopPropagation();
                    showCharacterSheetModal(char);
                };
            }

            const placeBtn = element.querySelector('[data-action="place"]');
            if (placeBtn) { 
                placeBtn.onclick = (e) => { 
                    e.stopPropagation(); 
                    buildPlacementMenu(char, element, e); 
                    // ★★★ ここにUI更新を追加 ★★★
                    // buildPlacementMenu はモーダルを表示するだけ。
                    // 実際に状態が変わるのはモーダル内のボタンが押された後だが、
                    // 現状の menu-builder の作りでは、変更を検知して更新するのが難しい。
                    // そのため、暫定的にモーダルを閉じた後にUIが更新されることを期待する。
                    // → ここでの修正は一旦見送り、menu-builder 側の onclick で対応するのが現実的。
                }; 
            }
            
            // 変数定義をイベントリスナー設定の前に移動
            const leftBtn = element.querySelector('[data-action="move-left"]');
            const rightBtn = element.querySelector('[data-action="move-right"]');

            if (leftBtn) {
                leftBtn.onclick = (e) => {
                    e.stopPropagation();
                    charManager.moveCharacter(id, 'left');
                    ui.updateAllUI(); // 修正: renderCharacterCards を updateAllUI に一本化
                    selectedCardElement = null;
                };
            }
            
            if (rightBtn) {
                rightBtn.onclick = (e) => {
                    e.stopPropagation();
                    charManager.moveCharacter(id, 'right');
                    ui.updateAllUI(); // 修正: renderCharacterCards を updateAllUI に一本化
                    selectedCardElement = null;
                };
            }

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

    container.addEventListener('wheel', (e) => {
        // Shiftキーが押されている場合は、ブラウザのネイティブな水平スクロールに任せる
        if (e.shiftKey) {
            return;
        }
        // 縦スクロールをキャンセル
        e.preventDefault();
        // ホイールの上下移動量を、コンテナの水平スクロールに適用
        container.scrollLeft += e.deltaY;
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
        // ui.updateAllUI(); // ★ UI更新を追加
    };
}

// --- ユーザー操作の処理（イベントハンドラ）---
export function handleQueueCheck(queueType, index, isChecked) {
    battleLogic.handleQueueCheck(queueType, index, isChecked);
    // ui.updateAllUI(); // ★ UI更新を追加
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

                // const maneuverData = data.getManeuverByName(part.name);
                // if (maneuverData) {
                //     partDiv.addEventListener('mouseenter', () => ui.showManeuverCard(modal.getBoundingClientRect(), partDiv.getBoundingClientRect(), target, { data: maneuverData, isDamaged: part.damaged }));
                //     partDiv.addEventListener('mouseleave', () => ui.hideManeuverCard());
                // }

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
        // onConfirmCallback が battleLogic.applyDamage を呼び、
        // その後に ui.updateAllUI() を呼び出すのが正しいフロー
        if (onConfirmCallback) onConfirmCallback();
    };
    
    document.getElementById('closeDamageModalBtn').onclick = () => {
        modal.classList.remove('is-visible');
        // ui.hideManeuverCard();
    };
    modal.classList.add('is-visible');
}

/**
 * アンデッドカード上のダメージマーカーがクリックされたときの処理
 * @param {string} characterId - ダメージを受けるキャラクターのID
 */
export function handleDamageMarkerClick(characterId) {
    const state = battleLogic.getBattleState();

    // 1. 現在の戦闘フェーズを確認する
    // ダメージインジケータが点灯する条件と同じロジックで判定
    const allActionsChecked = state.actionQueue.length > 0 && state.actionQueue.every(a => a.checked);
    const isDamagePhaseActive = state.phase === 'DAMAGE_RESOLUTION' || (allActionsChecked && state.damageQueue.some(d => !d.applied));

    // 2. ダメージ処理がアクティブでない場合は、何もしない
    if (!isDamagePhaseActive) {
        // ui.showToastNotification("今はダメージ処理のタイミングではありません。", 1500);
        return;
    }
    
    // 3. 対象キャラクターの最も古い未適用ダメージを探す (既存のロジック)
    const damageInfo = state.damageQueue.find(d => d.target.id === characterId && !d.applied);

    if (damageInfo) {
        const index = state.damageQueue.indexOf(damageInfo);
        handleDamageItemClick(index);
    } else {
        console.warn(`Damage marker clicked for ${characterId}, but no applicable damage found in the queue.`);
    }
}

/**
 * ダメージ計算の確認モーダルを表示する
 * @param {object} damageInfo - battleState.damageQueue から取得したダメージ情報
 * @param {function(number)} onConfirmCallback - 確定ボタンが押されたときに、最終ダメージ量を引数にして呼び出されるコールバック
 */
function showDamageCalculationModal(damageInfo, onConfirmCallback) {
    const { sourceAction, target } = damageInfo;
    const { performer, sourceManeuver } = sourceAction;

    // ▼▼▼ ここからが修正箇所です ▼▼▼
    // 1. ヘルパー関数を呼び出して最新のダメージ情報をすべて取得
    const { finalAmount, baseAmount, totalBonus, totalDefense } = calculateFinalDamage(damageInfo);

    // 2. ボーナスと防御の内訳を作成 (表示用のロジック)
    const bonusSources = [];
    if (damageInfo.rollValue >= 11) {
        bonusSources.push(`<div>【大成功】+${damageInfo.rollValue - 10}</div>`);
    }
    const currentPerformer = charManager.getCharacterById(performer.id);
    (currentPerformer.activeBuffs || []).forEach(buff => {
        if (buff.stat === 'damageBonus' && (buff.duration === 'onetime_next_action' || buff.duration === 'until_damage_applied')) {
            bonusSources.push(`<div>【${buff.source}】+${buff.value}</div>`);
        }
    });

    const defenseSources = [];
    const currentTarget = charManager.getCharacterById(target.id);
    (currentTarget.activeBuffs || []).forEach(buff => {
        if (buff.stat === 'defense' && buff.duration === 'until_damage_applied') {
            defenseSources.push(`<div>${currentTarget.name}の【${buff.source}】-${buff.value}</div>`);
        }
    });
    // パッシブ防御も表示
    Object.values(currentTarget.partsStatus).flat().map(p => !p.damaged ? data.getManeuverByName(p.name) : null).filter(m => m?.timing === 'オート' && m.effects).forEach(m => m.effects.forEach(e => {
        if (e.ref === 'APPLY_PASSIVE_DEFENSE' && e.params.value && damageInfo.location.toLowerCase().includes(e.params.condition.replace('hit_location_is_', ''))) {
            defenseSources.push(`<div>${currentTarget.name}の【${m.name}】-${e.params.value}</div>`);
        }
    }));

    // 3. HTMLを構築
    const bodyHtml = `
        <div class="attack-confirm-summary">
            ${performer.name}【${sourceManeuver.name}】 → ${target.name}
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《基本ダメージ》</div>
            <div class="modifier-list"><div>【${sourceManeuver.name}】${baseAmount}</div></div>
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《追加ダメージ 合計: +${totalBonus}》</div>
            <div class="modifier-list">${bonusSources.length > 0 ? bonusSources.join('') : '<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《防御 合計: -${totalDefense}》</div>
            <div class="modifier-list">${defenseSources.length > 0 ? defenseSources.join('') : '<div class="modifier-none">- なし -</div>'}</div>
        </div>
    `;

    const footerHtml = `<button id="executeDamageBtn" class="welcome-modal-close-btn">${damageInfo.location}：${finalAmount}点を確定</button>`;
    
    // 4. モーダルを表示
    ui.showModal({
        title: 'ダメージ計算',
        bodyHtml,
        footerHtml,
        onRender: (modal, closeFn) => {
            modal.querySelector('#executeDamageBtn').onclick = () => {
                onConfirmCallback(finalAmount); // ★ 計算済みの最終ダメージを渡す
                closeFn();
            };
        }
    });
    // ▲▲▲ 修正はここまでです ▲▲▲
}