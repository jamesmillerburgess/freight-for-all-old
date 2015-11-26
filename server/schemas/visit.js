var mongoose = require('mongoose');

var visitSchema = {
  id: String,
  ip: String,
  path: [{
    url: String,
    date: Date
  }]
};

exports.model = mongoose.model('visit', mongoose.Schema(visitSchema));