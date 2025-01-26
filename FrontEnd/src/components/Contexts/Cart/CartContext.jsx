import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Load cart from localStorage on mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    // Update cart count whenever cartItems changes
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(count);
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product, quantity) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: quantity,
        }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }

      const data = await response.json();
      
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item._id === product._id);
        if (existingItem) {
          return prevItems.map(item =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        return [...prevItems, { ...product, quantity }];
      });

      return { success: true, message: data.message };
    } catch (error) {
      console.error('Error adding to cart:', error);
      return { success: false, message: error.message };
    }
  };

  const removeFromCart = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/remove/${productId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      setCartItems(prevItems => prevItems.filter(item => item._id !== productId));
      return { success: true };
    } catch (error) {
      console.error('Error removing from cart:', error);
      return { success: false, message: error.message };
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/update/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity }),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error('Failed to update cart quantity');
      }

      setCartItems(prevItems =>
        prevItems.map(item =>
          item._id === productId
            ? { ...item, quantity }
            : item
        )
      );
      return { success: true };
    } catch (error) {
      console.error('Error updating cart:', error);
      return { success: false, message: error.message };
    }
  };

  const clearCart = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/cart/clear", {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error('Failed to clear cart');
      }

      setCartItems([]);
      return { success: true };
    } catch (error) {
      console.error('Error clearing cart:', error);
      return { success: false, message: error.message };
    }
  };

  const value = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
