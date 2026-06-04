import { useState } from "react";
import { registerUser } from "../api/userApi";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(user);

      alert(data.message);

      setUser({
        name: "",
        email: "",
        password: "",
      });

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.heading}>Create Account</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Name"
            value={user.name}
            style={styles.input}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={user.email}
            style={styles.input}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={user.password}
            style={styles.input}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value,
              })
            }
          />

          <button style={styles.button}>
            Register
          </button>

        </form>

        <p style={styles.text}>
          Already have account?
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f4f4",
  },

  card: {
    width: "350px",
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
    fontSize: "16px",
  },

  button: {
    width: "100%",
    padding: "12px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },

  text: {
    textAlign: "center",
    marginTop: "15px",
  },

  link: {
    marginLeft: "5px",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default Register;