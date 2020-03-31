const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require('./models')
const config = require('./config/config')
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors()); //use this if u want to run your server on a different domain

require('./routes')(app)

sequelize.sync({ force: false }).then(() => {       //for dropping all tables in the database enable force note: testing purpose only
  app.listen(config.port || 8081, () =>
    console.log(`Server started on PORT ${config.port || 8081}...`)
  );
});




