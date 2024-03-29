const Tweet = require("../models/tweetModel");

const postNewtweet = (req, res) => {
  console.log(req.body);
  const newtweet = new Tweet(req.body);
  console.log(newtweet);
  newtweet
    .save()
    .then((tweet) => res.status(200).json({result: "Success", tweet: tweet, message: "Tweet Posted Successfully"}))
    .catch((err) => res.status(400).json({result: "Error", message: "Error occured while posting a Tweet. Please try again after sometime"}));
};

const getSpecificTweet = (req, res)=>{
  Tweet.findOne({_id:req.params.id}, (err, tweet) => { 
    if(err){
      res.status(400).json({result: "Error", message: "Error Occurred. Please Try Again"});
    } else{
      res.status(200).json({result: "Success", tweet: tweet, message: "Tweet fectched successfully" });
    }
  });
};

const updateTweet = (req, res) => {
  Tweet.updateOne({ _id: req.params.id }, { $set: req.body }, (err) =>
    !err ? res.status(200).json({result: "Success", message: "Tweet updated successfully" }) : res.status(400).json({message: "Error Occurred. Please Try Again"})
  );
};

const fetchAlltweetsBySpecificUser = (req,res) => {
  Tweet.find({userId: req.params.userId}, (err, tweets) => {
    if(err){
      return res.status(400).json({result: "Error", message: "Error Occurred. Please Try Again"});
    } else{
      if(tweets==null || tweets.length == 0){
        return res.status(200).json({result: "Success", message: `No Tweets were posted by ${req.param.userId}` });
      }else {
        return res.status(200).json({result: "Success", tweets: tweets, message: "Tweets fectched successfully" });
      }
    }
  });
}

module.exports = { postNewtweet, getSpecificTweet, updateTweet, fetchAlltweetsBySpecificUser };
