// p2p-protocol.js

/**
 * @file p2p-protocol.js
 * @description P2P通信のデータ形式（プロトコル）を定義し、送受信を仲介するモジュール
 */
export const version = "1.1.1";

import * as p2p from './p2p-manager.js';

// ===============================================
// PL -> NC への送信（要求）
// ===============================================

/**
 * マニューバの使用をNCに要求する
 * @param {string} performerId - 実行者のキャラクターID
 * @param {string} maneuverName - 使用するマニューバの名前
 * @param {string|null} targetId - 対象のキャラクターID (いれば)
 */
export function sendDeclareManeuver(performerId, maneuverName, targetId) {
    p2p.sendToHost({
        type: 'declareManeuver',
        payload: { performerId, maneuverName, targetId }
    });
}

/**
 * ダイスロールの許可をNCに要求する
 * @param {string} command - ダイスコマンド (例: "NC")
 */
export function sendRequestRollPermission(command) {
    p2p.sendToHost({
        type: 'requestRollPermission',
        payload: { command }
    });
}

/**
 * ダイスロールの結果をNCに通報する
 * @param {object} resultData - { result, hitLocation, rollValue, declarationId }
 */
export function sendReportDiceResult(resultData) {
    p2p.sendToHost({
        type: 'reportDiceResult',
        payload: resultData
    });
}

/**
 * 未練や狂気点の変更をNCに要求する
 * @param {string} characterId - 対象キャラクターのID
 * @param {string} regretId - 対象の未練のID
 * @param {number} newPoints - 変更後の狂気点
 */
export function sendUpdateRegret(characterId, regretId, newPoints) {
    p2p.sendToHost({
        type: 'updateRegret',
        payload: { characterId, regretId, newPoints }
    });
}

/**
 * 操作するキャラクターの選択をNCに通知する
 * @param {string} characterId - 選択したキャラクターのID
 */
export function sendClaimCharacter(characterId) {
    p2p.sendToHost({
        type: 'claimCharacter',
        payload: { characterId }
    });
}

/**
 * カスタム画像をNCにアップロードする
 * @param {string} characterId - 関連するキャラクターのID
 * @param {string} imageDataUrl - Base64エンコードされた画像データ
 */
export function sendUploadImage(characterId, imageDataUrl) {
    p2p.sendToHost({
        type: 'uploadImage',
        payload: { characterId, imageDataUrl }
    });
}

/**
 * セッション参加時に、NCへ現況データの送信を要求する
 */
export function sendRequestInitialState() {
    p2p.sendToHost({ type: 'requestInitialState' });
}

/**
 * キャッシュにない個別画像の送信をNCに要求する
 * @param {string} characterId - 画像が必要なキャラクターのID
 */
export function sendRequestImage(characterId) {
    p2p.sendToHost({
        type: 'requestImage',
        payload: { characterId }
    });
}


// ===============================================
// NC -> PL への送信（ブロードキャストまたは個別）
// ===============================================

/**
 * 【新設】最新の現況データ全体を特定のPLに送信する
 * @param {string} plId - 宛先となるPLのユニークID
 * @param {object} gameState - 送信する{ battleState, characters }オブジェクト
 */
export function sendGameStateToClient(plId, gameState) {
    p2p.sendToClient(plId, {
        type: 'gameStateUpdate',
        payload: gameState
    });
}

/**
 * 最新の現況データ全体を全PLにブロードキャストする
 * @param {object} battleState - 送信するbattleStateオブジェクト
 */
export function broadcastGameStateUpdate(battleState) {
    p2p.broadcastToAll({
        type: 'gameStateUpdate',
        payload: battleState
    });
}

/**
 * 更新された宣言キューの情報のみを全PLにブロードキャストする
 * @param {object} queues - { actionQueue, rapidQueue, ... }
 */
export function broadcastQueueUpdate(queues) {
    p2p.broadcastToAll({
        type: 'queueUpdate',
        payload: queues
    });
}

/**
 * 特定のPLにダイスロールを許可/要求する
 * @param {string} plId - 対象となるPLのユニークID
 * @param {object} rollData - { command, declarationId, ... }
 */
export function sendRequestDiceRoll(plId, rollData) {
    // Note: p2p-manager には個別送信の機能がまだないので、ここで追加するか、
    //       一旦ブロードキャストで代用し、受信側で自分宛か判定する必要があります。
    //       ここでは個別送信機能があると仮定します。
    p2p.sendToClient(plId, { // sendToClientは後でp2p-managerに実装する必要がある
        type: 'requestDiceRoll',
        payload: rollData
    });
}

/**
 * カスタム画像を特定のPL（要求元）に送信する
 * @param {string} plId - 対象となるPLのユニークID
 * @param {string} characterId - 関連するキャラクターのID
 * @param {string} imageDataUrl - Base64エンコードされた画像データ
 */
export function sendDistributeImage(plId, characterId, imageDataUrl) {
    p2p.sendToClient(plId, { // sendToClientは後でp2p-managerに実装する必要がある
        type: 'distributeImage',
        payload: { characterId, imageDataUrl }
    });
}

/**
 * 汎用的な通知メッセージを全PLにブロードキャストする
 * @param {string} message - 表示するメッセージ文字列
 */
export function broadcastNotification(message) {
    p2p.broadcastToAll({
        type: 'notification',
        payload: message
    });
}