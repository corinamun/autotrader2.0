const express = require("express");
const db = require("../models");
const router = express.Router();
const userid = "";

$('document').on('click', function() {
  FB.getLoginStatus(function(response) {
    console.log("loginstatus just ran");
    userid = response.authResponse.userID;

    console.log("your userID is " + userid);

    console.log(response);
    console.log(response.status + "is your current login state with facebook.");
  });
});

router.get("/", (req, res) => {
  res.redirect("/trades");
});

router.get("/trades", (req, res) => {
  db.trades.findAll({}).then((data) => {
    const hbsObject = {
      trades: data
    };
    return res.render("index", hbsObject);
  });
});

router.get("/trades/api", (req, res) => {
  db.trades.findAll({}).then((data) => {
    return res.json(data);
  });
});

router.post("/trades/api", (req, res) => {
  db.trades.create({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    mileage: req.body.mileage,
    location: req.body.city,
    color: req.body.color,
    style: req.body.optradio,
    transmission: req.body.transmission,
    description: req.body.description,
    contact: req.body.contact,
    zipcode: req.body.zipcode,
    userID: userid
  }).then(() => {
    return res.redirect("/trades");
  }).catch((err) => {
    console.error(`ERR = ${err}`);
  });
});

router.post("/trades/:id", (req, res) => {
  db.trades.destroy({
    where: {
      id: req.params.id
    }
  }).then((result) => {
    return res.redirect("/trades");
  });
});

module.exports = router;
