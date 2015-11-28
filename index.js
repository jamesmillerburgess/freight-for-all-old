var express = require('express');
var session = require('express-session');

// Set environment variables
var app = express();
app.set('port', (process.env.PORT || 5000));
app.set('env', (process.env.NODE_ENV = process.env.NODE_ENV || 'development'));

// Connect to database
var db = require('./server/db.js');
db.connect(app.get('env'));

// Set up sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

/**
 * Routing
 **/

// 1) Log visit
app.all('/*', function(req, res, next) {
  db.updateSession(req.header('x-forwarded-for') || req.connection.remoteAddress, req.session, next());
});

// 2) Update path
app.all('/*', function(req, res, next) {
  var pathNext = {
    url: req.url,
    date: Date.now()
  };
  if(!req.session.path) {
    req.session.path = [];
  }
  req.session.path.push(pathNext);
  next();
});

// 3) Serve static content
app.use('/', express.static('./views/pages'));

// Start app
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


