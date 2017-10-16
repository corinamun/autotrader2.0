var expect = require("chai").expect;

const Nightmare = require ('nightmare');

// var Trade = require("trade_controllers");
// var trade = Trade ({ show: true });

describe("trade", function() {
  it("should redirect user to trades route", function(url){
    var nightmare = Nightmare();
    return nightmare.goto('http://localhost:3000').end().then(function(result) {
      console.log(result);
    });
  })
  // it("should redirect page to /trades GET", function(trades) {
  //   chai.request(server)
  //     .get('/trades')
  //     .end(function(err,res) {
  //       res.should.have.status(200);
  //       trades();
  //     })
  // it("should display html elements from hbs GET", function(hbs) {
  //   chai.request(server)
  //   .get('/trades.api')
  //   .end (function(err,res) {
  //   });
  // it("should grab all vehicle details from api GET", function(api) {
  //   chai.request(server)
  //   .get('/trades.api')
  //   .end(function(err,res) {
  //   });
  // it("should post vehicle details as a listing POST", function(post) {
  //   chai.request(server)
  //   .post('/trades')
  //   .end(function(err,res) {
  //   });
  // it("should delete posts per user command POST", function(delete) {
  //   chai.request(server)
  //   .post('/trades')
  //   .end(function(err,res) {
   });
