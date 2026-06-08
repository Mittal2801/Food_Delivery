const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  addFood,
  getFoods,
  getFoodsByCategory,
  deleteFood,
  getSingleFood,
  getRelatedFoods,
} = require("../controllers/foodController");

const adminMiddleware =
  require("../middleware/adminMiddleware");

// IMAGE UPLOAD
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// GET ALL FOODS
router.get("/", getFoods);

// GET CATEGORY FOODS
router.get(
  "/category/:category",
  getFoodsByCategory
);

// GET RELATED FOODS
router.get(
  "/related/:category/:id",
  getRelatedFoods
);

// GET SINGLE FOOD
router.get("/:id", getSingleFood);

// DELETE FOOD
router.delete("/:id", deleteFood);

// ADD FOOD
router.post(
  "/add",
  upload.single("image"),
  adminMiddleware,
  addFood
);

module.exports = router;