
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LoginSchema   = new Schema({
    login: String,
    password : String,
    email : String
});

module.exports = mongoose.model('Login', LoginSchema);