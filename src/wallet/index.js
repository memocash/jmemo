var bitcoin = require('@bitcoin-dot-com/bitcoincashjs2-lib');
var bip32 = require("bip32");
var bip39 = require("bip39");
var path = require("./path");
var sign = require("./sign");

// BIP 32 - Hierarchical deterministic (HD) wallets
// BIP 39 - Mnemonic phrases

module.exports = {
    Path: path,
    Sign: sign,
    Util: require("./util"),
    /**
     * @returns {ECPair}
     */
    GenKey: function () {
        return bitcoin.ECPair.makeRandom();
    },
    /**
     * @returns {string}
     */
    GenerateMnemonic: function () {
        return bip39.generateMnemonic();
    },
    /**
     * @param {string} mnemonic
     * @returns {ECPair}
     */
    GetECPairFromMnemonic: function (mnemonic) {
        var seed = bip39.mnemonicToSeedSync(mnemonic);
        var node = bip32.fromSeed(seed);
        return bitcoin.ECPair.fromWIF(node.toWIF());
    },
    /**
     * @param {string} mnemonic
     * @param {string} path
     * @returns {ECPair}
     */
    GetHDChild: function (mnemonic, path) {
        var seed = bip39.mnemonicToSeedSync(mnemonic);
        var node = bip32.fromSeed(seed);
        var child = node.derivePath(path);
        return bitcoin.ECPair.fromWIF(child.toWIF());
    },
    /**
     * @param {ECPair} keyPair
     * @returns {string}
     */
    GetWIF: function (keyPair) {
        return keyPair.toWIF();
    }
};
