const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const isAdmin = require("../middleware/isAdmin");
const isAuthenticated = require("../middleware/isAuthenticated");

router.get("/",isAuthenticated, getTasks);
router.post("/", isAdmin, createTask);
router.put("/:id", isAdmin, updateTask);
router.delete("/:id", isAdmin, deleteTask);

module.exports = router;