import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store'

const express = require("express");
const { connectToDB } = require("./database/db");
const productRoutes = require("./routes/Product");

const app = express();

// Middleware
app.use(express.json());

// Connect to DB
connectToDB();

// Routes
app.use("/api/products", productRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
