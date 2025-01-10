import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Lower_Banner/Lower_Banner";
import TImage from "../../components/TImage/TImage";
import Sidebar from "../../components/SideBar/Sidebar"; // Adjusted path for Sidebar
// import ProductCard from "components/ShopProducts/ProductCard";
import image1 from '../../Assets/Product Categories/Womens-Collection.png'
import "./Shop.css";

const products = [
  {
    id: 1,
    image: image1,
    title: "Plus Size Lightweight Wool Jersey",
    oldPrice: "Rs4,500.00",
    newPrice: "Rs4,000.00",
  },
  {
    id: 2,
    image: image1,
    title: "Premium Rabbit Wool Jersey",
    oldPrice: "Rs4,500.00",
    newPrice: "Rs4,000.00",
  },
  {
    id: 3,
    image: image1,
    title: "Premium Rabbit Wool Jersey",
    oldPrice: "Rs4,500.00",
    newPrice: "Rs4,000.00",
  },
  {
    id: 4,
    image: image1,
    title: "Premium Rabbit Wool Jersey",
    oldPrice: "Rs4,500.00",
    newPrice: "Rs4,000.00",
  },
  {
    id: 5,
    image: image1,
    title: "Premium Rabbit Wool Jersey",
    oldPrice: "Rs4,500.00",
    newPrice: "Rs4,000.00",
  },
  {
    id: 6,
    image: image1,
    title: "Premium Rabbit Wool Jersey",
    oldPrice: "Rs4,500.00",
    newPrice: "Rs4,000.00",
  },
  {
    id: 7,
    image: image1,
    title: "Premium Rabbit Wool Jersey",
    oldPrice: "Rs4,500.00",
    newPrice: "Rs4,000.00",
  },
  {
    id: 8,
    image: image1,
    title: "Premium Rabbit Wool Jersey",
    oldPrice: "Rs4,500.00",
    newPrice: "Rs4,000.00",
  },
  {
    id: 9,
    image: image1,
    title: "Premium Rabbit Wool Jersey",
    oldPrice: "Rs4,500.00",
    newPrice: "Rs4,000.00",
  },
  // Add more products as needed
];
const Shop = () => {
  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // Sorting logic will be implemented later when backend is added
  };

  return (
    <>
      <Navbar />
      <TImage
        title="Shop"
        description="Browse our trendy collections and shop the latest in fashion styles."
      />
      <div className="breadcrumb">
        <a href="/">Home</a> &gt; <span>Shop</span>
      </div>

      <div className="shop-container">
        <Sidebar />
        <div className="shop-content">
          {/* Shop Header */}
          <div className="shop-header">
            <div className="results-count">Showing 1–12 of 19 results</div>
            <div className="sort-container">
              <label htmlFor="sort">Sort By:</label>
              <select id="sort" value={sortOption} onChange={handleSortChange}>
                <option value="default">Default</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="latest">Latest</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <span className="discount-badge">{product.discount}</span>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>
                  <span className="old-price">{product.oldPrice}</span>
                  <span className="new-price">{product.newPrice}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Banner />
      <Footer />
    </>
  );
};

export default Shop;