var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var parserRouter = require('./routes/parser');
var financesRouter = require('./routes/finances');
var salesRouter = require('./routes/sales');
var productRouter = require('./routes/product');
var fs = require('fs');
var parser = require('xml2json');
var request = require('request');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/finances', financesRouter);
app.use('/sales', salesRouter);
app.use('/products', productRouter);
app.use('/', parserRouter);
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


if(process.argv.length === 2) {
  console.log('Missing path to saf-t file');
}

fs.readFile(process.argv[2], 'utf8', function(err, contents) {
  let json = null;
  if(err != null)
    console.log(err);
  else
    json = parser.toJson(contents);
    app.set('json', json);
});

request({
    uri: 'https://identity.primaverabss.com/connect/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    method: "POST",
    form: {
      grant_type: 'client_credentials',
      client_id: 'SNIF',
      client_secret: '9de5d54c-74fd-4d96-b068-311e3273e4b6',
      scope: 'application'
    }
  }, function(error, response, body) {
    app.set('api_token', JSON.parse(body));
});

app.set('users', [
  {
      type: 'Head of Sales',
      username: 'sales@snif.pt',
      password: 'sales'
  },
  {
      type: 'Head of Purchases',
      username: 'purchases@snif.pt',
      password: 'purchases'
  },
  {
      type: 'CEO',
      username: 'ceo@snif.pt',
      password: 'ceo'
  },
  {
      type: 'Shareholder',
      username: 'shareholder@snif.pt',
      password: 'shareholder'
  }
]);

module.exports = app;
