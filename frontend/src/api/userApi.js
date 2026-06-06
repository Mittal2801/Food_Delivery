const API = "https://food-delivery-0p1u.onrender.com";

export const registerUser = async (userData) => {
  const res = await axios.post(
    `${API}/api/users/register`,
    userData
  );
  return res.data;
};

export const loginUser = async (userData) => {
  const res = await axios.post(
    `${API}/api/users/login`,
    userData
  );
  return res.data;
};