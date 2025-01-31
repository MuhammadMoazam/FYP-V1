import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Lower_Banner/Lower_Banner";
import TImage from "../../components/TImage/TImage";
import Sidebar from "../../components/SideBar/Sidebar";
import "./Shop.css";

const Shop = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("default");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    const sortedProducts = [...products].sort((a, b) => {
      switch (e.target.value) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
    setProducts(sortedProducts);
  };

  const handleProductClick = (productId) => {
    console.log('Clicking product with ID:', productId);
    if (!productId) {
      console.error('No product ID provided');
      return;
    }
    navigate(`/product/${productId}`);
  };

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products from API...');
        const response = await fetch("http://localhost:5000/api/products");
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Received products:', data);
        
        // Validate that we have products and they have _id
        if (!Array.isArray(data)) {
          throw new Error('Invalid products data received');
        }
        
        // Check if products have required fields
        const validProducts = data.filter(product => {
          const isValid = product && product._id && product.name && product.imgSrc;
          if (!isValid) {
            console.warn('Invalid product data:', product);
          }
          return isValid;
        });

        setProducts(validProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loading-container">Loading products...</div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="error-container">Error fetching products: {error}</div>
        <Footer />
      </>
    );
  }

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
          <div className="shop-header">
            <div className="results-count">
              Showing 1–{products.length} of {products.length} results
            </div>
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
          <div className="product-grid">
            {products.map((product) => (
              <div
                key={product._id}
                className="product-card"
                onClick={() => handleProductClick(product._id)}
                role="button"
                tabIndex={0}
              >
                {product.discount && (
                  <span className="discount-badge">{product.discount}</span>
                )}
                <img 
                  src={product.imgSrc} 
                  alt={product.name} 
                  onError={(e) => {
                    console.error('Error loading image for product:', product._id);
                    e.target.src = '/placeholder-image.jpg'; // Add a placeholder image
                  }}
                />
                <h3>{product.name}</h3>
                <p>
                  {product.originalPrice && (
                    <span className="old-price">${product.originalPrice}</span>
                  )}
                  <span className="new-price">
                    ${product.discountedPrice || product.price}
                  </span>
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