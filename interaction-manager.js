/**
 * @file interaction-manager.js
 * @description ユーザー操作の受付とイベントリスナーの管理を担当するモジュール
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "2.10.25"; // パッチバージョンを更新

import * as data from './data-handler.js'; 
import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { buildDiceMenu, performDiceRoll } from './dice-roller.js';
import { buildReferenceUI } from './reference.js';
import { 
    buildManeuverMenu, showCharacterSheetModal, 
    showUndeadListModal, buildMoveMenu, 
    buildPlacementMenu, closeAllMenus, 
    showAttackConfirmationModal
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

    const resetBtn = document.getElementById('resetBattleBtn'); // ← 正しいID
    if (resetBtn) {
        resetBtn.onclick = async () => {
            if (confirm('バトルパートを終了して、戦闘開始直前の状態に戻します。よろしいですか？')) {
                ui.showToastNotification("盤面を初期状態に戻しています...", 2000);
                
                await stateManager.restoreInitialState();
                battleLogic.resetToSetupPhase();
                
                ui.updateAllUI();

                ui.showToastNotification("初期状態に戻りました。", 2000);
            }
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
                    charManager.removeCharacter(id);
                    ui.updateAllUI(); // 修正: renderCharacterCards/checkBattleStartCondition を updateAllUI に一本化
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

export function handleRapidItemClick(index) {
    battleLogic.resolveRapidByIndex(index); //.then(() => {
        // ui.updateAllUI(); // ★ UI更新を追加
    // });
}

export function handleActionItemClick(index) {
    const state = battleLogic.getBattleState();
    const declaration = state.actionQueue[index];
    if (!declaration) return;

    const { performer, target, sourceManeuver } = declaration;

    if (sourceManeuver.tags.includes('攻撃')) {
        showAttackConfirmationModal(
            performer, 
            target, 
            sourceManeuver, 
            index, // ★★★ 修正点: indexを引数として渡す ★★★
            (totalBonus) => {
                performDiceRoll({
                    command: `NA${totalBonus > 0 ? `+${totalBonus}` : totalBonus}`,
                    showToast: true,
                    performer,
                    callback: (result, hitLocation, resultText, rollValue) => {
                        battleLogic.resolveActionByIndex(index, {
                            result, hitLocation, resultText, rollValue
                        });
                    }
                });
            }
        );
    } else {
        battleLogic.resolveActionByIndex(index);
    }
}

export function handleJudgeItemClick(index) {
    battleLogic.checkJudgeItem(index);
    // ui.updateAllUI(); // ★ UI更新を追加
}

export function handleDamageItemClick(index) {
    const { damageQueue } = battleLogic.getBattleState();
    const item = damageQueue[index];
    if (!item) return;

    // type に応じて処理を分岐
    if (item.type === 'instance') {
        // --- 従来通りのダメージ適用処理 ---
        if (item.applied) return;
        const character = charManager.getCharacterById(item.target.id);
        if (!character) return;
        
        // ▼▼▼ ここからが修正箇所です ▼▼▼
        // ダメージ計算モーダルを呼び出す
        showDamageCalculationModal(item, (finalDamageAfterDefense) => {
            const onConfirmCallback = () => {
                battleLogic.applyDamage(index);
            };

            // ダメージが0以下になった場合の処理
            if (finalDamageAfterDefense <= 0) {
                ui.addLog(`＞ ${character.name}への攻撃は完全に防がれ、ダメージはありませんでした。`);
                ui.removeDamagePrompt(character.id);
                onConfirmCallback();
                return;
            }
    
            // レギオンまたは残りパーツ数以上のダメージの場合の処理
            if (character.category === 'レギオン' || Object.values(character.partsStatus).flat().filter(p => !p.damaged).length <= finalDamageAfterDefense) {
                if (character.category === 'レギオン') {
                    ui.addLog(`レギオンへのダメージ！ ${finalDamageAfterDefense}体が失われます。`);
                    const wasDestroyed = charManager.damagePart(character.id, null, finalDamageAfterDefense);
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
                // パーツ損傷モーダルを呼び出す
                showDamageModal(character, finalDamageAfterDefense, item.location, onConfirmCallback);
            }
        });

    } else if (item.type === 'declaration') {
        // --- 新しい宣言解決処理 ---
        if (item.checked) return;

        const declaration = item;
        const maneuver = declaration.sourceManeuver;

        // 【庇う】の解決
        const takeDamageEffect = maneuver.effects?.some(e => e.ref === 'TAKE_DAMAGE_FOR_ALLY');
        if (takeDamageEffect) {
            // 庇う対象(declaration.target)が受けるはずだった未解決のダメージインスタンスを探す
            const targetDamage = damageQueue.find(d => 
                d.type === 'instance' && 
                !d.applied && 
                d.target.id === declaration.target.id
            );
            
            if (targetDamage) {
                // battleLogicの新しい関数を呼び出してダメージ対象を変更
                battleLogic.redirectDamage(targetDamage.id, declaration.performer);
                // 【庇う】宣言を解決済みにする
                declaration.checked = true; 
                // UIを更新するためにdetermineNextStepを呼び出す
                battleLogic.determineNextStep(); 
            } else {
                ui.showToastNotification("庇う対象のダメージが見つかりません。", 2000);
                declaration.checked = true; // 対象が見つからない場合も解決済みにしておく
                battleLogic.determineNextStep();
            }
            return; // これで処理を終了
        }

        // 【うろこ】など、自身への防御マニューバの解決
        const defenseEffect = maneuver.effects?.some(e => e.ref === 'GENERIC_DEFENSE');
        if (defenseEffect) {
            declaration.checked = true;
            charManager.addBuff(declaration.performer.id, { 
                source: maneuver.name, 
                stat: 'defense', 
                value: maneuver.effects.find(e => e.ref === 'GENERIC_DEFENSE').params.value || 0, 
                duration: 'until_damage_applied' 
            });
            ui.addLog(`> ${declaration.performer.name}の【${maneuver.name}】の効果が適用されます。`);
            battleLogic.determineNextStep();
            return;
        }
        
        // 【ジェットノズル】など、与ダメージ増加マニューバの解決
        const damageIncreaseEffect = maneuver.effects?.some(e => e.ref === 'INCREASE_DAMAGE_DEALT');
        if (damageIncreaseEffect) {
            declaration.checked = true;
            charManager.addBuff(declaration.performer.id, { 
                source: maneuver.name, 
                stat: 'damageBonus', 
                value: maneuver.effects.find(e => e.ref === 'INCREASE_DAMAGE_DEALT').params.value || 0, 
                duration: 'until_damage_applied' 
            });
            ui.addLog(`> ${declaration.performer.name}の【${maneuver.name}】の効果が適用されます。`);
            battleLogic.determineNextStep();
            return;
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
        // onConfirmCallback が battleLogic.applyDamage を呼び、
        // その後に ui.updateAllUI() を呼び出すのが正しいフロー
        if (onConfirmCallback) onConfirmCallback();
    };
    
    document.getElementById('closeDamageModalBtn').onclick = () => {
        modal.classList.remove('is-visible');
        ui.hideManeuverCard();
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