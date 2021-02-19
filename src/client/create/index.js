var request = require("../request");
var util = require("../../wallet/util");

module.exports = {
    Alias: require("./alias"),
    Like: require("./like"),
    Mute: require("./mute"),
    Post: require("./post"),
    /**
     * @param {string} apiToken
     * @param {string} apiSecret
     * @param {string} address
     * @param {string} txHash
     * @param {string} message
     * @param {function(MemoApiTx)=} cb
     * @param {function(number)=} errCb
     */
    Reply: function (apiToken, apiSecret, address, txHash, message, cb, errCb) {
        request.postJson(request.url.CreateReply, {
            apiToken: apiToken,
            apiSecret: apiSecret,
            address: address,
            txHash: txHash,
            message: message
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    },
    /**
     * @param {string} apiToken
     * @param {string} apiSecret
     * @param {string} address
     * @param {string} recipient
     * @param {number} quantity
     * @param {string} message
     * @param {function(MemoApiTx)=} cb
     * @param {function(number)=} errCb
     */
    Send: function (apiToken, apiSecret, address, recipient, quantity, message, cb, errCb) {
        request.post(request.url.CreateSend, {
            apiToken: apiToken,
            apiSecret: apiSecret,
            address: address,
            recipient: recipient,
            quantity: quantity,
            message: message
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    }
};
