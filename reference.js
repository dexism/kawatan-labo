/**
 * @file reference.js
 * @description ルールリファレンスUIの構築と管理を担当するモジュール
 */
export const version = "2.4.1"; // カルーセルUI完全移行版 + 新規データソース対応

import * as data from './data-handler.js';
import * as ui from './ui-manager.js';
import { createManeuverItem } from './menu-builder.js';
import { closeAllMenus } from './menu-builder.js';

// --- モジュール内変数 ---
const tabs = [
    { id: 'maneuver', label: 'マニューバ' },
    { id: 'hint', label: '暗示' },
    { id: 'treasure', label: 'たからもの' },
    { id: 'regret', label: '未練' },
    { id: 'memory_base', label: '記憶のカケラ' },
    { id: 'memory_alpha', label: '記憶のカケラ α' },
    { id: 'memory_beta', label: '記憶のカケラ β' },
    { id: 'posthumous_history', label: '死後経歴' },
    { id: 'awakening_location', label: '目覚めの場所' }
];
let currentIndex = 0;
let activeManeuverFilters = {};

// スワイプ関連
let touchStartX = 0;
let touchMoveX = 0;
let isSwiping = false;
let swipeWrapper = null;
let currentTranslateX = 0; // 現在のtransform値(%)
let lastDeltaX = 0; // スワイプ中の移動量
let touchStartY = 0;
let isGestureDetermined = false;
let isHorizontalSwipe = false;

// --- メイン関数 ---

export function buildReferenceUI() {
    currentIndex = 0; // 初期タブをリセット
    const menu = document.getElementById('maneuverMenu');
    menu.innerHTML = '';
    menu.classList.add('is-reference-mode');

    const header = createHeader();
    const tabBar = createTabBar();
    const contentArea = document.createElement('div');
    contentArea.className = 'reference-content-area';
    
    swipeWrapper = document.createElement('div');
    swipeWrapper.className = 'reference-swipe-wrapper';
    
    // 全てのタブページコンテナを最初に生成
    tabs.forEach(tab => {
        const page = document.createElement('div');
        page.className = 'reference-content-page';
        page.dataset.tabId = tab.id;
        swipeWrapper.appendChild(page);
    });

    contentArea.appendChild(swipeWrapper);
    menu.appendChild(header);
    menu.appendChild(tabBar);
    menu.appendChild(contentArea);
    
    // 最初のタブの中身だけを描画
    renderTabViewContent(tabs[currentIndex].id, swipeWrapper.children[currentIndex]);
    
    menu.classList.add('is-visible');
    
    contentArea.addEventListener('touchstart', handleTouchStart, { passive: true });
    contentArea.addEventListener('touchmove', handleTouchMove, { passive: false });
    contentArea.addEventListener('touchend', handleTouchEnd);
}

// --- UI構築ヘルパー ---

function createHeader() {
    const header = document.createElement('div');
    header.className = 'maneuver-menu-header';
    header.innerHTML = `
        <span class="header-icon">📖</span>
        <span class="header-title">Nechronica - リファレンス</span>
        <button class="header-close-btn">&times;</button>
    `;
    header.querySelector('.header-close-btn').onclick = () => {
        closeAllMenus();
    };
    return header;
}

function createTabBar() {
    const tabBar = document.createElement('div');
    tabBar.className = 'reference-tab-bar';

    tabs.forEach((tab, index) => {
        const tabButton = document.createElement('button');
        tabButton.className = 'reference-tab-button';
        tabButton.dataset.tabId = tab.id;
        tabButton.textContent = tab.label;
        if (index === currentIndex) {
            tabButton.classList.add('is-active');
        }
        tabButton.onclick = () => {
            switchToTab(index);
        };
        tabBar.appendChild(tabButton);
    });
    return tabBar;
}

function switchToTab(index) {
    if (index < 0 || index >= tabs.length) return;
    currentIndex = index;

    // タブバーのアクティブ状態を更新
    const tabBar = document.querySelector('.reference-tab-bar');
    if (tabBar) {
        tabBar.querySelectorAll('.reference-tab-button').forEach((btn, i) => {
            btn.classList.toggle('is-active', i === index);
        });
        const activeButton = tabBar.querySelector('.is-active');
        if (activeButton) {
            activeButton.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }

    if (swipeWrapper) {
        // 対象のページがまだ描画されていなければ、ここで描画する（遅延描画）
        const targetPage = swipeWrapper.children[index];
        if (targetPage && targetPage.innerHTML === '') {
            renderTabViewContent(tabs[index].id, targetPage);
        }
        
        const newTranslateX = -index * (100 / tabs.length);
        swipeWrapper.style.transform = `translateX(${newTranslateX}%)`;
    }
}

function renderTabViewContent(tabId, container) {
    const simpleListMap = {
        regret: 'regret',
        treasure: 'treasure',
        memory_base: 'memory_base',
        memory_alpha: 'memory_alpha',
        memory_beta: 'memory_beta',
        posthumous_history: 'posthumous_history',
        awakening_location: 'awakening_location',
        hint: 'hint'
    };

    if (tabId === 'maneuver') {
        renderManeuverTab(container);
    } else if (simpleListMap[tabId]) {
        renderSimpleListTab(simpleListMap[tabId], container);
    }
}


// --- 各タブの描画関数 ---

function renderManeuverTab(container) {
    const tabContainer = document.createElement('div');
    tabContainer.className = 'reference-maneuver-tab-container';
    container.appendChild(tabContainer);

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

    const listContainer = document.createElement('div');
    listContainer.className = 'maneuver-menu-list-container';

    tabContainer.appendChild(accordionContainer);
    tabContainer.appendChild(listContainer);
    
    const renderList = () => {
        const allManeuversSource = data.getAllManeuvers();
        let allManeuvers = Object.keys(allManeuversSource).map(id => ({
            data: { id: id, ...allManeuversSource[id] }, isUsable: true
        })).filter(m => m.data && m.data.name);

        let filtered = filterManeuversForReference(allManeuvers, activeManeuverFilters);
        
        const dynamicTitleSpan = accordionHeader.querySelector('.accordion-title-dynamic');
        if (dynamicTitleSpan) {
            let summaryText = `（${filtered.length}件）`;
            Object.keys(activeManeuverFilters).forEach(groupName => {
                const active = activeManeuverFilters[groupName];
                if (active.length > 0) {
                    summaryText += `<span class="filter-summary-group"><span class="filter-summary-label">${groupName}</span>${active.join(', ')}</span>`;
                }
            });
            dynamicTitleSpan.innerHTML = summaryText;
        }

        listContainer.innerHTML = '';
        if (filtered.length === 0) {
            listContainer.innerHTML = `<div class="maneuver-item is-empty">条件に一致するマニューバはありません</div>`;
        } else {
            sortManeuvers(filtered).forEach(maneuverObj => {
                const item = createManeuverItem(maneuverObj, {});
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
        const regretGroups = {
            'SI': { title: '姉妹への未練', items: [] },
            'EN': { title: '敵への未練', items: [] },
            'NP': { title: '中立者への未練', items: [] }
        };

        for (const key in allRegrets) {
            if (key.startsWith('//')) continue;
            const prefix = key.substring(0, 2);
            if (regretGroups[prefix]) {
                regretGroups[prefix].items.push({ id: key, ...allRegrets[key] });
            }
        }
        
        for (const groupKey in regretGroups) {
            const group = regretGroups[groupKey];
            if (group.items.length > 0) {
                const groupHeader = document.createElement('div');
                groupHeader.className = 'group-header';
                groupHeader.textContent = group.title;
                container.appendChild(groupHeader);

                group.items.forEach(item => {
                    const itemElement = createListItem(item, dataType);
                    container.appendChild(itemElement);
                });
            }
        }
    } else {
        let items = [];
        switch (dataType) {
            case 'treasure':
                const allTreasures = data.getTakaramonoData();
                items = Object.keys(allTreasures).map(key => ({ id: key, ...allTreasures[key] }));
                break;
            case 'memory_base':
                const allMemories = data.getMemoryFragmentsData();
                items = Object.keys(allMemories).map(key => ({ id: key, ...allMemories[key] }));
                break;
            case 'memory_alpha':
                const allMemoriesAlpha = data.getMemoryFragmentsAlphaData();
                items = Object.keys(allMemoriesAlpha).map(key => ({ id: key, ...allMemoriesAlpha[key] }));
                break;
            case 'memory_beta':
                const allMemoriesBeta = data.getMemoryFragmentsBetaData();
                items = Object.keys(allMemoriesBeta).map(key => ({ id: key, ...allMemoriesBeta[key] }));
                break;
            case 'posthumous_history':
                const allPosthumous = data.getPosthumousHistoryData();
                items = Object.keys(allPosthumous).map(key => ({ id: key, ...allPosthumous[key] }));
                break;
            case 'awakening_location':
                const allAwakening = data.getAwakeningLocationsData();
                items = Object.keys(allAwakening).map(key => ({ id: key, ...allAwakening[key] }));
                break;
            case 'hint':
                const allHints = data.getHintData();
                items = Object.keys(allHints).map(key => ({ id: key, ...allHints[key] }));
                break;
        }

        // 数値IDでソート（'0'と'00'を特別扱い）
        items.sort((a, b) => {
            const mapIdToNumber = (id) => {
                if (id === '0') return 10; // 'awakening_location'用
                if (id === '00') return 100; // 'memory_fragments_alpha'用
                return parseInt(id, 10);
            };
            const idA = mapIdToNumber(a.id);
            const idB = mapIdToNumber(b.id);
            return idA - idB;
        });

        const options = { needsPadding: ['posthumous_history', 'memory_alpha', 'memory_beta'].includes(dataType) };

        items.forEach(item => {
            const itemElement = createListItem(item, dataType, options);
            listContainer.appendChild(itemElement);
        });
        container.appendChild(listContainer);
    }
}


function createListItem(item, dataType, options = {}) {
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
                    <div class="ref-regret-madness">発狂<span class="malice-level">${madnessName}</span></div>
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
        
        title = `【${item.name}】`;
        description = item.description;

        const needsPadding = ['posthumous_history', 'memory_alpha', 'memory_beta'].includes(dataType);

        if (needsPadding) {
            idText = String(item.id).padStart(2, '0');
        } else {
            idText = String(item.id);
        }

        const textToCopy = `${idText}${title}\n${description}`.trim();
        
        const source = item.source;
        const sourceInfoText = source ? `${source.book} p${source.page}` : '';

        itemElement.innerHTML = `
            <div class="item-right-col" style="width: 100%;">
                <div class="ref-container-top">
                    <div class="ref-source-info">${sourceInfoText}</div>
                    <span class="item-name">${idText}${title}</span>
                </div>
                <div class="item-row-2 has-copy-button">
                    <span>${description}</span>
                    <button class="copy-description-btn" data-copy-text="${encodeURIComponent(textToCopy)}">📋</button>
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
    if (event.touches.length !== 1) return;
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
    touchMoveX = touchStartX;
    isGestureDetermined = false;
    isHorizontalSwipe = false;
    if (swipeWrapper) {
        swipeWrapper.classList.add('is-swiping');
    }
}

function handleTouchMove(event) {
    if (event.touches.length !== 1) return;
    touchMoveX = event.touches[0].clientX;
    const deltaX = touchMoveX - touchStartX;
    const deltaY = event.touches[0].clientY - touchStartY;

    if (!isGestureDetermined) {
        // 最初の動きでジェスチャーの方向を確定
        if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                isHorizontalSwipe = true;
            }
            isGestureDetermined = true;
        }
    }

    if (isHorizontalSwipe) {
        event.preventDefault();
        const pageWidth = swipeWrapper.parentElement.clientWidth;
        const currentOffset = -currentIndex * pageWidth;
        const moveX = currentOffset + deltaX;
        swipeWrapper.style.transform = `translateX(${moveX}px)`;
    }
}

function handleTouchEnd(event) {
    if (swipeWrapper) {
        swipeWrapper.classList.remove('is-swiping');
    }
    if (!isHorizontalSwipe) return;

    const deltaX = touchMoveX - touchStartX;
    const swipeThreshold = 30; // 誤操作防止のしきい値を少し短くする

    let nextIndex = currentIndex;

    // しきい値を超えるスワイプがあった場合のみ、ページを切り替える
    if (Math.abs(deltaX) > swipeThreshold) {
        if (deltaX < 0) {
            // 左スワイプ -> 次のページへ (ただし端でない場合)
            if (currentIndex < tabs.length - 1) {
                nextIndex++;
            }
        } else {
            // 右スワイプ -> 前のページへ (ただし端でない場合)
            if (currentIndex > 0) {
                nextIndex--;
            }
        }
    }
    
    // 最終的に決定したインデックスのページにスナップさせる
    switchToTab(nextIndex); 
}

// --- フィルタリング＆ソート ---

const filterGroups = {
    'カテゴリ': ['移動', "配置", '攻撃', '支援', '妨害', '強化', '防御', '脆弱', '補助', '難易度変更', '移動妨害', '無効化', 'コスト', '修復', '対話', '狂気点', '行動値', '生贄', '増援'],
    '区分1': ['ポジション', 'クラススキル', '特化スキル', '基本パーツ', '強化パーツ', '手駒専用'],
    '区分2': ['アリス', 'ホリック', 'オートマトン', 'ジャンク', 'コート', 'ソロリティ', 'ステーシー', 'タナトス', 'ゴシック', 'レクイエム', 'バロック', 'ロマネスク', 'サイケデリック', '武装', '変異', '改造'],
    '攻撃': ['肉弾攻撃', '白兵攻撃', '射撃攻撃', '砲撃攻撃', '精神攻撃'],
    '効果': ['攻撃判定修正', '支援', '妨害', '防御', '強化', '移動', '移動妨害', '転倒', '切断', '爆発', '全体攻撃', '連撃'],
    '無効化': ['妨害無効', '防御無効', '移動無効', '移動妨害無効', '転倒無効', '切断無効', '爆発無効', '全体攻撃無効', '連撃無効', "損傷無効", "大失敗無効"],
    '悪意': ['0.5', '1', '1.5', '2', '3', '4', 'その他'],
    '箇所': ['頭', '腕', '胴', '脚', '任意'],
    'タイミング': ['オート', 'アクション', 'ジャッジ', 'ダメージ', 'ラピッド'],
    'コスト': ['なし', '0', '1', '2', '3', '4', 'その他'],
    '最大射程': ['なし', '自身', '0', '1', '2', '3', 'その他'],
    'ルールブック': ['基本ルール', '歪曲の舞踏']
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

function filterManeuversForReference(maneuvers, filters) {
    const coreData = data.getCoreData();
    const positions = coreData.positions;
    const classes = coreData.classes;

    return maneuvers.filter(mObj => {
        const maneuver = mObj.data;
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
            const posKey = Object.keys(masterData.positions).find(k => masterData.positions[k].name === filterName);
            if (posKey && prefix === posKey) return true;
            const classKey = Object.keys(masterData.classes).find(k => masterData.classes[k].name === filterName);
            if (classKey && prefix === classKey) return true;
            if (filterName === '武装') return isEnhancementPart('A');
            if (filterName === '変異') return isEnhancementPart('M');
            if (filterName === '改造') return isEnhancementPart('R');
            return false;
        }
        case '攻撃':
            return maneuver.category === filterName || (maneuver.tags && maneuver.tags.includes(filterName));
        case '効果':
            return maneuver.category === filterName || (maneuver.tags && maneuver.tags.includes(filterName));
        case '無効化':
            return maneuver.tags && maneuver.tags.includes(filterName);
        case '箇所':
            return maneuver.allowedLocations === filterName;
        case 'タイミング':
            return maneuver.timing === filterName;
        case 'コスト': {
            const cost = String(maneuver.cost);
            if (filterName === 'その他') {
                return !['なし', '0', '1', '2', '3', '4'].includes(cost);
            }
            return cost === filterName;
        }
        case '最大射程': {
            const rangeStr = String(maneuver.range || 'なし');
            if (filterName === 'なし') return rangeStr === 'なし';
            if (filterName === '自身') return rangeStr === '自身';

            const maxRange = parseInt(rangeStr.split('～').pop(), 10);

            if (filterName === 'その他') {
                return !['なし', '自身'].includes(rangeStr) && (isNaN(maxRange) || maxRange > 3);
            }
            return !isNaN(maxRange) && maxRange === parseInt(filterName, 10);
        }
        case '悪意': {
            const malice = maneuver.maliceLevel;
            if (malice === null || malice === undefined) return false;
            if (filterName === 'その他') {
                return ![0.5, 1, 1.5, 2, 3, 4].includes(malice);
            }
            return String(malice) === filterName;
        }
        case 'ルールブック': {
            const bookName = maneuver.source?.book || '';
            if (filterName === '基本ルール') {
                return bookName === '基本ルール';
            }
            if (filterName === '歪曲の舞踏') {
                return bookName === '歪曲の舞踏';
            }
            return false;
        }
        default:
            return false;
    }
}

function getSortPriority(maneuver) {
    const id = maneuver.id || '';
    const prefix = id.substring(0, 2);
    const typePrefix = id.substring(0, 1);
    const posKeys = ['AL', 'HL', 'AM', 'JK', 'CT', 'SR'];
    const posIndex = posKeys.indexOf(prefix);
    if (posIndex !== -1) return 1000 + posIndex;
    const classKeys = ['ST', 'TN', 'GT', 'RQ', 'BR', 'RM', 'SY'];
    const classIndex = classKeys.indexOf(prefix);
    if (classIndex !== -1) {
        return 2000 + classIndex * 10 + (id.endsWith('-SP') ? 0 : 1);
    }
    if (prefix === 'BP') {
        const locOrder = { '頭': 0, '腕': 1, '胴': 2, '脚': 3 };
        return 3000 + (locOrder[maneuver.allowedLocations] ?? 4);
    }
    const level = parseInt(id.substring(1, 2), 10);
    if (!isNaN(level)) {
        if (typePrefix === 'A') return 4000 + level;
        if (typePrefix === 'M') return 5000 + level;
        if (typePrefix === 'R') return 6000 + level;
    }
    if (prefix === 'PS') return 7000;
    if (typePrefix === 'P') {
        const maliceCode = parseInt(id.substring(1, 2), 10);
        if (!isNaN(maliceCode)) return 8000 + maliceCode;
    }
    if (prefix === 'TR') return 9000;
    if (prefix === 'CA') return 9100;
    return 9999;
}

export function sortManeuvers(maneuvers) {
    const categoryOrder = data.getCoreData().maneuverCategories.map(c => c.name);
    maneuvers.sort((a, b) => {
        const maneuverA = a.data;
        const maneuverB = b.data;
        const categoryA = maneuverA.category === '行動値増加' ? '行動値' : maneuverA.category;
        const categoryB = maneuverB.category === '行動値増加' ? '行動値' : maneuverB.category;
        const indexA = categoryOrder.indexOf(categoryA);
        const indexB = categoryOrder.indexOf(categoryB);
        if (indexA !== indexB) {
            return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
        }
        const priorityA = getSortPriority(maneuverA);
        const priorityB = getSortPriority(maneuverB);
        if (priorityA !== priorityB) {
            return priorityA - priorityB;
        }
        return (maneuverA.id || '').localeCompare(maneuverB.id || '');
    });
    return maneuvers;
}