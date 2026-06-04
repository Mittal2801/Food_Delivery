import { useState } from "react";
import { addFood } from "../api/foodApi";

function AddFood() {
  const user = JSON.parse(
  localStorage.getItem("user")
);

  const [food, setFood] = useState({

    name: "",
    restaurant: "",
    category: "",
    area: "",
    price: "",

  });

  const [image, setImage] = useState(null);

  // CATEGORY LIST
  const categories = [

    "Pizza",
    "North Indian",
    "Paratha",
    "Cake",
    "Burger",
    "Sandwich",
    "Veg Meal",
    "Idli",
    "Dosa",

  ];

  const handleSubmit = async (e) => {

  e.preventDefault();

  if (!user) {
    alert("Please Login First");
    return;
  }

  const formData = new FormData();

  formData.append("userId", user._id);

  formData.append("name", food.name);
  formData.append("restaurant", food.restaurant);
  formData.append("category", food.category);
  formData.append("area", food.area);
  formData.append("price", food.price);

  if (image) {
    formData.append("image", image);
  }

  try {

    const data = await addFood(formData);

    alert(data.message);

    setFood({
      name: "",
      restaurant: "",
      category: "",
      area: "",
      price: "",
    });

    setImage(null);

  } catch (error) {

    alert(
      error?.response?.data?.message ||
      "Error Adding Food"
    );

  }
};

  if (!user) {
  return (
    <h1 style={{
      textAlign: "center",
      marginTop: "100px",
      color: "red"
    }}>
      Please Login First
    </h1>
  );
}

if (user.role !== "admin") {
  return (
    <h1 style={{
      textAlign: "center",
      marginTop: "100px",
      color: "red"
    }}>
      Access Denied. Only Admin Can Add Food.
    </h1>
  );
}

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.heading}>
          Add Food Item
        </h1>

        <form onSubmit={handleSubmit}>

          {/* FOOD NAME */}
          <input
            type="text"
            placeholder="Food Name"
            value={food.name}
            style={styles.input}
            onChange={(e) =>
              setFood({
                ...food,
                name: e.target.value,
              })
            }
          />

          {/* RESTAURANT */}
          <input
            type="text"
            placeholder="Restaurant Name"
            value={food.restaurant}
            style={styles.input}
            onChange={(e) =>
              setFood({
                ...food,
                restaurant: e.target.value,
              })
            }
          />

          {/* CATEGORY DROPDOWN */}
          <select
            value={food.category}
            style={styles.input}
            onChange={(e) =>
              setFood({
                ...food,
                category: e.target.value,
              })
            }
          >

            <option value="">
              Select Category
            </option>

            {categories.map((cat, index) => (

              <option
                key={index}
                value={cat}
              >
                {cat}
              </option>

            ))}

          </select>

          {/* AREA */}
          <input
            type="text"
            placeholder="Area Location"
            value={food.area}
            style={styles.input}
            onChange={(e) =>
              setFood({
                ...food,
                area: e.target.value,
              })
            }
          />

          {/* PRICE */}
          <input
            type="number"
            placeholder="Price"
            value={food.price}
            style={styles.input}
            onChange={(e) =>
              setFood({
                ...food,
                price: e.target.value,
              })
            }
          />

          {/* IMAGE */}
          <input
            type="file"
            style={styles.input}
            onChange={(e) =>
              setImage(e.target.files[0])
            }
          />

          {/* BUTTON */}
          <button style={styles.button}>
            Add Food
          </button>

        </form>

      </div>

    </div>
  );
}

const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f4f4f4",
  },

  card: {
    width: "420px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },

  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },

};

export default AddFood;