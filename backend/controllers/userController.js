const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const generateToken = require("../config/generateToke");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  //如果都是空的，没输入
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the fields!");
  }

  //如果已经存在了该user
  const userExists = await User.findOne({ email }); //query in database
  if (userExists) {
    res.status;
    throw new Error("User already exists!");
  }

  //如果需要create一个新的user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  //如果user不是空的，新建一个mongodb的条目
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create the user!");
  }
});

//creat 一个对象 authUser
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password, failed to create the user!");
  }
});

// 网址应该是/api/user?search=lingyunxiao，通过query keyword来
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        //search in mongoDB
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  //关键字匹配
  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
});
module.exports = { registerUser, authUser, allUsers };
