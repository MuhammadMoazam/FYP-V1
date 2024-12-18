import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Lower_Banner/Lower_Banner';
import './Checkout.css';

const Checkout = ({ orderItems = [], total = 0, onPlaceOrder, countries = [], states = [] }) => {
    const [paymentMethod, setPaymentMethod] = useState('bank');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        notes: '',
    });

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <Navbar />

            <div className="checkout-container container mx-auto px-4 py-6">
                {/* Coupon Section */}
                <div className="coupon-section mb-6">
                    <p className="text-gray-700">
                        Have a coupon? <a href="/" className="text-blue-600 underline">Click here to enter your code</a>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Billing Details */}
                    <div className="w-full lg:w-2/3 bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3" // Increased height
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3" // Increased height
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Country <span className="text-red-500">*</span></label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3" // Increased height
                                >
                                    <option value="">Select a country</option>
                                    {countries.map((country) => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Street Address <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3" // Increased height
                                    placeholder="123 Main Street"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Town / City <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3" // Increased height
                                    placeholder="New York"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">State <span className="text-red-500">*</span></label>
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3" // Increased height
                                    >
                                        <option value="">Select your state</option>
                                        {states.map((state) => (
                                            <option key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Postcode / ZIP <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="zip"
                                        value={formData.zip}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3" // Increased height
                                        placeholder="12345"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone <span className="text-red-500">*</span></label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3" // Increased height
                                    placeholder="123-456-7890"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-3" // Increased height
                                    placeholder="example@mail.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Order Notes (optional)</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm min-h-[150px]" // Increased height for textarea
                                    placeholder="Notes about your order, e.g., special notes for delivery"
                                ></textarea>
                            </div>
                        </form>

                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-1/3 bg-gray-50 shadow-md p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-6">Your Order</h2>

                        <div className="space-y-4">
                            {orderItems.map((item) => (
                                <div key={item.id} className="flex justify-between text-gray-700">
                                    <span>{item.name} × {item.quantity}</span>
                                    <span>{item.price}</span>
                                </div>
                            ))}

                            <div className="border-t border-gray-200 my-4"></div>

                            <div className="flex justify-between font-semibold text-gray-900">
                                <span>Subtotal</span>
                                <span>{total}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-gray-900">
                                <span>Total</span>
                                <span>{total}</span>
                            </div>
                        </div>

                        {/* Payment Options */}
                        <div className="mt-6">
                            <h3 className="text-lg font-medium text-gray-700 mb-4">Payment Options</h3>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="bank"
                                        checked={paymentMethod === 'bank'}
                                        onChange={() => setPaymentMethod('bank')}
                                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Direct Bank Transfer</span>
                                </label>
                                <p className="text-sm text-gray-500">
                                    Make your payment directly into our bank account. Use your Order ID as the payment reference.
                                </p>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={() => setPaymentMethod('cod')}
                                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">Cash on Delivery</span>
                                </label>
                            </div>
                        </div>

                        <button
                            onClick={() => onPlaceOrder({ ...formData, paymentMethod })}
                            className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>

            <Banner />
            <Footer />
        </div>
    );
};

export default Checkout;
