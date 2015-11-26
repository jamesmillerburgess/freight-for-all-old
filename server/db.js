var mongoose = require('mongoose');
var models = {
    visit: require('./schemas/visit.js').model
};

exports.connect = function(env, cb) {
  if (env === 'development') {
    mongoose.connect('mongodb://localhost:27017/test', cb);
  } else {
    mongoose.connect('mongodb://jburgess:admin@ds057254.mongolab.com:57254/heroku_3zthx5rr', cb);
  }
};

exports.logVisit = function(ip, path, cb) {
  var visit = new models.visit({
    ip: ip,
    path: path
  });
  visit.save(cb);
};
