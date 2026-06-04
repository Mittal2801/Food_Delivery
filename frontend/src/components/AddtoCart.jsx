import { useEffect, useState } from "react";

import {
  getCart,
  increaseQty,
  decreaseQty,
  removeItem,
} from "../api/cartApi";

import {
createOrder
}
from "../api/paymentApi";

import { placeOrder } from "../api/orderApi";

function AddtoCart() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const user = JSON.parse(
  localStorage.getItem("user")
);

  const fetchCart = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user) {

        alert("Please Login First");
        return;

      }

      const data = await getCart(
        user._id
      );

      setCart(data);

    } catch (error) {

      console.log(error);

    }

  };

  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.food.price *
      item.quantity,
    0
  );

  const delivery = 40;

  const grandTotal =
    total + delivery;

  if (cart.length === 0) {

    return (

      <div className="flex justify-center items-center h-screen">

        <h1 className="text-3xl font-bold">
          Cart Is Empty
        </h1>

      </div>

    );

  }

 const handleOrder =
async (paymentMethod) => {

  try {

    const user =
    JSON.parse(
      localStorage.getItem(
        "user"
      )
    );

    if (!user) {

      alert(
        "Please Login First"
      );

      return;
    }

    await placeOrder({

      userId:
      user._id,

      paymentMethod,

    });

    alert(
      "Order Placed Successfully"
    );

    fetchCart();

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message
    );

  }

};

const handlePayment =
async () => {

  try {

    const order =
    await createOrder(
      grandTotal
    );

    const options = {

      key:
      "rzp_test_SxE9aQI8Nv4239",

      amount:
      order.amount,

      currency:
      order.currency,

      name:
      "Food Delivery",

      description:
      "Food Order",

      order_id:
      order.id,

      handler:
      async function (
      response
      ) {

        alert(
        "Payment Successful"
        );

        console.log(
        response
        );

      },

      theme: {
        color:
        "#16a34a",
      },

    };

    const razorpay =
    new window.Razorpay(
      options
    );

    razorpay.open();

  } catch (error) {

    console.log(error);

  }

};

  return (

    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        My Cart
      </h1>

      {cart.map((item) => (

        <div
          key={item._id}
          className="bg-white shadow-lg rounded-xl p-5 flex justify-between items-center mb-5"
        >

          <div>

            <h2 className="text-xl font-bold">
              {item.food.name}
            </h2>

            <p>
              ₹ {item.food.price}
            </p>

          </div>

          <div className="flex gap-3 items-center">

            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={async () => {

                await decreaseQty(
                  item._id
                );

                fetchCart();

              }}
            >
              -
            </button>

            <span className="font-bold">
              {item.quantity}
            </span>

            <button
              className="bg-green-500 text-white px-3 py-1 rounded"
              onClick={async () => {

                await increaseQty(
                  item._id
                );

                fetchCart();

              }}
            >
              +
            </button>

          </div>

          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={async () => {

              await removeItem(
                item._id
              );

              fetchCart();

            }}
          >
            Remove
          </button>

        </div>

      ))}

      <div className="bg-white shadow-lg rounded-xl p-8 mt-8">

        <h2 className="text-xl">
          Food Total:
          ₹ {total}
        </h2>

        <h2 className="text-xl mt-2">
          Delivery:
          ₹ {delivery}
        </h2>

        <h1 className="text-3xl font-bold mt-4 text-green-600">
          Grand Total:
          ₹ {grandTotal}
        </h1>

      </div>

      <div className="flex gap-5 mt-8">

       <button

      onClick={handlePayment}

      className="
      bg-green-600
      text-white
      px-8
      py-4
      rounded-xl
      "

      >

      Pay With Razorpay

      </button>

      </div>

    </div>

  );
}

export default AddtoCart;