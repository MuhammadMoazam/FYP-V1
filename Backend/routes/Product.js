const express = require("express");
const { getProducts } = require("../controllers/Product");
const router = express.Router();

router.get("/getproducts", getProducts);

module.exports = router;
