import axios from "axios";

const API =
"https://food-delivery-0p1u.onrender.com";

export const getDashboard =
async () => {

  const res =
  await axios.get(API);

  return res.data;

};