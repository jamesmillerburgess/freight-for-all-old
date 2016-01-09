var express = require('express');
var session = require('express-session');
var app = express();

// Set environment variables
app.set('port', (process.env.PORT || 5000));
app.set('env', (process.env.NODE_ENV = process.env.NODE_ENV || 'development'));

// Connect to database
var db = require('./server/db.js');
db.connect(app.get('env'));

var routes = require('./routes.js');





// Set up sessions
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));

/**
 * Routing
 **/

// 1) Log visit
app.all('/*', function (req, res, next) {
  db.updateSession(req.header('x-forwarded-for') ||
                   req.connection.remoteAddress, req.session, next());
});

// 2) Update path
app.all('/*', function (req, res, next) {
  var pathNext = {
    url: req.url,
    date: Date.now()
  };
  if (!req.session.path) {
    req.session.path = [];
  }
  req.session.path.push(pathNext);
  next();
});

// 3) Serve static content
app.use('/', express.static('./client/'));
app.use('/jquery/', express.static('./node_modules/jquery/dist'));
app.use('/angular2/', express.static('./node_modules/angular2/bundles/'));
app.use('/bootstrap/', express.static('./node_modules/bootstrap/dist'));
app.use('/systemjs/', express.static('./node_modules/systemjs/dist'));


var passport      = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({username: username}, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message: 'Incorrect username.'});
      }
      if (!user.validPassword(password)) {
        return done(null, false, {message: 'Incorrect password.'});
      }
      return done(null, user);
    });
  }
));


// Start app
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});


