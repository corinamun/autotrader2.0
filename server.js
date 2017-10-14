const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const routes = require("./controllers/trade_controllers.js");

const db = require("./models");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static("public"));

app.use("/", routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
  });
});
