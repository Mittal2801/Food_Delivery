import axios from "axios";

const API =
"https://food-delivery-0p1u.onrender.com";

export const createOrder =
async (amount) => {

  const res =
  await axios.post(

    `${API}/create-order`,

    { amount }

  );

  return res.data;

};