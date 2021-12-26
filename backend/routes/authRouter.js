const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/auth");

// @Mapping("/auth")
router.post("/login", login);
router.get("/signup", signup);


module.exports = router;