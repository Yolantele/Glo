const express = require("express");
const bodyParser = require("body-parser");
const cheeseToastie = require("cheese-toastie");
// const fileUpload = require("express-fileupload");
const middlewares = require('./middlewares');

var cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(fileUpload());
app.use(express.static("public"));
app.use(cors());
app.use(middlewares.tracking());
app.use(middlewares.requestInit());

// provide correct x-user-token to access all api endpoints:
cheeseToastie.setAuthenticatorMethod((token, callback) => {
    if (token && token == 'dummyToken') {
        return callback({authorized: "correct token provided, access to data is authorized"});
    }
    return callback(null)
})

cheeseToastie.start(__dirname, app);

app.use(middlewares.logsClose());

module.exports = {
    app: app,
    cheeseToastie: cheeseToastie
};