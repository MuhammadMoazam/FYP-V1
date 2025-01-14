const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const { connectToDB } = require("./database/db");
const authController = require("./controllers/Auth")
const productRoutes = require("./routes/product"); // Adjust path as needed
const { verifyToken } = require("./middleware/VerifyToken");
const { getUserData, updateUser } = require("./controllers/User");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Connect to DB
connectToDB();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/signup", authController.signup);
app.use("/api/signin", authController.login);
app.use('/api/getUserData', verifyToken, getUserData);
app.use('/api/updateUser', verifyToken, updateUser);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
