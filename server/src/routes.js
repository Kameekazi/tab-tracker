//For Declaring Routes to your endpoints (AuthenticationController)

const AuthenticationController = require("./controllers/AuthenticationController")
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy")
const SongsController = require("./controllers/SongsController")

module.exports = (app) => {
    app.post('/register',               //express middleware
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        // AuthenticationControllerPolicy.register,
        AuthenticationController.login)

    app.post('/songs',
        // AuthenticationControllerPolicy.register,
        SongsController.post)

    app.get('/songs',
        // AuthenticationControllerPolicy.register,
        SongsController.index)
};
