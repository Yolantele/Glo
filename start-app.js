const appSetup = require("./app-setup");
// const app = appSetup.app;

const theFramework = require("the-framework");
const PORT = process.env.PORT || "3001";

var server = theFramework.startServer({
    // authenticationMethod: async (req, token) => {
    //     // Optional method to check user token and return either a user object or null (if you cannot authenticate your user)
    //     if (token) {
    //         // Code to check token
    //     }

    //     return null;
    // },
    apiDirectory: "/api", // Directory you will store your route files in
    userTokenHeader: "x-user-token", // Header you will use for your user tokens
    port: PORT
});
// Start the server
// var server = app.listen(process.env.PORT || "3001", function () {
//     console.log("Glo Server is up and running 🌺 ");
// });

module.exports = server;
