const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");

// routes
router.post("/register", registerUser);
router.post("/api/users/login", loginUser);
router.get("/", getUsers);

module.exports = router;