import React from 'react';
import { useNavigate } from 'react-router-dom';
import TImage from 'components/TImage/TImage';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import { useCart } from 'components/Contexts/Cart/CartContext';
import './Cart.css';

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = async (productId, quantity) => {
        if (quantity < 1) return;
        await updateQuantity(productId, quantity);
    };

    const handleRemoveItem = async (productId) => {
        await removeFromCart(productId);
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    return (
        <>
            <Navbar />
            <TImage
                title="Cart"
                description="View, update, and proceed to checkout for your selected items."
            />
            <div className="cart-container">
                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <h2>Your cart is empty</h2>
                        <button onClick={() => navigate('/shop')} className="continue-shopping">
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <div className="cart-content">
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <div key={item._id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="item-image" />
                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-price">${item.price}</p>
                                    </div>
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                            disabled={item.quantity >= item.stock}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="item-total">${(item.price * item.quantity).toFixed(2)}</p>
                                    <button
                                        onClick={() => handleRemoveItem(item._id)}
                                        className="remove-item"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <h3>Order Summary</h3>
                            <div className="summary-details">
                                <p>Subtotal: ${calculateTotal().toFixed(2)}</p>
                                <button
                                    onClick={() => navigate('/checkout')}
                                    className="checkout-button"
                                >
                                    Proceed to Checkout
                                </button>
                                <button
                                    onClick={() => navigate('/shop')}
                                    className="continue-shopping"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
