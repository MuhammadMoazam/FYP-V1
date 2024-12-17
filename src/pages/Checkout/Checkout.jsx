import React from 'react';
import './Checkout.css';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Lower_Banner/Lower_Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


const Checkout = () => {
    return (
        <div>

            <Navbar />
            <div className="checkout-container container my-4">
                {/* Coupon Link */}
                <div className="coupon-section mb-4">
                    <p>
                        Have a coupon? <a href="/">Click here to enter your code</a>
                    </p>
                </div>

                <div className="row">
                    {/* Billing Details */}
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="billing-details">
                            <h2>Billing details</h2>
                            <form className="billing-form">
                                <div className="form-row">
                                    <div className="form-group col-12 col-md-6">
                                        <label>First Name <span>*</span></label>
                                        <input type="text" className="form-control" placeholder="John" />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <label>Last Name <span>*</span></label>
                                        <input type="text" className="form-control" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Country <span>*</span></label>
                                    <select className="dropdown-select ">
                                        <option>United States (US)</option>
                                        <option>Canada</option>
                                        <option>United Kingdom</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Street Address <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="123 Main Street" />
                                </div>
                                <div className="form-group">
                                    <label>Town / City <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="New York" />
                                </div>
                                <div className="form-group ">
                                    <label>State <span>*</span></label>

                                    <select className="dropdown-select ">
                                        <option value="">Select your State</option>
                                        <option value="US">United States</option>
                                        <option value="CA">Canada</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="AU">Australia</option>
                                    </select>



                                </div>
                                <div className="form-group">
                                    <label>Postcode / ZIP <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="12345" />
                                </div>
                                <div className="form-group">
                                    <label>Company Name (optional)</label>
                                    <input type="text" className="form-control" placeholder="Company Name" />
                                </div>
                                <div className="form-group">
                                    <label>Apartment Address (optional)</label>
                                    <input type="text" className="form-control" placeholder="Apartment, suite, etc." />
                                </div>
                                <div className="form-group">
                                    <label>Phone <span>*</span></label>
                                    <input type="text" className="form-control" placeholder="123-456-7890" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address <span>*</span></label>
                                    <input type="email" className="form-control" placeholder="example@mail.com" />
                                </div>

                            </form>

                            <form action="" className="additional-info-form">
                                <div className="form-group additional-info">
                                    <h5>Additional Information</h5>
                                    <label>Order notes (optional)</label>
                                    <textarea className="form-control" placeholder="Notes about your order, e.g., special notes for delivery"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-6 col-md-12">
                        <div className="order-summary">
                            <h2>Your order</h2>
                            <div className="order-pricing">
                                <div className="total d-flex justify-content-between">
                                    <span>Product</span>
                                    <span>Sub Total</span>
                                </div>
                            </div>
                            <div className="order-items">
                                <div className="order-item d-flex justify-content-between">
                                    <span>Premium Rabbit Wool Jersey × 1</span>
                                    <span>Rs4,000.00</span>
                                </div>
                                <div className="order-item d-flex justify-content-between">
                                    <span>Rabbit Wool Baby Winter Suit × 1</span>
                                    <span>Rs1,500.00</span>
                                </div>
                            </div>
                            <div className="order-pricing">
                                <div className="subtotal d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <span>Rs5,500.00</span>
                                </div>
                                <div className="total d-flex justify-content-between">
                                    <span>Total</span>
                                    <span>Rs5,500.00</span>
                                </div>
                            </div>
                            {/* Payment Options */}
                            <div className="payment-options">
                                <label>
                                    <input type="radio" name="payment" checked /> Direct bank transfer
                                </label>
                                <p className="payment-description">
                                    Make your payment directly into our bank account. Please use your
                                    Order ID as the payment reference. Your order will not be shipped
                                    until the funds have cleared in our account.
                                </p>
                                <label>
                                    <input type="radio" name="payment" /> Cash on delivery
                                </label>
                            </div>
                            <button className="place-order-button btn btn-primary btn-block">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <Banner />
            <Footer />
        </div>


    );
};

export default Checkout;
