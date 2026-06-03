const Food = require("../models/Food");

// ADD FOOD
exports.addFood = async (req, res) => {

  try {

    const {
      name,
      restaurant,
      category,
      area,
      price,
    } = req.body;

    const food = await Food.create({

      name,
      restaurant,
      category,
      area,
      price,

      image: req.file.filename,

    });

    res.status(201).json({
      message: "Food Added Successfully",
      food,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// GET FOOD
exports.getFoods = async (req, res) => {

  try {

    const foods = await Food.find();

    res.json(foods);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// GET FOOD BY CATEGORY
exports.getFoodsByCategory = async (req, res) => {

  try {

    console.log(req.params.category);

    const foods = await Food.find({
      category: {
        $regex: req.params.category,
        $options: "i",
      },
    });

    console.log(foods);

    res.json(foods);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// DELETE FOOD
exports.deleteFood = async (req, res) => {

  try {

    const deletedFood =
      await Food.findByIdAndDelete(
        req.params.id
      );

    if (!deletedFood) {

      return res.status(404).json({
        message: "Food not found",
      });

    }

    res.json({
      message: "Food Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

exports.getSingleFood = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.json(food);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getRelatedFoods = async (req, res) => {
  try {

    const { category, id } = req.params;

    const foods = await Food.find({
      category,
      _id: { $ne: id }
    }).limit(4);

    res.json(foods);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};