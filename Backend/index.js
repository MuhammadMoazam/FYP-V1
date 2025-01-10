const express = require("express");
const { connectToDB } = require("./database/db");
const productRoutes = require("./routes/product"); // Adjust path as needed


const app = express();
app.use("/api", productRoutes);


const cors = require("cors");
app.use(cors({
  origin: "http://localhost:3000", // Your React app's origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // Include credentials if needed (e.g., cookies)
}));

// Middleware
app.use(express.json());

// Connect to DB
connectToDB();

// Routes
// app.use("/api/products", productRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
