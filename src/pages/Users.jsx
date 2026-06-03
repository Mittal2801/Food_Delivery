import { useEffect, useState } from "react";
import { getUsers } from "../api/userApi";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  return (
    <div style={styles.container}>

      <h1 style={styles.heading}>
        All Registered Users
      </h1>

      <div style={styles.grid}>

        {users.map((u) => (
          <div key={u._id} style={styles.card}>

            <h3>{u.name}</h3>

            <p>{u.email}</p>

          </div>
        ))}

      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    background: "#f4f4f4",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
};

export default Users;