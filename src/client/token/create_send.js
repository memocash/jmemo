var request = require("../request");
var util = require("../../wallet/util");

/**
 * @param {string} apiToken
 * @param {string} apiSecret
 * @param {string} address
 * @param {string} token
 * @param {string} recipient
 * @param {number} quantity
 * @param {function(MemoApiTx)=} cb
 * @param {function(number)=} err
 */
module.exports = function (apiToken, apiSecret, address, token, recipient, quantity, cb, err) {
    request.post(request.url.CreateTokenSend, {
        apiToken: apiToken,
        apiSecret: apiSecret,
        address: address,
        token: token,
        recipient: recipient,
        quantity: quantity
    }, util.GetCallbackHandler(cb), util.GetErrHandler(err));
};
