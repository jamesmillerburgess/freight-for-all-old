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

exports.logVisit = function(ip, session, cb) {
  var conditions = { id: session.id };
  models.visit.findOne(conditions, function(err, doc) {
    console.log('error: '+err);
    if (!doc) {
      var visit = new models.visit({
        id: session.id,
        ip: ip,
        path: session.path
      });
      visit.save(cb);
    } else {
      console.log(doc);
      doc.path = session.path;
      doc.save(cb);
    }
  });
};
