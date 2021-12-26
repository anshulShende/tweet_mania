const User = require("../models/userModel");

const getAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    res.send(user);
  });
};

const getSpecificUser = (req, res) => {
  User.find({ username: req.params.username }, (err, user) => {
    if (user.length == 0) {
      res.json({ message: "User doesn't exists" });
    } else {
      res.send(user);
    }
  });
};

const deleteAllUser = (req, res) => {
  User.deleteMany({}, (err) =>
    !err ? res.send("Deleted all users from DB successfuly") : res.send(err)
  );
};

const deleteSpecificUser = (req, res) => {
  const param = req.params.username;
  User.deleteOne({ username: param }, (err) =>
    !err ? res.send(param + " is deleted successfuly") : res.send(err)
  );
};


const updateUser = (req, res) => {
  User.updateOne(
    { username: req.params.username },
    { $set: req.body },
    (err) => {
      if (!err) {
        res.statusCode(200).send("User Updated successfully");
      } else {
        if (err.keyPattern.username == 1 || err.keyPattern.email == 1) {
          res.statusCode(402).send(
            `Sorry, ${
              err.keyValue.username || err.keyValue.email
            } is taken already`
          );
        }
      }
    }
  );
};

module.exports = { getAllUsers, getSpecificUser, deleteAllUser, deleteSpecificUser, updateUser };
