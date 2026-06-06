import axios from "axios";

const API = "https://food-delivery-0p1u.onrender.com";

// add food
export const addFood = async (foodData) => {

  const res = await axios.post(
    `${API}/add`,
    foodData
  );

  return res.data;
};

// get foods
export const getFoods = async () => {

  const res = await axios.get(API);

  return res.data;
};

// GET FOOD BY CATEGORY
export const getFoodsByCategory = async (
  category
) => {

  const res = await axios.get(
    `http://localhost:5000/api/foods/category/${category}`
  );

  return res.data;
};

// DELETE FOOD
export const deleteFood = async (id) => {

  const res = await axios.delete(
    `http://localhost:5000/api/foods/${id}`
  );

  return res.data;
};

export const getFoodById = async (id) => {
  const res = await axios.get(
    `http://localhost:5000/api/foods/${id}`
  );

  return res.data;
};

export const getRelatedFoods =
async (category, id) => {

  const res = await axios.get(
    `http://localhost:5000/api/foods/related/${category}/${id}`
  );

  return res.data;

};