var bitcoin = require('@bitcoin-dot-com/bitcoincashjs2-lib');

module.exports = {
    /**
     * @param {function(number)=} errCb
     * @returns {function(...[*]=)}
     */
    GetErrHandler: function (errCb) {
        return function (err) {
            if (typeof errCb == "function") {
                errCb(err);
            } else {
                console.log(err);
            }
        }
    },
    /**
     * @param {function(object)=} cb
     * @returns {function(...[*]=)}
     */
    GetCallbackHandler: function (cb) {
        return function (s) {
            if (typeof cb == "function") {
                cb(s);
            } else {
                console.log(s);
            }
        }
    },
    /**
     * @param {function(string)=} cb
     * @returns {function(...[*]=)}
     */
    GetCallbackHandlerString: function (cb) {
        return function (s) {
            if (typeof cb == "function") {
                cb(s);
            } else {
                console.log(s);
            }
        }
    },
    /**
     * @param {string} txRaw
     * @returns {string}
     */
    GetTxRawHash: function (txRaw) {
        var tx = bitcoin.Transaction.fromHex(txRaw);
        return tx.getHash().toString("hex").match(/.{2}/g).reverse().join("");
    }
};
