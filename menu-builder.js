/**
 * @file menu-builder.js
 * @description メニューやモーダルなど、動的なUIの構築を担当するモジュール
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.16.70"; // バージョンを更新

import * as data from './data-handler.js';
import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { convertVampireBloodSheet } from './character-converter.js';
import { getCategoryClass, getManeuverSourceText } from './ui-helpers.js';
import { getLocalStorageUsage, clearLocalImageCache } from './settings-manager.js';
import * as stateManager from './state-manager.js';
import { calculateManeuverRange } from './battle-helpers.js';

// --- モジュール内変数 ---
let menuOpener = null;
const rows = ["奈落", "地獄", "煉獄", "花園", "楽園"];
let resolveTargetSelection = null;
let activeFilter = '宣言';
let activeReferenceFilters = {};

// ★★★ ここから新設：共通ソートロジック ★★★

/**
 * マニューバのIDや情報から、ソート用の優先度を数値で返す
 * @param {object} maneuver - マニューバのマスターデータ
 * @returns {number} - 優先度を示す数値（小さいほど先に表示される）
 */
function getSortPriority(maneuver) {
    const id = maneuver.id || '';
    const prefix = id.substring(0, 2);
    const typePrefix = id.substring(0, 1);

    // 1. ポジションスキル
    const posKeys = ['AL', 'HL', 'AM', 'JK', 'CT', 'SR'];
    const posIndex = posKeys.indexOf(prefix);
    if (posIndex !== -1) return 1000 + posIndex;

    // 2. クラススキル
    const classKeys = ['ST', 'TN', 'GT', 'RQ', 'BR', 'RM', 'SY'];
    const classIndex = classKeys.indexOf(prefix);
    if (classIndex !== -1) {
        const basePriority = 2000 + classIndex * 10;
        return id.endsWith('-SP') ? basePriority : basePriority + 1; // 特化スキルを先に
    }

    // 3. 基本パーツ
    if (prefix === 'BP') {
        const loc = maneuver.allowedLocations;
        if (loc === '頭') return 3000;
        if (loc === '腕') return 3001;
        if (loc === '胴') return 3002;
        if (loc === '脚') return 3003;
        return 3004; // その他
    }

    // 4. 強化パーツ (武装・変異・改造)
    const level = parseInt(id.substring(1, 2), 10);
    if (!isNaN(level)) {
        if (typePrefix === 'A') return 4000 + level;
        if (typePrefix === 'M') return 5000 + level;
        if (typePrefix === 'R') return 6000 + level;
    }

    // 5. 手駒スキル
    if (prefix === 'PS') return 7000;

    // 6. 手駒専用パーツ
    if (typePrefix === 'P') {
        const maliceLevelCode = parseInt(id.substring(1, 2), 10);
        if (!isNaN(maliceLevelCode)) {
            return 8000 + maliceLevelCode;
        }
    }

    // 7. その他
    if (prefix === 'TR') return 9000; // たからもの
    if (prefix === 'CA') return 9100; // 一般動作

    // 8. どの分類にも属さない場合
    return 9999;
}

/**
 * マニューバの配列を、指定された共通ルールに従ってソートする
 * @param {Array<object>} maneuvers - ソート対象のマニューバオブジェクトの配列
 * @returns {Array<object>} - ソート後の配列
 */
function sortManeuvers(maneuvers) {
    const categoryOrder = data.getCoreData().maneuverCategories.map(c => c.name);

    maneuvers.sort((a, b) => {
        const maneuverA = a.data;
        const maneuverB = b.data;

        // 第1キー: カテゴリ順
        const categoryA = maneuverA.category === '行動値増加' ? '行動値' : maneuverA.category;
        const categoryB = maneuverB.category === '行動値増加' ? '行動値' : maneuverB.category;
        const indexA = categoryOrder.indexOf(categoryA);
        const indexB = categoryOrder.indexOf(categoryB);
        if (indexA !== indexB) {
            return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
        }

        // 第2キー: カスタム優先度
        const priorityA = getSortPriority(maneuverA);
        const priorityB = getSortPriority(maneuverB);
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }

        // 第3キー (フォールバック): ID順
        return (maneuverA.id || '').localeCompare(maneuverB.id || '');
    });

    return maneuvers;
}

/**
 * ターゲット選択モードを安全にキャンセルし、UIの状態をリセットする
 */
function cancelTargetSelection() {
    if (resolveTargetSelection) {
        resolveTargetSelection(null); // Promiseを解決して待機状態を解除
        resolveTargetSelection = null; // グローバル変数をリセット
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
        { id: '防御', label: '防御' },
        { id: '強化', label: '強化' },
        { id: '生贄', label: '生贄' },
        { id: 'すべて', label: 'すべて' }
    ];

    // --- 第一ブロック：ヘッダー ---
    const header = document.createElement('div');
    header.className = 'maneuver-menu-header';
    header.innerHTML = `
        <span class="header-icon" id="menuHeaderIcon">🪪</span>
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
 * 新しいマニューバ項目DOM要素を作成する
 * @param {object} maneuverObj - isUsableなどを含むマニューバオブジェクト
 * @param {object} char - 対象キャラクター
 * @returns {HTMLElement}
 */
function createManeuverItem(maneuverObj, char) {
    const maneuver = maneuverObj.data;
    const item = document.createElement('div');
    item.className = 'maneuver-item-new';

    if (!char.id) {
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
    passiveIconCol.className = 'item-icon-col item-passive-icon-col';
    
    if (maneuverObj.isActiveBuff || maneuver.timing === 'オート') {
        let isEffectActive = false;
        if (maneuverObj.isActiveBuff) {
            isEffectActive = true; 
        } else { // 'オート' タイミングの判定ロジックを強化
            const isDamaged = maneuverObj.isDamaged;
            
            // ハードコードされた例外（レギオンなど）はそのまま
            const alwaysOnSkills = ['レギオン', 'ホラー', '合流'];
            if (alwaysOnSkills.includes(maneuver.name)) {
                isEffectActive = true;
            } else if (maneuver.effects && maneuver.effects.length > 0) {
                
                // --- 2種類のオート効果を定義 ---

                // タイプ1: パーツが「損傷している時」にのみアクティブになる効果
                const conditionalRefs = [
                    'MODIFY_MAX_ACTION_VALUE_ON_DAMAGE', // 例:【リミッター】
                    'ATTACK_ON_DAMAGE'                   // 例:【ゾンビボム】
                ];

                // タイプ2: パーツが「損傷していない時」に常にアクティブな効果
                const unconditionalRefs = [
                    'APPLY_BUFF',
                    'REDUCE_MOVE_COST',
                    'NEGATE_STATUS_EFFECT',
                    'APPLY_PASSIVE_DEFENSE',
                    'PREVENT_INTERRUPTION',
                    'MODIFY_ATTACK_RESULT',
                    // 'APPLY_CONDITIONAL_BUFF',
                    'IMMUNITY',
                    'NEGATE_DAMAGE_EFFECT'
                ];

                // --- 判定 ---
                const hasConditionalEffect = maneuver.effects.some(e => conditionalRefs.includes(e.ref));
                if (hasConditionalEffect && isDamaged) {
                    isEffectActive = true;
                }

                // isEffectActiveがまだfalseで、パーツが損傷していない場合のみ、無条件効果をチェック
                if (!isEffectActive && !isDamaged) {
                    for (const effect of maneuver.effects) {
                        // ケースA: 特定エリアでのみ有効なバフ (例: 【地獄の住人】)
                        if (effect.ref === 'APPLY_BUFF' && effect.params?.duration === 'while_in_area') {
                            if (char.area === effect.params.area) {
                                isEffectActive = true;
                                break; // 条件を満たしたのでループを抜ける
                            }
                        } 
                        // ケースB: 上記以外の常に有効な効果 (例: 【カンフー】)
                        else if (unconditionalRefs.includes(effect.ref)) {
                            isEffectActive = true;
                            break; // 条件を満たしたのでループを抜ける
                        }
                    }
                }
            }
        }
        if (isEffectActive) {
            passiveIconCol.innerHTML = '<span class="maneuver-icon">💡</span>';
        }
    }

    const statusIconCol = document.createElement('div');
    statusIconCol.className = 'item-icon-col item-status-icon-col';

    if (maneuverObj.isActiveBuff) {
        statusIconCol.innerHTML = `<input type="checkbox" class="maneuver-checkbox" checked disabled>`;
    } else if (char && char.turnLimitedManeuvers && char.turnLimitedManeuvers.has(maneuver.name)) {
        const isChecked = char.usedManeuvers.has(maneuver.name);
        statusIconCol.innerHTML = `<input type="checkbox" class="maneuver-checkbox" ${isChecked ? 'checked' : ''} disabled>`;
    }

    const rightCol = document.createElement('div');
    rightCol.className = 'item-right-col';

    // ★★★ ここからが修正箇所です ★★★
    let maneuverNameHtml = `【${maneuver.name}】`;
    // リファレンスモード（char.idが存在しない）の場合の特殊なHTML構造
    if (!char.id) {
        const sourceHeaderText = getManeuverSourceText(maneuver);
        let sourceInfoText = '';
        if (maneuver.source) {
            sourceInfoText = maneuver.source.book || '不明';
            if (maneuver.source.page) {
                sourceInfoText += ` p${maneuver.source.page}`;
            }
        }
        
        let maneuverNameHtml = `【${maneuver.name}】`;

        let locationPrefix = '';
        if (maneuver.allowedLocations) {
            // allowedLocationsキーが存在すれば、その内容を表示
            const locationMap = { '頭': '頭', '腕': '腕', '胴': '胴', '脚': '脚', '任意': '任意' };
            locationPrefix = locationMap[maneuver.allowedLocations] || '他';

            maneuverNameHtml = `<span class="item-location-prefix">${locationPrefix}</span>` + maneuverNameHtml;
        // } else {
            // allowedLocationsキーがなければ「ｽｷﾙ」を表示
        //     locationPrefix = 'ｽｷﾙ';
        }
        // ★★★ ここからが今回の修正箇所です ★★★
        const descriptionText = maneuver.description_raw || '';
        const encodedDescription = encodeURIComponent(descriptionText);

        rightCol.innerHTML = `
            <div class="reference-item-container">
                <div class="ref-container-top">
                    <div class="ref-source-info">${sourceInfoText}</div>
                    <div class="ref-source-category">${sourceHeaderText}</div>
                </div>
                <div class="ref-container">
                    <div class="ref-maneuver-name">${maneuverNameHtml}</div>
                    <div class="ref-stats">《${maneuver.timing}/${maneuver.cost}/${maneuver.range}》</div>
                </div>
            </div>
            <div class="item-row-2 has-copy-button">
                <span>${descriptionText}</span>
                <button class="copy-description-btn" data-copy-text="${encodedDescription}" title="効果テキストをコピー">📋</button>
            </div>
            ${maneuver.flavor_text ? `<div class="item-row-3 item-flavor-text">${maneuver.flavor_text}</div>` : ''}
        `;
    } 
    // 通常のマニューバメニューの場合（従来通りの構造）
    else {
        rightCol.innerHTML = `
            <div class="item-row-1">
                <span class="item-name">【${maneuver.name}】</span>
                <span class="item-stats">《${maneuver.timing}/${maneuver.cost}/${maneuver.range}》</span>
            </div>
            <div class="item-row-2">${maneuver.description_raw || ''}</div>
        `;
    }
    item.appendChild(categoryCol);
    item.appendChild(passiveIconCol);
    item.appendChild(statusIconCol);
    item.appendChild(rightCol);

    // リファレンスモードでない（char.idが存在する）場合にのみ、カード表示のイベントリスナーを設定
    if (char.id) {
        item.addEventListener('mouseenter', () => ui.showManeuverCard(document.getElementById('maneuverMenu').getBoundingClientRect(), item.getBoundingClientRect(), char, maneuverObj));
        item.addEventListener('mouseleave', () => ui.hideManeuverCard());
    }
    
    // ★★★ コピーボタンにイベントリスナーを追加します ★★★
    const copyBtn = item.querySelector('.copy-description-btn');
    if (copyBtn) {
        copyBtn.onclick = (e) => {
            e.stopPropagation(); // アイテム全体のクリックイベントを発火させない
            const textToCopy = decodeURIComponent(e.currentTarget.dataset.copyText);
            navigator.clipboard.writeText(textToCopy).then(() => {
                ui.showToastNotification('コピーしました！', 1500);
            }).catch(err => {
                console.error('コピーに失敗しました', err);
                ui.showToastNotification('コピーに失敗しました', 1500);
            });
        };
    }

    if (!maneuverObj.isUsable) {
        item.classList.add('is-masked');
        if (maneuverObj.isDamaged) item.classList.add('is-damaged');
    } else {
        item.onclick = async (e) => {
            e.stopPropagation();
            
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
                // 防御可能なダメージのリストを取得 (未適用かつ射程内の味方のダメージのみ)
                const targetableDamages = battleLogic.getBattleState().damageQueue.filter(damage => {
                    if (!damage.applied && damage.target.type === char.type) {
                        return checkTargetAvailability(char, maneuver, [damage.target]).hasTarget;
                    }
                    return false;
                });

                if (targetableDamages.length === 0) {
                    ui.addLog("防御対象となるダメージがありません。");
                    return;
                }

                // モーダルを表示して防御対象を選択させる
                const selectedDamage = await new Promise(resolve => {
                    const menuItems = targetableDamages.map(damage => ({
                        label: `【${damage.sourceAction.sourceManeuver.name}】→ ${damage.target.name} (${damage.amount}点)`,
                        onClick: () => resolve(damage)
                    }));
                    ui.showModal({ 
                        title: `【${maneuver.name}】防御対象を選択`, 
                        items: menuItems,
                        onRender: (modal, closeFn) => {
                            // モーダル外のクリックでキャンセルできるようにする
                            modal.onclick = (event) => { if(event.target === modal) { closeFn(); resolve(null); } };
                        }
                    });
                });

                if (selectedDamage) {
                    // battleLogic.declareManeuver の第3引数に「防御されるキャラクター」を渡す
                    battleLogic.declareManeuver(char, maneuver, selectedDamage.target);
                }
                return; // この後の処理に進まないようにここで終了
            }

            const takeDamageEffect = maneuver.effects?.find(e => e.ref === 'TAKE_DAMAGE_FOR_ALLY');
            if (takeDamageEffect) {
                const targetableDamages = battleLogic.getBattleState().damageQueue.filter(damage => {
                    if (!damage.applied && damage.target.type === char.type && damage.target.id !== char.id) {
                        return checkTargetAvailability(char, maneuver, [damage.target]).hasTarget;
                    }
                    return false;
                });

                if (targetableDamages.length === 0) {
                    ui.addLog("庇う対象がいません。");
                    return;
                }

                const selectedDamage = await new Promise(resolve => {
                    const menuItems = targetableDamages.map(damage => ({
                        label: `【${damage.sourceAction.sourceManeuver.name}】→ ${damage.target.name} (${damage.amount}点)`,
                        onClick: () => resolve(damage)
                    }));
                    ui.showModal({ 
                        title: `【${maneuver.name}】庇う対象を選択`, 
                        items: menuItems,
                        onRender: (modal, closeFn) => {
                            modal.onclick = (event) => { if(event.target === modal) { closeFn(); resolve(null); } };
                        }
                    });
                });

                if (selectedDamage) {
                    battleLogic.declareManeuver(char, maneuver); 
                    battleLogic.redirectDamage(selectedDamage.id, char);
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
                // 妨害可能な移動宣言（未解決、敵、移動マニューバ、射程内）をリストアップ
                // ★ actionQueueとrapidQueueの両方を検索対象にする
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

                // モーダルの選択肢を作成
                const menuItems = targetableMoveDeclarations.map(targetDecl => {
                    let labelText = '';
                    const movePerformer = targetDecl.performer;
                    const moveManeuver = targetDecl.sourceManeuver;
                    const moveTarget = targetDecl.target;

                    // 他者を移動させるマニューバの場合 (例: ワイヤーリール)
                    if (moveTarget && moveTarget.id !== movePerformer.id) {
                        labelText = `${moveTarget.name}（${movePerformer.name}の【${moveManeuver.name}】）`;
                    } 
                    // 自身を移動させるマニューバの場合 (例: ほね)
                    else {
                        labelText = `${movePerformer.name}: 【${moveManeuver.name}】`;
                    }

                    return {
                        label: labelText,
                        onClick: () => {
                            // battleLogicに、妨害対象の「移動宣言オブジェクト」を渡して宣言する
                            battleLogic.declareManeuver(char, maneuver, targetDecl);
                        }
                    };
                });
                
                ui.showModal({ title: `【${maneuver.name}】の妨害対象を選択`, items: menuItems });
                return;
            }
            
            if (maneuver.tags.includes('移動')) {
                if (maneuver.range === '自身') {
                    buildMoveMenu(char, maneuver, e);
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
        };
    }
    return item;
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
                const allMemories = data.getMemoryFragmentData();
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
            ${char.regrets && char.regrets.length > 0
                ? char.regrets.map(r => {
                    const points = r.points || 0;
                    const symbols = '●'.repeat(points) + '○'.repeat(4 - points);
                    const allRegrets = data.getRegretData();
                    const regretMaster = Object.values(allRegrets).find(master => r.name.includes(master.name));
                    const madnessInfo = regretMaster ? `：${regretMaster.madnessName}：${regretMaster.madnessEffect}` : '';
                    return `<p>${r.name}：${points}点 ${symbols}${madnessInfo}</p>`;
                  }).join('')
                : '<p>（未練はありません）</p>'
            }
        </div>` : ''}
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
                        const isTreasure = part.id.includes('_treasure');
                        const maneuver = isTreasure 
                            ? data.getAllManeuvers()['TR-00'] 
                            : data.getManeuverByName(part.name);
                        const isBasic = maneuver?.id?.startsWith('BP-');
                        const type = isTreasure ? 'たからもの' : (isBasic ? '基本' : '強化');
                        if (!maneuver) {
                             return `<div class="part-list-item"><span class="type">[${type}]</span> <b>${part.name}</b></div>`;
                        }
                        const description = isTreasure ? maneuver.description_raw : (maneuver.description_raw || maneuver.effect);
                        return `<div class="part-list-item"><span class="type">[${type}]</span> <b>【${part.name}】</b>《${maneuver.timing}／${maneuver.cost}／${maneuver.range}》：${description}</div>`;
                    }).join('');
                    return `<div><h4>〈${locName}〉</h4>${partsHtml}</div>`;
                }).join('')}
            </div>
        </div>
    </div>
    `;

    ui.showModal({
        title: "ネクロニカ 人形設計図",
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
                            // character-managerに新しい更新関数を呼び出す
                            const updatedChar = charManager.updateCharacterFromReload(char.id, convertedData);
                            
                            ui.renderCharacterCards();
                            ui.updateMarkers();
                            ui.showToastNotification(`「${updatedChar.name}」を更新しました。`, 2000);

                            // モーダルを閉じて、更新された内容で再度開く
                            closeFn();
                            showCharacterSheetModal(updatedChar);
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
        }
    });
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
                    const count = (template.category === 'レギオン') ? 5 : 1;
                    for (let i = 0; i < count; i++) charManager.addCharacterFromTemplate(id, type);
                    ui.renderCharacterCards();
                    modal.classList.remove('is-visible');
                    ui.checkBattleStartCondition();
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
    ui.hideManeuverCard();
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

    (char.skills || []).forEach(skillName => {
        const maneuver = data.getManeuverByName(skillName);
        if (maneuver) allManeuvers.push({ data: maneuver, sourceType: 'skill', sourceName: skillName });
    });
    Object.values(char.partsStatus || {}).flat().forEach(part => {
        const maneuver = data.getManeuverByName(part.name);
        if (maneuver) allManeuvers.push({ data: maneuver, sourceType: 'part', sourceName: part.name, isDamaged: part.damaged });
    });

    const waitManeuver = data.getManeuverByName('待機');
    if (waitManeuver) allManeuvers.push({ data: waitManeuver, sourceType: 'common' });
    const arbitraryManeuver = data.getManeuverByName('任意');
    if (arbitraryManeuver) allManeuvers.push({ data: arbitraryManeuver, sourceType: 'common' });
    
    const isCharDamaged = Object.values(char.partsStatus).flat().some(part => part.damaged);

    // --- 現在アクティブなタイミングを判断 ---
    const activeIndicators = new Set();
    const { phase, activeActors, actionQueue, damageQueue } = battleState;

    if (activeActors.some(a => a.id === char.id)) {
        // このキャラクターが行動権を持つ場合、アクションタイミングに加えて
        // ラピッドタイミングも有効化する
        activeIndicators.add('アクション');
        activeIndicators.add('ラピッド');
    }
    
    const isActionPhaseOver = activeActors.length === 0;
    if (isActionPhaseOver) {
        activeIndicators.add('ラピッド');
        if (actionQueue.some(a => !a.checked)) {
            activeIndicators.add('ジャッジ');
        }
    }
    if (phase === 'DAMAGE_RESOLUTION' || (actionQueue.every(a => a.checked) && damageQueue.some(d => !d.applied))) {
        activeIndicators.add('ダメージ');
    }

    if (actionQueue.some(a => !a.checked && a.performer.id === char.id)) {
        activeIndicators.add('ラピッド');
        activeIndicators.add('ジャッジ');
    }

    return allManeuvers.map(m => {
        const maneuver = m.data;
        let isUsable = true;

        // --- 1. 基本的な使用可否チェック ---
        if (char.actionValue <= 0 && maneuver.timing !== 'オート') isUsable = false;
        if (m.isDamaged) isUsable = false;
        if (char.usedManeuvers.has(maneuver.name) && maneuver.usageLimit !== false) isUsable = false;
        
        if (maneuver.timing !== 'オート' && !activeIndicators.has(maneuver.timing)) {
            isUsable = false;
        }
        
        // --- 2. マニューバ固有の有効化条件チェック ---
        if (isUsable && maneuver.effects?.some(e => e.params?.condition === 'is_damaged') && !isCharDamaged) {
            isUsable = false;
        }
        
        // --- 3. ジャッジタイミングの厳格な判定 ---
        if (isUsable && maneuver.timing === 'ジャッジ') {
            const isSupport = maneuver.category === '支援' || maneuver.tags.includes('支援');
            const isHindrance = maneuver.category === '妨害' || maneuver.tags.includes('妨害');
            let canUse = false;

            if (isSupport) {
                if (maneuver.range === '自身') {
                    if (battleState.actionQueue.some(d => !d.checked && d.performer.id === char.id && d.sourceManeuver.tags.includes('攻撃'))) {
                        canUse = true;
                    }
                } else {
                    const isSelfAttacking = battleState.actionQueue.some(d => !d.checked && d.performer.id === char.id && d.sourceManeuver.tags.includes('攻撃'));
                    if (isSelfAttacking) {
                        canUse = true;
                    } else {
                        const attackingAllies = battleState.actionQueue
                            .filter(d => !d.checked && d.performer.type === char.type && d.performer.id !== char.id && d.sourceManeuver.tags.includes('攻撃'))
                            .map(d => d.performer);
                        if (attackingAllies.length > 0) {
                            if (checkTargetAvailability(char, maneuver, attackingAllies).hasTarget) {
                                canUse = true;
                            }
                        }
                    }
                }
            }
            if (!canUse && isHindrance) {
                if (maneuver.range === '自身') {
                     if (battleState.actionQueue.some(d => !d.checked && d.target?.id === char.id && d.sourceManeuver.tags.includes('攻撃'))) {
                        canUse = true;
                    }
                } else {
                    if (battleState.actionQueue.some(d => !d.checked && d.performer.type !== char.type && d.sourceManeuver.tags.includes('攻撃') && checkTargetAvailability(char, maneuver, [d.performer]).hasTarget)) {
                        canUse = true;
                    }
                }
            }
            if (!canUse) isUsable = false;
        }

        // --- 4. ダメージタイミングの厳格な判定 ---
        if (isUsable && maneuver.timing === 'ダメージ') {
            let canUseInDamagePhase = false;
            const isDefense = maneuver.category === '防御' || maneuver.tags.includes('防御');
            if (isDefense) {
                if (maneuver.range === '自身') {
                    if (battleState.damageQueue.some(d => !d.applied && d.target.id === char.id)) {
                        canUseInDamagePhase = true;
                    }
                } else {
                    if (battleState.damageQueue.some(d => !d.applied && d.target.type === char.type && checkTargetAvailability(char, maneuver, [d.target]).hasTarget)) {
                        canUseInDamagePhase = true;
                    }
                }
            }
            const isDamageIncrease = maneuver.tags.includes('強化');
            if (!canUseInDamagePhase && isDamageIncrease && maneuver.range === '自身') {
                if (battleState.damageQueue.some(d => !d.applied && d.sourceAction.performer.id === char.id)) {
                    canUseInDamagePhase = true;
                }
            }
            const isTakeDamage = maneuver.effects?.some(e => e.ref === 'TAKE_DAMAGE_FOR_ALLY');
            if (!canUseInDamagePhase && isTakeDamage) {
                if (battleState.damageQueue.some(d => !d.applied && d.target.type === char.type && d.target.id !== char.id && checkTargetAvailability(char, maneuver, [d.target]).hasTarget)) {
                    canUseInDamagePhase = true;
                }
            }
            if (!canUseInDamagePhase) {
                isUsable = false;
            }
        }

        // --- 4.5. 移動妨害タイミングの厳格な判定 ---
        if (isUsable && maneuver.tags && maneuver.tags.includes('移動妨害')) {
            let canDebuff = false;
            
            const allMoveCandidates = [
                ...battleState.actionQueue,
                ...battleState.rapidQueue
            ];

            for (const declaration of allMoveCandidates) {
                if (!declaration.checked &&
                    declaration.performer.type !== char.type &&
                    declaration.sourceManeuver.tags.includes('移動'))
                {
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
        
        // --- 5. 汎用的なターゲット存在チェック ---
        if (isUsable && maneuver.timing !== 'オート' && maneuver.timing !== 'ジャッジ') {
            if (!checkTargetAvailability(char, maneuver).hasTarget) {
                isUsable = false;
            }
        }

        // --- 6. 最終的なマスク処理 ---
        if (maneuver.timing === 'オート') {
            isUsable = false;
        }

        return { ...m, isUsable };
    });
}

/**
 * マニューバカードに表示する箇所のテキストを取得する
 * @param {object} maneuver - マニューバのマスターデータ
 * @param {object} character - 対象キャラクター
 * @returns {string} - 表示用のテキスト (例: "頭")
 */

function getPartLocationText(maneuver, character) {
    if (!character || !character.partsStatus) return '';
    for (const location in character.partsStatus) {
        if (character.partsStatus[location].some(part => part.name === maneuver.name)) {
            const locationMap = { head: '頭', arms: '腕', torso: '胴', legs: '脚', body: '他' };
            return locationMap[location] || '';
        }
    }
    return '';
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

                        charManagerInstance.addCharacterFromObject(convertedData, type);
                        ui.renderCharacterCards();
                        ui.checkBattleStartCondition();
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
    const actorAreaIndex = rows.indexOf(actor.area);
    const range = maneuver.range;
    if (typeof range !== 'string' && typeof range !== 'number') return [];
    const rangeParts = range.toString().split('～');
    const minRange = parseInt(rangeParts[0], 10);
    const maxRange = parseInt(rangeParts[1] || rangeParts[0], 10);
    if (isNaN(minRange)) return [];

    return state.actionQueue.filter(decl => {
        if (decl.checked) return false;
        const performer = decl.performer;
        const targetAreaIndex = rows.indexOf(performer.area);
        if (targetAreaIndex === -1) return false;
        
        const distance = Math.abs(actorAreaIndex - targetAreaIndex);
        if (distance < minRange || distance > maxRange) return false;
        
        // 支援マニューバの場合、宣言者が味方である必要がある
        if (maneuver.category === '支援' && actor.type !== performer.type) return false;
        // 妨害マニューバの場合、宣言者が敵である必要がある
        if (maneuver.category === '妨害' && actor.type === performer.type) return false;
        
        return true;
    });
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
             ui.addLog("> 射程内に有効なターゲットがいません。");
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
export function showAttackConfirmationModal(performer, target, maneuver, index) {
    const state = battleLogic.getBattleState();
    const targetDeclaration = state.actionQueue[index];
    if (!targetDeclaration) return;

    let totalBonus = 0;
    const supportSources = [];
    const hindranceSources = [];

    const attackEffect = maneuver.effects.find(e => e.ref === 'GENERIC_ATTACK');
    
    if (attackEffect && attackEffect.params && attackEffect.params.attack_bonus) {
        const bonus = parseInt(attackEffect.params.attack_bonus, 10);
        if (!isNaN(bonus)) {
            totalBonus += bonus;
            supportSources.push(`【${maneuver.name}】自体 (${bonus > 0 ? '+' : ''}${bonus})`);
        }
    }

    const performerManeuvers = getCharacterManeuvers(performer);
    performerManeuvers.filter(m => m.data.timing === 'オート' && !m.isDamaged).forEach(m => {
        if (m.data.effects) {
            m.data.effects.forEach(effect => {
                if (effect.ref === 'APPLY_BUFF' && effect.params.stat === 'attackCheckBonus') {
                    const bonus = effect.params.value || 0;
                    totalBonus += bonus;
                    supportSources.push(`${performer.name}の【${m.data.name}】(${bonus > 0 ? '+' : ''}${bonus})`);
                }
            });
        }
    });

    // c) 実行者(performer)のアクティブなバフ効果
    if (performer.activeBuffs && performer.activeBuffs.length > 0) {
        performer.activeBuffs.forEach(buff => {
            if (buff.stat === 'attackCheckBonus') {
                const bonus = buff.value || 0;
                totalBonus += bonus;
                supportSources.push(`${performer.name}の【${buff.source}】 (+${bonus})`);
            }
        });
    }

    // 3. 実際に宣言されたジャッジマニューバを計算
    state.judgeQueue.forEach(judgeDecl => {
        const judgeManeuver = judgeDecl.sourceManeuver;
        const judgeEffect = judgeManeuver.effects.find(e => e.ref === 'GENERIC_JUDGE_MOD');

        if (judgeEffect) {
            let shouldApply = false;
            // ケースA: 他者のアクションに介入するジャッジ（支援・妨害）
            if (judgeDecl.judgeTarget && judgeDecl.judgeTarget.id === targetDeclaration.id) {
                shouldApply = true;
            }
            // ケースB: 自身の攻撃判定に介入するジャッジ（自己支援）
            else if ((judgeEffect.params.target === 'self_roll' || judgeEffect.params.target === 'any_roll') && judgeDecl.performer.id === performer.id) {
                shouldApply = true;
            }

            if (shouldApply) {
                const value = judgeEffect.params.value || 0;
                const sourceName = `${judgeDecl.performer.name}の【${judgeManeuver.name}】`;
                if (value > 0) {
                    totalBonus += value;
                    supportSources.push(`${sourceName} (+${value})`);
                } else if (value < 0) {
                    totalBonus += value;
                    hindranceSources.push(`${sourceName} (${value})`);
                }
            }
        }
    });
    
    const supportHtml = supportSources.length > 0
        ? supportSources.map(s => `<div class="modifier-item">${s}</div>`).join('')
        : `<div class="modifier-none">- なし -</div>`;
    
    const hindranceHtml = hindranceSources.length > 0
        ? hindranceSources.map(s => `<div class="modifier-item">${s}</div>`).join('')
        : `<div class="modifier-none">- なし -</div>`;

    const bonusText = totalBonus > 0 ? `+${totalBonus}` : (totalBonus < 0 ? `${totalBonus}` : '');

    const bodyHtml = `
        <div class="attack-confirm-summary">
            ${performer.name}【${maneuver.name}】 → ${target.name}
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《支援》</div>
            <div class="modifier-list">${supportHtml}</div>
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《妨害》</div>
            <div class="modifier-list">${hindranceHtml}</div>
        </div>
    `;

    const footerHtml = `<button id="executeDiceRollBtn" class="welcome-modal-close-btn">🎲 NA${bonusText} 🎲</button>`;

    ui.showModal({
        title: 'ジャッジ',
        bodyHtml,
        footerHtml,
        onRender: (modal, closeFn) => {
            modal.querySelector('#executeDiceRollBtn').onclick = () => {
                // battleLogic.resolveActionByIndex は非同期 (async) なので、完了を待つ
                battleLogic.resolveActionByIndex(index, totalBonus); // .then(() => {
                    // 状態変更が完了した後に、UI全体を更新する
                    // ui.updateAllUI();
                // });
                closeFn();
            };
        }
    });
}

// --- リファレンス機能 ---

/**
 * 全マニューバを検索・閲覧できるリファレンスUIを構築する
 */
export function buildReferenceMenu() {
    closeAllMenus();
    const menu = document.getElementById('maneuverMenu');
    menu.innerHTML = '';
    menu.classList.add('is-reference-mode');

    const filterGroups = {
        'カテゴリ': ['移動', "配置", '攻撃', '防御', '支援', '妨害', '強化', '修復', '補助', 'コスト', '行動値', '生贄', '対話', '狂気点', '脆弱'],
        '区分1': ['ポジション', 'クラススキル', '特化スキル', '基本パーツ', '強化パーツ', '手駒専用'],
        '区分2': ['アリス', 'ホリック', 'オートマトン', 'ジャンク', 'コート', 'ソロリティ', 'ステーシー', 'タナトス', 'ゴシック', 'レクイエム', 'バロック', 'ロマネスク', 'サイケデリック', '武装', '変異', '改造'],
        '攻撃': ['肉弾攻撃', '白兵攻撃', '射撃攻撃', '砲撃攻撃', '精神攻撃'],
        '効果': ['移動', '支援', '妨害', '防御', '移動妨害', '転倒', '切断', '爆発', '全体攻撃', '連撃'],
        '悪意': ['0.5', '1', '1.5', '2', '3', '4', 'その他'],
        '箇所': ['頭', '腕', '胴', '脚', '任意'],
        'タイミング': ['オート', 'アクション', 'ジャッジ', 'ダメージ', 'ラピッド'],
        'コスト': ['なし', '0', '1', '2', '3', '4', 'その他'],
        '最大射程': ['なし', '自身', '0', '1', '2', '3', 'その他']
    };

    const header = document.createElement('div');
    header.className = 'maneuver-menu-header';
    header.innerHTML = `
        <span class="header-icon">📖</span>
        <span class="header-title">全マニューバリファレンス</span>
        <button class="header-close-btn">&times;</button>
    `;
    menu.appendChild(header);
    header.querySelector('.header-close-btn').onclick = closeAllMenus;

    const accordionContainer = document.createElement('div');
    accordionContainer.className = 'accordion-container';
    menu.appendChild(accordionContainer);

    // ★変更点1: accordionHeader を renderReferenceList からアクセスできるよう、ここで宣言します。
    const accordionHeader = document.createElement('div');
    accordionHeader.className = 'accordion-header';
    accordionHeader.innerHTML = `
        <span class="accordion-title-static">フィルタ</span>
        <span class="accordion-title-dynamic"></span>
    `;
    accordionContainer.appendChild(accordionHeader);

    const filterContainer = document.createElement('div');
    filterContainer.className = 'reference-filter-container accordion-content';
    accordionContainer.appendChild(filterContainer);

    accordionHeader.onclick = () => {
        accordionContainer.classList.toggle('is-closed');
    };

    const listContainer = document.createElement('div');
    listContainer.className = 'maneuver-menu-list-container';
    menu.appendChild(listContainer);

    if (Object.keys(activeReferenceFilters).length === 0) {
        Object.keys(filterGroups).forEach(groupName => {
            activeReferenceFilters[groupName] = [];
        });
    }

    const renderReferenceList = () => {
        listContainer.innerHTML = '';
        const allManeuversSource = data.getAllManeuvers();
        // isUsable: true を明示的に追加してオブジェクトを生成する
        let allManeuvers = Object.keys(allManeuversSource).map(id => {
            return {
                data: { id: id, ...allManeuversSource[id] },
                isUsable: true // リファレンスでは常に見かけ上「使用可能」にする
            };
        }).filter(m => m.data && m.data.name);

        let filtered = filterManeuversForReference(allManeuvers, activeReferenceFilters);
        const itemCount = filtered.length;
        
        const dynamicTitleSpan = accordionHeader.querySelector('.accordion-title-dynamic');
        if (dynamicTitleSpan) {
            let summaryText = `（${itemCount}件）`;
            let hasActiveFilter = false;

            for (const groupName in activeReferenceFilters) {
                const activeFilters = activeReferenceFilters[groupName];
                if (activeFilters.length > 0) {
                    hasActiveFilter = true;
                    summaryText += `<span class="filter-summary-group"> <span class="filter-summary-label">${groupName}</span>${activeFilters.join(' ')}</span>`;
                }
            }
            
            // アクティブなフィルターがない場合は件数のみ表示
            if (!hasActiveFilter) {
                dynamicTitleSpan.innerHTML = `（${itemCount}件）`;
            } else {
                dynamicTitleSpan.innerHTML = summaryText;
            }
        }

        filtered = sortManeuvers(filtered);

        if (filtered.length === 0) {
            listContainer.innerHTML = `<div class="maneuver-item is-empty">条件に一致するマニューバはありません</div>`;
        } else {
            filtered.forEach(maneuverObj => {
                const item = createManeuverItem(maneuverObj, {});
                item.onclick = null;
                listContainer.appendChild(item);
            });
        }
    };

    for (const groupName in filterGroups) {
        // ... (フィルターボタンの生成処理は変更なし) ...
        const groupDiv = document.createElement('div');
        groupDiv.className = 'filter-group';
        groupDiv.innerHTML = `<h4 class="filter-group-title">${groupName}</h4>`;
        
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'filter-buttons';
        
        filterGroups[groupName].forEach(filterName => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = filterName;
            
            if (activeReferenceFilters[groupName].includes(filterName)) {
                btn.classList.add('is-active');
            }
            
            btn.onclick = () => {
                btn.classList.toggle('is-active');
                const index = activeReferenceFilters[groupName].indexOf(filterName);
                if (index > -1) {
                    activeReferenceFilters[groupName].splice(index, 1);
                } else {
                    activeReferenceFilters[groupName].push(filterName);
                }
                renderReferenceList();
            };
            buttonsDiv.appendChild(btn);
        });
        groupDiv.appendChild(buttonsDiv);
        filterContainer.appendChild(groupDiv);
    }

    renderReferenceList();
    menu.classList.add('is-visible');
    setTimeout(() => { document.addEventListener('click', handleOutsideClick); }, 0);
}

/**
 * リファレンス用に全マニューバをフィルターする
 * @param {Array<object>} maneuvers - 全マニューバの配列
 * @param {object} filters - アクティブなフィルターのオブジェクト
 * @returns {Array<object>} フィルター後のマニューバ配列
 */
function filterManeuversForReference(maneuvers, filters) {
    const coreData = data.getCoreData();
    const positions = coreData.positions;
    const classes = coreData.classes;

    return maneuvers.filter(mObj => { // ★ ラッパーオブジェクト(mObj)で受け取る
        const maneuver = mObj.data; // ★ 実際のデータは .data プロパティから取得
        for (const groupName in filters) {
            const activeInGroup = filters[groupName];
            if (activeInGroup.length === 0) continue;

            let matchInGroup = activeInGroup.some(filterName =>
                checkManeuverMatch(maneuver, groupName, filterName, { positions, classes })
            );

            if (!matchInGroup) {
                return false;
            }
        }
        return true;
    });
}

/**
 * 特定のマニューバがフィルター条件に一致するかを判定するヘルパー関数
 */
function checkManeuverMatch(maneuver, groupName, filterName, masterData) {
    const id = maneuver.id || '';
    const prefix = id.substring(0, 2);
    const typePrefix = id.substring(0, 1);

    switch (groupName) {
        case 'カテゴリ':
            return maneuver.category === filterName || (maneuver.tags && maneuver.tags.includes(filterName));

        case '区分1':
            switch (filterName) {
                case 'ポジション': return !!masterData.positions[prefix];
                case 'クラススキル': return !!masterData.classes[prefix] && !id.endsWith('-SP');
                case '特化スキル': return !!masterData.classes[prefix] && id.endsWith('-SP');
                case '基本パーツ': return prefix === 'BP';
                case '強化パーツ': return ['A', 'M', 'R'].includes(typePrefix) && !isNaN(parseInt(id.substring(1, 2), 10));
                case '手駒専用': return prefix === 'PS' || typePrefix === 'P';
                default: return false;
            }

        case '区分2': {
            // 1. ポジションスキルのチェック
            const posKey = Object.keys(masterData.positions).find(k => masterData.positions[k].name === filterName);
            if (posKey && prefix === posKey) {
                return true;
            }
            // 2. クラススキルのチェック
            const classKey = Object.keys(masterData.classes).find(k => masterData.classes[k].name === filterName);
            if (classKey && prefix === classKey) {
                return true;
            }
            // 3. 強化パーツのチェック
            const typeMap = { '武装': 'A', '変異': 'M', '改造': 'R' };
            if (typePrefix === typeMap[filterName]) {
                return true;
            }
            // どれにも当てはまらない場合は false
            return false;
        }
        case '攻撃':
            return maneuver.category === filterName || (maneuver.tags && maneuver.tags.includes(filterName));

        case '効果':
            return maneuver.category === filterName || (maneuver.tags && maneuver.tags.includes(filterName));

        case '箇所':
            return maneuver.allowedLocations === filterName;

        case 'タイミング':
            return maneuver.timing === filterName;

        case 'コスト': {
            const cost = String(maneuver.cost);
            if (filterName === 'その他') {
                const specificCosts = ['なし', '0', '1', '2', '3', '4'];
                return !specificCosts.includes(cost);
            }
            return cost === filterName;
        }
        case '最大射程': {
            const rangeStr = String(maneuver.range || 'なし');
            if (filterName === 'なし') return rangeStr === 'なし';
            if (filterName === '自身') return rangeStr === '自身';

            const rangeParts = rangeStr.split('～');
            const maxRange = parseInt(rangeParts[rangeParts.length - 1], 10);

            if (filterName === 'その他') {
                const isSpecific = ['なし', '自身'].includes(rangeStr);
                return !isSpecific && (isNaN(maxRange) || maxRange > 3);
            }

            const numFilter = parseInt(filterName, 10);
            return !isNaN(maxRange) && maxRange === numFilter;
        }
        case '悪意': {
            const malice = maneuver.maliceLevel;
            if (malice === null || malice === undefined) return false;
            
            if (filterName === 'その他') {
                const specificMalice = [0.5, 1, 1.5, 2, 3, 4];
                return !specificMalice.includes(malice);
            }
            return String(malice) === filterName;
        }
        default:
            return false;
    }
}