var path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "none",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "jmemo.min.js",
        library: "jmemo"
    },
    performance: {
        maxEntrypointSize: 750000,
        maxAssetSize: 750000
    }
};
