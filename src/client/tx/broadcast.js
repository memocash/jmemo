var request = require("../request");
var util = require("../../wallet/util");

/**
 * @param {string} txRaw
 * @param {function(string)=} cb
 * @param {function(number)=} err
 */
module.exports = function (txRaw, cb, err) {
    request.post(request.url.TxBroadcast, {
        txRaw: txRaw
    }, util.GetCallbackHandlerString(cb), util.GetErrHandler(err));
};
