const express = require("express");
const router = express.Router();

const { postNewtweet, updateTweet, getSpecificTweet } = require("../Controllers/Tweet");

router.post("/", postNewtweet);
router.get("/:id", getSpecificTweet);
router.patch("/:id", updateTweet);

module.exports = router;
