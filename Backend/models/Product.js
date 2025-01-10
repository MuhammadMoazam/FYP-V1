const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    originalPrice: { type: String, required: true },
    discountedPrice: { type: String, required: true },
    discount: { type: String, required: true },
    imgSrc: { type: String, required: true },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
