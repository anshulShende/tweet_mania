const Tweet = require("../models/tweetModel");

const postNewtweet = (req, res) => {
  console.log(req.body);
  const newtweet = new Tweet(req.body);
  console.log(newtweet);
  newtweet
    .save()
    .then((tweet) => res.status(200).json({tweet: tweet, message: "Tweet Posted Successfully"}))
    .catch((err) => res.status(400).json({message: "Error occured while posting a Tweet. Please try again after sometime"}));
};

const getSpecificTweet = (req, res)=>{
  Tweet.findOne({_id:req.params.id}, (err, tweet) => { 
    if(err){
      res.status(400).json({message: "Error Occurred. Please Try Again"});
    } else{
      res.status(200).json({tweet: tweet, message: "Tweet fectched successfully" });
    }
  });
};

const updateTweet = (req, res) => {
  Tweet.updateOne({ _id: req.params.id }, { $set: req.body }, (err) =>
    !err ? res.status(200).json({message: "Tweet updated successfully" }) : res.status(400).json({message: "Error Occurred. Please Try Again"})
  );
};

const fetchAlltweetsBySpecificUser = (req,res) => {
  Tweet.find({userId: req.params.userId}, (err, tweets) => {
    if(err){
      res.status(400).json({message: "Error Occurred. Please Try Again"});
    } else{
      if(tweets==null || tweets.length == 0){
        res.status(200).json({message: `No Tweets were posted by ${req.param.userId}` });
      }else {
        res.status(200).json({tweets: tweets, message: "Tweets fectched successfully" });
      }
    }
  });
}

module.exports = { postNewtweet, getSpecificTweet, updateTweet, fetchAlltweetsBySpecificUser };
