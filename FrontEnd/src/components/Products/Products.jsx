import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const productsToShow = products.slice(currentIndex, currentIndex + 5);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - 4));
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 5 : prevIndex - 1
    );
  };

  return (
    <div className="products-container">
      <h2 className="titlee">Our Premium Products</h2>
      <div className="slider">
        <button className="slider-button left" onClick={prevProduct}>
          &lt;
        </button>
        <div className="products-grid">
          {productsToShow.map((product) => (
            <div key={product._id} className="product-card">
              <Link to={`/product/${product._id}`}>
                <span className="discount">{product.discount}</span>
                <img src={product.imgSrc} alt={product.name} />
                <h2 className="product-name">{product.name}</h2>
                <p className="price">
                  <span className="original-price">
                    {product.originalPrice}
                  </span>
                  <span className="discounted-price">
                    {product.discountedPrice}
                  </span>
                </p>
              </Link>
            </div>
          ))}
        </div>
        <button className="slider-button right" onClick={nextProduct}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Products;
