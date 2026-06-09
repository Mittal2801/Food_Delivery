import axios from "axios";

const API = "http://localhost:5000/api/foods";

// ADD FOOD
export const addFood = async (foodData) => {
  const res = await axios.post(
    `${API}/add`,
    foodData
  );

  return res.data;
};

// GET ALL FOODS
export const getFoods = async () => {
  const res = await axios.get(API);

  return res.data;
};

// GET FOODS BY CATEGORY
export const getFoodsByCategory = async (category) => {
  const res = await axios.get(
    `${API}/category/${category}`
  );

  return res.data;
};

// DELETE FOOD
export const deleteFood = async (id) => {
  const res = await axios.delete(
    `${API}/${id}`
  );

  return res.data;
};

// GET FOOD BY ID
export const getFoodById = async (id) => {
  const res = await axios.get(
    `${API}/${id}`
  );

  return res.data;
};

// GET RELATED FOODS
export const getRelatedFoods = async (
  category,
  id
) => {
  const res = await axios.get(
    `${API}/related/${category}/${id}`
  );

  return res.data;
};