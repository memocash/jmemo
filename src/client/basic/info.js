var request = require("../request");

module.exports = {
    Info: function () {
        request.getJson(request.url.Index, function (info) {
            console.log(info);
        }, function (e) {
            console.log(e);
        });
    }
};
