const express = require("express");
const router = express.Router();

const { postNewtweet, updateTweet, getSpecificTweet, fetchAlltweetsBySpecificUser } = require("../controllers/TweetController");

// @Mapping("/tweet")
router.post("/", postNewtweet);
router.get("/:id", getSpecificTweet);
router.patch("/:id", updateTweet);
router.get("/fetchByUserId/:userId", fetchAlltweetsBySpecificUser);

module.exports = router;
