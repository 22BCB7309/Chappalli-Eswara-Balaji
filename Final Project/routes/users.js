const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a new user
router.post("/register", async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const newUser = new User({ name, email, role }); // role can be "admin" or "user"
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // You can use .select('-password') to exclude fields
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users", error: err.message });
  }
});

module.exports = router;
