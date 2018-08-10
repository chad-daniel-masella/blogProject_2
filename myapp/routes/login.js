var express = require('express');
var router = express.Router();
var users = require('../users.json');

/* GET sign in page */
router.get('/',function(req,res,next){

  res.render('login',
  {
    title : "login",
    signError : req.app.locals.signError,
  });

});

// to sign in
router.post('/', function(req, res,next){

  // get stuff from the body
  var formName = req.body.name;
  var formPassword = req.body.password;

  // checks through the users in the database
  for(var i = 0;i < users.length;i++){

    // if username and password are correct
    if(users[i].name == formName || users[i].password == formPassword){

      // creates a cookie
      // res.cookie('userId',users[i].id);

      // sets logUser to the correct username
      formName = users[i].name;
      // console.log(req.cookies);
      // sets the correct sign in variables
      req.app.locals.name = formName ;
      req.app.locals.userIndex = i;
      req.app.locals.signError = "Log In Successfull";

      // goes to home page after successful sign in
      res.redirect('/');
    }
  };

  // checks if the user signed in correctly
  if (req.app.locals.name != formName) {
    // if not
    // say the password and username are incorrect
    req.app.locals.signError = "Username or Password Incorrect!";
  };
    res.redirect('/sign_in');
});

module.exports = router;