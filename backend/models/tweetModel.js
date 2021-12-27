const mongoose = require("mongoose");

const TweetModel = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    require: true
  },
  name: {
    type: String,
    maxlength: 32,
    required: true,
    trim: true,
  },
  username:{
    type: String,
    maxlenght: 32,
    required: true,
    trim: true,
  },
  tweetContent: {
    type: String,
    require: true,
    trim: true,
    maxlength: 256,
  },
  createdAt: {
    type: String,
    default: new Date().toISOString().replace('T', " ").slice(0,19),
  },
  likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  retweet: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model("Tweet", TweetModel);