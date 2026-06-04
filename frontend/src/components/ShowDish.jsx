import { useEffect, useState } from "react";
import axios from "axios";

function ShowDish() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/foods"
    );

    setFoods(res.data);
  };

  return (
    <div className="food-container">
      {foods.map((food) => (
        <div className="food-card" key={food._id}>
          <img src={food.image} />

          <h2>{food.name}</h2>

          <p>{food.description}</p>

          <h3>₹{food.price}</h3>

          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ShowDish;