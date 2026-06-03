import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFoodById,getRelatedFoods } from "../api/foodApi";
import { addToCart } from "../api/cartApi";
import { Category } from "../assets/Asserts";
import { Link } from 'react-router-dom'



function FoodDetails() {

  const { id } = useParams();

  const [food, setFood] = useState(null);

  // const relatedProduct = Category.filter((p) => p.id === id)
  // console.log(relatedProduct);
  
  const [relatedFoods,setRelatedFoods] = useState([]);

  useEffect(() => {
    fetchFood();
  }, []);

  const fetchFood = async () => {

  try {

    const data =
    await getFoodById(id);

    setFood(data);

    const related =
    await getRelatedFoods(
      data.category,
      data._id
    );

    setRelatedFoods(related);

  } catch (error) {

    console.log(error);

  }

};

  if (!food) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  const handleCart = async () => {

  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {

      alert("Please Login First");

      return;
    }

    await addToCart({
      userId: user._id,
      foodId: food._id,
    });

    alert(
      "Food Added To Cart Successfully"
    );

  } catch (error) {

    console.log(error);

    alert("Error Adding Food");

  }

};  
  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="relative">

            <img
              src={`http://localhost:5000/uploads/${food.image}`}
              alt={food.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-5 left-0 bg-blue-600 text-white px-5 py-2 font-bold rounded-r-lg">
              ₹100 OFF
            </div>

          </div>

          {/* RIGHT DETAILS */}
          <div className="p-10">

            <div className="flex justify-between items-center">

              <h1 className="text-5xl font-bold">
                {food.name}
              </h1>

              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold">
                4.3 ★
              </div>

            </div>

            <h2 className="text-2xl text-gray-600 mt-3">
              {food.restaurant}
            </h2>

            <p className="text-lg text-gray-500 mt-2">
              📍 {food.area}
            </p>

            <div className="mt-4">
              <span className="bg-red-100 text-red-500 px-4 py-2 rounded-lg">
                {food.category}
              </span>
            </div>

            <h2 className="text-4xl font-bold text-green-600 mt-8">
              ₹ {food.price}
            </h2>

            <div className="mt-8">

              <h3 className="text-2xl font-semibold mb-3">
                Description
              </h3>

              <p className="text-gray-600 leading-8">
                Delicious {food.name} prepared fresh
                by {food.restaurant}. Made with
                premium ingredients and served hot
                at your doorstep.
              </p>

            </div>

            <div className="flex gap-4 mt-10">

              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold" onClick={handleCart}>
                Add To Cart
              </button>

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold">
                Order Now
              </button>

            </div>

            <div className="mt-10 border-t pt-5">

              <div className="flex justify-between text-gray-600 mb-3">
                <span>Delivery Time</span>
                <span>20 - 30 min</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Free Delivery</span>
                <span>Available</span>
              </div>

            </div>

          </div>

        </div>

      </div>
      {/* <div className="">
        {
          relatedProduct.map((item)=>{
            return(
            <div>{item.cat_name}</div>
            )
          })
        }
      </div> */}

      <div className="max-w-6xl mx-auto mt-12">

  <h2 className="text-3xl font-bold mb-6">
    Related Foods
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {relatedFoods.map((item) => (

      <Link

        key={item._id}
        to={`/food-details/${item._id}`}
      >

        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">

          <img
            src={`http://localhost:5000/uploads/${item.image}`}
            alt={item.name}
            className="h-48 w-full object-cover"
          />

          <div className="p-4">

            <h3 className="font-bold text-lg">
              {item.name}
            </h3>

            <p className="text-gray-500">
              {item.restaurant}
            </p>

            <h4 className="text-green-600 font-bold mt-2">
              ₹ {item.price}
            </h4>

          </div>

        </div>

      </Link>

    ))}

  </div>

</div>

    </div>
  );
}

export default FoodDetails;