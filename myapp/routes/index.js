var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { posts: Posts.posts });
});  

// router.get('/:')

module.exports = router;
  
