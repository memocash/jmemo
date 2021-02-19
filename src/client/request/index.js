var querystring = require('querystring');
var http = require('http');

var host = "https://beta-api.memo.cash";

/**
 * @param {function(object)=} success
 * @returns {function(...[*]=)}
 */
function getJsonResponseHandler(success) {
    return function (response) {
        try {
            var json = JSON.parse(response);
        } catch (e) {
            error(e);
            return;
        }
        success(json);
    }
}

module.exports = {
    url: require("./url"),
    /**
     * @param {string} url
     * @param {object=} data
     * @param {function(object)=} success
     * @param {function(number)=} error
     */
    postJson: function (url, data, success, error) {
        module.exports.post(url, data, getJsonResponseHandler(success), error);
    },
    /**
     * @param {string} url
     * @param {object=} data
     * @param {function(string)=} success
     * @param {function(number)=} error
     */
    post: function (url, data, success, error) {
        if (typeof data == "object") {
            for (var key in data) {
                if (typeof data[key] == "object" && (key.length < 2 || key.substr(-2) !== "[]")) {
                    data[key + "[]"] = data[key];
                    delete data[key];
                }
            }
        }
        var dataString = querystring.stringify(data);
        var hostname, port;
        var match = host.match(/\:\d+$/);
        if (match) {
            hostname = host.substr(0, match.index);
            port = host.substr(match.index + 1);
        } else {
            hostname = host;
        }
        hostname = hostname.replace(/^https?:\/\//, "");
        var req = http.request({
            hostname: hostname,
            port: port,
            path: url,
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': dataString.length
            }
        }, function (res) {
            if (res.statusCode !== 200) {
                error(res.statusCode);
                return;
            }
            req.on("error", function (e) {
                error(e);
            });
            res.on("data", function (body) {
                success(body.toString());
            });
        });
        req.write(dataString);
        req.end();
    },
    /**
     * @param {string} url
     * @param {function(object)=} success
     * @param {function(number)=} error
     */
    getJson: function (url, success, error) {
        module.exports.get(url, getJsonResponseHandler(success), error);
    },
    /**
     * @param {string} url
     * @param {function(string)=} success
     * @param {function(number)=} error
     */
    get: function (url, success, error) {
        var req = http.get(host + url, function (res) {
            if (res.statusCode !== 200) {
                error(res.statusCode);
                return;
            }
            req.on("error", function (e) {
                error(e);
            });
            res.on("data", function (body) {
                success(body);
            });
        });
    },
    setHost: function (newHost) {
        host = newHost;
    }
};
