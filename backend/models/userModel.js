const mongoose = require("mongoose");

//Getting a formated joining date
var options = { year: "numeric", month: "long", day: "numeric" };
var today = new Date();
const date = today.toLocaleDateString("en-US", options);

const userSchema = mongoose.Schema({
  username: {
    type: String,
    maxlenght: 32,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    maxlenght: 32,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    maxlenght: 32,
    trim: true,
  },
  bio: {
    type: String,
    maxlenght: 180,
    trim: true,
  },
  joiningDate: {
    type:String,
    default:Date.now()
  },
  followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  follows: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  isLoggedIn: {
    type: Boolean,
    require: true,
    default: true
  }
});

module.exports = mongoose.model("User", userSchema);
