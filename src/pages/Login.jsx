import { useState } from "react";
import { loginUser } from "../api/userApi";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
0
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const data = await loginUser(user);

    // Save token
    localStorage.setItem(
      "token",
      data.token
    );

    // Save user details
    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    alert("Login Successful");

    navigate("/delivery");

  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );

  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        <h1 style={styles.heading}>Login</h1>

        <form onSubmit={handleSubmit}>

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
            Login
          </button>

        </form>

        <p style={styles.text}>
          Don't have account?
          <Link to="/" style={styles.link}>
            Register
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
    background: "#28a745",
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

export default Login;