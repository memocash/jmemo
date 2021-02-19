var request = require("../request");
var util = require("../../wallet/util");

module.exports = {
    /**
     * @param {string} address
     * @param {function(MemoApiBalance)=} cb
     * @param {function(number)=} err
     */
    Balance: function (address, cb, err) {
        module.exports.BalanceWithToken(address, "", "", cb, err);
    },
    /**
     * @param {string} address
     * @param {string} apiToken
     * @param {string} apiSecret
     * @param {function(MemoApiBalance)=} cb
     * @param {function(number)=} err
     */
    BalanceWithToken: function (address, apiToken, apiSecret, cb, err) {
        request.postJson(request.url.UserBalance, {
            address: address,
            apiToken: apiToken,
            apiSecret: apiSecret
        }, util.GetCallbackHandler(cb), util.GetErrHandler(err));
    }
};
