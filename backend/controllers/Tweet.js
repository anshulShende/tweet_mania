const Tweet = require("../Models/TweetModel");

const postNewtweet = (req, res) => {
  const tweet = new Tweet(req.body);
  tweet
    .save()
    .then((tweet) => res.status(200).json({message: "Tweet Posted Successfully"}))
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

module.exports = { postNewtweet, getSpecificTweet, updateTweet };
