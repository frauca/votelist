var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var lists = require('./routes/lists');

var monk = require('monk');

var app = express();

//conect to mongodb
var db = monk(process.env.MONGODB_URI||'localhost/mydb');

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/lists', lists);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500);
    res.sendFile('error.html', { root: path.join(__dirname, 'public/pages') });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(err.status || 500);
  res.sendFile('error.html', { root: path.join(__dirname, 'public/pages') });
});


module.exports = app;
