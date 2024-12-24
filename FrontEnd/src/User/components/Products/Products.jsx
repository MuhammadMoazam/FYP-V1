/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import "./Products.css";
import image1 from "../../Assets/Products/Premium-Rabbit-Wool-Jersy.png";

const products = [
  {
    id: 1,
    name: "Premium Rabbit Wool Jersey",
    originalPrice: "₨4,500.00",
    discountedPrice: "₨9,000.00",
    discount: "-11%",
    imgSrc: image1,
  },
  {
    id: 2,
    name: "Plus Size Lightweight Wool Jersey",
    originalPrice: "₨5,500.00",
    discountedPrice: "₨8,000.00",
    discount: "-11%",
    imgSrc: image1,
  },
  {
    id: 3,
    name: "Plus Size Lightweight Wool Jersey",
    originalPrice: "₨6,500.00",
    discountedPrice: "₨8,000.00",
    discount: "-11%",
    imgSrc: image1,
  },
  {
    id: 4,
    name: "Premium Rabbit Wool Jersey",
    originalPrice: "₨3,500.00",
    discountedPrice: "₨9,000.00",
    discount: "-11%",
    imgSrc: image1,
  },
  {
    id: 5,
    name: "Premium Rabbit Wool Jersey",
    originalPrice: "₨4,500.00",
    discountedPrice: "₨6,000.00",
    discount: "-11%",
    imgSrc: image1,
  },
  {
    id: 6,
    name: "Plus Size Lightweight Wool Jersey",
    originalPrice: "₨4,500.00",
    discountedPrice: "₨8,000.00",
    discount: "-11%",
    imgSrc: image1,
  },
  {
    id: 7,
    name: "Plus Size Lightweight Wool Jersey",
    originalPrice: "₨4,500.00",
    discountedPrice: "₨9,000.00",
    discount: "-11%",
    imgSrc: image1,
  },
  {
    id: 8,
    name: "Premium Rabbit Wool Jersey",
    originalPrice: "₨4,500.00",
    discountedPrice: "₨8,000.00",
    discount: "-11%",
    imgSrc: image1,
  },
];

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsToShow = products.slice(currentIndex, currentIndex + 5);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (products.length - 4));
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 5 : prevIndex - 1,
    );
  };

  return (
    <div className="products-container">
      <h2>Our Premium Products</h2>
      <div className="slider">
        <button className="slider-button left" onClick={prevProduct}>
          &lt;
        </button>
        <div className="products-grid">
          {productsToShow.map((product) => (
            <div key={product.id} className="product-card">
              <span className="discount">{product.discount}</span>
              <img src={product.imgSrc} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">
                <span className="original-price">{product.originalPrice}</span>
                <span className="discounted-price">
                  {product.discountedPrice}
                </span>
              </p>
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
