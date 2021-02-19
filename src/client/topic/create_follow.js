var request = require("../request");
var util = require("../../wallet/util");

/**
 * @param {string} apiToken
 * @param {string} apiSecret
 * @param {string} address
 * @param {string} topic
 * @param {boolean} unfollow
 * @param {function(MemoApiTx)=} cb
 * @param {function(number)=} err
 */
module.exports = function (apiToken, apiSecret, address, topic, unfollow, cb, err) {
    request.postJson(request.url.CreateTopicFollow, {
        apiToken: apiToken,
        apiSecret: apiSecret,
        address: address,
        topic: topic,
        unfollow: unfollow
    }, util.GetCallbackHandler(cb), util.GetErrHandler(err));
};
