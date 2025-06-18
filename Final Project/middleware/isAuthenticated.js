// middleware/isAuthenticated.js
const User = require('../models/User');

const isAuthenticated = async (req, res, next) => {
  try {
    const userId = req.header("x-user-id");
    if (!userId) return res.status(401).json({ message: "User ID missing" });

    const user = await User.findById(userId);
    if (!user) return res.status(401).json({ message: "Invalid user" });

    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({ message: "Authentication error", error: err.message });
  }
};

module.exports = isAuthenticated;
