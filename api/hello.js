const theFramework = require("the-framework");

theFramework.get("/hello", [{id: "name", type: theFramework.STRING, required: false, description: "Your name"}], {
    description: "Says hello",
    authRequired: false
}, async (params, user) => {
    // Params is an object of processed parameters
    // user is the logged in user, if there is one
    return {
        // message: "Hello " + params.name
        message: "Hello from Glo 🌺"
    }
});