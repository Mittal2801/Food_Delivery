import {
useEffect,
useState
}
from "react";

import {
getDashboard
}
from "../api/dashboardApi";

function UserCounter() {

  const [data,
  setData] =
  useState(null);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData =
  async () => {

    const result =
    await getDashboard();

    setData(result);

  };

  if (!data) {

    return (
      <h1>
        Loading...
      </h1>
    );

  }

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold mb-10">

        Admin Dashboard

      </h1>

      <div className="grid grid-cols-4 gap-5">

        <div className="bg-blue-500 text-white p-6 rounded-xl">

          <h2 className="text-xl">

            Total Users

          </h2>

          <h1 className="text-4xl font-bold mt-3">

            {data.totalUsers}

          </h1>

        </div>

        <div className="bg-green-500 text-white p-6 rounded-xl">

          <h2 className="text-xl">

            Total Foods

          </h2>

          <h1 className="text-4xl font-bold mt-3">

            {data.totalFoods}

          </h1>

        </div>

        <div className="bg-orange-500 text-white p-6 rounded-xl">

          <h2 className="text-xl">

            Total Orders

          </h2>

          <h1 className="text-4xl font-bold mt-3">

            {data.totalOrders}

          </h1>

        </div>

        <div className="bg-red-500 text-white p-6 rounded-xl">

          <h2 className="text-xl">

            Revenue

          </h2>

          <h1 className="text-4xl font-bold mt-3">

            ₹{data.totalRevenue}

          </h1>

        </div>

      </div>

    </div>

  );

}

export default UserCounter;