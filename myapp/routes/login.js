var express = require('express');
var router = express.Router();
var Users = require('../users.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { users: Users.users });
});  

// router.get('/:')

module.exports = router;