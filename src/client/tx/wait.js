var request = require("../request");
var broadcast = require("./broadcast");
var util = require("../../wallet/util");

/**
 * @param {string} txHash
 * @param {function(string)=} cb
 * @param {function(number)=} errCb
 */
function Wait(txHash, cb, errCb) {
    request.post(request.url.TxWait, {
        txHash: txHash
    }, util.GetCallbackHandlerString(cb), util.GetErrHandler(errCb));
}

/**
 * @param {string} txRaw
 * @param {function()=} cb
 * @param {function(number)=}errCb
 */
function BroadcastAndWait(txRaw, cb, errCb) {
    broadcast(txRaw, function () {
        Wait(util.GetTxRawHash(txRaw), util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    }, util.GetErrHandler(errCb))
}

module.exports = {
    Wait: Wait,
    BroadcastAndWait: BroadcastAndWait
};
