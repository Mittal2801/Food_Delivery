const express = require("express");

const router = express.Router();

const {
  addToCart,
  getCart,
  increaseQty,
  decreaseQty,
  removeItem,
} = require("../controllers/cartController");

router.post("/add", addToCart);

router.get("/:userId", getCart);

router.put("/increase/:id", increaseQty);

router.put("/decrease/:id", decreaseQty);

router.delete("/:id", removeItem);

module.exports = router;