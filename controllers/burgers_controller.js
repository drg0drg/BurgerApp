// Require express, burger and router
var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();


// When "/" is hit, send user to "/index"
router.get('/', (req, res) => {
  res.redirect('/index');
});


// Getting all burgers and feeding them to front end "/index" hitpoint
router.get('/index',  (req, res) => {
  burger.selectAll( data => {
    //take all info in burgers table and place into a variable
    const brgObject = { burgers: data };
    //render index file using that variable containing burgers table info
    res.render('index', brgObject);
  });
});

// Creating a new burger
router.post('/burger/create', (req, res) => {
  //take the data from front end with req.body.burger_name 
  //and call insertOne method (defined in orm.js) to update table in db
  burger.insertOne(req.body.burger_name, () => {
    res.redirect('/index');
  });
});

// Eating a Burger
router.post('/burger/eat/:id', (req, res) => {
  //take the specific id with req.params.id 
  //and call updateOne method (defined in orm.js) to change the "devoured" state to true
  burger.updateOne(req.params.id, () => {
    res.redirect('/index');
  });
});

// Export router
module.exports = router;