const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors()); //use this if u want to run your server on a different domain

app.post("/register", (req, res) => {
  res.send({
    message: `Hello ${req.body.email} Your user was registered! Have fun!`
  });
});

app.listen(process.env.PORT || 8081, () =>
  console.log(`Listening to PORT ${process.env.PORT || 8081}...`)
);
