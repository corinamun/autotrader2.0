const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  db.trades.findAll({}).then((data) => {
    let hbsObject = {
      trades: data
    };
    return res.render("index", hbsObject);

  });
});

module.exports = router;
