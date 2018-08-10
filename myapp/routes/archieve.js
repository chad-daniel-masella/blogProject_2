var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

/* GET archieve page. */
router.get('/', function(req, res, next) {
  var id = req.params.id;
  res.render('archieve', { posts: Posts.posts });
}); 
 
module.exports = router;

