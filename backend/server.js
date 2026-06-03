const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const path = require("path");


const userRoutes = require("./routes/userRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// routes
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API Running");
});

// start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});


const foodRoutes = require("./routes/foodRoutes");
app.use("/api/foods", foodRoutes);
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

const cartRoutes =
require("./routes/cartRoutes");

app.use("/api/cart", cartRoutes);

const orderRoutes = require("./routes/orderRoutes");

app.use("/api/orders", orderRoutes);

const dashboardRoutes =
require("./routes/dashboardRoutes");

app.use(
  "/api/dashboard",
  dashboardRoutes
);

const paymentRoutes =
require(
"./routes/paymentRoutes"
);

app.use(
"/api/payment",
paymentRoutes
);

const cors = require("cors");

app.use(cors());

app.use(
  cors({
    origin:
      "https://food-delivery-frontend.onrender.com",
    credentials: true,
  })
);