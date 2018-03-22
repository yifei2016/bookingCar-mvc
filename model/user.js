var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  email: {
    type: String,
    required: 'email must have a tilte',
    unique: true
  },
  password: String,
  role: String
})
module.exports = mongoose.model('User', userSchema)
