const User = require("../models/userModel");

const login = async(req, res) => {
  username = req.body.username;
  password = req.body.password;
  try{
    let user = await User.findOneAndUpdate({ username: username, password: password }, { isLoggedIn: true },{new: true});
    if (user==null || user.length == 0) {
      res.status(401).json({ message: "either username or password is wrong" });
    }
    console.log(user);
    res.status(200).json({user: user, message: `${username} Logged in Succeddfully`});
  } catch(err){
    res.status(400).json({ message: "Error occured.. Try After Sometime...." });
  }
} 

const signup = (req, res) => {
  const newUser = new User(req.body);
  console.log(newUser);
  newUser
    .save()
    .then((user) =>
      res.status(200).json({ user: user, message: `User Sign up successfully, Welcome ${user.name}`}))
    .catch((err) => {
      console.log(err);
      if (err.keyPattern.username == 1 || err.keyPattern.email == 1) {
        res.status(400).json(`Sorry, ${err.keyValue.username || err.keyValue.email} already exists`);
      }
  });
};

const logout = async(req, res) => {
  console.log(req.params.id);
  try{
    await User.updateOne({ _id: req.params.id }, { isLoggedIn: false });
    res.status(200).json({message: "User Logged out Successfully"});
  } catch(err) {
    res.status(400).json({ message: "Error occured.. Try After Sometime" });
  }
};

module.exports = { login, signup, logout };