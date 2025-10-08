/**
 * @file menu-builder.js
 * @description メニューやモーダルなど、動的なUIの構築を担当するモジュール
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.11.52"; // バージョンを更新

import * as data from './data-handler.js';
import * as charManager from './character-manager.js';
import * as battleLogic from './battle-logic.js';
import * as ui from './ui-manager.js';
import { convertVampireBloodSheet } from './character-converter.js';
import { getCategoryClass } from './ui-helpers.js';
import { getLocalStorageUsage, clearLocalImageCache } from './settings-manager.js';
import * as stateManager from './state-manager.js';

// --- モジュール内変数 ---
let menuOpener = null;
const rows = ["奈落", "地獄", "煉獄", "花園", "楽園"];
let resolveTargetSelection = null;
let activeFilter = '宣言';

let cleanupTargetSelection = () => {};

const handleOutsideClick = (e) => {
    const menu = document.getElementById('maneuverMenu');
    
    if (menu && !menu.contains(e.target) && menuOpener && !menuOpener.contains(e.target)) {
        closeAllMenus();
    }

    // --- ターゲット選択中に、ターゲット外をクリックしたらキャンセルする処理 ---
    if (resolveTargetSelection) {
        if (!e.target.closest('.target-selectable')) {
            // ★ resolve(null) を直接呼び出すことで、selectTargetForAction内の後片付けが実行される
            resolveTargetSelection(null);
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
    // もし現在ターゲット選択中であれば、それをキャンセルして終了させる
    // resolveTargetSelection は selectTargetForAction の中で定義される Promise の resolve 関数
    if (resolveTargetSelection) {
        // resolve(null) を呼び出すことで、キャンセル処理が実行され、状態がリセットされる
        resolveTargetSelection(null);
        // resolveTargetSelection を手動でリセット
        resolveTargetSelection = null;
    }

    closeAllMenus();
    menuOpener = element;
    const menu = document.getElementById('maneuverMenu');
    menu.innerHTML = ''; // メニューをクリア

    // --- フィルタリングボタンの定義 ---
    const filters = [
        { id: '宣言', label: '宣言' },
        { id: 'スキル', label: 'スキル' },
        { id: 'パーツ', label: 'パーツ' },
        { id: 'バフ', label: 'バフ' },
        { id: '移動', label: '移動' },
        { id: '攻撃', label: '攻撃' },
        { id: '支援', label: '支援' },
        { id: '妨害', label: '妨害' },
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
        listContainer.innerHTML = ''; // リストをクリア
        const allManeuvers = getCharacterManeuvers(char);
        
        const filteredManeuvers = filterManeuvers(allManeuvers, activeFilter, char);
        // 1. フィルターに基づいてマニューバを絞り込む

        // ソート処理
        if (activeFilter !== 'パーツ') { // 「パーツ」タブは部位別表示なのでソートしない
            // core-data.json からカテゴリの正しい順序を取得
            const categoryOrder = data.getCoreData().maneuverCategories.map(c => c.name);

            filteredManeuvers.sort((a, b) => {
                // "行動値増加" を "行動値" として扱うための正規化
                const categoryA = a.data.category === '行動値増加' ? '行動値' : a.data.category;
                const categoryB = b.data.category === '行動値増加' ? '行動値' : b.data.category;

                let indexA = categoryOrder.indexOf(categoryA);
                if (indexA === -1) indexA = categoryOrder.length; // 不明なカテゴリは末尾へ

                let indexB = categoryOrder.indexOf(categoryB);
                if (indexB === -1) indexB = categoryOrder.length;

                // 第一ソートキー：カテゴリの順序
                if (indexA !== indexB) {
                    return indexA - indexB;
                }

                // 第二ソートキー：マニューバ名 (アルファベット/五十音順)
                return a.data.name.localeCompare(b.data.name);
            });
        }

        // 2. 絞り込んだマニューバを描画
        if (activeFilter === 'パーツ') {
            // 「パーツ」タブ専用の描画
            renderPartsView(filteredManeuvers, char);
        } else {
            // それ以外のタブの描画
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
// menu-builder.js の createManeuverItem 関数を以下の内容に置き換えてください

function createManeuverItem(maneuverObj, char) {
    const maneuver = maneuverObj.data;
    const item = document.createElement('div');
    item.className = 'maneuver-item-new';

    // --- 列1：カテゴリ列 --- (変更なし)
    const categoryCol = document.createElement('div');
    categoryCol.className = 'item-category-col';
    const categoryName = maneuver.category || 'その他';
    const categoryClass = `category-color-${getCategoryClass(categoryName)}`;
    item.classList.add(categoryClass.replace('bg-', ''));
    categoryCol.classList.add(categoryClass);
    categoryCol.innerHTML = `<span>${categoryName}</span>`;

    // ★★★ ここからアイコン判定ロジックを修正 ★★★

    // --- 列2：永続効果アイコン列 (💡) ---
    const passiveIconCol = document.createElement('div');
    passiveIconCol.className = 'item-icon-col item-passive-icon-col';
    
    // 【条件の修正】オートタイミングの永続効果、または、アクティブなバフ効果の場合に💡を表示
    if (maneuverObj.isActiveBuff || maneuver.timing === 'オート') {
        let isEffectActive = false;
        if (maneuverObj.isActiveBuff) {
            // 【集中】のような一時バフは常に効果発揮中なので true
            isEffectActive = true; 
        } else {
            // 【死神】のような永続オート効果の判定（既存のロジック）
            const isDamaged = maneuverObj.isDamaged;
            const alwaysOnSkills = ['レギオン', 'ホラー', '合流'];
            if (alwaysOnSkills.includes(maneuver.name)) {
                isEffectActive = true;
            } else if (maneuver.effects && maneuver.effects.length > 0) {
                const hasConditionalEffect = maneuver.effects.some(e => e.ref === 'MODIFY_MAX_ACTION_VALUE_ON_DAMAGE');
                if (hasConditionalEffect) {
                    if (isDamaged) isEffectActive = true;
                } else {
                    const hasUnconditionalEffect = maneuver.effects.some(e => e.ref === 'APPLY_BUFF' || e.ref === 'REDUCE_MOVE_COST');
                    if (hasUnconditionalEffect && !isDamaged) isEffectActive = true;
                }
            }
        }

        if (isEffectActive) {
            passiveIconCol.innerHTML = '<span class="maneuver-icon">💡</span>';
        }
    }

    /// --- 列3：使用済み/適用中アイコン列 (✅) ---
    const statusIconCol = document.createElement('div');
    statusIconCol.className = 'item-icon-col item-status-icon-col';

    if (maneuverObj.isActiveBuff) {
        // アクティブなバフは、常にチェック済みのボックスを表示
        statusIconCol.innerHTML = `<input type="checkbox" class="maneuver-checkbox" checked disabled>`;
    } else if (char.turnLimitedManeuvers.has(maneuver.name)) {
        // ターン制限マニューバは、常にボックスを表示し、使用状況に応じてチェック状態を切り替える
        const isChecked = char.usedManeuvers.has(maneuver.name);
        statusIconCol.innerHTML = `<input type="checkbox" class="maneuver-checkbox" ${isChecked ? 'checked' : ''} disabled>`;
    }

    // --- 列4：本文列 --- (変更なし)
    const rightCol = document.createElement('div');
    rightCol.className = 'item-right-col';
    rightCol.innerHTML = `
        <div class="item-row-1">
            <span class="item-name">【${maneuver.name}】</span>
            <span class="item-stats">《${maneuver.timing}/${maneuver.cost}/${maneuver.range}》</span>
        </div>
        <div class="item-row-2">${maneuver.description_raw || ''}</div>
    `;

    // 各列をitemに追加 (変更なし)
    item.appendChild(categoryCol);
    item.appendChild(passiveIconCol);
    item.appendChild(statusIconCol);
    item.appendChild(rightCol);

    // --- (以降のイベントリスナー設定やスタイリングは変更なし) ---
    item.addEventListener('mouseenter', () => ui.showManeuverCard(document.getElementById('maneuverMenu').getBoundingClientRect(), item.getBoundingClientRect(), char, maneuverObj));
    item.addEventListener('mouseleave', () => ui.hideManeuverCard());
    if (!maneuverObj.isUsable) {
        item.classList.add('is-masked');
        if (maneuverObj.isDamaged) item.classList.add('is-damaged');
    } else {
        item.onclick = async (e) => {
            e.stopPropagation();
            // ★★★ 攻撃マニューバの場合は、メニューを閉じる処理をここで行う ★★★
            if (maneuver.tags.includes('攻撃')) {
                closeAllMenus();
            } else {
                 setTimeout(() => closeAllMenus(), 0); // 他のマニューバは宣言後に閉じる
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

           // --- 【庇う】のような効果を持つマニューバの特別処理 ---
            const takeDamageEffect = maneuver.effects?.find(e => e.ref === 'TAKE_DAMAGE_FOR_ALLY');
            if (takeDamageEffect) {
                // ① 庇う対象となるダメージをリストアップ
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

                // ② 対象選択フォームを表示
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

                // ③ 選択されたら、まず宣言を行い、その後にダメージを付け替える
                if (selectedDamage) {
                    // declareManeuver はコスト支払いとログ出力を担当する
                    battleLogic.declareManeuver(char, maneuver); 
                    // redirectDamage はダメージキューの書き換えとUI更新を担当する
                    battleLogic.redirectDamage(selectedDamage.id, char);
                }
                return; // 処理を終了
            }


            // --- ジャッジ（支援・妨害）の特別処理 ---
            const isInterruptJudge = maneuver.timing === 'ジャッジ' && maneuver.range !== '自身';
            if (isInterruptJudge) {
                // 妨害/支援の対象となるアクション宣言をリストアップ
                const targetableDeclarations = getTargetableDeclarations(char, maneuver);

                if (targetableDeclarations.length === 0) {
                    ui.addLog("妨害/支援の対象となるアクションがありません。");
                    return;
                }

                // 選択モーダルを表示
                const menuItems = targetableDeclarations.map(targetDecl => ({
                    label: `${targetDecl.performer.name}: 【${targetDecl.sourceManeuver.name}】${targetDecl.target ? ` → ${targetDecl.target.name}` : ''}`,
                    onClick: () => {
                        // battleLogic.declareManeuver に4番目の引数として対象のアクション宣言を渡す
                        battleLogic.declareManeuver(char, maneuver, null, targetDecl);
                    }
                }));
                ui.showModal({ title: `【${maneuver.name}】の対象を選択`, items: menuItems });
                return;
            }
            
            if (maneuver.tags.includes('移動')) {
                // 射程が「自身」の場合は、従来の移動先選択メニューを表示
                if (maneuver.range === '自身') {
                    buildMoveMenu(char, maneuver, e);
                } 
                // 射程が「自身」以外の場合は、ターゲット選択 -> 方向選択フローに移行
                else {
                    const target = await selectTargetForAction(char, maneuver, handleOutsideClick);
                    if (target) {
                        // ターゲット選択後に方向を選択するモーダルを表示
                        const direction = await new Promise(resolve => {
                            ui.showModal({
                                title: `【${maneuver.name}】移動方向を選択`,
                                items: [
                                    { label: '奈落方向へ', onClick: () => resolve('奈落方向') },
                                    { label: '楽園方向へ', onClick: () => resolve('楽園方向') }
                                ],
                                onRender: (modal) => {
                                    // モーダル外クリックでキャンセル
                                    modal.onclick = (event) => { if (event.target === modal) resolve(null); };
                                }
                            });
                        });
                        
                        if (direction) {
                            // maneuverオブジェクトに移動方向を一時的に格納して宣言
                            const modifiedManeuver = { ...maneuver, targetArea: direction };
                            battleLogic.declareManeuver(char, modifiedManeuver, target);
                        }
                    }
                }
                return;
            }

            if (maneuver.tags.includes('攻撃')) {
                // ★★★ 修正箇所: 第3引数として handleOutsideClick を渡す ★★★
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
        case '移動':
            results = maneuvers.filter(m => m.data.tags.includes('移動') && !excludedNames.includes(m.data.name));
            break;
        case '攻撃':
            results = maneuvers.filter(m => m.data.tags.includes('攻撃') && !excludedNames.includes(m.data.name));
            break;
        case '支援':
            results = maneuvers.filter(m => (m.data.tags.includes('支援') || m.data.tags.includes('強化')) && !excludedNames.includes(m.data.name));
            break;
        case '妨害':
            results = maneuvers.filter(m => (m.data.tags.includes('妨害') || m.data.tags.includes('脆弱')) && !excludedNames.includes(m.data.name));
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
        return results.filter(m => 
            m.isActiveBuff || // 種類を問わず、アクティブなバフはすべて表示
            (m.data.timing === 'オート' && m.data.effects && m.data.effects.some(e => e.ref === 'APPLY_BUFF' || e.ref === 'REDUCE_MOVE_COST'))
        );
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

    const areaClassMap = { '奈落': 'naraku', '地獄': 'jigoku', '煉獄': 'rengoku', '花園': 'hanazono', '楽園': 'rakuen' };
    const menuItems = [];

    // --- 1. 手駒（サヴァント）用の逃走ボタンを定義 ---
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
    
    // --- 2. ドール用の逃走ボタンを定義 ---
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

    // 移動マニューバであれば、逃走ボタンを追加
    if (maneuver.effects.some(e => e.ref === 'MOVE_CHARACTER')) {
        menuItems.push(enemyEscapeMenuItem);
    }
    
    // --- 3. 通常の移動先ボタンを生成（変更なし） ---
    rows.forEach((area, index) => {
        const distance = Math.abs(currentAreaIndex - index);
        const isDisabled = (distance > movePower) || (index === currentAreaIndex);
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
    const rows = ["奈落", "地獄", "煉獄", "花園", "楽園"];

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
    
    // キャラクターが損傷状態にあるかを事前に判定しておく
    const isCharDamaged = Object.values(char.partsStatus).flat().some(part => part.damaged);

    // 1. HTML要素のクラスを直接参照し、現在アクティブなタイミングを判定する
    const activeIndicators = new Set();
    if (document.getElementById('actionPhaseIndicator')?.classList.contains('active')) {
        activeIndicators.add('アクション');
    }
    if (document.getElementById('rapidPhaseIndicator')?.classList.contains('active')) {
        activeIndicators.add('ラピッド');
    }
    if (document.getElementById('judgePhaseIndicator')?.classList.contains('active')) {
        activeIndicators.add('ジャッジ');
    }
    // ダメージインジケータも同様に直接チェックする
    if (document.getElementById('damagePhaseIndicator')?.classList.contains('active')) {
        activeIndicators.add('ダメージ');
    }
    
    return allManeuvers.map(m => {
        const maneuver = m.data;
        let isUsable = true;

        // --- 基本的な使用可否チェック ---
        if (char.actionValue <= 0 && maneuver.timing !== 'オート') {
            isUsable = false;
        }
        if (m.isDamaged) isUsable = false;
        if (char.usedManeuvers.has(maneuver.name)) isUsable = false;
        if (maneuver.timing !== 'オート' && !activeIndicators.has(maneuver.timing)) {
            isUsable = false;
        }

        // --- マニューバ固有の有効化条件チェック ---
        if (isUsable && maneuver.effects) {
            // "is_damaged" の条件を持つ効果があるかチェック
            const needsDamage = maneuver.effects.some(e => e.params?.condition === 'is_damaged');
            
            if (needsDamage && !isCharDamaged) {
                // ダメージが必要なのにキャラクターが無傷の場合、使用不可にする
                isUsable = false;
            }
        }

        // ★★★ ダメージタイミングの特別ルールを追加 ★★★
        if (isUsable && maneuver.timing === 'ダメージ') {
            // 【庇う】のような効果を持つかチェック
            const hasTakeDamageEffect = maneuver.effects?.some(e => e.ref === 'TAKE_DAMAGE_FOR_ALLY');

            if (hasTakeDamageEffect) {
                // 射程内に、ダメージを受ける予定の「味方」がいるかチェック
                const isAllyTakingDamageInRange = battleState.damageQueue.some(damage => {
                    if (!damage.applied && damage.target.type === char.type && damage.target.id !== char.id) {
                        const { hasTarget } = checkTargetAvailability(char, maneuver, [damage.target]);
                        return hasTarget;
                    }
                    return false;
                });

                if (!isAllyTakingDamageInRange) {
                    isUsable = false;
                }
            }
        }

        // --- 3. ジャッジタイミングの厳格な判定 ---
        if (isUsable && maneuver.timing === 'ジャッジ') {
            
            // ケースA: 「自身」を対象とする支援 (例: 【ボルトヘッド】)
            if (maneuver.category === '支援' && maneuver.range === '自身') {
                const hasDeclaredAttack = battleState.actionQueue.some(declaration =>
                    declaration.performer.id === char.id &&
                    declaration.sourceManeuver.tags.includes('攻撃')
                );
                if (!hasDeclaredAttack) {
                    isUsable = false;
                }
            }
            
            // ケースB: 「他者」を対象とする支援・妨害 (例: 【うで】【あし】【助言】)
            else if (maneuver.range !== '自身') {
                // onclickで使われている判定ロジックを、ここでも全く同じように使用する
                const targetableDeclarations = getTargetableDeclarations(char, maneuver);
                
                // 妨害/支援できる対象のアクション宣言が1件もなければ、使用不可とする
                if (targetableDeclarations.length === 0) {
                    isUsable = false;
                }
            }
        }

        // --- アクションタイミングの特別ルール ---
        if (maneuver.timing === 'アクション' && isUsable) {
            // battleState の「このカウントの行動権利者リスト」に自身が含まれているかで判断する
            const hasRightToAct = battleState.actorsForThisCount.has(char.id);
            if (!hasRightToAct) {
                isUsable = false;
            }
        }

        // --- 汎用的なターゲット存在チェック ---
        // ジャッジタイミングは上で専用判定済みなので、ここでは除外する
        if (isUsable && maneuver.timing !== 'オート' && maneuver.timing !== 'ジャッジ') {
            const { hasTarget } = checkTargetAvailability(char, maneuver);
            if (!hasTarget) isUsable = false;
        }

        // --- 最終的なマスク処理 ---
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

    let rangeBonus = 0;
    
    const rangeParts = String(range).toString().split('～');
    const minRange = parseInt(rangeParts[0], 10);
    const maxRange = parseInt(rangeParts[1] || rangeParts[0], 10) + rangeBonus;

    if (isNaN(minRange)) {
        return { hasTarget: true, targets: [] };
    }

    // ★★★ ここから修正 ★★★
    // チェック対象が指定されていなければ、全キャラクターを対象にする
    const charactersToCheck = targetChars || charManager.getCharacters().filter(c => !c.isDestroyed && !c.hasWithdrawn);
    
    const actorAreaIndex = rows.indexOf(actor.area);
    const availableTargets = [];

    for (const char of charactersToCheck) {
    // ★★★ 修正ここまで ★★★

        if (char.id === actor.id && range !== '0') continue;
        
        if (actor.type === char.type && maneuver.tags.includes('攻撃')) continue;

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
                ui.renderCharacterCards();
            }
        };
    });

    ui.showModal({ title: `${char.name} の配置先を選択`, items: menuItems });
}

async function selectTargetForAction(actor, maneuver, handleGlobalClick) {
    // 既存のターゲット選択があれば、先にキャンセルする
    if (resolveTargetSelection) resolveTargetSelection(null);

    return new Promise(resolve => {
        const cleanup = (value) => {
            resolveTargetSelection = null;
            document.querySelectorAll('.target-selectable').forEach(el => {
                el.classList.remove('target-selectable');
                el.onclick = null;
            });
            document.removeEventListener('click', handleGlobalClick);
            resolve(value);
        };
        
        // グローバル変数に resolve 関数をセットし、ターゲット選択状態に入る
        resolveTargetSelection = cleanup;
        
        const { targets } = checkTargetAvailability(actor, maneuver);
        if (targets.length === 0) {
             ui.addLog("＞ 射程内に有効なターゲットがいません。");
             cleanup(null);
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
                    cleanup(charManager.getCharacterById(el.dataset.id));
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
            else if (judgeEffect.params.target === 'self_roll' && judgeDecl.performer.id === performer.id) {
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
                battleLogic.resolveActionByIndex(index, totalBonus);
                closeFn();
            };
        }
    });
}