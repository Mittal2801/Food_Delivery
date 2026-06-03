import axios from "axios";

const API =
"http://localhost:5000/api/payment";

export const createOrder =
async (amount) => {

  const res =
  await axios.post(

    `${API}/create-order`,

    { amount }

  );

  return res.data;

};