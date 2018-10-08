const appSetup = require("./app-setup");
const app = appSetup.app;

// Start the server
var server = app.listen(process.env.PORT || "3001", function () {
    console.log("Glo Server is up and running 🌺 ");
});

module.exports = server;
