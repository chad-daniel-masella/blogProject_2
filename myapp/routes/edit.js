var express = require('express');
var router = express.Router();
var dataBase = require('../db.json');
var request = require('request');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

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

  res.render('edit', { posts: posts, id: id });
});



router.post('/:id', function(req, res, next) {
  
    var id = req.params.id;
    var posts = dataBase.posts;
    
    request({
      uri: "http://localhost:8000/posts/" + req.params.id,
      method: "PATCH",
      form: {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        content: req.body.content
      }
    },
    function(error, response, body) {
      // console.log(body);
      //send a response message
      res.render('index', {message: 'Successfully Added.', posts: dataBase.posts});
    }
  );

    
  // res.render('view', { 
  //   posts: dataBase,
  //   id : id,
  //  });
});

module.exports = router;