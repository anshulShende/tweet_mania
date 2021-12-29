const express = require("express");
const router = express.Router();
const { getAllUsers, getSpecificUser, deleteSpecificUser, updateUser, fetchUserProfile } = require("../controllers/userController");

// @Mapping("/users")
router.get("/", getAllUsers)
router.get("/:username", getSpecificUser);
router.delete("/:username", deleteSpecificUser)
router.patch("/", updateUser);
router.get("/fetchUserProfile/:userId", fetchUserProfile);

module.exports = router;
