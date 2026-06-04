import {
useEffect,
useState
}
from "react";

import {
getOrders
}
from "../api/orderApi";

function Orders() {

  const [orders,
  setOrders] =
  useState([]);

  const user =
  JSON.parse(
  localStorage.getItem(
  "user"
  ));

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  if (!user) {

    alert("Please Login First");
    return;

  }

  const data = await getOrders(
    user._id
  );

  setOrders(data);

};

  return (

    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      {

      orders.map(
      (order) => (

      <div
      key={order._id}
      className="bg-white shadow rounded-xl p-5 mb-5"
      >

        <h2>
          Order ID:
          {order._id}
        </h2>

        <h3>
          ₹
          {order.totalAmount}
        </h3>

        <p>
          Payment:
          {
          order.paymentMethod
          }
        </p>

        <p>
          Status:
          {
          order.status
          }
        </p>

      </div>

      ))

      }

    </div>

  );

}

export default Orders;