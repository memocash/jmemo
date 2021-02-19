var bitcoin = require('@bitcoin-dot-com/bitcoincashjs2-lib');

module.exports = {
    /**
     * @param {{
     *     raw: string
     *     ins: [{
     *         value: number
     *         script: string
     *     }]
     * }} txObj
     * @param {ECPair} key
     * @return {Transaction}
     */
    SignTx: function (txObj, key) {
        var tx = bitcoin.Transaction.fromHex(txObj.raw);
        if (tx.ins.length !== txObj.ins.length) {
            throw new Error("tx ins length doesn't match");
        }
        var txb = bitcoin.TransactionBuilder.fromTransaction(tx);
        var hashType = bitcoin.Transaction.SIGHASH_ALL;
        for (var i = 0; i < tx.ins.length; i++) {
            //var script = Buffer.from(txObj.ins[i].script, 'hex');
            var script = undefined;
            txb.sign(i, key, script, hashType, txObj.ins[i].value);
        }
        return txb.build();
    }
};
