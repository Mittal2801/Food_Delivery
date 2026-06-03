// controllers/dashboardController.js

const User = require("../models/User");
const Food = require("../models/Food");
const Order = require("../models/Order");

exports.getDashboard = async (req, res) => {

  try {

    const totalUsers =
    await User.countDocuments();

    const totalFoods =
    await Food.countDocuments();

    const totalOrders =
    await Order.countDocuments();

    const orders =
    await Order.find();

    const totalRevenue =
    orders.reduce(

      (sum, order) =>

      sum + order.totalAmount,

      0

    );

    res.json({

      totalUsers,

      totalFoods,

      totalOrders,

      totalRevenue,

    });

  } catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};