// routes/Product.js

const express = require("express");
const { getProductById } = require("../controllers/Product");
const router = express.Router();

router.get("/:id", getProductById); // Get product by ID

module.exports = router;
