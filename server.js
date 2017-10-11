const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const routes = require("./controllers/trade_controllers.js");

var db = require("./models");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use("/", routes);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/map", (req, res) => {
  res.render("map");
});

db.sequelize.sync().then(function() {
  app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
  });
});
