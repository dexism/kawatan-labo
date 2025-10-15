/**
 * @file settings-manager.js
 * @description アプリケーションの設定（テーマなど）を管理するモジュール。
 */
/*
 * このファイルを修正した場合は、必ずパッチバージョンを上げてください。(例: 1.23.456 -> 1.23.457)
 */
export const version = "1.3.13";

import * as stateManager from './state-manager.js';
import * as ui from './ui-manager.js';

export function initialize() {
    const themeRadios = document.querySelectorAll('input[name="theme-switcher"]');
    
    // 1. ページ読み込み時に保存されたテーマ設定を適用する
    const savedTheme = localStorage.getItem('theme') || 'system';
    applyTheme(savedTheme);

    // 2. 対応するラジオボタンを選択状態にする
    const themeRadioToCheck = document.querySelector(`input[name="theme-switcher"][value="${savedTheme}"]`);
    if (themeRadioToCheck) {
        themeRadioToCheck.checked = true;
    }

    // 3. ラジオボタンの変更を監視する
    themeRadios.forEach(radio => {
        radio.addEventListener('change', (event) => {
            const newTheme = event.target.value;
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
            console.log(`Theme changed to: ${newTheme}`);
        });
    });

    // 4. OSのテーマ変更を監視する
    const darkModeMatcher = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMatcher.addEventListener('change', () => {
        const currentThemeSetting = localStorage.getItem('theme') || 'system';
        if (currentThemeSetting === 'system') {
            applyTheme('system');
        }
    });

    const autosaveSwitch = document.querySelector('input[name="autosave-switcher"]');

    // 1. stateManagerを初期化し、保存された設定を取得
    const isAutoSaveOn = stateManager.initialize();

    if (autosaveSwitch) {
        // 2. UIのトグルスイッチに初期状態を反映
        autosaveSwitch.checked = isAutoSaveOn;

        // 3. トグルスイッチの変更を監視
        autosaveSwitch.addEventListener('change', (event) => {
            // event.target.valueではなく、event.target.checkedでON/OFFを判断
            const shouldEnable = event.target.checked;
            stateManager.setAutoSave(shouldEnable);
        });
    }

    const loadFromFileBtn = document.getElementById('loadStateFromFileBtn');
    const fileInput = document.getElementById('fileInput');

    if (loadFromFileBtn && fileInput) {
        // 「ファイルから読込み」ボタンがクリックされたら、隠れているinput要素をクリックする
        loadFromFileBtn.onclick = () => {
            // 同じファイルを連続で選択できるように、inputの値をリセットする
            fileInput.value = '';
            fileInput.click();
        };

        // ユーザーがファイルを選択したら、changeイベントが発火する
        fileInput.onchange = async (event) => { // ★ async を追加
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();

            reader.onload = async (e) => { // ★ async を追加
                const jsonString = e.target.result;
                // ★★★ ここからが修正箇所です ★★★
                // 1. stateManagerに復元処理を依頼し、成否を受け取る
                const success = await stateManager.loadStateFromFile(jsonString);
                
                // 2. 成功した場合のみ、UI全体を更新する
                if (success) {
                    ui.updateAllUI();
                }
            };
            
            // ファイルの読み込みを開始
            reader.readAsText(file);
        };
    }
    console.log("Settings Manager initialized.");
}

/**
 * 指定されたテーマをHTMLに適用する
 * @param {string} theme - 'light', 'dark', or 'system'
 */
function applyTheme(theme) {
    if (theme === 'system') {
        // 'system' の場合は、手動設定用の属性を削除する
        document.documentElement.removeAttribute('data-theme');
    } else {
        // 'light' または 'dark' の場合は、属性を設定する
        document.documentElement.setAttribute('data-theme', theme);
    }
}

/**
 * LocalStorageの現在の使用量をバイト単位で推定して返す
 * @returns {number} 推定された使用量 (バイト)
 */
export function getLocalStorageUsage() {
    let totalBytes = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        if (key && value) {
            // キーと値の文字数合計に2を掛けてバイト数を算出 (UTF-16)
            const itemBytes = (key.length + value.length) * 2;
            totalBytes += itemBytes;
        }
    }
    return totalBytes;
}

// --- 使用例 ---
/*
const usageInBytes = getLocalStorageUsage();
const usageInKB = usageInBytes / 1024;
const usageInMB = usageInKB / 1024;

console.log(`現在のLocalStorage使用量 (推定):`);
console.log(`- ${usageInBytes.toLocaleString()} バイト`);
console.log(`- ${usageInKB.toFixed(2)} KB`);
console.log(`- ${usageInMB.toFixed(4)} MB`);
*/

/**
 * LocalStorageの残りの利用可能な容量をバイト単位で推定する (注意: 処理が重い)
 * @returns {Promise<number>} 推定された空き容量 (バイト)
 */
function estimateRemainingQuota() {
    return new Promise((resolve) => {
        const testKey = '___QUOTA_TEST___';
        let remainingBytes = 0;
        let low = 0;
        // ほとんどのブラウザの上限である10MBから探索を開始
        let high = 10 * 1024 * 1024;

        // 二分探索で空き容量を探す
        const check = (size) => {
            try {
                localStorage.setItem(testKey, 'a'.repeat(size));
                localStorage.removeItem(testKey);
                return true; // 保存成功
            } catch (e) {
                return false; // 保存失敗 (容量オーバー)
            }
        };

        // 非同期で処理を分割し、ブラウザが固まるのを防ぐ
        const step = () => {
            if (low <= high) {
                const mid = Math.floor((low + high) / 2);
                if (check(mid)) {
                    remainingBytes = mid;
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
                setTimeout(step, 0); // 次のステップを非同期で実行
            } else {
                resolve(remainingBytes);
            }
        };
        
        step();
    });
}


// --- 使用例 (開発者ツールのコンソールなどで実行) ---
/*
console.log("LocalStorageの空き容量を推定します... (少し時間がかかります)");
estimateRemainingQuota().then(bytes => {
    const remainingKB = bytes / 1024;
    const remainingMB = remainingKB / 1024;
    console.log(`推定される空き容量: ${remainingMB.toFixed(2)} MB`);
});
*/

/**
 * LocalStorageに保存されたユーザー画像をすべて削除する
 */
export function clearLocalImageCache() {
    localStorage.removeItem('userLocalImages');
    console.log("Local image cache cleared.");
}