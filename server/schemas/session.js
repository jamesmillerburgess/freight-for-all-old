var mongoose = require('mongoose');

var sessionSchema = {
  id: String,
  ip: String,
  path: [{
    url: String,
    date: Date
  }]
};

exports.model = mongoose.model('session', mongoose.Schema(sessionSchema));