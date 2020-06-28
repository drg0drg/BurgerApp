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
    const brgObject = { burgers: data };
    //console.log(brgObject);
    res.render('index', brgObject);
  });
});

// Creating a new burger
router.post('/burger/create', (req, res) => {
  burger.insertOne(req.body.burger_name, () => {
    res.redirect('/index');
  });
});

// Eating a Burger
router.post('/burger/eat/:id', (req, res) => {
  burger.updateOne(req.params.id, () => {
    res.redirect('/index');
  });
});

// Export router
module.exports = router;