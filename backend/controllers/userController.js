const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    res.send(user);
  });
};

const getSpecificUser = (req, res) => {
  User.find({ username: req.params.username }, (err, user) => {
    if (user==null || user.length == 0) {
      res.status(400).json({result: "Error", message: `User with ${username} doesn't exists` });
    } else {
      res.status(200).json({result: "Success", user: user, message: "User fetched Successfully"});
    }
  });
};

const deleteSpecificUser = async(req, res) => {
  const username = req.params.username;
  let user = await User.findOne({ username: req.params.username });
  if(user!=null && user.length == 1){
    User.deleteOne({ _id: user._id }, (err) =>
    !err ? res.status(200).json({result: "Success", message: `${username} is deleted successfully`}) : res.status(400).json({message: "Error Ocurred. Please try After Sometime"}));
  } else {
    res.status(400).json({result: "Error", message: `No User found with username: ${username}`});
  }
  
};

const updateUser = (req, res) => {
  User.updateOne(
    { username: req.body.username },
    { $set: req.body },
    (err) => {
      if (!err) {
        res.statusCode(200).json({result: "Success", message: "User Updated successfully"});
      } else {
        if (err.keyPattern.username == 1 || err.keyPattern.email == 1) {
          res.statusCode(400).json({result: "Error", message: `Sorry, ${err.keyValue.username || err.keyValue.email} is taken already`});
        }
      }
    }
  );
};

module.exports = { getAllUsers, getSpecificUser, deleteSpecificUser, updateUser };
