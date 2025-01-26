const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const { connectToDB } = require("./database/db");
const authController = require("./controllers/Auth")
const productRoutes = require("./routes/Product");
const productDetailRoutes = require("./routes/ProductDetail");
const { verifyToken } = require("./middleware/VerifyToken");
const { getUserData, updateUser } = require("./controllers/User");
const morgan = require("morgan");
const seedProducts = require("./seed/Product");
const ordersRouter = require('./routes/orders');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

// Connect to DB and seed data
connectToDB().then(() => {
  console.log('Connected to database');
  // Seed products
  seedProducts().then(() => {
    console.log('Products seeded successfully');
  }).catch(err => {
    console.error('Error seeding products:', err);
  });
}).catch(err => {
  console.error('Error connecting to database:', err);
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/products", productDetailRoutes); 
app.use("/api/signup", authController.signup);
app.use("/api/signin", authController.login);
app.use('/api/getUserData', verifyToken, getUserData);
app.use('/api/updateUser', verifyToken, updateUser);
app.use('/api/orders', ordersRouter);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
