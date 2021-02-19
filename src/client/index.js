var accept = require("./link/accept");
module.exports = {
    Api: require("./api"),
    Basic: {
        Info: require("./basic/info").Info,
        Balance: require("./basic/balance").Balance,
        BalanceWithToken: require("./basic/balance").BalanceWithToken,
        Id: require("./basic/id")
    },
    Link: {
        CheckRequest: require("./link/request").Check,
        CreateRequest: require("./link/request").Create,
        CreateAccept: require("./link/accept").Create,
        FinishAccept: accept.Finish
    },
    Post: require("./post"),
    Topic: require("./topic"),
    Token: {
        CreateSend: require("./token/create_send")
    },
    Tx: {
        Broadcast: require("./tx/broadcast"),
        Wait: require("./tx/wait").Wait,
        BroadcastAndWait: require("./tx/wait").BroadcastAndWait
    },
    Create: require("./create"),
    SetHost: require("./request").setHost
};
