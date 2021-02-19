var rootPath = "m/44'/0'";
var mainBasePath = rootPath + "/0'";

// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
module.exports = {
    Base: {
        Root: rootPath,
        Main: rootPath + "/0'"
    },
    DefaultAccount: "0'",
    CoinType: {
        BTC: "0'",
        BCH: "145'",
        BSV: "236'",
        SLP: "245'"
    },
    /**
     * @param coinType
     * @param account
     * @param index
     * @returns {string}
     */
    GetPath: function (coinType, account, index) {
        return "m/44'/" + coinType + "/" + account + "/0/" + index;
    },
    /**
     * @param {number} index
     * @returns {string}
     */
    AddressPath: function (index) {
        return module.exports.GetPath(module.exports.CoinType.BTC, module.exports.DefaultAccount, index);
    },
    /**
     * @returns {string}
     */
    MainAddressPath: function () {
        return module.exports.AddressPath(0);
    }
};
