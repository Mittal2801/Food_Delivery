import axios from "axios";

const API = "https://food-delivery-0p1u.onrender.com";

// register
export const registerUser = async (userData) => {
  const res = await axios.post(
    `${API}/register`,
    userData
  );

  return res.data;
};

// login
export const loginUser = async (userData) => {
  const res = await axios.post(
    `${API}/login`,
    userData
  );

  return res.data;
};

// get users
export const getUsers = async () => {
  const res = await axios.get(API);
  return res.data;
};