import axios from "axios";

const API = "http://localhost:5000/api/users";

// register
export const registerUser = async (userData) => {
  const res = await axios.post(
    `${API}/api/users/register`,
    userData
  );

  return res.data;
};

// login
export const loginUser = async (userData) => {
  const res = await axios.post(
    "http://localhost:5000/api/users/login",
    userData
  );

  return res.data;
};

// get users
export const getUsers = async () => {
  const res = await axios.get(API);
  return res.data;
};