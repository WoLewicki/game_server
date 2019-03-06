var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var gamesRouter = require('./routes/games/games');
var ajaxtictacRouter = require('./routes/games/ajtt');
var tttRouter = require('./routes/games/ttt');
var gogRouter = require('./routes/games/gog');
var elseRouter = require('./routes/games/else');

var eskulapRouter = require('./routes/eskulap/home');

var app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'views'), path.join(__dirname, 'views/games'), path.join(__dirname, 'views/eskulap')]);
app.set('view engine', 'ejs');
app.engine('ejs', require('express-ejs-extend'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/games', gamesRouter);
app.use('/games/ajtt', ajaxtictacRouter);
app.use('/games/ttt', tttRouter);
app.use('/games/gog', gogRouter);
app.use('/games/else', elseRouter);
app.use('/eskulap', eskulapRouter);


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
