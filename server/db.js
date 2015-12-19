var mongoose = require('mongoose');

// Load models
var models = {
    session: require('./schemas/session.js').model
};

// Connect based on database
// TODO: Staging database
exports.connect = function(env, cb) {
  var url = 'mongodb://jburgess:admin@ds057254.mongolab.com:57254/heroku_3zthx5rr';
  if (env === 'development') {
    url = 'mongodb://localhost:27017/test';
  } if (env === 'staging') {
    url = '??';
  }
  mongoose.connect(url, cb);
};

/**
 * updateSession
 * @param ip
 * @param session
 * @param cb
 */
exports.updateSession = function(ip, session, cb) {
  var conditions = { id: session.id };
  models.session.findOne(conditions, function(err, doc) {
    if (!doc) {
      // Create a new document
      var sessionUpdate = new models.session({
        id: session.id,
        ip: ip,
        path: session.path
      });
      sessionUpdate.save(cb);
    } else {

      // Update the old one
      doc.path = session.path;
      doc.save(cb);
    }
  });
};
