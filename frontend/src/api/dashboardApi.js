import axios from "axios";

const API =
"http://localhost:5000/api/dashboard";

export const getDashboard =
async () => {

  const res =
  await axios.get(API);

  return res.data;

};