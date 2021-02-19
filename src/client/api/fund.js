var request = require("../request");
var util = require("../../wallet/util");

module.exports = {
    /**
     * @param {string} apiToken
     * @param {string} apiTempKey
     * @param {function(MemoApiFundAddress)=} cb
     * @param {function(number)=} errCb
     */
    Address: function (apiToken, apiTempKey, cb, errCb) {
        request.postJson(request.url.ApiFundAddress, {
            apiToken: apiToken,
            apiTempKey: apiTempKey
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    }
};
