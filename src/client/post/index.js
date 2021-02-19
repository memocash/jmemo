var request = require("../request");
var util = require("../../wallet/util");

module.exports = {
    /**
     * @param {string} txHash
     * @param {number} offset
     * @param {[string]=} modAddresses
     * @param {function([MemoApiPost])=} cb
     * @param {function(number)=} err
     */
    Replies: function (txHash, offset, modAddresses, cb, err) {
        request.postJson(request.url.PostReplies, {
            txHash: txHash,
            modAddresses: modAddresses,
            offset: offset
        }, util.GetCallbackHandler(cb), util.GetErrHandler(err));
    }
};
