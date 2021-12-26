const User = require("../models/userModel");

const login = (req, res) => {
    username = req.body.username;
    password = req.body.password;
    User.findOne({ username: username, password: password }, (err, user) => {
      if (user.length == 0) {
        res.json({ message: "either username or password is wrong" });
      } else {
        res.send(`Welcome ${user.name}`);
      }
    });
  };

const signup = (req, res) => {
    const newUser = new User(req.body);
    newUser
      .save()
      .then((user) =>
        res.statusCode(200).send(`User Sign up successfully, Welcome ${user.name}`)
      )
      .catch((err) => {
        if (err.keyPattern.username == 1 || err.keyPattern.email == 1) {
          res.send(
            `Sorry, ${err.keyValue.username || err.keyValue.email} already exists`
          );
        }
      });
  };

  module.exports = { login, signup };