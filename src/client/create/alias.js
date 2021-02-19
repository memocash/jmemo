var request = require("../request");
var util = require("../../wallet/util");

/**
 * @param {string} apiToken
 * @param {string} apiSecret
 * @param {string} address
 * @param {string} alias
 * @param {function(MemoApiTx)=} cb
 * @param {function(number)=} errCb
 */
module.exports = function (apiToken, apiSecret, address, alias, cb, errCb) {
    request.postJson(request.url.CreateAlias, {
        apiToken: apiToken,
        apiSecret: apiSecret,
        address: address,
        alias: alias
    }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
};
