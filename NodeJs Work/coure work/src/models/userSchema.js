const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

userSchema.methods.genAuthToken = function (){
  return jwt.sign({ _id: this._id, name: this.name, email: this.email  }, process.env.JWT_KEY);
}

const User = mongoose.model('User', userSchema);

module.exports =  User;