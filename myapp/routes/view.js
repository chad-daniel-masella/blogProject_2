var express = require('express');
var router = express.Router();
var dataBase = require('../db.json');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET home page. */
router.get('/:id', function(req, res, next) {
  
    var id = req.params.id;
    var posts = dataBase.posts;

    // looops thru dataBase
    for(var i = 0 ;i< posts.length;i++){
      // looks for id , if id = URL param
      if(posts[i].id == id){
        // set id to i(index of post)
        id = i;
      }
    }

    
  res.render('view', { 
    posts: posts,
    id : id,
   });
});

module.exports = router;

 