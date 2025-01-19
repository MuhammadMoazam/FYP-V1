import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Lower_Banner/Lower_Banner";
import TImage from "../../components/TImage/TImage";
import Sidebar from "../../components/SideBar/Sidebar";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products"); // Backend endpoint
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error fetching products: {error}</div>;

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
            <div className="results-count">
              Showing {products.length} products
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <span className="discount-badge">{product.discount}</span>
                <img src={product.imgSrc} alt={product.name} />
                <h3>{product.name}</h3>
                <p>
                  <span className="old-price">{product.originalPrice}</span>
                  <span className="new-price">{product.discountedPrice}</span>
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
