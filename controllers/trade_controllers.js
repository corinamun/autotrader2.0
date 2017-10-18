const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/trades");
});

router.get("/trades", (req, res) => {
  db.trades.findAll({}).then((data) => {
    const hbsObject = {
      trades: data
    };
    console.log(req.body);
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
    image: req.body.image,
    mileage: req.body.mileage,
    location: req.body.city,
    color: req.body.color,
    style: req.body.optradio,
    transmission: req.body.transmission,
    description: req.body.description,
    contact: req.body.contact,
    zipcode: req.body.zipcode,
    userID: req.body.userID
  }).then(() => {
    return res.redirect("/trades");
  }).catch((err) => {
    console.error(`ERR = ${err}`);
  });
});

router.post("/trades/make", function(req, res) {
  db.trades.create(req.make).then(() => {
    console.log(req.body);
    return res.redirect("/trades");
  }).catch((err) => {
    console.error(`ERR = ${err}`);
  });
});

router.post("/trades/:id", (req, res) => {
  if (req.body.userID === req.body.currentUserID) {
    db.trades.destroy({
      where: {
        id: req.params.id
      }
    }).then((result) => {
      return res.redirect("/trades");
    });
  } else if (req.body.userID !== req.body.currentUserID) {
    alert("You don't own this post!");
  };
});
module.exports = router;
