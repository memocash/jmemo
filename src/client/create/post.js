var request = require("../request");
var util = require("../../wallet/util");

/**
 * @param {string} apiToken
 * @param {string} apiSecret
 * @param {string} address
 * @param {string} message
 * @param {function(MemoApiTx)=} cb
 * @param {function(number)=} errCb
 */
module.exports = function (apiToken, apiSecret, address, message, cb, errCb) {
    request.postJson(request.url.CreatePost, {
        apiToken: apiToken,
        apiSecret: apiSecret,
        address: address,
        message: message
    }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
};
