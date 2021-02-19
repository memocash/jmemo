var request = require("../request");
var util = require("../../wallet/util");

module.exports = {
    /**
     * @param {string} apiToken
     * @param {string} apiSecret
     * @param {number} offset
     * @param {function([MemoApiHistoryFund])=} cb
     * @param {function(number)=} errCb
     */
    Funds: function (apiToken, apiSecret, offset, cb, errCb) {
        request.postJson(request.url.ApiHistoryFunds, {
            apiToken: apiToken,
            apiSecret: apiSecret,
            offset: offset
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    },
    /**
     * @param {string} apiToken
     * @param {string} apiSecret
     * @param {number} offset
     * @param {function([MemoApiHistorySpend])=} cb
     * @param {function(number)=} errCb
     */
    Spends: function (apiToken, apiSecret, offset, cb, errCb) {
        request.postJson(request.url.ApiHistorySpends, {
            apiToken: apiToken,
            apiSecret: apiSecret,
            offset: offset
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    }
};
