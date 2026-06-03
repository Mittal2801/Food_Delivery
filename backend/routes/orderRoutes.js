const express = require("express");
const router = express.Router();

const {
  placeOrder,
  getOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

router.post("/place", placeOrder);

router.get("/", getAllOrders);

router.get("/:userId", getOrders);

router.put(
  "/status/:id",
  updateOrderStatus
);

router.get(
  "/admin/all",
  getAllOrders
);

module.exports = router;