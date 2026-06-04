import {
  useEffect,
  useState,
} from "react";

import {

  getAllOrders,

  updateOrderStatus,

} from "../api/orderApi";

function AdminOrders() {

  const [orders, setOrders] =
  useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders =
  async () => {

    const data =
    await getAllOrders();

    setOrders(data);

  };

  return (

    <div className="max-w-7xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      {

      orders.map((order) => (

        <div
          key={order._id}
          className="bg-white shadow-lg rounded-xl p-6 mb-5"
        >

          <div className="flex justify-between">

            <div>

              <h2 className="font-bold text-xl">

                Order ID

              </h2>

              <p>{order._id}</p>

              <h3 className="mt-3">

                Total:
                ₹{order.totalAmount}

              </h3>

              <h3>

                Payment:
                {order.paymentMethod}

              </h3>

            </div>

            <div>

              <select

                value={order.status}

                className="border p-2 rounded"

                onChange={async (e) => {

                  await updateOrderStatus(

                    order._id,

                    e.target.value

                  );

                  fetchOrders();

                }}

              >

                <option>
                  Pending
                </option>

                <option>
                  Preparing
                </option>

                <option>
                  Out For Delivery
                </option>

                <option>
                  Delivered
                </option>

              </select>

            </div>

          </div>

          <div className="mt-5">

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

      }

    </div>

  );

}

export default AdminOrders;