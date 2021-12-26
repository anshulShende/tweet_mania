const mongoose = require("mongoose");

const TweetModel = mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    require: true
  },
  tweet: {
    type: String,
    require: true,
    trim: true,
    maxlenght: 256,
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
  likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  retweet: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model("Tweet", TweetModel);