import { useEffect, useState } from "react";
import { getOrders } from "../api/orderApi";

function MyOrders() {

  const [orders, setOrders] =
  useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const data =
      await getOrders(user._id);

      setOrders(data);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      {

      orders.length === 0 ?

      (

        <h2>
          No Orders Found
        </h2>

      )

      :

      (

        orders.map((order) => (

          <div
            key={order._id}
            className="bg-white shadow-lg rounded-xl p-5 mb-5"
          >

            <h2 className="text-xl font-bold">
              Order ID :
              {order._id}
            </h2>

            <h3 className="mt-2">
              Payment :
              {order.paymentMethod}
            </h3>

            <h3>
              Status :
              <span className="text-green-600">
                {" "}
                {order.status}
              </span>
            </h3>

            <h3>
              Total :
              ₹ {order.totalAmount}
            </h3>

            <div className="mt-4">

              {

              order.items.map((item) => (

                <div
                  key={item.foodId}
                  className="border-b py-2"
                >

                  {item.name}
                  {" "}
                  x
                  {" "}
                  {item.quantity}

                </div>

              ))

              }

            </div>

          </div>

        ))

      )

      }

    </div>

  );
}

export default MyOrders;