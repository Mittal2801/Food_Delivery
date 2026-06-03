import { useEffect, useState } from "react";
import { getFoods } from "../api/foodApi";

function Foods() {

  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {

    const data = await getFoods();

    setFoods(data);
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>
        Food Items
      </h1>

      <div style={styles.grid}>

        {foods.map((food) => (

          <div key={food._id} style={styles.card}>

            <img
              src={`http://localhost:5000/uploads/${food.image}`}
              alt=""
              style={styles.image}
            />

            <h2>{food.name}</h2>

            <p>
              Restaurant: {food.restaurant}
            </p>

            <p>
              Category: {food.category}
            </p>

            <p>
              Area: {food.area}
            </p>

            <h3>
              ₹ {food.price}
            </h3>

          </div>
        ))}

      </div>

    </div>
  );
}

const styles = {

  container: {
    padding: "30px",
    background: "#f4f4f4",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },

};

export default Foods;