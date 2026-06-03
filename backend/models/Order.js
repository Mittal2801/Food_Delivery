const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  items: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food",
      },

      name: String,
      price: Number,
      quantity: Number,
    },
  ],

  totalAmount: Number,

  paymentMethod: {
    type: String,
    enum: ["ONLINE", "COD"],
  },

  status: {
    type: String,
    default: "Pending",
  },

}, {
  timestamps: true,
});

module.exports =
mongoose.model(
  "Order",
  orderSchema
);