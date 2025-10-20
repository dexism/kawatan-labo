/**
 * @file menu-builder.js
 * @description メニューやモーダルなど、動的なUIの構築を担当するモジュール
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.22.90"; // バージョンを更新

import * as data from './data-handler.js';
import * as charManager from './character-manager.js';
import { updateAndComplementRegrets } from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
// import { performDiceRoll } from './dice-roller.js'; 
import { convertVampireBloodSheet } from './character-converter.js';
import { getCategoryClass, getManeuverSourceText, getManeuverRulebookText } from './ui-helpers.js';
import { getLocalStorageUsage, clearLocalImageCache } from './settings-manager.js';
import * as stateManager from './state-manager.js';
import { calculateManeuverRange } from './battle-helpers.js';
import { sortManeuvers } from './reference.js';
import { performDiceRoll } from './dice-roller.js';

// --- モジュール内変数 ---
let menuOpener = null;
const rows = ["奈落", "地獄", "煉獄", "花園", "楽園"];
let resolveTargetSelection = null;
let activeFilter = '宣言';
let relationshipResizeTimer = null;
// let activeReferenceFilters = {};

/**
 * ターゲット選択モードを安全にキャンセルし、UIの状態をリセットする
 */
function cancelTargetSelection() {
    if (resolveTargetSelection) {
        resolveTargetSelection(null); // Promiseを解決して待機状態を解除
        resolveTargetSelection = null; // グローバル変数をリセット

        // ▼▼▼ ここからが修正箇所です ▼▼▼
        
        // 1. UIのクリーンアップ：全ての.target-selectableクラスを削除
        document.querySelectorAll('.target-selectable').forEach(el => {
            el.classList.remove('target-selectable');
            // 安全のため、onclickハンドラもクリアする
            el.onclick = null; 
        });

        // 2. ログにキャンセルした旨を表示
        // ui.addLog(">> ターゲット選択をキャンセルしました。");

        // 3. ロジックの再評価を依頼し、UIを完全に最新の状態に戻す
        //    これにより、キャラクターカードのクリックイベントなどが再設定される
        battleLogic.determineNextStep();
        
        // ▲▲▲ 修正はここまでです ▲▲▲
    }
}

const handleOutsideClick = (e) => {
    const menu = document.getElementById('maneuverMenu');
    
    if (menu && !menu.contains(e.target) && menuOpener && !menuOpener.contains(e.target)) {
        closeAllMenus();
    }

    // --- ターゲット選択中に、ターゲット外をクリックしたらキャンセルする処理 ---
    if (resolveTargetSelection) {
        if (!e.target.closest('.target-selectable')) {
            cancelTargetSelection(); // 新しい関数を呼び出す
        }
    }
};

// --- エクスポートする関数 ---
/**
 * キャラクターのマニューバメニューを構築・表示する
 * @param {object} char - 対象キャラクター
 * @param {HTMLElement} element - メニューを開く起点となった要素
 */
export function buildManeuverMenu(char, element) {
    if (resolveTargetSelection) {
        cancelTargetSelection(); // 新しい関数を呼び出す
    }

    closeAllMenus();
    menuOpener = element;
    const menu = document.getElementById('maneuverMenu');
    menu.innerHTML = ''; // メニューをクリア
    menu.classList.remove('is-reference-mode');

    // --- フィルタリングボタンの定義 ---
    const filters = [
        { id: '宣言', label: '宣言' },
        { id: 'スキル', label: 'スキル' },
        { id: 'パーツ', label: 'パーツ' },
        { id: 'オート', label: 'オート' },
        { id: 'アクション', label: 'アクション' },
        { id: 'ラピッド', label: 'ラピッド' },
        { id: 'ジャッジ', label: 'ジャッジ' },
        { id: 'ダメージ', label: 'ダメージ' },
        { id: 'バフ', label: 'バフ' },
        { id: '移動', label: '移動' },
        { id: '攻撃', label: '攻撃' },
        { id: '支援', label: '支援' },
        { id: '妨害', label: '妨害' },
        { id: '強化', label: '強化' },
        { id: '防御', label: '防御' },
        { id: '生贄', label: '生贄' },
        { id: 'すべて', label: 'すべて' }
    ];

    // --- 第一ブロック：ヘッダー ---
    const header = document.createElement('div');
    header.className = 'maneuver-menu-header';
    header.innerHTML = `
        <span class="header-icon" id="menuHeaderIcon">人形設計図 🪪</span>
        <span class="header-title">${char.name}</span>
        <button class="header-close-btn">&times;</button>
    `;
    menu.appendChild(header);
    header.querySelector('#menuHeaderIcon').onclick = () => showCharacterSheetModal(char);
    
    header.querySelector('.header-close-btn').onclick = closeAllMenus;

    // --- 第二ブロック：フィルタリングボタン ---
    const filterBar = document.createElement('div');
    filterBar.className = 'maneuver-menu-filter-bar';
    filters.forEach(filter => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.dataset.filterId = filter.id;
        btn.textContent = filter.label;
        if (filter.id === activeFilter) {
            btn.classList.add('is-active');
        }
        btn.onclick = () => {
            activeFilter = filter.id;
            // 全てのボタンから is-active を削除し、クリックされたボタンにだけ付ける
            filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            renderManeuverList(); // リストを再描画
        };
        filterBar.appendChild(btn);
    });
    menu.appendChild(filterBar);

    // --- 第三ブロック：マニューバリストのコンテナ ---
    const listContainer = document.createElement('div');
    listContainer.className = 'maneuver-menu-list-container';
    menu.appendChild(listContainer);

    // --- マニューバリストのレンダリング関数 ---
    const renderManeuverList = () => {
        listContainer.innerHTML = '';
        const allManeuvers = getCharacterManeuvers(char);
        let filteredManeuvers = filterManeuvers(allManeuvers, activeFilter, char);

        // ★★★ ここを変更：新しい共通ソート関数を呼び出す ★★★
        if (activeFilter !== 'パーツ') {
            filteredManeuvers = sortManeuvers(filteredManeuvers);
        }

        if (activeFilter === 'パーツ') {
            renderPartsView(filteredManeuvers, char);
        } else {
            renderDefaultView(filteredManeuvers, char);
        }
    };

    // --- 描画ヘルパー関数群 ---
    const renderPartsView = (maneuvers, char) => {
        const locations = ['頭', '腕', '胴', '脚', '他'];
        locations.forEach(loc => {
            const partsInLocation = maneuvers.filter(m => getPartLocationText(m.data, char).includes(loc));
            if (partsInLocation.length > 0) {
                const group = document.createElement('div');
                group.className = 'maneuver-group';
                group.innerHTML = `<div class="group-header">${loc}</div>`;
                partsInLocation.forEach(m => group.appendChild(createManeuverItem(m, char)));
                listContainer.appendChild(group);
            }
        });
    };
    
    const renderDefaultView = (maneuvers, char) => {
        if (maneuvers.length === 0) {
            listContainer.innerHTML = `<div class="maneuver-item is-empty">対象のマニューバはありません</div>`;
            return;
        }
        maneuvers.forEach(m => listContainer.appendChild(createManeuverItem(m, char)));
    };
    
    // --- 初期描画 ---
    renderManeuverList();

    // --- メニュー表示 ---
    menu.classList.add('is-visible');
    setTimeout(() => { document.addEventListener('click', handleOutsideClick); }, 0);
}

/**
 * 【新設】指定されたマニューバの💡アイコンがアクティブであるべきかを判定する
 * @param {object} maneuverObj - isUsableなどを含むマニューバオブジェクト
 * @param {object} char - 対象キャラクター
 * @returns {boolean} - アイコンがアクティブであればtrue
 */
export function isIconActive(maneuverObj, char) {
    const maneuver = maneuverObj.data;
    let isActive = false;

    // isReferenceMode でないことを確認
    if (!char || !char.id) return false;

    if (maneuverObj.isActiveBuff) {
        isActive = true;
    }

    const isSpineLike = maneuver.effects?.some(e => e.ref === 'REDUCE_NEXT_MANEUVER_COST');
    if (isSpineLike && char.spineBonus > 0) {
        isActive = true;
    }
    
    if (maneuver.timing === 'オート') {
        const isDamaged = maneuverObj.isDamaged;
        const damageConditionRefs = ['MODIFY_MAX_ACTION_VALUE_ON_DAMAGE', 'ATTACK_ON_DAMAGE'];
        if (maneuver.effects?.some(e => damageConditionRefs.includes(e.ref)) && isDamaged) {
            isActive = true;
        }

        if (!isActive && !isDamaged) {
            const areaEffect = maneuver.effects?.find(e => e.params?.duration === 'while_in_area');
            if (areaEffect) {
                if (char.area === areaEffect.params.area) {
                    isActive = true;
                }
            } else {
                const unconditionalRefs = [
                    'REDUCE_MOVE_COST', 'NEGATE_STATUS_EFFECT',
                    'APPLY_PASSIVE_DEFENSE', 'PREVENT_INTERRUPTION', 'MODIFY_ATTACK_RESULT',
                    'IMMUNITY', 'NEGATE_DAMAGE_EFFECT', 'APPLY_BUFF'
                ];
                // !e.params?.condition の条件を削除し、APPLY_BUFF も含めて無条件で判定
                if (maneuver.effects?.some(e => unconditionalRefs.includes(e.ref) && e.ref !== 'APPLY_CONDITIONAL_BUFF')) {
                    isActive = true;
                }
            }
        }
    }
    return isActive;
}

/**
 * 新しいマニューバ項目DOM要素を作成する
 * @param {object} maneuverObj - isUsableなどを含むマニューバオブジェクト
 * @param {object} char - 対象キャラクター
 * @returns {HTMLElement}
 */
export function createManeuverItem(maneuverObj, char) {
    const maneuver = maneuverObj.data;
    const item = document.createElement('div');
    item.className = 'maneuver-item-new';

    const isReferenceMode = !char.id;
    if (isReferenceMode) {
        item.classList.add('is-reference-item');
    }

    const categoryCol = document.createElement('div');
    categoryCol.className = 'item-category-col';
    const categoryName = maneuver.category || 'その他';
    const categoryClass = `category-color-${getCategoryClass(categoryName)}`;
    item.classList.add(categoryClass.replace('bg-', ''));
    categoryCol.classList.add(categoryClass);
    categoryCol.innerHTML = `<span>${categoryName}</span>`;
    
    const passiveIconCol = document.createElement('div');
    passiveIconCol.className = 'item-passive-icon-col';
    
    if (!isReferenceMode) {
        if (isIconActive(maneuverObj, char)) {
            passiveIconCol.innerHTML = '<span class="maneuver-icon">💡</span>';
        }
    }

    const statusIconCol = document.createElement('div');
    statusIconCol.className = 'item-status-icon-col';
    if (!isReferenceMode && char.turnLimitedManeuvers) {
        if (char.turnLimitedManeuvers.has(maneuver.name)) {
            const isChecked = char.usedManeuvers.has(maneuver.name);
            statusIconCol.innerHTML = `<input type="checkbox" class="maneuver-checkbox" ${isChecked ? 'checked' : ''} disabled>`;
        }
    }
    
    const iconContainer = document.createElement('div');
    iconContainer.className = 'item-icon-col';

    iconContainer.appendChild(passiveIconCol);
    iconContainer.appendChild(statusIconCol);
    
    const rightCol = document.createElement('div');
    rightCol.className = 'item-right-col';
    
    const classificationText = getManeuverSourceText(maneuver);
    const sourceInfoText = getManeuverRulebookText(maneuver);

    let locationPrefix = '';
    const locationText = getPartLocationText(maneuver, char); 
    if (locationText) {
        locationPrefix = `<span class="item-location-prefix">${locationText}</span>`;
    }

    const maneuverNameHtml = `${locationPrefix}<span class="item-maneuver-name">【${maneuver.name}】</span>`;

    const descriptionText = maneuver.description_raw || '';
    const encodedDescription = encodeURIComponent(descriptionText);

    rightCol.innerHTML = `
        <div class="ref-container-top">
            <div class="ref-source-info">${sourceInfoText}</div>
            <div class="ref-source-category">${classificationText}</div>
        </div>
        <div class="ref-container">
            <div class="ref-maneuver-name">${maneuverNameHtml}</div>
            <div class="ref-stats">《${maneuver.timing}/${maneuver.cost}/${maneuver.range}》</div>
        </div>
        <div class="item-row-2 has-copy-button">
            <span class="item-description">${descriptionText}</span>
            <button class="copy-description-btn" data-copy-text="${encodedDescription}" title="効果テキストをコピー">📋</button>
        </div>
        ${maneuver.flavor_text ? `<div class="item-row-3 item-flavor-text">${maneuver.flavor_text}</div>` : ''}
    `;

    item.appendChild(categoryCol);
    item.appendChild(iconContainer);
    item.appendChild(rightCol);

    const copyBtn = item.querySelector('.copy-description-btn');
    if (copyBtn) {
        copyBtn.onclick = (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(decodeURIComponent(e.currentTarget.dataset.copyText)).then(() => {
                ui.showToastNotification('コピーしました！', 1500);
            });
        };
    }

    if (!maneuverObj.isUsable) {
        item.classList.add('is-masked');
        if (!isReferenceMode && maneuverObj.isDamaged) {
            item.classList.add('is-damaged');
        }
    } else if (!isReferenceMode) {
        item.onclick = (e) => handleManeuverItemClick(e, char, maneuverObj);
    }
    return item;
}

/**
 * 【新設】マニューバアイテムがクリックされた際のメイン処理ハンドラ
 * @param {Event} event - クリックイベント
 * @param {object} char - 行動するキャラクター
 * @param {object} maneuverObj - isUsableなどを含むマニューバーオブジェクト
 */
async function handleManeuverItemClick(event, char, maneuverObj) {
    event.stopPropagation();
    const maneuver = maneuverObj.data;
    
    // 元のonclick処理をここにペースト
    if (maneuver.tags.includes('攻撃')) {
        closeAllMenus();
    } else {
         setTimeout(() => closeAllMenus(), 0);
    }

    if (maneuver.name === '任意') {
        const bodyHtml = `<div class="action-cost-form"><div class="action-cost-selector">${[1,2,3,4,5].map(v => `<label><input type="radio" name="action-cost" value="${v}" ${v===1?'checked':''}> <span>${v}</span></label>`).join('')}</div></div>`;
        const footerHtml = `<button id="applyActionCostBtn" class="welcome-modal-close-btn">適用</button>`;
        
        ui.showModal({
            title: '消費する行動値を選択',
            bodyHtml,
            footerHtml,
            onRender: (modal, closeFn) => {
                modal.querySelector('#applyActionCostBtn').onclick = () => {
                    const selectedCost = modal.querySelector('input[name="action-cost"]:checked').value;
                    const customManeuver = { ...maneuver, cost: String(parseInt(selectedCost, 10)) };
                    battleLogic.declareManeuver(char, customManeuver);
                    closeFn();
                };
            }
        });
        return;
    }

    const isDefenseManeuver = 
        maneuver.timing === 'ダメージ' && 
        maneuver.tags.includes('防御') &&
        !maneuver.effects?.some(e => e.ref === 'TAKE_DAMAGE_FOR_ALLY');

    if (isDefenseManeuver) {
        // ▼▼▼ 変更箇所 ▼▼▼
        // 射程が「自身」の場合、対象選択をスキップして即座に宣言する
        if (maneuver.range === '自身') {
            const selfDamage = battleLogic.getBattleState().damageQueue.find(damage => 
                damage.type === 'instance' && !damage.applied && damage.target.id === char.id
            );
            if (selfDamage) {
                battleLogic.declareManeuver(char, maneuver, char);
            } else {
                ui.addLog("防御対象となる自身へのダメージがありません。");
            }
            return;
        }

        /*
        const targetableDamages = battleLogic.getBattleState().damageQueue.filter(damage => {
            return damage.type === 'instance' && 
                   !damage.applied && 
                   damage.target.type === char.type &&
                   checkTargetAvailability(char, maneuver, [damage.target]).hasTarget;
        });
        */

        if (targetableDamages.length === 0) {
            ui.addLog("防御対象となるダメージがありません。");
            return;
        }

        const selectedDamage = await new Promise(resolve => {
            const menuItems = targetableDamages.map(damage => {
                const damageValue = damage.finalAmount ?? damage.baseAmount ?? damage.amount ?? 0;
                return {
                    label: `【${damage.sourceAction.sourceManeuver.name}】→ ${damage.target.name} (${damageValue}点)`,
                    onClick: () => resolve(damage)
                };
            });
            ui.showModal({ 
                title: `【${maneuver.name}】防御対象を選択`, 
                items: menuItems,
                onRender: (modal, closeFn) => {
                    modal.onclick = (event) => { if(event.target === modal) { closeFn(); resolve(null); } };
                }
            });
        });

        if (selectedDamage) {
            // battleLogic.addBuff ではなく、declareManeuver を呼び出す
            battleLogic.declareManeuver(char, maneuver, selectedDamage.target);
        }
        return;
    }

    const takeDamageEffect = maneuver.effects?.find(e => e.ref === 'TAKE_DAMAGE_FOR_ALLY');
    if (takeDamageEffect) {
        const targetableDamages = battleLogic.getBattleState().damageQueue.filter(damage => {
            return damage.type === 'instance' &&
                   !damage.applied && 
                   damage.target.type === char.type && 
                   damage.target.id !== char.id &&
                   checkTargetAvailability(char, maneuver, [damage.target]).hasTarget;
        });

        if (targetableDamages.length === 0) {
            ui.addLog("庇う対象がいません。");
            return;
        }

        const selectedDamage = await new Promise(resolve => {
            const menuItems = targetableDamages.map(damage => {
                const damageValue = damage.finalAmount ?? damage.baseAmount ?? damage.amount ?? 0;
                return {
                    label: `【${damage.sourceAction.sourceManeuver.name}】→ ${damage.target.name} (${damageValue}点)`,
                    onClick: () => resolve(damage)
                };
            });
            ui.showModal({ 
                title: `【${maneuver.name}】庇う対象を選択`, 
                items: menuItems,
                onRender: (modal, closeFn) => {
                    modal.onclick = (event) => { if(event.target === modal) { closeFn(); resolve(null); } };
                }
            });
        });

        if (selectedDamage) {
            // redirectDamage ではなく、declareManeuver を呼び出す
            battleLogic.declareManeuver(char, maneuver, selectedDamage.target);
        }
        return;
    }

    const isInterruptJudge = maneuver.timing === 'ジャッジ' && maneuver.range !== '自身';
    if (isInterruptJudge) {
        const targetableDeclarations = getTargetableDeclarations(char, maneuver);
        if (targetableDeclarations.length === 0) {
            ui.addLog("妨害/支援の対象となるアクションがありません。");
            return;
        }
        const menuItems = targetableDeclarations.map(targetDecl => ({
            label: `${targetDecl.performer.name}: 【${targetDecl.sourceManeuver.name}】${targetDecl.target ? ` → ${targetDecl.target.name}` : ''}`,
            onClick: () => {
                battleLogic.declareManeuver(char, maneuver, null, targetDecl);
            }
        }));
        ui.showModal({ title: `【${maneuver.name}】の対象を選択`, items: menuItems });
        return;
    }

    const isMoveDebuff = maneuver.tags && maneuver.tags.includes('移動妨害');
    if (isMoveDebuff) {
        const allMoveCandidates = [
            ...battleLogic.getBattleState().actionQueue,
            ...battleLogic.getBattleState().rapidQueue
        ];
        const targetableMoveDeclarations = allMoveCandidates.filter(decl => {
            return !decl.checked &&
                   decl.performer.type !== char.type &&
                   decl.sourceManeuver.tags.includes('移動') &&
                   checkTargetAvailability(char, maneuver, [decl.performer]).hasTarget;
        });

        if (targetableMoveDeclarations.length === 0) {
            ui.addLog("妨害の対象となる移動がありません。");
            return;
        }

        const menuItems = targetableMoveDeclarations.map(targetDecl => {
            let labelText = '';
            const movePerformer = targetDecl.performer;
            const moveManeuver = targetDecl.sourceManeuver;
            const moveTarget = targetDecl.target;

            if (moveTarget && moveTarget.id !== movePerformer.id) {
                labelText = `${moveTarget.name}（${movePerformer.name}の【${moveManeuver.name}】）`;
            } 
            else {
                labelText = `${movePerformer.name}: 【${moveManeuver.name}】`;
            }

            return {
                label: labelText,
                onClick: () => {
                    battleLogic.declareManeuver(char, maneuver, targetDecl);
                }
            };
        });
        
        ui.showModal({ title: `【${maneuver.name}】の妨害対象を選択`, items: menuItems });
        return;
    }
    
    if (maneuver.tags.includes('移動')) {
        if (maneuver.range === '自身') {
            buildMoveMenu(char, maneuver, event);
        } else {
            const target = await selectTargetForAction(char, maneuver, handleOutsideClick);
            if (target) {
                const direction = await new Promise(resolve => {
                    ui.showModal({
                        title: `【${maneuver.name}】移動方向を選択`,
                        items: [
                            { label: '奈落方向へ', onClick: () => resolve('奈落方向') },
                            { label: '楽園方向へ', onClick: () => resolve('楽園方向') }
                        ],
                        onRender: (modal) => {
                            modal.onclick = (event) => { if (event.target === modal) resolve(null); };
                        }
                    });
                });
                if (direction) {
                    const modifiedManeuver = { ...maneuver, targetArea: direction };
                    battleLogic.declareManeuver(char, modifiedManeuver, target);
                }
            }
        }
        return;
    }

    if (maneuver.tags.includes('攻撃')) {
        const target = await selectTargetForAction(char, maneuver, handleOutsideClick);
        if (target) {
            battleLogic.declareManeuver(char, maneuver, target);
        }
        return;
    }

    battleLogic.declareManeuver(char, maneuver);
}

function filterManeuvers(maneuvers, filterId, char) {
    let results = [];
    const excludedNames = ['待機', '任意'];

    // 1. まず、フィルターIDに基づいて基本的な絞り込みを行う
    switch (filterId) {
        case '宣言':
            results = maneuvers.filter(m => m.isUsable && m.data.timing !== 'オート');
            break;
        case 'スキル':
            results = maneuvers.filter(m => m.sourceType === 'skill' && !excludedNames.includes(m.data.name));
            break;
        case 'パーツ':
            results = maneuvers.filter(m => m.sourceType === 'part' && !excludedNames.includes(m.data.name));
            break;
        case 'オート':
            results = maneuvers.filter(m => m.data.tags.includes('オート') && !excludedNames.includes(m.data.name));
            break;
        case 'アクション':
            results = maneuvers.filter(m => m.data.tags.includes('アクション') && !excludedNames.includes(m.data.name));
            break;
        case 'ラピッド':
            results = maneuvers.filter(m => m.data.tags.includes('ラピッド') && !excludedNames.includes(m.data.name));
            break;
        case 'ジャッジ':
            results = maneuvers.filter(m => m.data.tags.includes('ジャッジ') && !excludedNames.includes(m.data.name));
            break;
        case 'ダメージ':
            results = maneuvers.filter(m => m.data.tags.includes('ダメージ') && !excludedNames.includes(m.data.name));
            break;
        case '移動':
            results = maneuvers.filter(m => (m.data.tags.includes('移動') || m.data.tags.includes('移動妨害')) && !excludedNames.includes(m.data.name));
            break;
        case '攻撃':
            results = maneuvers.filter(m => m.data.tags.includes('攻撃') && !excludedNames.includes(m.data.name));
            break;
        case '防御':
            results = maneuvers.filter(m => m.data.tags.includes('防御') && !excludedNames.includes(m.data.name));
            break;
        case '強化':
            results = maneuvers.filter(m => m.data.tags.includes('強化') && !excludedNames.includes(m.data.name));
            break;
        case '支援':
            results = maneuvers.filter(m => m.data.tags.includes('支援') && !excludedNames.includes(m.data.name));
            break;
        case '妨害':
            results = maneuvers.filter(m => (m.data.tags.includes('妨害') || m.data.tags.includes('脆弱') || m.data.tags.includes('移動妨害')) && !excludedNames.includes(m.data.name));
            break;
        case '生贄':
            results = maneuvers.filter(m => m.data.tags.includes('生贄') && !excludedNames.includes(m.data.name));
            break;
        case 'バフ':
        case 'すべて':
        default:
            results = [...maneuvers];
            break;
    }

    // 2. 「バフ」または「すべて」の場合、アクティブなバフの処理を行う
    if (filterId === 'バフ' || filterId === 'すべて') {
        if (char.activeBuffs && char.activeBuffs.length > 0) {
            char.activeBuffs.forEach(buff => {
                const sourceManeuverData = data.getManeuverByName(buff.source);
                if (sourceManeuverData) {
                    
                    // resultsの中から、元のマニューバ（まだisActiveBuffフラグがついていないもの）を探す
                    const originalIndex = results.findIndex(m => m.data.name === buff.source && !m.isActiveBuff);

                    // もし元のマニューバが見つかったら、それをリストから削除する
                    if (originalIndex > -1) {
                        results.splice(originalIndex, 1);
                    }
                    
                    // アクティブなバフの表示用オブジェクトを（重複しないように）追加する
                    if (!results.some(m => m.isActiveBuff && m.sourceName === buff.source)) {
                        results.push({
                            data: sourceManeuverData,
                            sourceType: 'active_buff',
                            sourceName: buff.source,
                            isActiveBuff: true,
                            isUsable: false
                        });
                    }
                }
            });
        }
    }
    
    // 3. 最後に、「バフ」フィルター専用の絞り込みを行う
    if (filterId === 'バフ') {
        
        // createManeuverItem内の💡表示ロジックをここで再現してフィルタリングする
        return results.filter(m => {
            // ケース1: すでにアクティブなバフとしてマークされているもの
            if (m.isActiveBuff) {
                return true;
            }

            // ケース2: オートタイミングのマニューバであること
            if (m.data.timing !== 'オート' || !m.data.effects) {
                return false;
            }

            // ケース3: 💡アイコンの点灯条件を満たすかどうか
            let isEffectActive = false;
            const maneuver = m.data;
            const isDamaged = m.isDamaged;

            // --- 損傷時にのみアクティブになる効果 ---
            const conditionalRefs = ['MODIFY_MAX_ACTION_VALUE_ON_DAMAGE', 'ATTACK_ON_DAMAGE'];
            if (maneuver.effects.some(e => conditionalRefs.includes(e.ref)) && isDamaged) {
                isEffectActive = true;
            }

            // --- 損傷していない時にアクティブになる効果 ---
            if (!isEffectActive && !isDamaged) {
                const unconditionalRefs = [
                    'APPLY_BUFF', 'REDUCE_MOVE_COST', 'NEGATE_STATUS_EFFECT', 
                    'APPLY_PASSIVE_DEFENSE', 'PREVENT_INTERRUPTION', 'MODIFY_ATTACK_RESULT', 
                    'IMMUNITY', 'NEGATE_DAMAGE_EFFECT'
                ];
                
                for (const effect of maneuver.effects) {
                    // エリア指定がある場合
                    if (effect.ref === 'APPLY_BUFF' && effect.params?.duration === 'while_in_area') {
                        if (char.area === effect.params.area) {
                            isEffectActive = true;
                            break;
                        }
                    } 
                    // その他の常時有効効果
                    else if (unconditionalRefs.includes(effect.ref)) {
                        isEffectActive = true;
                        break;
                    }
                }
            }
            
            return isEffectActive;
        });
    }
    
    return results;
}

/**
 * 個別の未練リストアイテム（チェックボックス付き）を作成する
 * @param {object} regret - 未練オブジェクト
 * @param {object} char - 対象キャラクターオブジェクト
 * @param {boolean} isFixedChecked - チェック状態を固定するかどうか
 * @returns {HTMLElement} - 生成されたp要素
 */
function createRegretItem(regret, char) { // isFixedChecked 引数を削除
    const p = document.createElement('p');
    p.className = 'regret-list-item';
    
    const points = regret.points || 0;
    const symbols = '●'.repeat(points) + '○'.repeat(4 - points);
    
    const checkboxId = `regret_check_${char.id}_${Math.random().toString(36).substr(2, 9)}`;

    // isFixedChecked を参照していた部分を regret.isChecked に変更
    const isDisabled = regret.isForTreasure || (regret.targetName && charManager.getCharacters().some(c => c.type === 'pc' && (c.name === regret.targetName || c.displayName === regret.targetName)));

    p.innerHTML = `
        <input type="checkbox" id="${checkboxId}" ${regret.isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
        <label for="${checkboxId}">
            <span class="regret-name">${regret.name}</span>
            <span class="regret-points">：${points}点 ${symbols}</span>
        </label>
    `;

    // isDisabled フラグでイベントリスナーの追加を制御
    if (!isDisabled) {
        const checkbox = p.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', (e) => {
            regret.isChecked = e.target.checked;
            ui.updateSingleCharacterCard(char.id);
        });
    }

    return p;
}

export function showCharacterSheetModal(char) {
    const isDoll = char.category === 'ドール';
    const coreData = data.getCoreData();
    const allClasses = coreData.classes;

    let enhPoints = { A: 0, M: 0, R: 0 };
    if (isDoll) {
        const mainClassKey = Object.keys(allClasses).find(key => allClasses[key].name === char.mainClass);
        const subClassKey = Object.keys(allClasses).find(key => allClasses[key].name === char.subClass);
        
        const mainClassData = mainClassKey ? allClasses[mainClassKey] : null;
        const subClassData = subClassKey ? allClasses[subClassKey] : null;

        if (mainClassData) {
            enhPoints.A += mainClassData.A || 0;
            enhPoints.M += mainClassData.M || 0;
            enhPoints.R += mainClassData.R || 0;
        }
        if (subClassData) {
            enhPoints.A += subClassData.A || 0;
            enhPoints.M += subClassData.M || 0;
            enhPoints.R += subClassData.R || 0;
        }
        const bonusType = char.enhancementValue.bonus;
        if (bonusType === '武装') enhPoints.A += 1;
        if (bonusType === '変異') enhPoints.M += 1;
        if (bonusType === '改造') enhPoints.R += 1;
    }
    
    const dollAreas = ["煉獄", "花園", "楽園"];
    const allAreas = ["奈落", "地獄", "煉獄", "花園", "楽園"];
    const selectableAreas = isDoll ? dollAreas : allAreas;
    const areaOptions = selectableAreas.map(area => 
        `<option value="${area}" ${char.area === area ? 'selected' : ''}>${area}</option>`
    ).join('');

    const bodyHtml = `
    <div class="sheet-grid-container">
        <div class="sheet-img">
            <button class="sheet-edit-image-btn">✏️ 画像の変更</button>
            <img src="${char.img}" alt="${char.name}">
        </div>
        <div class="sheet-header">
            ${char.sheetId ? `
            <div class="sheet-charasheet-link">
                <button class="sheet-link-btn" data-sheet-id="${char.sheetId}">保管所で開く ID: ${char.sheetId}</button>
                <button class="sheet-reload-btn" data-sheet-id="${char.sheetId}">保管所から再読込み</button>
            </div>
            ` : ''}
            ${char.personalData && char.personalData.title ? `
                <div class="sheet-char-title">${char.personalData.title}</div>
            ` : ''}
        </div>
        <div class="sheet-basic-info">
            <div class="sheet-input-group">
                <label>表示名</label>
                <input type="text" id="displayNameInput" value="${char.displayName}">
            </div>
            <div class="sheet-input-group">
                <label>名前</label>
                <input type="text" value="${char.originalName}" disabled>
            </div>
            ${isDoll ? `
            <div class="sheet-input-group">
                <label>享年</label>
                <input type="text" value="${char.personalData?.age || '未設定'}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>暗示</label>
                <input type="text" value="${char.hint?.key ? `${char.hint.key}:${char.hint.name}` : '未設定'}" disabled>
            </div>` : ''}
            <div class="sheet-input-group">
                <label>最大行動値</label>
                <input type="text" value="${char.maxActionValue}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>初期配置</label>
                <select id="areaSelector" class="sheet-select">${areaOptions}</select>
            </div>
        </div>
        <div class="sheet-section sheet-enhancement">
            <h4>基本情報</h4>
            <div class="sheet-input-group">
                <label>カテゴリ</label> <input type="text" value="${char.category}" disabled>
            </div>
             <div class="sheet-input-group">
                <label>ポジション</label> <input type="text" value="${char.position}" disabled>
            </div>
            ${isDoll ? `
            <div class="sheet-input-group">
                <label>メインクラス</label> <input type="text" value="${char.mainClass}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>サブクラス</label> <input type="text" value="${char.subClass}" disabled>
            </div>
            <h4>強化点</h4>
             <div class="sheet-input-group">
                <label>ボーナス</label> <input type="text" value="${char.enhancementValue.bonus}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>武装</label> <input type="text" value="${enhPoints.A}" disabled>
            </div>
             <div class="sheet-input-group">
                <label>変異</label> <input type="text" value="${enhPoints.M}" disabled>
            </div>
             <div class="sheet-input-group">
                <label>改造</label> <input type="text" value="${enhPoints.R}" disabled>
            </div>` : ''}
        </div>
        ${char.personalData ? `
        <div class="sheet-section sheet-personal-data">
            <h4>パーソナルデータ</h4>
            <div class="sheet-input-group"><label>タグ</label><input type="text" value="${char.personalData.tags}" disabled></div>
            <div class="sheet-input-group"><label>種族</label><input type="text" value="${char.personalData.race}" disabled></div>
            <div class="sheet-input-group"><label>身長</label><input type="text" value="${char.personalData.height}" disabled></div>
            <div class="sheet-input-group"><label>髪の色</label><input type="text" value="${char.personalData.hairColor}" disabled></div>
            <div class="sheet-input-group"><label>瞳の色</label><input type="text" value="${char.personalData.eyeColor}" disabled></div>
            <div class="sheet-input-group"><label>肌の色</label><input type="text" value="${char.personalData.skinColor}" disabled></div>
            <h4>その他メモ</h4>
            <textarea class="sheet-textarea" rows="8" disabled>${char.personalData.memo}</textarea>
        </div>
        ` : ''}
        ${isDoll ? `
        <div class="sheet-section sheet-hint">
            <h4>暗示</h4>
            ${char.hint && char.hint.name 
                ? `<p>${char.hint.key || ''}<b>【${char.hint.name}】</b><br>${char.hint.description || '（詳細情報なし）'}</p>` 
                : '<p>（暗示は設定されていません）</p>'}
        </div>

        <div class="sheet-section sheet-memory">
            <h4>記憶のカケラ</h4>
            ${(() => {
                if (!char.memories || char.memories.length === 0) {
                    return '<p>（記憶のカケラはありません）</p>';
                }
                const allMemories = data.getMemoryFragmentsData();
                return char.memories.map(mem => {
                    const memoryMasterEntry = Object.entries(allMemories).find(([key, value]) => value.name === mem.name);
                    
                    if (memoryMasterEntry) {
                        const [key, masterData] = memoryMasterEntry;
                        const description = masterData.description;
                        const userMemoHtml = mem.memo ? `<br><span class="sheet-user-memo"><i>${mem.memo}</i></span>` : '';
                        
                        // 説明文全体をコピーするためのテキストを生成
                        const textToCopy = `${key}【${mem.name}】\n${description}`;
                        
                        return `
                            <p>
                                <span class="memory-text-container">
                                    ${key}<b>【${mem.name}】</b><br>${description}${userMemoHtml}
                                </span>
                                <button class="copy-description-btn" data-copy-text="${encodeURIComponent(textToCopy)}">📋</button>
                            </p>`;
                    } else {
                        const userMemoHtml = mem.memo ? `<br><span class="sheet-user-memo"><i>${mem.memo}</i></span>` : '';
                        return `<p><span class="memory-text-container"><b>【${mem.name}】</b> (カスタム)${userMemoHtml}</span></p>`;
                    }
                }).join('');
            })()}
        </div>
        
        <div class="sheet-section sheet-regrets">
            <h4>未練</h4>
            <div id="regretListContainer" class="regret-list-container">
                <!-- ここに未練が描画される -->
            </div>
        </div>` : ''};
        
        <div class="sheet-section sheet-skills">
            <h4>スキル</h4>
            ${char.skills.map(skillName => {
                const maneuver = data.getManeuverByName(skillName);
                if (!maneuver) return `<div class="part-list-item">${skillName}</div>`;
                let skillType = 'スキル';
                if (maneuver.id && isDoll) {
                    const id = maneuver.id;
                    const prefix = id.substring(0, 2);
                    const isSpecialized = id.endsWith('-SP');
                    const isSameClass = char.mainClass === char.subClass;
                    const posKey = Object.keys(coreData.positions).find(k => coreData.positions[k].name === char.position);
                    const mainKey = Object.keys(allClasses).find(k => allClasses[k].name === char.mainClass);
                    const subKey = Object.keys(allClasses).find(k => allClasses[k].name === char.subClass);
                    if (isSpecialized && prefix === mainKey) {
                        skillType = '特化スキル';
                    } else if (prefix === posKey) {
                        skillType = 'ポジション';
                    } else if (prefix === mainKey) {
                        skillType = isSameClass ? 'クラス' : 'メインクラス';
                    } else if (prefix === subKey) {
                        skillType = isSameClass ? 'クラス' : 'サブクラス';
                    }
                }
                return `<div class="part-list-item"><span class="type">[${skillType}]</span> <b>【${skillName}】</b>《${maneuver.timing}/${maneuver.cost}/${maneuver.range}》：${maneuver.description || maneuver.effect}</div>`;
            }).join('')}
        </div>

        <div class="sheet-section sheet-parts">
            <h4>パーツ</h4>
            <div class="sheet-parts-grid">
                ${['head', 'arms', 'torso', 'legs', 'body'].map(loc => {
                    if (!char.partsStatus[loc] || char.partsStatus[loc].length === 0) return '';
                    const locName = {head:'頭', arms:'腕', torso:'胴', legs:'脚', body:'体'}[loc];
                    const partsHtml = char.partsStatus[loc].map(part => {
                        let maneuver;
                        let type;
                        const isTreasure = char.treasures && char.treasures.includes(part.name);

                        if (isTreasure) {
                            maneuver = data.getAllManeuvers()['TR-00'];
                            type = 'たからもの';
                        } else {
                            maneuver = data.getManeuverByName(part.name);
                            if (maneuver?.id?.startsWith('BP-')) {
                                type = '基本';
                            } else {
                                type = '強化'; // デフォルト
                            }
                        }
                        
                        if (!maneuver) {
                             return `<div class="part-list-item"><span class="type">[${type || '不明'}]</span> <b>${part.name}</b></div>`;
                        }
                        const description = isTreasure ? maneuver.description_raw : (maneuver.description_raw || maneuver.effect);
                        // 実際のたからもの名で表示を上書き
                        const displayName = isTreasure ? part.name : maneuver.name;
                        return `<div class="part-list-item"><span class="type">[${type}]</span> <b>【${displayName}】</b>《${maneuver.timing}／${maneuver.cost}／${maneuver.range}》：${description}</div>`;
                    }).join('');
                    return `<div><h4>〈${locName}〉</h4>${partsHtml}</div>`;
                }).join('')}
            </div>
        </div>
    </div>
    
    `;

    ui.showModal({
        title: "🪪 人形設計図",
        bodyHtml: bodyHtml,
        onRender: (modal, closeFn) => {
            modal.querySelector('.modal-content').classList.add('sheet-modal-content');
            modal.querySelector('.modal-body').classList.add('sheet-modal-body');

            const customCloseFn = () => {
                stateManager.autoSave(); // モーダルを閉じる直前に保存
                closeFn(); // 元の閉じる関数を実行
            };

            // 1. 閉じるボタンにカスタム関数を割り当て
            modal.querySelector('#closeSimpleMenuModalBtn').onclick = customCloseFn;

            // 2. 背景クリック時にもカスタム関数を割り当て
            modal.onclick = (e) => {
                if (e.target === modal) {
                    customCloseFn();
                }
            };

            const linkBtn = modal.querySelector('.sheet-link-btn');
            if (linkBtn) {
                linkBtn.onclick = (e) => {
                    e.stopPropagation();
                    const sheetId = linkBtn.dataset.sheetId;
                    if (sheetId) {
                        const url = `https://charasheet.vampire-blood.net/${sheetId}`;
                        // 新しいタブで安全にページを開く
                        window.open(url, '_blank', 'noopener,noreferrer');
                    }
                };
            }

            modal.querySelectorAll('.copy-description-btn').forEach(button => {
                button.onclick = (e) => {
                    e.stopPropagation();
                    const textToCopy = decodeURIComponent(button.dataset.copyText);
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        ui.showToastNotification('コピーしました！', 1500);
                    }).catch(err => {
                        console.error('コピーに失敗しました', err);
                        ui.showToastNotification('コピーに失敗しました', 1500);
                    });
                };
            });

            const editImageBtn = modal.querySelector('.sheet-edit-image-btn');
            if (editImageBtn) {
                editImageBtn.onclick = () => {
                    // 画像選択モーダルには、元の閉じる関数を渡す
                    showImageSelectionModal(char, closeFn);
                };
            }

            const areaSelector = modal.querySelector('#areaSelector');
            if (areaSelector) {
                areaSelector.onchange = (e) => {
                    const newArea = e.target.value;
                    charManager.updateCharacter(char.id, { area: newArea });
                    ui.renderCharacterCards();
                    ui.updateMarkers();
                    // この時点でも保存をトリガーする
                    stateManager.autoSave(); 
                };
            }

            const reloadBtn = modal.querySelector('.sheet-reload-btn');
            if (reloadBtn) {
                reloadBtn.onclick = async () => {
                    const sheetId = reloadBtn.dataset.sheetId;
                    if (!sheetId) return;

                    if (!confirm(`キャラクター「${char.name}」のデータを保管所から再読込みします。\nパーツの損傷状態などはリセットされますが、よろしいですか？`)) {
                        return;
                    }

                    try {
                        ui.showToastNotification(`ID: ${sheetId} を再読込み中...`, 2000);
                        const sourceData = await fetchVampireBloodSheet(sheetId);
                        const convertedData = convertVampireBloodSheet(sourceData);

                        if (convertedData) {
                            const updatedChar = charManager.updateCharacterFromReload(char.id, convertedData);
                            
                            // ▼▼▼ ここからが今回の修正箇所 ▼▼▼

                            // 1. UI全体を更新して、アンデッドカードの表示を最新化する
                            ui.updateAllUI();
                            
                            ui.showToastNotification(`「${updatedChar.name}」を更新しました。`, 2000);

                            // 2. モーダルを閉じて、更新された内容で再度開く
                            closeFn();
                            showCharacterSheetModal(updatedChar);

                            // ▲▲▲ 修正ここまで ▲▲▲
                        } else {
                            throw new Error('データの変換に失敗しました。');
                        }
                    } catch (error) {
                        alert(`エラー: ${error.message}`);
                    }
                };
            }

            const displayNameInput = modal.querySelector('#displayNameInput');
            if (displayNameInput) {
                displayNameInput.onchange = (e) => {
                    const newDisplayName = e.target.value;
                    if (newDisplayName) {
                        charManager.updateCharacter(char.id, { displayName: newDisplayName });
                        // カードとマーカーの名前を即時更新
                        ui.updateSingleCharacterCard(char.id);
                        ui.updateMarkers();
                        stateManager.autoSave();
                    }
                };
            }

            const regretContainer = modal.querySelector('#regretListContainer');
            if (regretContainer) {
                // ★★★ 表示の直前に、最新の状態にデータを更新 ★★★
                updateAndComplementRegrets(char);

                regretContainer.innerHTML = '';
                
                // 表示用のリストを作成
                const treasureList = char.regrets.filter(r => r.isForTreasure);
                const sisterList = char.regrets.filter(r => r.isChecked && !r.isForTreasure);
                const otherList = char.regrets.filter(r => !r.isChecked);

                // 指定の表示順で描画
                treasureList.forEach(r => {
                    const displayRegret = { ...r, name: `たからものへの${r.regretName || '依存'}` };
                    regretContainer.appendChild(createRegretItemForSheet(displayRegret, char));
                });
                sisterList.forEach(r => {
                    regretContainer.appendChild(createRegretItemForSheet(r, char));
                });
                otherList.forEach(r => {
                    regretContainer.appendChild(createRegretItemForSheet(r, char));
                });
            }
        }
    });
}

/**
 * 人形設計図モーダル専用の未練リストアイテムUIを構築する
 * @param {object} regret - 表示する未練オブジェクト
 * @param {object} char - 対象キャラクターオブジェクト
 * @returns {HTMLElement}
 */
function createRegretItemForSheet(regret, char) {
    const p = document.createElement('p');
    p.className = 'regret-list-item';
    
    const points = regret.points || 0;
    const symbols = '●'.repeat(points) + '○'.repeat(4 - points);
    const checkboxId = `regret_check_${char.id}_${Math.random().toString(36).substr(2, 9)}`;
    
    // 姉妹への未練（未設定含む）と、たからものへの未練はチェックボックスを無効化
    const isDisabled = regret.isForTreasure || regret.isUnset || 
        charManager.getCharacters().some(c => c.type === 'pc' && (c.name === regret.targetName || c.displayName === regret.targetName));

    p.innerHTML = `
        <input type="checkbox" id="${checkboxId}" ${regret.isChecked ? 'checked' : ''} ${isDisabled ? 'disabled' : ''}>
        <label for="${checkboxId}">
            <span class="regret-name">${regret.name}</span>
            <span class="regret-points">：${points}点 ${symbols}</span>
        </label>
    `;
    
    if (!isDisabled) {
        p.querySelector('input[type="checkbox"]').addEventListener('change', (e) => {
            // 元のデータ配列内のオブジェクトを探して、isCheckedプロパティを更新
            const originalRegret = char.regrets.find(r => r.name === regret.name);
            if (originalRegret) {
                originalRegret.isChecked = e.target.checked;
            }
            // アンデッドカードの表示を即時更新
            ui.updateSingleCharacterCard(char.id);
        });
    }
    return p;
}

export function showUndeadListModal(type) {
    const modal = document.getElementById('undeadListModal');
    const modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = '';
    const importContainer = document.createElement('div');
    importContainer.className = 'import-container';
    const importButton = document.createElement('button');
    importButton.className = 'import-btn';
    importButton.textContent = '保管所から読込み';
    importButton.onclick = () => {
        modal.classList.remove('is-visible');
        showImportCharacterModal(type, charManager);
    };
    importContainer.appendChild(importButton);
    modalBody.appendChild(importContainer);
    const filterContainer = document.createElement('div');
    filterContainer.className = 'undead-filter-container';
    const allCategories = ['ドール', 'レギオン', 'ホラー', 'サヴァント'];
    const filterButtons = ['すべて', ...allCategories];
    filterButtons.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = cat;
        btn.dataset.category = cat;
        if (cat === 'すべて') btn.classList.add('active');
        filterContainer.appendChild(btn);
    });
    modalBody.appendChild(filterContainer);
    const listContainer = document.createElement('div');
    listContainer.className = 'undead-list-container';
    modalBody.appendChild(listContainer);
    const templates = data.getUndeadTemplates();
    const renderList = (selectedCategory) => {
        listContainer.innerHTML = '';
        for (const id in templates) {
            if (id.startsWith('//')) continue;
            const template = templates[id];
            if (selectedCategory === 'すべて' || template.category === selectedCategory) {
                const item = document.createElement('div');
                item.className = 'undead-list-item';
                item.innerHTML = `<img src="${template.img}" alt="${template.name}"><div class="undead-list-item-name">${template.name}</div>`;

                item.onclick = () => {
                    // 1. データ担当にキャラクター追加と合流を依頼する
                    charManager.addCharacterFromTemplate(id, type);

                    // ▼▼▼ ここからが修正箇所 ▼▼▼
                    if (type === 'pc') {
                        charManager.getCharacters().forEach(pc => {
                            if (pc.type === 'pc') {
                                updateAndComplementRegrets(pc);
                            }
                        });
                    }
                    // ▲▲▲ 修正ここまで ▲▲▲
                    
                    // 2. データ処理が終わった後、UI担当に画面全体の再描画を命令する
                    ui.updateAllUI();

                    // 3. 最後にモーダルを閉じる
                    modal.classList.remove('is-visible');

                    // 以前のコードは削除
                    // ui.renderCharacterCards();
                    // ui.checkBattleStartCondition();
                };
                listContainer.appendChild(item);
            }
        }
    };
    filterContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.onclick = () => {
            filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderList(btn.dataset.category);
        };
    });
    renderList('すべて');
    modal.querySelector('#closeModalBtn').onclick = () => modal.classList.remove('is-visible');
    modal.onclick = (e) => { if (e.target === modal) modal.classList.remove('is-visible'); };
    modal.classList.add('is-visible');
}

export function buildMoveMenu(char, maneuver, event) {
    const currentAreaIndex = rows.indexOf(char.area);
    
    let movePower = 1;
    if (maneuver && maneuver.effects) {
        const moveEffect = maneuver.effects.find(e => e.ref === 'MOVE_CHARACTER');
        if (moveEffect && moveEffect.params && moveEffect.params.distance) {
            const distance = String(moveEffect.params.distance);
            const rangeParts = distance.split('-');
            movePower = parseInt(rangeParts[1] || rangeParts[0], 10);
        }
    }

    // ▼▼▼ ここからが今回の修正箇所です ▼▼▼
    let moveBonus = 0;
    const allActorManeuvers = [
        ...char.skills.map(name => data.getManeuverByName(name)),
        ...Object.values(char.partsStatus).flat().filter(p => !p.damaged).map(p => data.getManeuverByName(p.name))
    ].filter(m => m);

    for (const actorManeuver of allActorManeuvers) {
        if (actorManeuver.timing === 'オート' && actorManeuver.effects) {
            for (const effect of actorManeuver.effects) {
                if (effect.ref === 'APPLY_BUFF' && effect.params?.stat === 'moveDistanceBonus') {
                    const condition = effect.params.condition;
                    if (condition && Array.isArray(condition)) {
                        const maneuverTags = maneuver.tags || [];
                        if (condition.some(cond => maneuverTags.includes(cond))) {
                            moveBonus += effect.params.value || 0;
                        }
                    } else {
                        moveBonus += effect.params.value || 0;
                    }
                }
            }
        }
    }
    // 最終的な移動力にボーナスを加算
    const finalMovePower = movePower + moveBonus;
    // ▲▲▲ 修正はここまでです ▲▲▲

    const areaClassMap = { '奈落': 'naraku', '地獄': 'jigoku', '煉獄': 'rengoku', '花園': 'hanazono', '楽園': 'rakuen' };
    const menuItems = [];

    const canEnemyEscape = (char.type === 'enemy' && char.area === '奈落' && char.category !== 'レギオン' && char.category !== 'ホラー');
    const enemyEscapeMenuItem = { 
        label: '>>> 逃走 >>>', 
        isDisabled: !canEnemyEscape, 
        onClick: () => { 
            if (canEnemyEscape) {
                battleLogic.declareManeuver(char, { ...maneuver, name: "逃走", isEscapeAttempt: true });
            }
        } 
    };
    
    const canPcEscape = (char.type === 'pc' && char.area === '楽園' && char.category !== 'レギオン' && char.category !== 'ホラー');
    const pcEscapeMenuItem = { 
        label: '<<< 逃走 <<<', 
        isDisabled: !canPcEscape, 
        onClick: () => { 
            if (canPcEscape) {
                battleLogic.declareManeuver(char, { ...maneuver, name: "逃走", isEscapeAttempt: true });
            }
        } 
    };

    if (maneuver.effects.some(e => e.ref === 'MOVE_CHARACTER')) {
        menuItems.push(enemyEscapeMenuItem);
    }
    
    rows.forEach((area, index) => {
        const distance = Math.abs(currentAreaIndex - index);
        // 判定に finalMovePower を使用
        const isDisabled = (distance > finalMovePower) || (index === currentAreaIndex);
        const label = (index === currentAreaIndex) ? `${area} (現在地)` : area;
        
        const item = { 
            label: label, 
            isDisabled: isDisabled, 
            onClick: () => {
                if (!isDisabled) {
                    battleLogic.declareManeuver(char, { ...maneuver, targetArea: area });
                }
            }
        };
        const areaSlug = areaClassMap[area];
        if (areaSlug) item.class = `area-color-${areaSlug}`;
        menuItems.push(item);
    });

    if (maneuver.effects.some(e => e.ref === 'MOVE_CHARACTER')) {
        menuItems.push(pcEscapeMenuItem);
    }
    
    ui.showModal({ title: `【${maneuver.name}】移動先を選択`, items: menuItems });
}

export function closeAllMenus() {
    const menu = document.getElementById('maneuverMenu');
    if (menu) menu.classList.remove('is-visible');
    // ui.hideManeuverCard();
    menuOpener = null;
}

// --- 内部ヘルパー関数 ---

/**
 * キャラクターが持つ全てのスキルとパーツのマニューバ情報を取得し、
 * 使用可否などの状態を付与して返す
 * @param {object} char - 対象キャラクター
 * @returns {Array<object>} - isUsableなどの状態が付与されたマニューバオブジェクトの配列
 */
export function getCharacterManeuvers(char) {
    const battleState = battleLogic.getBattleState();
    const allManeuvers = [];
    const addedPartNames = new Set(); // 処理済みのパーツ名を記録

    (char.skills || []).forEach(skillName => {
        const maneuver = data.getManeuverByName(skillName);
        if (maneuver) {
            allManeuvers.push({ data: maneuver, sourceType: 'skill', sourceName: skillName });
            addedPartNames.add(skillName);
        }
    });

    Object.values(char.partsStatus || {}).flat().forEach(part => {
        if (addedPartNames.has(part.name)) return;

        let maneuver;
        // 1. パーツ名が treasures 配列に含まれているかチェック
        if (char.treasures && char.treasures.includes(part.name)) {
            maneuver = JSON.parse(JSON.stringify(data.getAllManeuvers()['TR-00']));
            if(maneuver) maneuver.name = part.name;
        } else {
        // 2. たからもの以外の場合、通常のマニューバとして処理
            maneuver = data.getManeuverByName(part.name);
        }

        if (maneuver) {
            allManeuvers.push({ data: maneuver, sourceType: 'part', sourceName: part.name, isDamaged: part.damaged });
            addedPartNames.add(part.name);
        }
    });

    const waitManeuver = data.getManeuverByName('待機');
    if (waitManeuver) allManeuvers.push({ data: waitManeuver, sourceType: 'common' });
    const arbitraryManeuver = data.getManeuverByName('任意');
    if (arbitraryManeuver) allManeuvers.push({ data: arbitraryManeuver, sourceType: 'common' });
    
    const isCharDamaged = Object.values(char.partsStatus).flat().some(part => part.damaged);

    // --- 現在アクティブなタイミングを判断 ---
    const activeIndicators = new Set();
    const { 
        phase, 
        activeActors = [], 
        actionQueue = [], 
        rapidQueue = [], 
        damageQueue = []
    } = battleState;

    if (activeActors.some(a => a.id === char.id)) {
        activeIndicators.add('アクション');
        activeIndicators.add('ラピッド');
    }

    if (activeActors.length === 0) {
        activeIndicators.add('ラピッド');
    }

    const allDeclarations = [
        ...actionQueue, 
        ...rapidQueue, 
        ...damageQueue.filter(item => item.type === 'declaration')
    ];
    if (allDeclarations.some(a => !a.checked)) {
        activeIndicators.add('ジャッジ');
    }

    if (phase === 'DAMAGE_RESOLUTION' || (actionQueue.every(a => a.checked) && damageQueue.some(d => !d.applied))) {
        activeIndicators.add('ダメージ');
    }

    if (allDeclarations.some(a => !a.checked && a.performer && a.performer.id === char.id)) {
        activeIndicators.add('ラピッド');
        activeIndicators.add('ジャッジ');
    }

    return allManeuvers.map(m => {
        const maneuver = m.data;
        let isUsable = true;

        if (char.actionValue <= 0 && maneuver.timing !== 'オート') isUsable = false;
        if (m.isDamaged) isUsable = false;
        if (char.usedManeuvers.has(maneuver.name) && maneuver.usageLimit !== false) isUsable = false;
        
        if (maneuver.timing !== 'オート' && !activeIndicators.has(maneuver.timing)) {
            isUsable = false;
        }
        
        if (isUsable && maneuver.effects?.some(e => e.params?.condition === 'is_damaged') && !isCharDamaged) {
            isUsable = false;
        }
        
        if (isUsable && maneuver.timing === 'ジャッジ') {
            if (getTargetableDeclarations(char, maneuver).length === 0) {
                isUsable = false;
            }
        }

        if (isUsable && maneuver.timing === 'ダメージ') {
            let canUseInDamagePhase = false;
            const isDefense = maneuver.tags?.includes('防御');
            if (isDefense) {
                if (maneuver.range === '自身') {
                    if (battleState.damageQueue.some(d => d.type === 'instance' && !d.applied && d.target.id === char.id)) {
                        canUseInDamagePhase = true;
                    }
                } else {
                    if (battleState.damageQueue.some(d => d.type === 'instance' && !d.applied && d.target.type === char.type && checkTargetAvailability(char, maneuver, [d.target]).hasTarget)) {
                        canUseInDamagePhase = true;
                    }
                }
            }
            const isDamageIncrease = maneuver.tags.includes('強化');
            if (!canUseInDamagePhase && isDamageIncrease && maneuver.range === '自身') {
                if (battleState.damageQueue.some(d => d.type === 'instance' && !d.applied && d.sourceAction?.performer?.id === char.id)) {
                    canUseInDamagePhase = true;
                }
            }
            const isTakeDamage = maneuver.effects?.some(e => e.ref === 'TAKE_DAMAGE_FOR_ALLY');
            if (!canUseInDamagePhase && isTakeDamage) {
                const allOtherAllies = charManager.getCharacters().filter(c => c.type === char.type && c.id !== char.id);
                const { targets: alliesInRange } = checkTargetAvailability(char, maneuver, allOtherAllies);

                if (alliesInRange.length > 0) {
                    const alliesInRangeIds = new Set(alliesInRange.map(ally => ally.id));
                    const canProtectAlly = battleState.damageQueue.some(d => 
                        d.type === 'instance' && !d.applied && alliesInRangeIds.has(d.target.id)
                    );
                    
                    if (canProtectAlly) {
                        canUseInDamagePhase = true;
                    }
                }
            }
            if (!canUseInDamagePhase) {
                isUsable = false;
            }
        }

        if (isUsable && maneuver.tags && maneuver.tags.includes('移動妨害')) {
            let canDebuff = false;
            const allMoveCandidates = [...battleState.actionQueue, ...battleState.rapidQueue];

            for (const declaration of allMoveCandidates) {
                if (!declaration.checked &&
                    declaration.performer.type !== char.type &&
                    declaration.sourceManeuver.tags.includes('移動')) {
                    if (checkTargetAvailability(char, maneuver, [declaration.performer]).hasTarget) {
                        canDebuff = true;
                        break;
                    }
                }
            }
            if (!canDebuff) {
                isUsable = false;
            }
        }
        
        if (isUsable && maneuver.timing !== 'オート' && maneuver.timing !== 'ジャッジ') {
            if (!checkTargetAvailability(char, maneuver).hasTarget) {
                isUsable = false;
            }
        }

        if (maneuver.timing === 'オート') {
            isUsable = false;
        }

        return { ...m, isUsable };
    });
}

/**
 * マニューバがどの箇所に属するかを示す短いテキストを返す
 * @param {object} maneuver 
 * @param {object} character 
 * @returns {string} '頭', '腕', '胴', '脚', '任意', または ''
 */
function getPartLocationText(maneuver, character) {
    // リファレンスモードで、マスターデータにallowedLocationsが設定されている場合
    if (!character?.id && maneuver.allowedLocations) {
        return maneuver.allowedLocations;
    }
    
    // 戦闘中メニューの場合、キャラクターの実際のパーツ配置を確認
    if (character?.partsStatus) {
        const locationMap = { head: '頭', arms: '腕', torso: '胴', legs: '脚' };
        for (const loc in character.partsStatus) {
            if (character.partsStatus[loc].some(part => part.name === maneuver.name)) {
                return locationMap[loc] || ''; // 'body'などは空文字を返す
            }
        }
    }
    return ''; // スキルなどの場合は空文字
}

function showImportCharacterModal(type, charManagerInstance) {
    const bodyHtml = `
        <div class="import-method-selector">
            <input type="radio" name="import-method" id="import-by-new" value="new" checked>
            <label for="import-by-new">新着リスト</label>
            <input type="radio" name="import-method" id="import-by-idlist" value="idlist">
            <label for="import-by-idlist">IDリスト</label>
            <input type="radio" name="import-method" id="import-by-id" value="id">
            <label for="import-by-id">ID入力</label>
        </div>
        
        <div id="import-by-list-content">
            <div class="loader">リストを読み込んでいます...</div>
            <div class="sheet-list-container"></div>
        </div>

        <div id="import-by-id-content" style="display: none;">
            <p style="text-align: center; margin: 10px 0;">キャラクターシート保管所のURLまたはIDを入力してください。</p>
            <input type="text" id="sheetIdInput" class="modal-input-text" placeholder="例: 4634334">
            <p class="modal-note">※ https://charasheet.vampire-blood.net/xxxx の形式に対応しています。</p>
            <button id="importSheetBtn" class="import-btn">読込み</button>
        </div>
    `;

    ui.showModal({
        title: "保管所からキャラクターを読込み",
        bodyHtml,
        onRender: (modal, closeFn) => {
            const listContent = modal.querySelector('#import-by-list-content');
            const idContent = modal.querySelector('#import-by-id-content');
            const listContainer = modal.querySelector('.sheet-list-container');
            const loader = modal.querySelector('.loader');
            const inputEl = modal.querySelector('#sheetIdInput');
            const importBtn = modal.querySelector('#importSheetBtn');

            const importCharacter = async (sheetId) => {
                try {
                    closeFn();
                    ui.showToastNotification(`ID: ${sheetId} を読込み中...`, 2000);
                    const sourceData = await fetchVampireBloodSheet(sheetId);
                    const convertedData = convertVampireBloodSheet(sourceData);
                    if (convertedData) {
                        convertedData.sheetId = sheetId;

                        // 1. キャラクターを戦場に追加
                        const newChar = charManager.addCharacterFromObject(convertedData, type);
            
                        // ▼▼▼ ここからが修正箇所 ▼▼▼
                        // 2. 【重要】全ての姉妹の未練データを再検証・補完
                        if (newChar.type === 'pc') {
                            charManager.getCharacters().forEach(pc => {
                                if (pc.type === 'pc') {
                                    updateAndComplementRegrets(pc);
                                }
                            });
                        }
                        // 3. UI全体を再描画
                        ui.updateAllUI(); 
                        // ▲▲▲ 修正ここまで ▲▲▲

                        ui.showToastNotification(`「${convertedData.name}」を読み込みました。`, 2000);
                    } else { throw new Error('データの変換に失敗しました。'); }
                } catch (error) { alert(`エラー: ${error.message}`); }
            };
            
            const loadAndDisplayList = (order) => {
                loader.style.display = 'block';
                listContainer.innerHTML = '';
                loader.textContent = `${order === 'id' ? 'ID' : '新着'}リストを読み込み中...`;
                
                fetchNecronicaList(order).then(list => {
                    loader.style.display = 'none';
                    const tableHtml = `
                        <table class="sheet-list-table">
                            <thead>
                                <tr><th>ID</th><th>タイトル / PC名</th><th>ポジション</th><th>クラス</th></tr>
                            </thead>
                            <tbody>
                                ${list.map(char => {
                                    const title = char.title || '(タイトルなし)';
                                    const pcName = char.Name ? `<br><span class="pc-name-in-list">${char.Name}</span>` : '';
                                    return `
                                        <tr data-id="${char.id}">
                                            <td>${char.id}</td>
                                            <td>${title}${pcName}</td>
                                            <td>${char.Race}</td>
                                            <td>${char.Class}</td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>`;
                    listContainer.innerHTML = tableHtml;
                    modal.querySelectorAll('.sheet-list-table tbody tr').forEach(row => {
                        row.onclick = () => importCharacter(row.dataset.id);
                    });
                }).catch(error => {
                    loader.textContent = `リストの読み込みに失敗しました: ${error.message}`;
                });
            };
            
            modal.querySelectorAll('input[name="import-method"]').forEach(radio => {
                radio.onchange = (e) => {
                    const method = e.target.value;
                    if (method === 'new') {
                        listContent.style.display = 'block';
                        idContent.style.display = 'none';
                        loadAndDisplayList('%21'); // 新着リスト
                    } else if (method === 'idlist') {
                        listContent.style.display = 'block';
                        idContent.style.display = 'none';
                        loadAndDisplayList('id'); // IDリスト
                    } else {
                        listContent.style.display = 'none';
                        idContent.style.display = 'block';
                        inputEl.focus();
                    }
                };
            });
            
            importBtn.onclick = () => {
                const idValue = inputEl.value.trim().match(/(\d+)/)?.[1];
                if (idValue) importCharacter(idValue);
            };
            inputEl.onkeydown = (e) => {
                if (e.key === 'Enter') {
                    const idValue = inputEl.value.trim().match(/(\d+)/)?.[1];
                    if (idValue) importCharacter(idValue);
                }
            };
            
            loadAndDisplayList('%21');
        }
    });
}

/**
 * Vampire Blood形式のキャラクターシートリスト(全ページ)をJSONP形式で取得する
 * サーバー負荷軽減のため、1ページずつ間隔を空けて取得する
 * @param {string} order - 'id' または '%21' (新着)
 * @returns {Promise<Array<object>>} - 取得した全キャラクターデータの配列
 */
async function fetchNecronicaList(order = '%21') {
    const totalPages = 6; // 0から5までの6ページ
    const allCharacters = [];
    const loader = document.querySelector('#import-by-list-content .loader');

    // 1ページ分を取得する内部ヘルパー関数
    const fetchPage = (page) => {
        return new Promise((resolve, reject) => {
            const callbackName = `jsonpCallback_list_${Date.now()}_${page}`;
            window[callbackName] = (data) => {
                document.head.removeChild(script);
                delete window[callbackName];
                resolve(data);
            };
            const script = document.createElement('script');
            script.onerror = () => {
                delete window[callbackName];
                document.head.removeChild(script);
                reject(new Error(`Page ${page}の読込みに失敗`));
            };
            script.src = `https://charasheet.vampire-blood.net/list_nechro.js?order=${order}&page=${page}&callback=${callbackName}`;
            script.charset = 'UTF-8';
            document.head.appendChild(script);
        });
    };
    
    // 1ページずつ順番に処理する
    for (let i = 0; i < totalPages; i++) {
        try {
            // ローダーのテキストを更新して進捗を表示
            if (loader) {
                loader.textContent = `リストを読み込み中... (${i + 1} / ${totalPages}ページ)`;
            }

            const pageData = await fetchPage(i);
            allCharacters.push(...pageData);

            // 次のページを取得する前に、わずかな待機時間を設ける
            // 200ミリ秒 = 0.2秒
            await new Promise(resolve => setTimeout(resolve, 200));

        } catch (error) {
            console.error(`ページ ${i} の取得に失敗しました。処理を中断します。`, error);
            throw new Error(`ページ ${i} の取得中にエラーが発生しました。`);
        }
    }

    return allCharacters;
}

function showImportCharacterModalWithId(type, charManagerInstance, sheetId) {
    // この関数はIDが確定した後に呼ばれる
    const importCharacter = async () => {
        try {
            ui.showToastNotification("読込み中...", 2000);
            const sourceData = await fetchVampireBloodSheet(sheetId);
            const convertedData = convertVampireBloodSheet(sourceData);
            if (convertedData) {
                charManagerInstance.addCharacterFromObject(convertedData, type);
                ui.renderCharacterCards();
                ui.checkBattleStartCondition();
                ui.showToastNotification(`「${convertedData.name}」を読み込みました。`, 2000);
            } else {
                throw new Error('データの変換に失敗しました。');
            }
        } catch (error) {
            alert(`エラー: ${error.message}`);
        }
    };
    importCharacter();
}

function fetchVampireBloodSheet(sheetId) {
    return new Promise((resolve, reject) => {
        const callbackName = `jsonpCallback_${Date.now()}`;
        window[callbackName] = (data) => {
            document.head.removeChild(script);
            delete window[callbackName];
            resolve(data);
        };
        const script = document.createElement('script');
        script.onerror = () => {
            delete window[callbackName];
            document.head.removeChild(script);
            reject(new Error('シートの読込みに失敗しました。'));
        };
        script.src = `https://charasheet.vampire-blood.net/${sheetId}.js?callback=${callbackName}`;
        script.charset = 'UTF-8';
        document.head.appendChild(script);
    });
}

function showImageSelectionModal(characterToUpdate, closeDetailsModalFn) {
    const getLocalImages = () => {
        const storedImages = localStorage.getItem('userLocalImages');
        return storedImages ? JSON.parse(storedImages) : [];
    };

    const saveLocalImage = (imageDataUrl) => {
        const localImages = getLocalImages();
        if (!localImages.includes(imageDataUrl)) {
            localImages.push(imageDataUrl);
            localStorage.setItem('userLocalImages', JSON.stringify(localImages));
        }
    };

    const handleFileSelect = async (event, modal, closeFn) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            try {
                // 新しいリサイズ関数を呼び出し、結果を待つ
                const resizedImageDataUrl = await resizeImage(file, 300);
                
                saveLocalImage(resizedImageDataUrl);
                
                // モーダルを一度閉じてから、新しい画像を含めて再度開く
                closeFn();
                showImageSelectionModal(characterToUpdate, closeDetailsModalFn);

            } catch (error) {
                console.error("画像のリサイズに失敗しました:", error);
                alert("画像の処理に失敗しました。別の画像で試してください。");
            }
        }
        event.target.value = '';
    };

    /**
     * 画像ファイルを指定された最大サイズにリサイズする
     * @param {File} file - ユーザーが選択した画像ファイル
     * @param {number} maxSize - 最大の幅または高さ (px)
     * @returns {Promise<string>} - リサイズ後の画像データURL (Base64)
     */
    function resizeImage(file, maxSize) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (readerEvent) => {
                const image = new Image();
                image.src = readerEvent.target.result;
                image.onload = () => {
                    let width = image.width;
                    let height = image.height;

                    if (width <= maxSize && height <= maxSize) {
                        resolve(image.src);
                        return;
                    }

                    if (width > height) {
                        if (width > maxSize) {
                            height *= maxSize / width;
                            width = maxSize;
                        }
                    } else {
                        if (height > maxSize) {
                            width *= maxSize / height;
                            height = maxSize;
                        }
                    }

                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    
                    ctx.drawImage(image, 0, 0, width, height);
                    
                    // ★★★ ここからが修正箇所です ★★★
                    let dataUrl;
                    // 元のファイルタイプがPNGまたはGIFの場合、透過を維持するためにPNGとして出力
                    if (file.type === 'image/png' || file.type === 'image/gif') {
                        dataUrl = canvas.toDataURL('image/png');
                    } else {
                        // それ以外の画像形式(JPEGなど)は、圧縮率の高いJPEGとして出力
                        dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    }
                    // ★★★ 修正はここまでです ★★★
                    
                    resolve(dataUrl);
                };
                image.onerror = (e) => reject(e);
            };
            reader.onerror = (e) => reject(e);
        });
    }

    const presetImagePaths = [
        '/images/doll/doll_01.png', '/images/doll/doll_02.png', '/images/doll/doll_03.png', 
        '/images/doll/doll_04.png', '/images/doll/doll_05.png', '/images/doll/doll_06.png', 
        '/images/doll/doll_12.png', '/images/doll/doll_13.png', '/images/doll/doll_14.png', 
        '/images/doll/doll_15.png', '/images/doll/doll_16.png', '/images/doll/doll_17.png'
    ];
    const dynamicImagePaths = data.getAllCharacterImagePaths();
    
    // --- ★★★ ここから修正：ローカル画像とプリセット画像を結合 ★★★ ---
    const localImages = getLocalImages();
    const allPresetPaths = [...new Set([...presetImagePaths, ...dynamicImagePaths])];
    const allImagePaths = [...localImages, ...allPresetPaths];
    // --- ★★★ 修正ここまで ★★★

    const imagesHtml = allImagePaths.map(path => 
        `<div class="image-select-item" data-path="${path}"><img src="${path}" alt="image" loading="lazy"></div>`
    ).join('');

    // LocalStorageの使用量を計算
    const usageInBytes = getLocalStorageUsage();
    const usageInKB = (usageInBytes / 1024).toFixed(1); // KB単位に変換し、小数点以下1桁に

    const bodyHtml = `
        <div class="local-image-upload-container">
            <div class="button-group">
                <button id="localImageUploader" class="local-image-upload-btn">ローカルから読込み</button>
                <button id="clearImageCacheBtn" class="local-image-clear-btn">画像キャッシュ消去</button>
            </div>
            <input type="file" id="localImageInput" accept="image/*" style="display: none;">
            <p class="image-upload-note">画像は、300×300px にリサイズされてキャッシュします。</p>
            <p class="image-upload-note">画像キャッシュ使用量: ${usageInKB} KB / 5.0 MB</p>
        </div>
        <div class="image-select-grid">${imagesHtml}</div>
    `;

    ui.showModal({ 
        title: "画像を選択", 
        bodyHtml, 
        onRender: (modal, closeImageSelectFn) => {
            const uploaderBtn = modal.querySelector('#localImageUploader');
            const fileInput = modal.querySelector('#localImageInput');
            
            uploaderBtn.onclick = () => fileInput.click();
            fileInput.onchange = (e) => handleFileSelect(e, modal, closeImageSelectFn);

            const clearCacheBtn = modal.querySelector('#clearImageCacheBtn');
            if (clearCacheBtn) {
                clearCacheBtn.onclick = () => {
                    if (confirm('ローカルに保存した画像をすべて消去します。よろしいですか？')) {
                        clearLocalImageCache();
                        ui.showToastNotification('画像キャッシュを消去しました。', 2000);
                        // モーダルを再描画して、消去された状態を反映する
                        closeImageSelectFn();
                        showImageSelectionModal(characterToUpdate, closeDetailsModalFn);
                    }
                };
            }

            modal.querySelectorAll('.image-select-item').forEach(item => {
                item.onclick = () => {
                    const newImagePath = item.dataset.path;
                    charManager.updateCharacter(characterToUpdate.id, { img: newImagePath });
                    // stateManager.autoSave();
                    ui.renderCharacterCards();
                    closeImageSelectFn();
                    closeDetailsModalFn();
                    const updatedChar = charManager.getCharacterById(characterToUpdate.id);
                    if (updatedChar) showCharacterSheetModal(updatedChar);
                };
            });
        }
    });
}

function getTargetableDeclarations(actor, maneuver) {
    const state = battleLogic.getBattleState();
    const allDeclarations = [...state.actionQueue, ...state.rapidQueue];

    // --- マニューバの射程に応じて、処理を完全に分岐させる ---

    // ==========================================================
    //  ケース1: 射程が「自身」のマニューバの処理
    // ==========================================================
    if (maneuver.range === '自身') {
        return allDeclarations.filter(decl => {
            // 前提条件：未解決の「攻撃」宣言であること
            if (decl.checked || !decl.sourceManeuver.tags?.includes('攻撃')) {
                return false;
            }

            const attacker = decl.performer;

            // 射程「自身」の場合、攻撃者がマニューバ使用者(actor)と同一でなければならない
            if (attacker.id !== actor.id) {
                return false;
            }

            // 所属の判定（自分自身への支援・妨害が可能か）
            const isSupport = maneuver.tags?.includes('支援');
            const isHindrance = maneuver.tags?.includes('妨害');
            const isAttackerAlly = true; // 攻撃者 = 使用者なので、常に味方

            const canSupport = isSupport && isAttackerAlly;
            const canHinder = isHindrance && !isAttackerAlly; // 自分への妨害は通常ありえない

            return canSupport || canHinder;
        });
    }
    
    // ==========================================================
    //  ケース2: 射程が「自身」以外のマニューバの処理
    // ==========================================================
    else {
        const actorAreaIndex = rows.indexOf(actor.area);
        const { minRange, maxRange } = calculateManeuverRange(actor, maneuver);

        // isNaNチェックは、数値ベースの射程の場合にのみ有効な安全装置として機能する
        if (isNaN(minRange)) return [];

        return allDeclarations.filter(decl => {
            if (decl.checked || !decl.sourceManeuver.tags?.includes('攻撃')) {
                return false;
            }

            const attacker = decl.performer;

            // 距離のチェック
            const attackerAreaIndex = rows.indexOf(attacker.area);
            if (attackerAreaIndex === -1) return false;
            const distance = Math.abs(actorAreaIndex - attackerAreaIndex);
            if (distance < minRange || distance > maxRange) {
                return false;
            }
            
            // 所属の判定
            const isSupport = maneuver.tags?.includes('支援');
            const isHindrance = maneuver.tags?.includes('妨害');
            const isAttackerAlly = actor.type === attacker.type;

            const canSupport = isSupport && isAttackerAlly;
            const canHinder = isHindrance && !isAttackerAlly;
            
            return canSupport || canHinder;
        });
    }
}

/**
 * マニューバの射程内に有効なターゲットが存在するかを判定する
 * @param {object} actor - 行動主体
 * @param {object} maneuver - マニューバのマスターデータ
 * @returns {{hasTarget: boolean, targets: Array<object>}} 
 */
export function checkTargetAvailability(actor, maneuver, targetChars = null) {
    const range = maneuver.range;

    if (!range || ['自身', '効果参照', 'なし', 'すべて'].includes(range) || maneuver.timing === 'オート') {
        return { hasTarget: true, targets: [] };
    }

    // ▼▼▼ ここからが今回の修正箇所です ▼▼▼
    // 汎用ヘルパー関数を呼び出して有効射程を計算
    const { minRange, maxRange } = calculateManeuverRange(actor, maneuver);
    // ▲▲▲ 修正はここまでです ▲▲▲

    if (isNaN(minRange)) {
        return { hasTarget: true, targets: [] };
    }

    const charactersToCheck = targetChars || charManager.getCharacters().filter(c => !c.isDestroyed && !c.hasWithdrawn);
    
    const actorAreaIndex = rows.indexOf(actor.area);
    const availableTargets = [];

    for (const char of charactersToCheck) {
        if (minRange === 0 && maxRange === 0 && char.id === actor.id) {
            continue;
        }
        
        const isAttack = maneuver.tags && maneuver.tags.includes('攻撃');
        const isSupport = maneuver.category === '支援' || (maneuver.tags && maneuver.tags.includes('支援'));
        if (actor.type === char.type && isAttack && !isSupport) {
            continue;
        }

        const targetAreaIndex = rows.indexOf(char.area);
        if (targetAreaIndex === -1) continue;

        const distance = Math.abs(actorAreaIndex - targetAreaIndex);
        if (distance >= minRange && distance <= maxRange) {
            availableTargets.push(char);
        }
    }
    return { hasTarget: availableTargets.length > 0, targets: availableTargets };
}

/**
 * 戦闘準備中にキャラクターの配置先エリアを選択するためのメニューを構築・表示する
 * @param {object} char - 配置するキャラクターオブジェクト
 * @param {HTMLElement} element - クリックされたカード要素
 * @param {Event} event - クリックイベント
 */
export function buildPlacementMenu(char, element, event) {
    const isDoll = char.type === 'pc';
    const dollAreas = ["煉獄", "花園", "楽園"];
    const enemyAreas = ["奈落", "地獄", "煉獄", "花園", "楽園"];
    const selectableAreas = isDoll ? dollAreas : enemyAreas;

    const menuItems = selectableAreas.map(areaName => {
        return {
            label: areaName + (char.area === areaName ? ' (現在地)' : ''),
            isDisabled: char.area === areaName,
            onClick: () => {
                charManager.updateCharacter(char.id, { area: areaName });
                ui.updateAllUI(); // ★ ここは戦闘開始前の処理のため、現状維持とします
            }
        };
    });

    ui.showModal({ title: `${char.name} の配置先を選択`, items: menuItems });
}

async function selectTargetForAction(actor, maneuver, handleGlobalClick) {
    // 既存のターゲット選択があれば、先にキャンセルする
    cancelTargetSelection(); // ★ 念のためここでも呼び出す

    return new Promise(resolve => {
        const cleanupAndResolve = (value) => {
            // クリーンアップ処理
            document.querySelectorAll('.target-selectable').forEach(el => {
                el.classList.remove('target-selectable');
                el.onclick = null;
            });
            document.removeEventListener('click', handleGlobalClick);
            
            // 状態のリセットとPromiseの解決
            resolveTargetSelection = null;
            resolve(value);
        };
        
        // グローバル変数に cleanupAndResolve 関数をセット
        resolveTargetSelection = cleanupAndResolve;
        
        const { targets } = checkTargetAvailability(actor, maneuver);
        if (targets.length === 0) {
             ui.addLog("> 射程内に有効なターゲットがいません");
             cancelTargetSelection(); // ★ ターゲットがいない場合もクリーンアップ
             return;
        }

        // ui.addLog(`>> ${actor.name}のターゲットを選択してください。(対象外クリックでキャンセル)`);
        if (targets.length > 0) ui.scrollToFirstCharacter(targets);

        const targetIds = new Set(targets.map(t => t.id));
        document.querySelectorAll('.char, .marker').forEach(el => {
            if (targetIds.has(el.dataset.id)) {
                el.classList.add('target-selectable');
                el.onclick = (e) => { 
                    e.stopPropagation(); 
                    cleanupAndResolve(charManager.getCharacterById(el.dataset.id));
                };
            }
        });

        // handleGlobalClick (実体は handleOutsideClick) を document に登録する
        setTimeout(() => document.addEventListener('click', handleGlobalClick), 0);
    });
}
/**
 * 攻撃宣言の確認モーダルを表示する
 * @param {object} performer - 攻撃の実行者
 * @param {object} target - 攻撃の対象
 * @param {object} maneuver - 使用する攻撃マニューバ
 */
export function showAttackConfirmationModal(performer, target, maneuver, index, onConfirmCallback) {
    const state = battleLogic.getBattleState();
    const targetDeclaration = state.actionQueue[index]; 
    if (!targetDeclaration) return;

    // ... (ボーナス計算のロジックは変更なし) ...
    let totalBonus = 0;
    const inherentSources = [];
    const supportSources = [];
    const hindranceSources = [];

    // --- 1. マニューバ自身の「固有修正」を計算 ---
    const attackEffect = maneuver.effects?.find(e => e.ref === 'GENERIC_ATTACK');
    if (attackEffect && attackEffect.params && attackEffect.params.attack_bonus) {
        const bonus = parseInt(attackEffect.params.attack_bonus, 10);
        if (!isNaN(bonus)) {
            totalBonus += bonus;
            // 固有修正リストに追加
            inherentSources.push(`<div>【${maneuver.name}】自身の効果 (${bonus > 0 ? '+' : ''}${bonus})</div>`);
        }
    }

    // --- 2. 外部からの「支援」「妨害」を計算 (ロジックはほぼ同じ) ---
    
    // a) パッシブスキル（オート）によるボーナス
    const performerManeuvers = getCharacterManeuvers(performer);
    // ▼▼▼ 変更箇所 ▼▼▼
    performerManeuvers.forEach(mObj => {
        // 💡がアクティブなマニューバのみを対象にする
        if (isIconActive(mObj, performer)) {
            const m = mObj.data;
            if (m.effects) {
                m.effects.forEach(effect => {
                    // 【地獄の住人】や【狂鬼】のような、常時攻撃判定を修正する効果を計上
                    if (effect.ref === 'APPLY_BUFF' && effect.params.stat === 'attackCheckBonus') {
                        const bonus = effect.params.value || 0;
                        totalBonus += bonus;
                        supportSources.push(`<div>${performer.name}の【${m.name}】(${bonus > 0 ? '+' : ''}${bonus})</div>`);
                    }
                });
            }
        }
    });

    // b) 一時的なバフ効果
    if (performer.activeBuffs && performer.activeBuffs.length > 0) {
        performer.activeBuffs.forEach(buff => {
            if (buff.stat === 'attackCheckBonus') {
                const bonus = buff.value || 0;
                totalBonus += bonus;
                supportSources.push(`<div>${performer.name}の【${buff.source}】 (+${bonus})</div>`);
            }
        });
    }

    // c) 宣言されたジャッジマニューバ
    state.judgeQueue.forEach(judgeDecl => {
        const judgeManeuver = judgeDecl.sourceManeuver;
        
        // 1. GENERIC_JUDGE_MOD または CHOICE_JUDGE_MOD の効果を探す
        const judgeEffect = judgeManeuver.effects.find(e => e.ref === 'GENERIC_JUDGE_MOD' || e.ref === 'CHOICE_JUDGE_MOD');

        if (judgeEffect) {
            // このジャッジ宣言が、現在の攻撃宣言を対象としているかを確認
            if (judgeDecl.judgeTarget?.id !== targetDeclaration.id) {
                return; // 対象が違うので、このジャッジは無視して次のループへ
            }

            let shouldApply = false;
            let value = 0;
            let modType = '';

            // 2. 効果の種類に応じて、効果量(value)と種別(modType)を決定する
            if (judgeEffect.ref === 'GENERIC_JUDGE_MOD') {
                value = judgeEffect.params.value || 0;
                if (value > 0) modType = 'support';
                if (value < 0) modType = 'hindrance';
            } else if (judgeEffect.ref === 'CHOICE_JUDGE_MOD') {
                const isTargetAlly = judgeDecl.performer.type === performer.type;
                if (isTargetAlly) {
                    modType = 'support';
                    const supportOption = judgeEffect.params.options.find(opt => opt.type === '支援');
                    if (supportOption) value = supportOption.value;
                } else {
                    modType = 'hindrance';
                    const hindranceOption = judgeEffect.params.options.find(opt => opt.type === '妨害');
                    if (hindranceOption) value = hindranceOption.value;
                }
            }
            
            // 3. このジャッジが現在の攻撃に適用されるべきか判断する
            // ケースA: 他者のアクションに介入する場合
            if (judgeDecl.judgeTarget && judgeDecl.judgeTarget.id === targetDeclaration.id) {
                shouldApply = true;
            }
            // ケースB: 自身の攻撃判定に介入する場合 (自己支援のみ)
            else if (modType === 'support' && (judgeEffect.params.target === 'self_roll' || judgeEffect.params.target === 'any_roll') && judgeDecl.performer.id === performer.id) {
                shouldApply = true;
            }

            // 4. 適用する場合、ボーナスを計上する
            if (shouldApply) {
                const sourceName = `${judgeDecl.performer.name}の【${judgeManeuver.name}】`;
                
                if (modType === 'support') {
                    totalBonus += Math.abs(value);
                    supportSources.push(`${sourceName} (+${Math.abs(value)})`);
                } else if (modType === 'hindrance') {
                    totalBonus -= Math.abs(value);
                    hindranceSources.push(`${sourceName} (-${Math.abs(value)})`);
                }
            }
        }
    });
    
    // --- 3. HTMLの構築 ---
    const inherentHtml = inherentSources.length > 0
        ? inherentSources.join('')
        : `<div class="modifier-none">- なし -</div>`;
        
    const supportHtml = supportSources.length > 0
        ? supportSources.map(s => `<div class="modifier-item">${s}</div>`).join('')
        : `<div class="modifier-none">- なし -</div>`;
    
    const hindranceHtml = hindranceSources.length > 0
        ? hindranceSources.map(s => `<div class="modifier-item">${s}</div>`).join('')
        : `<div class="modifier-none">- なし -</div>`;

    const bonusText = totalBonus > 0 ? `+${totalBonus}` : (totalBonus < 0 ? `${totalBonus}` : '');

    const bodyHtml = `
        <div class="attack-confirm-summary">
            ${performer.name}【${maneuver.name}】→ ${target.name}
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《固有修正》</div>
            <div class="modifier-list">${inherentSources.length > 0 ? inherentSources.join('') : '<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《支援》</div>
            <div class="modifier-list">${supportSources.length > 0 ? supportSources.map(s => `<div class="modifier-item">${s}</div>`).join('') : '<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《妨害》</div>
            <div class="modifier-list">${hindranceSources.length > 0 ? hindranceSources.map(s => `<div class="modifier-item">${s}</div>`).join('') : '<div class="modifier-none">- なし -</div>'}</div>
        </div>
    `;

    const footerHtml = `<button id="executeDiceRollBtn" class="welcome-modal-close-btn">🎲 NA${bonusText} 🎲</button>`;

    ui.showModal({
        title: '攻撃判定',
        bodyHtml,
        footerHtml,
        onRender: (modal, closeFn) => {
            modal.querySelector('#executeDiceRollBtn').onclick = () => {
                // 1. ダイスロールの前に「解決」ログを出力する
                ui.addLog(`> 解決: ${performer.name} の【${maneuver.name}】`);
                
                // 2. 元々のコールバック（performDiceRollを呼び出す関数）を実行する
                if (onConfirmCallback) {
                    onConfirmCallback(totalBonus);
                }

                // 3. モーダルを閉じる
                closeFn();
            };
        }
    });
}

/**
 * 姉妹間の人間関係モーダルを構築・表示する
 */
export function showRelationshipModal() {
    const modal = document.getElementById('relationshipModal');
    const chartContainer = document.getElementById('relationshipChartContainer');
    const closeBtn = document.getElementById('closeRelationshipModalBtn');

    if (!modal || !chartContainer || !closeBtn) return;

    const renderChart = () => {
        chartContainer.innerHTML = '';
        const pcs = charManager.getCharacters().filter(c => c.type === 'pc' && !c.isDestroyed && !c.hasWithdrawn);
        const numPcs = pcs.length;
        if (numPcs < 2) { closeModal(); return; }

        const containerWidth = chartContainer.offsetWidth;
        const containerHeight = chartContainer.offsetHeight;

        // 1. ダミーのノードを作成して実際のサイズを取得する
        const tempNode = document.createElement('div');
        tempNode.className = 'doll-node';
        tempNode.style.visibility = 'hidden'; // 画面には表示しない
        chartContainer.appendChild(tempNode);
        const nodeRect = tempNode.getBoundingClientRect();
        const nodeDiameter = nodeRect.width; // 実際の幅（直径）を取得
        const nodeRadius = nodeDiameter / 2;
        chartContainer.removeChild(tempNode); // ダミーノードを削除

        // 2. 取得したサイズを基に楕円の半径を計算（アイコンが重ならないように調整）
        const radiusX = (containerWidth - nodeDiameter) / 2 * 1;
        const radiusY = (containerHeight - nodeDiameter) / 2 * 1;
        
        const centerX = containerWidth / 2;
        const centerY = containerHeight / 2;
        const positions = [];

        // 1. 人数に応じた回転オフセット角度を計算 (ラジアン単位)
        //    90度を人数で割り、それをラジアンに変換する
        const angleOffset = (Math.PI / 3) / numPcs;

        // ステップ1: 全てのドールのアイコンを「楕円周上」に配置
        pcs.forEach((pc, i) => {
            // 2. 角度の計算に、算出したオフセットを加える
            // const angleOffset = (Math.PI / 2) / numPcs;
            const angle = (i / numPcs) * 2 * Math.PI - Math.PI / 2 + angleOffset;
            
            const x = centerX + radiusX * Math.cos(angle);
            const y = centerY + radiusY * Math.sin(angle);
            
            positions.push({ x, y });

            const node = document.createElement('div');
            node.className = 'doll-node';
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            
            // ▼▼▼ ここからが今回の修正箇所 ▼▼▼
            
            // 1. 角度を度数法(degree)に変換
            const angleDeg = angle * (180 / Math.PI);
            
            // 2. CSS変数としてstyle属性に角度を設定
            node.style.setProperty('--angle', `${angleDeg}deg`);
            
            // ▲▲▲ 修正ここまで ▲▲▲

            node.innerHTML = `
                <img src="${pc.img}" alt="${pc.name}">
                <div class="name-label">${pc.name}</div>
            `;
            chartContainer.appendChild(node);
        });

        for (let i = 0; i < numPcs; i++) {
            for (let j = 0; j < numPcs; j++) {
                if (i === j) continue;

                const sourceDoll = pcs[i];
                const targetDoll = pcs[j];
                const p1 = positions[i];
                const p2 = positions[j];

                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const totalDistance = Math.sqrt(dx * dx + dy * dy);
                const angleRad = Math.atan2(dy, dx);
                const angleDeg = angleRad * (180 / Math.PI);

                if (j > i) {
                    const line = document.createElement('div');
                    line.className = 'relationship-line';
                    line.style.width = `${totalDistance}px`;
                    line.style.left = `${p1.x}px`;
                    line.style.top = `${p1.y}px`;
                    line.style.transform = `rotate(${angleDeg}deg)`;
                    chartContainer.appendChild(line);
                }
                
                // ▼▼▼ ここからが今回の修正の中心部分 (2/2) ▼▼▼
                // 取得した動的な値を使って計算
                const innerDistance = totalDistance - nodeDiameter;
                const offsetFromEdge = innerDistance * 0.18;
                const textboxDistance = nodeRadius + offsetFromEdge;
                // ▲▲▲ 修正ここまで ▲▲▲

                const unitVectorX = dx / totalDistance;
                const unitVectorY = dy / totalDistance;
                const textboxX = p1.x + unitVectorX * textboxDistance;
                const textboxY = p1.y + unitVectorY * textboxDistance;

                const textbox = document.createElement('div');
                textbox.className = 'regret-textbox';
                textbox.style.left = `${textboxX}px`;
                textbox.style.top = `${textboxY}px`;

                const foundRegretOnDoll = sourceDoll.regrets.find(r => r.name && r.name.includes(targetDoll.name));
                let regretMasterData = null;

                if (foundRegretOnDoll) {
                    const allRegrets = Object.values(data.getRegretData());
                    regretMasterData = allRegrets.find(master => foundRegretOnDoll.name.includes(master.name));
                }
                
                if (regretMasterData) {
                    const isMadness = foundRegretOnDoll.points >= 4;
                    textbox.title = `発狂：${regretMasterData.madnessName}\n効果：${regretMasterData.madnessEffect}`;
                    
                    if (isMadness) {
                        textbox.classList.add('is-madness');
                        textbox.textContent = regretMasterData.madnessName;
                    } else {
                        textbox.textContent = regretMasterData.name;
                        // 1. マスターデータに色が定義されていれば、スタイルを適用
                        if (regretMasterData.color) {
                            // textbox.style.borderColor = regretMasterData.color;
                            textbox.style.color = regretMasterData.color;
                        }
                    }
                } else {
                    textbox.textContent = '未設定';
                    textbox.classList.add('is-unset');
                }
                
                chartContainer.appendChild(textbox);

                textbox.addEventListener('click', (e) => {
                    e.stopPropagation();

                    // メニュー項目を定義
                    const menuItems = [
                        {
                            label: '未練変更',
                            onClick: () => {
                                // ダイスロールを実行し、結果をコールバックで受け取る
                                performDiceRoll({
                                    command: 'NM',
                                    showToast: true,
                                    callback: (resultValue, hitLocation, resultText, newRegretMaster) => {
                                        if (newRegretMaster) {
                                            // character-managerの関数を呼び出してデータを更新
                                            charManager.changeSisterRegret(sourceDoll.id, targetDoll.displayName, newRegretMaster);
                                            // UIを再描画
                                            renderChart();
                                        }
                                    }
                                });
                            }
                        },
                        {
                            label: '発狂切替',
                            onClick: () => {
                                if (foundRegretOnDoll) {
                                    // 狂気点を4と0でトグルさせる
                                    foundRegretOnDoll.points = (foundRegretOnDoll.points >= 4) ? 0 : 4;
                                    // UIを再描画
                                    renderChart();
                                } else {
                                    ui.showToastNotification("未設定の未練は発狂状態を変更できません。", 2000);
                                }
                            }
                        }
                    ];
                    
                    // シンプルメニューモーダルでメニューを表示
                    ui.showModal({
                        title: `${sourceDoll.name} から ${targetDoll.name} への未練`,
                        items: menuItems
                    });
                });
            }
        }
    };
    
    // ▼▼▼ ここからが修正箇所 (3/3) ▼▼▼
    // handleResize と closeModal の定義を renderChart の外に移動
    const handleResize = () => {
        clearTimeout(relationshipResizeTimer);
        relationshipResizeTimer = setTimeout(() => {
            if (modal.classList.contains('is-visible')) {
                renderChart();
            }
        }, 250);
    };

    const closeModal = () => {
        modal.classList.remove('is-visible');
        window.removeEventListener('resize', handleResize);
    };
    
    const pcs = charManager.getCharacters().filter(c => c.type === 'pc' && !c.isDestroyed && !c.hasWithdrawn);
    if (pcs.length < 2) {
        ui.showToastNotification("関係性を表示するには姉妹が2人以上必要です。", 2000);
        return;
    }

    renderChart();
    closeBtn.onclick = closeModal;
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };
    window.addEventListener('resize', handleResize);
    modal.classList.add('is-visible');
    // ▲▲▲ 修正ここまで ▲▲▲
}

/**
 * 【新設・エクスポート】指定されたキャラクターの未練リストを、現在の姉妹構成に基づいて更新する
 * isCheckedプロパティを正しく設定し、不要な未練をフィルタリングする責務を持つ
 * @param {object} char - 更新対象のキャラクターオブジェクト
 */
export function updateRegretsForCharacter(char) {
    if (!char || !char.regrets) return;

    const allRegretsFromSheet = char.regrets;
    const otherSisters = charManager.getCharacters().filter(c => c.type === 'pc' && c.id !== char.id);
    const sisterNames = otherSisters.flatMap(s => [s.name, s.displayName]);

    // isCheckedプロパティを一度リセット
    allRegretsFromSheet.forEach(r => r.isChecked = false);

    // 1. たからものへの未練をチェック
    const treasureRegret = allRegretsFromSheet.find(r => r.isForTreasure);
    if (treasureRegret) {
        treasureRegret.isChecked = true;
    }

    // 2. 姉妹への未練をチェック
    allRegretsFromSheet.forEach(regret => {
        if (!regret.isForTreasure && sisterNames.includes(regret.targetName)) {
            regret.isChecked = true;
        }
    });

    // これでchar.regrets配列内の各未練のisCheckedプロパティが最新の状態になる
}