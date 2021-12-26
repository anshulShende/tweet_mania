const Tweet = require('../models/tweetModel')

const toggleLikeforSpecificTweet = async (req, res) => {
    try {
      const tweet = await Tweet.findById(req.tweetId);

      if (tweet==null || tweet.length == 0) {
        return res.status(400).json({ message: 'Tweet does not exist' });
      }
      const liked = tweet.likes.indexOf(req.userId);

      if (liked === -1) {
        tweet.likes.push(req.userId)
      } else {
        tweet.likes.splice(liked, 1)
      }

      await tweet.save();
      return res.status(200).json({message: "Likes for tweet updated successfully", likes: tweet.likes.count()});
    } catch (err) {
        return res.status(400).json({ message: 'Error Occurred.. Please try Again' });
    }
}

const toggleRetweetforSpecificTweet = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.tweetId);

    if (tweet==null || tweet.length == 0) {
      return res.status(400).json({ message: 'Tweet does not exist' });
    }
    const retweets = tweet.retweet.indexOf(req.userId);

    if (retweets === -1) {
      tweet.retweets.push(req.userId)
    } else {
      tweet.retweets.splice(liked, 1)
    }

    await tweet.save();
    return res.status(200).json({message: "Retweets for tweet updated successfully", likes: tweet.retweets.count()});
  } catch (err) {
      return res.status(400).json({ message: 'Error Occurred.. Please try Again' });
  }
}

module.exports = { toggleLikeforSpecificTweet, toggleRetweetforSpecificTweet };