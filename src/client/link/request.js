var request = require("../request");
var util = require("../../wallet/util");


module.exports = {
    /**
     * @param {string} address
     * @param {function([MemoApiRequestCheck])=} cb
     * @param {function(number)=} errCb
     */
    Check: function (address, cb, errCb) {
        request.postJson(request.url.UserLinkRequests, {
            address: address
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    },
    /**
     * @param {string} apiToken
     * @param {string} apiSecret
     * @param {string} address
     * @param {string} parentAddress
     * @param {string} message
     * @param {function(MemoApiTx)=} cb
     * @param {function(number)=} errCb
     */
    Create: function (apiToken, apiSecret, address, parentAddress, message, cb, errCb) {
        request.postJson(request.url.CreateLinkRequest, {
            apiToken: apiToken,
            apiSecret: apiSecret,
            address: address,
            parentAddress: parentAddress,
            message: message
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    }
};
