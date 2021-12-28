const express = require("express");
const router = express.Router();

const { toggleLikeforSpecificTweet, toggleRetweetforSpecificTweet, followUser, unfollowUser, fetchMyfeed, findPotentialFollowers } = require("../controllers/feedController");

// @Mapping("/feed")
router.post("/like", toggleLikeforSpecificTweet);
router.post("/retweet", toggleRetweetforSpecificTweet);
router.post("/follow", followUser);
router.post("/unfollow", unfollowUser);
router.get("/:userId", fetchMyfeed);
router.get("/searchFollowers/:userId", findPotentialFollowers);


module.exports = router;