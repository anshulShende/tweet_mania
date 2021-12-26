const express = require("express");
const router = express.Router();
const { getAllUsers, getSpecificUser, deleteSpecificUser, updateUser} = require("../controllers/users");

// /user
router.get("/", getAllUsers)
router.get("/:username", getSpecificUser);
router.delete("/:username", deleteSpecificUser)
router.patch("/:username", updateUser);

module.exports = router;
