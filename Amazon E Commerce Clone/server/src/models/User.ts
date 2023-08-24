import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    default: ''
  },
  fullname: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  password: {
    type: String,
    default: '',
  },
  phonenumber: {
    type: String,
    default: '',
  },
  otp: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;