/**
 * @file reference.js
 * @description ルールリファレンスUIの構築と管理を担当するモジュール
 */
export const version = "1.2.5";

import * as data from './data-handler.js';
import * as ui from './ui-manager.js';
import { createManeuverItem } from './menu-builder.js';

// --- モジュール内変数 ---
let activeTab = 'maneuver';
let activeManeuverFilters = {};

// スワイプ検出用の変数を追加
let touchStartX = 0;
let touchMoveX = 0;
let touchStartY = 0;
let touchMoveY = 0;
const SWIPE_THRESHOLD = 50; // スワイプと判断する最小移動距離（ピクセル）
let isVerticalScroll = false; // ★ 垂直スクロール中か判定するフラグを追加

// --- メイン関数 ---

/**
 * リファレンスUI全体を構築し、表示する
 */
export function buildReferenceUI() {
    const menu = document.getElementById('maneuverMenu');
    menu.innerHTML = '';
    menu.classList.add('is-reference-mode');

    const header = createHeader();
    const tabBar = createTabBar();
    const contentArea = document.createElement('div');
    contentArea.className = 'reference-content-area';

    menu.appendChild(header);
    menu.appendChild(tabBar);
    menu.appendChild(contentArea);

    renderTabView(activeTab, contentArea);
    
    menu.classList.add('is-visible');
}

// --- UI構築ヘルパー ---

function createHeader() {
    const header = document.createElement('div');
    header.className = 'maneuver-menu-header';
    header.innerHTML = `
        <span class="header-icon">📖</span>
        <span class="header-title">リファレンス</span>
        <button class="header-close-btn">&times;</button>
    `;
    header.querySelector('.header-close-btn').onclick = () => {
        document.getElementById('maneuverMenu').classList.remove('is-visible');
    };
    return header;
}

function createTabBar() {
    const tabs = [
        { id: 'maneuver', label: 'マニューバ' },
        { id: 'regret', label: '未練' },
        { id: 'treasure', label: 'たからもの' },
        { id: 'memory', label: '記憶のカケラ' },
        { id: 'hint', label: '暗示' }
    ];
    const tabBar = document.createElement('div');
    tabBar.className = 'reference-tab-bar';

    tabs.forEach(tab => {
        const tabButton = document.createElement('button');
        tabButton.className = 'reference-tab-button';
        tabButton.dataset.tabId = tab.id;
        tabButton.textContent = tab.label;
        if (tab.id === activeTab) {
            tabButton.classList.add('is-active');
        }
        tabButton.onclick = (event) => {
            const oldTabId = activeTab;
            activeTab = tab.id;

            tabBar.querySelectorAll('.reference-tab-button').forEach(btn => btn.classList.remove('is-active'));
            tabButton.classList.add('is-active');

            // アクティブなタブが画面内に収まるように自動スクロール
            tabButton.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
            
            const contentArea = document.querySelector('.reference-content-area');
            if(contentArea) {
                // タブのインデックスを比較してアニメーション方向を決定
                const oldIndex = tabs.findIndex(t => t.id === oldTabId);
                const newIndex = tabs.findIndex(t => t.id === activeTab);
                const direction = newIndex > oldIndex ? 'left' : 'right';

                // アニメーション付きでタブを切り替え
                switchTabViewAnimated(activeTab, contentArea, direction);
            }
        };
        tabBar.appendChild(tabButton);
    });
    return tabBar;
}

/**
 * スライドアニメーション付きでタブビューを切り替える関数
 * @param {string} tabId - 表示するタブのID
 * @param {HTMLElement} contentArea - コンテンツエリアの要素
 * @param {string} direction - 'left' または 'right'
 */
function switchTabViewAnimated(tabId, contentArea, direction) {
    // 1. 新しいコンテンツを画面外に準備
    const newContent = document.createElement('div');
    newContent.className = 'reference-content-inner';
    renderTabViewContent(tabId, newContent); // 描画処理を分離
    
    // アニメーションの方向を設定
    newContent.classList.add(direction === 'left' ? 'slide-in-from-right' : 'slide-in-from-left');
    
    // 2. 現在のコンテンツを画面外にスライドアウトさせる
    const oldContent = contentArea.querySelector('.reference-content-inner');
    if (oldContent) {
        oldContent.classList.add(direction === 'left' ? 'slide-out-to-left' : 'slide-out-to-right');
        // アニメーション完了後に古い要素を削除
        oldContent.addEventListener('animationend', () => {
            oldContent.remove();
        });
    }

    // 3. 新しいコンテンツを挿入してスライドインさせる
    contentArea.appendChild(newContent);
    // requestAnimationFrame を挟むことで、CSSアニメーションが確実に適用される
    requestAnimationFrame(() => {
        newContent.classList.remove('slide-in-from-right', 'slide-in-from-left');
    });
}

/**
 * タブの内容を描画する（UI構築のみ、アニメーションは含めない）
 * @param {string} tabId 
 * @param {HTMLElement} container - 描画先の要素
 */
function renderTabViewContent(tabId, container) {
    switch (tabId) {
        case 'maneuver': renderManeuverTab(container); break;
        case 'regret': renderSimpleListTab('regret', container); break;
        case 'treasure': renderSimpleListTab('treasure', container); break;
        case 'memory': renderSimpleListTab('memory', container); break;
        case 'hint': renderSimpleListTab('hint', container); break;
    }
    // イベントリスナーは、描画先のコンテナ（.reference-content-inner）に直接設定する
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false }); // preventDefaultを呼ぶためにpassive: falseを指定
    container.addEventListener('touchend', handleTouchEnd);
}

// renderTabViewを初期表示用に修正
function renderTabView(tabId, contentArea) {
    contentArea.innerHTML = ''; // コンテンツエリアをクリア
    const initialContent = document.createElement('div');
    initialContent.className = 'reference-content-inner';
    contentArea.appendChild(initialContent);
    renderTabViewContent(tabId, initialContent); // 分離した描画関数を呼び出す
}

// --- 各タブの描画関数 ---

function renderManeuverTab(container) {
    // 1. 新しいFlexコンテナラッパーを作成
    const tabContainer = document.createElement('div');
    tabContainer.className = 'reference-maneuver-tab-container';
    container.appendChild(tabContainer);

    // 2. フィルター部分を作成
    const accordionContainer = document.createElement('div');
    accordionContainer.className = 'accordion-container';
    
    const accordionHeader = document.createElement('div');
    accordionHeader.className = 'accordion-header';
    accordionHeader.innerHTML = `<span class="accordion-title-static">フィルタ</span><span class="accordion-title-dynamic"></span>`;
    accordionHeader.onclick = () => accordionContainer.classList.toggle('is-closed');

    const filterContainer = document.createElement('div');
    filterContainer.className = 'reference-filter-container accordion-content';

    accordionContainer.appendChild(accordionHeader);
    accordionContainer.appendChild(filterContainer);

    // 3. マニューバリストのコンテナを作成
    const listContainer = document.createElement('div');
    listContainer.className = 'maneuver-menu-list-container';

    // 4. 新しいラッパーにフィルターとリストを追加
    tabContainer.appendChild(accordionContainer);
    tabContainer.appendChild(listContainer);
    
    // ▲▲▲ 修正はここまでです ▲▲▲

    const renderList = () => {
        const allManeuversSource = data.getAllManeuvers();
        let allManeuvers = Object.keys(allManeuversSource).map(id => ({
            data: { id: id, ...allManeuversSource[id] }, isUsable: true
        })).filter(m => m.data && m.data.name);

        let filtered = filterManeuversForReference(allManeuvers, activeManeuverFilters);
        
        // 件数とフィルター要約の表示
        const dynamicTitleSpan = accordionHeader.querySelector('.accordion-title-dynamic');
        if (dynamicTitleSpan) {
            let summaryText = `（${filtered.length}件）`;
            Object.keys(activeManeuverFilters).forEach(groupName => {
                const active = activeManeuverFilters[groupName];
                if (active.length > 0) {
                    summaryText += `<span class="filter-summary-group"><span class="filter-summary-label">${groupName}</span>${active.join(' ')}</span>`;
                }
            });
            dynamicTitleSpan.innerHTML = summaryText;
        }

        // ソートして表示
        listContainer.innerHTML = '';
        if (filtered.length === 0) {
            listContainer.innerHTML = `<div class="maneuver-item is-empty">条件に一致するマニューバはありません</div>`;
        } else {
            sortManeuvers(filtered).forEach(maneuverObj => {
                const item = createManeuverItem(maneuverObj, {}); // ui-managerに移植した関数を呼び出す
                listContainer.appendChild(item);
            });
        }
    };
    
    createManeuverFilters(filterContainer, renderList);
    renderList();
}

function renderSimpleListTab(dataType, container) {
    const listContainer = document.createElement('div');
    listContainer.className = 'maneuver-menu-list-container';

    if (dataType === 'regret') {
        const allRegrets = data.getRegretData();
        
        // 1. 未練をカテゴリごとにグループ化する
        const regretGroups = {
            'SI': { title: '姉妹への未練', items: [] },
            'EN': { title: '敵への未練', items: [] },
            'NP': { title: '中立者への未練', items: [] }
        };

        for (const key in allRegrets) {
            if (key.startsWith('//')) continue; // "//"キーを除外
            
            const prefix = key.substring(0, 2);
            if (regretGroups[prefix]) {
                regretGroups[prefix].items.push({ id: key, ...allRegrets[key] });
            }
        }
        
        // 2. グループごとにヘッダーとアイテムリストを描画する
        for (const groupKey in regretGroups) {
            const group = regretGroups[groupKey];
            if (group.items.length > 0) {
                const groupHeader = document.createElement('div');
                groupHeader.className = 'maneuver-group'; // 既存のスタイルを流用
                groupHeader.innerHTML = `<div class="group-header">${group.title}</div>`;
                listContainer.appendChild(groupHeader);

                group.items.forEach(item => {
                    const itemElement = createListItem(item, dataType);
                    listContainer.appendChild(itemElement);
                });
            }
        }

    } else {
        // 未練以外のタブは、これまで通りの処理
        let items = [];
        switch (dataType) {
            case 'regret':
                const allRegrets = data.getRegretData();
                items = Object.keys(allRegrets).map(key => ({ id: key, ...allRegrets[key] }));
                break;
            case 'treasure':
                const allTreasures = data.getTakaramonoData();
                items = Object.keys(allTreasures).map(key => ({ id: key, ...allTreasures[key] }));
                break;
            case 'memory':
                const allMemories = data.getMemoryFragmentData();
                items = Object.keys(allMemories).map(key => ({ id: key, ...allMemories[key] }));
                break;
            case 'hint':
                const allHints = data.getHintData();
                items = Object.keys(allHints).map(key => ({ id: key, ...allHints[key] }));
                break;
        }

        items.forEach(item => {
            const itemElement = createListItem(item, dataType);
            listContainer.appendChild(itemElement);
        });
    }
    container.appendChild(listContainer);
}

function createListItem(item, dataType) {
    const itemElement = document.createElement('div');
    itemElement.className = 'maneuver-item-new is-reference-item';

    if (dataType === 'regret') {
        const idNum = item.id.split('-')[1];
        const title = `【${item.name}】`;
        const description = item.description;
        const madnessName = item.madnessName;
        const madnessQuote = item.madnessQuote;
        const madnessEffect = item.madnessEffect;

        const textToCopy = `${idNum} ${title}\n${description}\n発狂：${madnessName}\n「${madnessQuote}」\n${madnessEffect}`.trim();

        itemElement.innerHTML = `
            <div class="item-right-col" style="width: 100%;">
                <div class="ref-container">
                    <div class="ref-maneuver-name">${idNum}${title}</div>
                    <div class="ref-regret-madness">発狂：<span class="malice-level">${madnessName}</span></div>
                </div>
                <div class="item-row-2">${description}</div>
                <div class="item-row-3 ref-regret-flavor">「${madnessQuote}」</div>
                <div class="item-row-2 has-copy-button">
                    <span>${madnessEffect}</span>
                    <button class="copy-description-btn" data-copy-text="${encodeURIComponent(textToCopy)}">📋</button>
                </div>
            </div>
        `;
    } else {
        let idText = '', title = '', description = '';
        
        idText = String(item.id).padStart(2, '0');
        title = `【${item.name}】`;
        description = item.description;

        const textToCopy = `${idText}${title}\n${description}`.trim();

        itemElement.innerHTML = `
            <div class="item-right-col" style="width: 100%;">
                <div class="item-row-1 has-copy-button">
                    <span class="item-name">${idText}${title}</span>
                    <button class="copy-description-btn" data-copy-text="${encodeURIComponent(textToCopy)}">📋</button>
                </div>
                <div class="item-row-2">
                    <span>${description}</span>
                </div>
            </div>
        `;
    }

    itemElement.querySelector('.copy-description-btn').onclick = (e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(decodeURIComponent(e.currentTarget.dataset.copyText)).then(() => {
            ui.showToastNotification('コピーしました！', 1500);
        });
    };
    return itemElement;
}

// --- スワイプ処理関数 ---

function handleTouchStart(event) {
    const touch = event.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchMoveX = touchStartX;
    touchMoveY = touchStartY;
    isVerticalScroll = false; // フラグをリセット
    event.currentTarget.classList.add('is-swiping');
}

function handleTouchMove(event) {
    const touch = event.touches[0];
    touchMoveX = touch.clientX;
    touchMoveY = touch.clientY;
    const deltaX = touchMoveX - touchStartX;
    const deltaY = touchMoveY - touchStartY;

    // 最初のmoveイベントでスクロール方向を判定
    if (touchMoveX === touchStartX && touchMoveY === touchStartY) {
        isVerticalScroll = Math.abs(deltaY) > Math.abs(deltaX);
    }
    
    // 垂直スクロール中は水平移動の追従を行わない
    if (isVerticalScroll) {
        return;
    }

    // 水平スワイプの場合、デフォルトのスクロール動作をキャンセル
    event.preventDefault();
    
    event.currentTarget.style.transform = `translateX(${deltaX}px)`;
}

function handleTouchEnd(event) {
    const contentArea = event.currentTarget;
    const deltaX = touchMoveX - touchStartX;
    
    // 垂直スクロール中はスワイプ処理を中断
    if (isVerticalScroll) {
        contentArea.classList.remove('is-swiping');
        return;
    }

    contentArea.classList.remove('is-swiping');
    contentArea.style.transform = 'translateX(0)';

    // しきい値を超えたスワイプか判定
    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        const tabBar = document.querySelector('.reference-tab-bar');
        if (!tabBar) return;

        const tabButtons = Array.from(tabBar.querySelectorAll('.reference-tab-button'));
        const currentIndex = tabButtons.findIndex(btn => btn.dataset.tabId === activeTab);
        let nextIndex = -1;

        if (deltaX < 0) {
            // 右方向へスワイプ（指は左へ動く） -> 次のタブへ
            nextIndex = currentIndex + 1;
        } else {
            // 左方向へスワイプ（指は右へ動く） -> 前のタブへ
            nextIndex = currentIndex - 1;
        }

        // 範囲チェック
        if (nextIndex >= 0 && nextIndex < tabButtons.length) {
            // 次(前)のタブボタンをプログラム的にクリック
            tabButtons[nextIndex].click();
        }
    }
}

// --- フィルタリング＆ソート（旧menu-builder.jsから移植）---

const filterGroups = {
    'カテゴリ': ['移動', "配置", '攻撃', '防御', '支援', '妨害', '強化', '修復', '補助', 'コスト', '行動値', '生贄', '対話', '狂気点', '脆弱'],
    '区分1': ['ポジション', 'クラススキル', '特化スキル', '基本パーツ', '強化パーツ', '手駒専用'],
    '区分2': ['アリス', 'ホリック', 'オートマトン', 'ジャンク', 'コート', 'ソロリティ', 'ステーシー', 'タナトス', 'ゴシック', 'レクイエム', 'バロック', 'ロマネスク', 'サイケデリック', '武装', '変異', '改造'],
    '攻撃': ['肉弾攻撃', '白兵攻撃', '射撃攻撃', '砲撃攻撃', '精神攻撃'],
    '効果': ['命中補正', '支援', '妨害', '防御', '移動', '移動妨害', '転倒', '切断', '爆発', '全体攻撃', '連撃'],
    '悪意': ['0.5', '1', '1.5', '2', '3', '4', 'その他'],
    '箇所': ['頭', '腕', '胴', '脚', '任意'],
    'タイミング': ['オート', 'アクション', 'ジャッジ', 'ダメージ', 'ラピッド'],
    'コスト': ['なし', '0', '1', '2', '3', '4', 'その他'],
    '最大射程': ['なし', '自身', '0', '1', '2', '3', 'その他']
};

function createManeuverFilters(container, onFilterChange) {
    if (Object.keys(activeManeuverFilters).length === 0) {
        Object.keys(filterGroups).forEach(groupName => {
            activeManeuverFilters[groupName] = [];
        });
    }

    for (const groupName in filterGroups) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'filter-group';
        groupDiv.innerHTML = `<h4 class="filter-group-title">${groupName}</h4>`;
        
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'filter-buttons';
        
        filterGroups[groupName].forEach(filterName => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.textContent = filterName;
            
            if (activeManeuverFilters[groupName]?.includes(filterName)) {
                btn.classList.add('is-active');
            }
            
            btn.onclick = () => {
                btn.classList.toggle('is-active');
                const index = activeManeuverFilters[groupName].indexOf(filterName);
                if (index > -1) {
                    activeManeuverFilters[groupName].splice(index, 1);
                } else {
                    activeManeuverFilters[groupName].push(filterName);
                }
                onFilterChange();
            };
            buttonsDiv.appendChild(btn);
        });
        groupDiv.appendChild(buttonsDiv);
        container.appendChild(groupDiv);
    }
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

    const isEnhancementPart = (partTypePrefix) => {
        const secondChar = id.substring(1, 2);
        return typePrefix === partTypePrefix && ['1', '2', '3'].includes(secondChar);
    };

    const isPawnOnlyPart = () => {
        const secondChar = id.substring(1, 2);
        return typePrefix === 'P' && !isNaN(parseInt(secondChar, 10));
    };

    switch (groupName) {
        case 'カテゴリ':
            return maneuver.category === filterName || (maneuver.tags && maneuver.tags.includes(filterName));

        case '区分1':
            switch (filterName) {
                case 'ポジション': return !!masterData.positions[prefix];
                case 'クラススキル': return !!masterData.classes[prefix] && !id.endsWith('-SP');
                case '特化スキル': return !!masterData.classes[prefix] && id.endsWith('-SP');
                case '基本パーツ': return prefix === 'BP';
                case '強化パーツ': return isEnhancementPart('A') || isEnhancementPart('M') || isEnhancementPart('R');
                case '手駒専用': return prefix === 'PS' || isPawnOnlyPart();
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
            if (filterName === '武装') return isEnhancementPart('A');
            if (filterName === '変異') return isEnhancementPart('M');
            if (filterName === '改造') return isEnhancementPart('R');

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