const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  try {
    const userId = req.header("x-user-id"); // sent in request header
    if (!userId) return res.status(400).json({ message: "User ID missing" });

    const user = await User.findById(userId);
    if (!user || user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    req.user = user; // attach user info to request
    next();
  } catch (err) {
    res.status(500).json({ message: "Authorization failed", error: err.message });
  }
};

module.exports = isAdmin;