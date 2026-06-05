const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const userExists = await User.findOne({
      email,
    });

    if (userExists) {

      return res.status(400).json({
        message: "User Already Exists",
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({

      name,
      email,
      password: hashedPassword,

    });

    res.status(201).json({
      message: "Registration Successful",
      user,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// LOGIN
exports.loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400).json({
        message: "User Not Found",
      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Password",
      });

    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({

      token,

      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

// GET USERS
exports.getUsers = async (req, res) => {

  try {

    const users =
      await User.find();

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};