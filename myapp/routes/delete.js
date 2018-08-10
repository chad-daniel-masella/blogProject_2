var express = require('express');
var router = express.Router();
var dataBase = require('../db.json');
var request = require('request');

/* GET edit page. */
router.get('/:id', function(req, res, next) {
    
  var id;
  var posts = dataBase.posts;

  for(var i = 0 ;i< posts.length;i++){
    // looks for id , if id = URL param
    if(posts[i].id == req.params.id){
      // set id to i(index of post)
      id = i;
    }
  } 

  var id = req.params.id;
    var posts = dataBase.posts;
    
    request({
      uri: "http://localhost:8000/posts/" + req.params.id,
      method: "DELETE",
    },
    function(error, response, body) {
      // console.log(body);
      //send a response message
      res.render('delete', {message: 'Successfully Deleted.', posts: dataBase.posts});
    }
  );

  res.render('delete', { posts: posts, id: id });
});



router.post('/:id', function(req, res, next) {

  
    
});

module.exports = router;