// require in express, and set up routing for it, and bring in
// the burger.js model file
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// add a '/index/' endpoint that gets all the burgers
// then renders the index file by passing in all the burgers
// as an object for handlebars to use
router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {burgers: data};
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

// add a '/burgers/insertOne' endpoint that posts the 
// burger name the user entered then as a callback it
// redirects back to the /index route
router.post('/burgers/create', function(req, res) {
  burger.create(['burger_name', 'devoured'], [req.body.name, false], function() {
    res.redirect('/');
  });
});

// add a '/burgers/updateOne/:id' route that updates
// the status of the burger from being uneaten to eaten
// then does a callback that redirects to the /index endpoint
router.put('/burgers/update/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  console.log('condition', condition);

  burger.update({devoured: req.body.devoured}, condition, function() {
    res.redirect('/');
  });
});

// export the router (controller) back to the server
module.exports = router;