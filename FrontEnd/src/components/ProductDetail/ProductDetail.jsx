import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        console.log('Fetching product with ID:', id);
        
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error response:', errorText);
          throw new Error(
            `Failed to fetch product (Status: ${response.status}). ${errorText}`
          );
        }

        const data = await response.json();
        console.log('Received product data:', data);
        
        if (!data) {
          throw new Error('No product data received');
        }

        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError(error.message);
        // Redirect to shop page after 3 seconds if product not found
        if (error.message.includes('404')) {
          setTimeout(() => {
            navigate('/shop');
          }, 3000);
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProductDetails();
    } else {
      setError('No product ID provided');
      setTimeout(() => {
        navigate('/shop');
      }, 3000);
    }
  }, [id, navigate]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= (product?.stock || 1)) {
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    if (product && quantity < product.stock) {
      setQuantity(prev => Math.min(prev + 1, product.stock));
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => Math.max(prev - 1, 1));
    }
  };

  const handleAddToCart = async () => {
    if (!product || product.stock === 0) {
      setError("Product is out of stock");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: id,
          quantity: quantity,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      setError("Failed to add item to cart. Please try again.");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loading">Loading product details...</div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
          {error.includes('404') && (
            <p>Redirecting to shop page in 3 seconds...</p>
          )}
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="not-found">
          <h2>Product Not Found</h2>
          <p>Redirecting to shop page in 3 seconds...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="product-detail-container">
        <div className="product-breadcrumb">
          <a href="/">Home</a> &gt; <a href="/shop">Shop</a> &gt;{" "}
          <span>{product.name}</span>
        </div>

        <div className="product-detail-content">
          <div className="product-image">
            <img src={product.imgSrc} alt={product.name} />
          </div>

          <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-price">
              {product.originalPrice && (
                <span className="old-price">${product.originalPrice}</span>
              )}
              <span className="new-price">
                ${product.discountedPrice || product.price}
              </span>
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-meta">
              <p className="category">Category: {product.category}</p>
              <p className="stock">
                Status:{" "}
                <span className={product.stock > 0 ? "in-stock" : "out-of-stock"}>
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
                </span>
              </p>
            </div>

            <div className="quantity-selector">
              <button 
                onClick={handleDecrement}
                disabled={quantity <= 1}
                className="quantity-btn"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                max={product.stock}
                className="quantity-input"
              />
              <button 
                onClick={handleIncrement}
                disabled={quantity >= product.stock}
                className="quantity-btn"
              >
                +
              </button>
            </div>

            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
