const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const { userId, foodId } = req.body;

    let item = await Cart.findOne({
      user: userId,
      food: foodId,
    });

    if (item) {
      item.quantity += 1;
      await item.save();

      return res.json({
        message: "Food Added Successfully",
      });
    }

    await Cart.create({
      user: userId,
      food: foodId,
      quantity: 1,
    });

    res.json({
      message: "Food Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      user: req.params.userId,
    }).populate("food");

    res.json(cart);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.increaseQty = async (req, res) => {
  const item = await Cart.findById(req.params.id);

  item.quantity++;

  await item.save();

  res.json(item);
};

exports.decreaseQty = async (req, res) => {
  const item = await Cart.findById(req.params.id);

  if (item.quantity > 1) {
    item.quantity--;
    await item.save();
  }

  res.json(item);
};

exports.removeItem = async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);

  res.json({
    message: "Item Removed",
  });
};