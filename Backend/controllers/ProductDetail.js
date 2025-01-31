
const Product = require("../models/Product");

exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    console.log("Fetching product with ID:", productId); // Log the ID for debugging

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error); // Log the error
    res.status(500).json({ message: "Error fetching product", error });
  }
};

