const Tweet = require("../Models/TweetModel");

const postNewtweet = (req, res) => {
  const tweet = new Tweet(req.body);
  tweet
    .save()
    .then((tweet) => res.send("Tweet Posted Successfully"))
    .catch((err) => res.send(err));
};

const getAllTweets = (req, res) => {
  Tweet.find({}, (err, tweet) => (!err ? res.send(tweet) : res.send(err)));
};

const getSpecificTweet = (req, res)=>{
  Tweet.findOne({_id:req.params.id}, (err, tweet) => (!err ? res.send(tweet) : res.send(err)));
}

const updateTweet = (req, res) => {
  Tweet.updateOne({ _id: req.params.id }, { $set: req.body }, (err) =>
    !err ? res.send("Tweet Updated") : res.send(err)
  );
};

module.exports = { postNewtweet, getAllTweets, getSpecificTweet, updateTweet };
