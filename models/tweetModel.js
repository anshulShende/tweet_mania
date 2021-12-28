const mongoose = require("mongoose");

const TweetModel = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    require: true
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