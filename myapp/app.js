var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
// posts db.json
var data = fs.readFileSync('db.json');
var db = JSON.parse(data); 
// users users.json
var dataUsers = fs.readFileSync('users.json');
var users = JSON.parse(dataUsers);

// convert users database file ...

// Routes - STEP ONE
var indexRouter = require('./routes/index');
var archieveRouter = require('./routes/archieve');
var createRouter = require('./routes/create');
var viewRouter = require('./routes/view');
var editRouter = require('./routes/edit');
var deleteRouter = require('./routes/delete');
var signUpRouter = require('./routes/signUp');
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app uses - STEP TWO
app.use('/', indexRouter);
app.use('/archieve', archieveRouter);
app.use('/create', createRouter);
app.use('/view', viewRouter);
app.use('/edit', editRouter);
app.use('/delete', deleteRouter);
app.use('/signUp', signUpRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
