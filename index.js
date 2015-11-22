var express = require('express');

// Set environment variables
var app = express();
app.set('port', (process.env.PORT || 5000));
app.set('env', (process.env.NODE_ENV = process.env.NODE_ENV || 'development'));

// Connect to database
var db = require('./server/db.js');
db.connect(app.get('env'));

/**
 * Routing
 **/

// 1) Log visit
app.all('/', function(req, res, next) {
  db.logVisit(req.header('x-forwarded-for') || req.connection.remoteAddress, next());
});

// 2) Serve static content
app.use('/', express.static('./views/pages'));

// Start app
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


