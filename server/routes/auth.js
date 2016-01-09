var express = require('express');
var router  = express.Router();

var User = require('../schemas/user');

// define the home page route
router.post('/register', function (req, res) {
  res.send('Registered');
});

router.post('/login', function (req, res) {
  res.send('Cannot log in');
});

router.post('/logout', function (req, res) {
  res.send('Cannot log out');
});

module.exports = router;