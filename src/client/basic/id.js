var request = require("../request");
var util = require("../../wallet/util");

/**
 * @param {string} address
 * @param {function(MemoApiId)=} cb
 * @param {function(number)=} errCb
 */
module.exports = function (address, cb, errCb) {
    request.postJson(request.url.UserId, {
        address: address
    }, util.GetCallbackHandler(cb), util.GetErrHandler(errCb));
};
