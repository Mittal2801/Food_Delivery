import axios from "axios";

const API = "http://localhost:5000/api/orders";

export const placeOrder = async (data) => {
  const res = await axios.post(
    `${API}/place`,
    data
  );

  return res.data;
};

export const getOrders = async (userId) => {
  const res = await axios.get(
    `${API}/${userId}`
  );

  return res.data;
};

export const getAllOrders = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const updateOrderStatus = async (id, status) => {
  const res = await axios.put(
    `${API}/status/${id}`,
    { status }
  );

  return res.data;
};