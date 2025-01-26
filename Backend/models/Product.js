const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  originalPrice: { type: String, required: true },
  discountedPrice: { type: String, required: true },
  discount: { type: String, required: true },
  imgSrc: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  category: { type: String, required: true, default: 'Uncategorized' },
  description: { type: String, required: false },
});

module.exports = mongoose.model("Product", productSchema);