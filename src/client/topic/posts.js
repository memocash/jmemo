var request = require("../request");
var util = require("../../wallet/util");

module.exports = {
    /**
     * @param {string} topic
     * @param {number} offset
     * @param {[string]=} modAddresses
     * @param {function([MemoApiPost])=} cb
     * @param {function(number)=} err
     */
    Get: function (topic, offset, modAddresses, cb, err) {
        request.postJson(request.url.PostTopic, {
            topic: topic,
            modAddresses: modAddresses,
            offset: offset
        }, util.GetCallbackHandler(cb), util.GetErrHandler(err));
    }
};
