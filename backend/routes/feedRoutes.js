const express = require("express");
const router = express.Router();

const { toggleLikeforSpecificTweet, toggleRetweetforSpecificTweet } = require("../controllers/feedController");

// @Mapping("/feed")
router.post("/like", toggleLikeforSpecificTweet);
router.post("/retweet", toggleRetweetforSpecificTweet);


module.exports = router;