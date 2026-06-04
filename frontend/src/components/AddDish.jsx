import { useState } from "react";
import axios from "axios";

function AddDish() {
  const [dish, setDish] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    category: "",
    restaurant: "",
  });

  const handleChange = (e) => {
    setDish({
      ...dish,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/foods",
      dish
    );

    alert("Dish Added");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Add Dish</h1>

        <input
          type="text"
          placeholder="Dish Name"
          name="name"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Image URL"
          name="image"
          onChange={handleChange}
        />

        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Category"
          name="category"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Restaurant"
          name="restaurant"
          onChange={handleChange}
        />

        <textarea
          placeholder="Description"
          name="description"
          onChange={handleChange}
        />

        <button type="submit">
          Add Dish
        </button>
      </form>
    </div>
  );
}

export default AddDish;