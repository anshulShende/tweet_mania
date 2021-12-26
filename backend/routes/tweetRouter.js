const express = require("express");
const router = express.Router();

const { postNewtweet, getAllTweets, updateTweet, getSpecificTweet } = require("../Controllers/Tweet");

router.get("/", getAllTweets);
router.get("/:id", getSpecificTweet);
router.post("/", postNewtweet);
router.patch("/:id", updateTweet);

module.exports = router;
