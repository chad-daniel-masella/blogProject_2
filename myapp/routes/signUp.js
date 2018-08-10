var express = require('express');
var router = express.Router();
var Users = require('../users.json');
var request = require('request');

/* GET signUp page. */
router.get('/', function(req, res, next) {
  res.render('signUp', { users: Users.users });
});  


// post content to users.json
router.post('/', function(req, res, next) {

  //test if data is coming through
  // res.send(req.body);

  //set a new dynamic id
  var id = Users.users.lenght;

  //make a post request to our database
  request({
  uri: "http://localhost:8080/users", 
  method: "POST",
  form: {
      id: id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  }
  }, function(error, response, body) {
      // console.log(body);
      //send a response message
      res.render('signUp', {message: 'Successfully Added.'});
      
  });
  // function verifySignUp(){
  //   alert('Congratulations,you have successfully sign up to "The Avenger"');
  // }
  // verifySignUp();
  res.redirect('/');
});

module.exports = router;

// name email password