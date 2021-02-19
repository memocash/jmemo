var request = require("../request");
var util = require("../../wallet/util");

/**
 * @param {string} apiToken
 * @param {string} apiSecret
 * @param {string} address
 * @param {string} topic
 * @param {string} message
 * @param {function(MemoApiTx)=} cb
 * @param {function(number)=} err
 */
module.exports = function (apiToken, apiSecret, address, topic, message, cb, err) {
    request.postJson(request.url.CreateTopicPost, {
        apiToken: apiToken,
        apiSecret: apiSecret,
        address: address,
        topic: topic,
        message: message
    }, util.GetCallbackHandler(cb), util.GetErrHandler(err));
};
