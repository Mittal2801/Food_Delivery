import axios from "axios";

const API =
"https://food-delivery-0p1u.onrender.com";

export const addToCart =
async (data) => {

  const res =
  await axios.post(
    `${API}/add`,
    data
  );

  return res.data;
};

export const getCart =
async (userId) => {

  const res =
  await axios.get(
    `${API}/${userId}`
  );

  return res.data;
};

export const increaseQty =
async (id) => {

  await axios.put(
    `${API}/increase/${id}`
  );
};

export const decreaseQty =
async (id) => {

  await axios.put(
    `${API}/decrease/${id}`
  );
};

export const removeItem =
async (id) => {

  await axios.delete(
    `${API}/${id}`
  );
};