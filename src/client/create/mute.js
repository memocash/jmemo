var request = require("../request");
var util = require("../../wallet/util");

/**
 * @param {string} apiToken
 * @param {string} apiSecret
 * @param {string} address
 * @param {string} muteAddress
 * @param {boolean} unmute
 * @param {function(MemoApiTx)=} cb
 * @param {function(number)=} errCb
 */
module.exports = function (apiToken, apiSecret, address, muteAddress, unmute, cb, errCb) {
    request.postJson(request.url.CreateMute, {
        apiToken: apiToken,
        apiSecret: apiSecret,
        address: address,
        muteAddress: muteAddress,
        unmute: unmute
    }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
};
