const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.create({ username, password });
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(400).json({ error: "Username may already exist" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });
  res.json({ message: "Login successful", user });
};