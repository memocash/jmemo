var request = require("../request");
var util = require("../../wallet/util");

/**
 * @param {string} apiToken
 * @param {string} apiSecret
 * @param {string} address
 * @param {number} tip
 * @param {string} txHash
 * @param {function(MemoApiTx)=} cb
 * @param {function(number)=} errCb
 */
module.exports = function (apiToken, apiSecret, address, tip, txHash, cb, errCb) {
    request.postJson(request.url.CreateLike, {
        apiToken: apiToken,
        apiSecret: apiSecret,
        tip: tip,
        address: address,
        likeTxHash: txHash
    }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
};
