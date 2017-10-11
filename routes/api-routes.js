//API-ROUTES

// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our trades model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the trades
  app.get("/api/trades", function(req, res) {
    // Write code here to retrieve all of the trades from the database and res.json them
    // back to the user
    db.trades.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // POST route for saving a new trade. We can create trade with the data in req.body
  app.post("/api/trades", function(req, res) {
    // Write code here to create a new trade and save it to the database
    // and then res.json back the new trade to the user
    db.trades.create({
      // text: req.body.text,
      // complete: req.body.complete
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      mileage: req.body.mileage,
      location: req.body.location,
      color: req.body.color,
      style: req.body.style,
      mpg: req.body.mpg,
      engine: req.body.engine,
      transmission: req.body.transmission,
      drivetype: req.body.drivetype,
      features: req.body.features,
      description: req.body.description,
      interest: req.body.interest,
      contact: req.body.contact
    }).then(function(results) {
      res.json(results);
    }).catch(function(err) {
      console.log('TERRIBLE THINGS HAPPENED');
      console.log(err);
      //never use line 35 in production, only for learning.
    });
  });

  // DELETE route for deleting trades. We can get the id of the trade to be deleted from
  // req.params.id
  app.delete("/api/trades/:id", function(req, res) {
    db.trades.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(results) {
      res.end();
    });
  });

  // PUT route for updating trades. We can get the updated trade data from req.body
  app.put("/api/trades", function(req, res) {
    db.trades.update({
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      mileage: req.body.mileage,
      location: req.body.location,
      color: req.body.color,
      style: req.body.style,
      mpg: req.body.mpg,
      engine: req.body.engine,
      transmission: req.body.transmission,
      drivetype: req.body.drivetype,
      features: req.body.features,
      description: req.body.description,
      interest: req.body.interest,
      contact: req.body.contact
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbtrade) {
      res.json(dbtrade);
    })
  });
};
