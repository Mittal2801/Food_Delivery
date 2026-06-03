const Order = require("../models/Order");
const Cart = require("../models/Cart");

exports.placeOrder = async (req, res) => {

  try {

    const {
      userId,
      paymentMethod,
    } = req.body;

    const cartItems =
    await Cart.find({
      user: userId,
    }).populate("food");

    if (cartItems.length === 0) {

      return res.status(400).json({
        message: "Cart Empty",
      });

    }

    let total = 0;

    const items = cartItems.map((item) => {

      total +=
      item.food.price *
      item.quantity;

      return {

        foodId: item.food._id,

        name: item.food.name,

        price: item.food.price,

        quantity: item.quantity,

      };

    });

    const order =
    await Order.create({

      userId,

      items,

      totalAmount: total,

      paymentMethod,

    });

    await Cart.deleteMany({
      user: userId,
    });

    res.status(200).json({

      message:
      "Order Placed Successfully",

      order,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

};

exports.getOrders = async (req, res) => {

  const orders =
  await Order.find({

    userId:
    req.params.userId,

  });

  res.json(orders);

};

exports.getAllOrders = async (req, res) => {

  try {

    const orders = await Order.find()
      .sort({ createdAt: -1 });

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};

exports.updateOrderStatus = async (req, res) => {

  try {

    const { status } = req.body;

    const order =
    await Order.findByIdAndUpdate(

      req.params.id,

      { status },

      { new: true }

    );

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

};