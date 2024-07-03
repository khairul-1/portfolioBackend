const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwtCode = process.env.JWT_CODE;

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({ email, password });

    await user.save();
    const token = jwt.sign({ userId: user._id, email: user.email }, jwtCode, {
      expiresIn: "1h",
    });
    res.status(201).json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.isPasswordMatch(password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ userId: user._id, email: user.email }, jwtCode, {
      expiresIn: "1h",
    });
    res.status(200).json({ token, userId: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
