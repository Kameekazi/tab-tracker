//For Declaring Routes to your endpoints (AuthenticationController)

const AuthenticationController = require("./controllers/AuthenticationController")
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy")

module.exports = (app) => {
    app.post('/register',               //express middleware
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',               //express middleware
        // AuthenticationControllerPolicy.register,
        AuthenticationController.login)
};
