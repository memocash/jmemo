var request = require("../request");
var util = require("../../wallet/util");
 
module.exports = {
    /**
     * @param {string} apiToken
     * @param {string} apiTempKey
     * @param {function(MemoApiSecret)=} cb
     * @param {function(number)=} errCb
     */
    Get: function (apiToken, apiTempKey, cb, errCb) {
        request.postJson(request.url.ApiKeyGet, {
            apiToken: apiToken,
            apiTempKey: apiTempKey
        }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    },
    /**
     * @param {function(MemoApiSecret)=} cb
     * @param {function(number)=} errCb
     */
    New: function (cb, errCb) {
        request.getJson(request.url.ApiKeyNew, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
    }
};
