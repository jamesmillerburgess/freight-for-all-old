var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var User = mongoose.Schema({
  username: String,
  password: String
});

User.plugin(passportLocalMongoose);

exports.model= mongoose.model('user', User);
  /*
var userSchema = {
  username: String,
  password: String,
  email: String,
  gender: String,
  address: String
};  */



//exports.model = mongoose.model('user', mongoose.Schema(userSchema));