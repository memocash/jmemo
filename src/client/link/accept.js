var request = require("../request");
var util = require("../../wallet/util");

module.exports = {
    /**
     * @param {string} apiToken
     * @param {string} apiSecret
     * @param {string} requestTxHash
     * @param {function(MemoApiTx)=} cb
     * @param {function(number)=} errCb
     */
    Create: function (apiToken, apiSecret, requestTxHash, cb, errCb) {
        request.postJson(request.url.CreateLinkAccept, {
            apiToken: apiToken,
            apiSecret: apiSecret,
            requestTxHash: requestTxHash
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    },
    /**
     * @param {string} apiToken
     * @param {string} apiTempKey
     * @param {string} requestTxHash
     * @param {function(MemoApiTx)=} cb
     * @param {function(number)=} errCb
     */
    Finish: function (apiToken, apiTempKey, requestTxHash, cb, errCb) {
        request.postJson(request.url.CreateLinkFinish, {
            apiToken: apiToken,
            apiTempKey: apiTempKey,
            requestTxHash: requestTxHash
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    }
};
