import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  getFoodsByCategory,
  deleteFood,
} from "../api/foodApi";
import { Category } from "../assets/Asserts";

function CategoryFoods() {

  const { cat_name } = useParams();

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchFoods();

  }, [cat_name]);

  const fetchFoods = async () => {

    try {

      setLoading(true);

      const data =
        await getFoodsByCategory(cat_name);

      setFoods(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this food?"
      );

    if (!confirmDelete) return;

    await deleteFood(id);

    fetchFoods();
  };
  const {id,category} = useParams();

  const ProductDetails = Category.find((p)=>p.id === parseInt(id))

  return (

    <div style={styles.container}>

      <h1 style={styles.heading} className="mx-30">
        {cat_name} Foods 
      </h1>

      {loading ? (

        <h2 style={styles.message}>
          Loading...
        </h2>

      ) : foods.length === 0 ? (

        <h2 style={styles.message}>
          No Foods Found
        </h2>

      ) : (
        
        <div style={styles.grid} className="mx-30">

         
                      {
              foods.map((food,index) => (
                <div key={index}>
                  {food.name}
                </div>
              ))
            }
          {foods.map((food) => (
            <Link to={`/food-details/${food._id}`}>
            <div
              key={food._id}
              style={styles.card}
            >
              
              {/* IMAGE */}
              <div style={styles.imageContainer}>

                <img
                  src={`http://localhost:5000/uploads/${food.image}`}
                  alt={food.name}
                  style={styles.image}
                />

                <div style={styles.offer}>
                  ₹50 OFF
                </div>

              </div>

              {/* CONTENT */}
              <div style={styles.content}>

                <div style={styles.topRow}>

                  <h2
                   style={styles.foodName}>
                    {food.restaurant}
                  </h2>

                  <div style={styles.rating}>
                    4.2★
                  </div>

                </div>

                <div style={styles.middleRow}>

                  <p style={styles.category}>
                    {food.category}
                  </p>

                  <p style={styles.price}>
                    ₹{food.price} for one
                  </p>

                </div>

                <div style={styles.bottomRow}>

                  <p style={styles.foodItem}>
                    {food.name}
                  </p>

                  <p style={styles.time}>
                    20 min
                  </p>

                </div>

                {/* DELETE BUTTON */}
                <button
                  style={styles.deleteBtn}
                  onClick={() =>
                    handleDelete(food._id)
                  }
                >
                  Delete
                </button>
              </div>
                  
            </div>
</Link>

          ))}

        </div>
        
      )}

    </div>
  );
}

const styles = {

  container: {
    padding: "40px",
    background: "#f8f8f8",
    minHeight: "100vh",
  },

  heading: {
    fontSize: "35px",
    marginBottom: "30px",
    fontWeight: "600",
  },

  message: {
    textAlign: "center",
    marginTop: "50px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    transition: "0.3s",
    cursor: "pointer",
    padding: "10px",
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
  },

  offer: {
    position: "absolute",
    bottom: "15px",
    left: "0",
    background: "#2563eb",
    color: "#fff",
    padding: "5px 10px",
    fontWeight: "bold",
    borderTopRightRadius: "5px",
    borderBottomRightRadius: "5px",
  },

  content: {
    padding: "10px 5px",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  },

  foodName: {
    fontSize: "28px",
    fontWeight: "500",
  },

  rating: {
    background: "green",
    color: "#fff",
    padding: "3px 8px",
    borderRadius: "6px",
    fontWeight: "bold",
  },

  middleRow: {
    display: "flex",
    justifyContent: "space-between",
    color: "#666",
    marginTop: "8px",
  },

  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    color: "#444",
  },

  category: {
    fontSize: "18px",
  },

  price: {
    fontSize: "18px",
  },

  foodItem: {
    fontSize: "17px",
  },

  time: {
    fontWeight: "600",
  },

  deleteBtn: {
    width: "100%",
    marginTop: "15px",
    padding: "12px",
    border: "none",
    background: "red",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },

};

export default CategoryFoods;