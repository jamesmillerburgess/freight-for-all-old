var mongoose = require('mongoose');

exports.model = mongoose.model('visit', mongoose.Schema(
  {
    session: String,
    ip: String,
    path: Array,
    date: { type: Date, default: Date.now }
  }
));