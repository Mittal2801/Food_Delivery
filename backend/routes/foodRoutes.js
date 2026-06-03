const express = require("express");
const router = express.Router();

const multer = require("multer");

const {
  addFood,
  getFoods,
  getFoodsByCategory,
  deleteFood,getSingleFood,
  getRelatedFoods,
} = require("../controllers/foodController");

// image upload
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },

});

const upload = multer({ storage });

// ADD FOOD
router.post(
  "/add",
  upload.single("image"),
  addFood
);

// GET ALL FOODS
router.get("/", getFoods);

// GET CATEGORY FOODS
router.get(
  "/category/:category",
  getFoodsByCategory
);

router.get("/:id", getSingleFood);

router.delete("/:id", deleteFood);

module.exports = router;

const adminMiddleware =
require("../middleware/adminMiddleware");

router.post(
  "/add",
  upload.single("image"),
  adminMiddleware,
  addFood
);

router.get(
  "/related/:category/:id",
  getRelatedFoods
);