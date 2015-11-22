var mongoose = require('mongoose');

exports.model = mongoose.model('visit', mongoose.Schema(
  {
    ip: String,
    date: { type: Date, default: Date.now }
  }
));