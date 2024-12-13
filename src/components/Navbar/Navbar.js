import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () =>
{
    const initialTime = 24 * 60 * 60; // 24 hours in seconds

    // Retrieve saved time from localStorage or set it to 24 hours by default
    const savedTime = localStorage.getItem('remainingTime');
    const startTime = savedTime ? parseInt(savedTime, 10) : initialTime;

    const [time, setTime] = useState(startTime);

    useEffect(() =>
    {
        const interval = setInterval(() =>
        {
            setTime((prevTime) =>
            {
                const newTime = prevTime - 1;
                localStorage.setItem('remainingTime', newTime);
                return newTime;
            });
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    const formatTime = (time) =>
    {
        const hours = Math.floor(time / 3600);           // Calculate hours
        const minutes = Math.floor((time % 3600) / 60);  // Calculate minutes
        const seconds = time % 60;                       // Calculate seconds

        // Conditionally format the time output with bold numbers
        let formattedTime = '';

        if (hours > 0)
        {
            formattedTime += `<span class="bold">${hours}</span> HRS `;
        }

        if (minutes > 0 || hours > 0)
        { // Show minutes if there's at least one hour
            formattedTime += `<span class="bold">${minutes}</span> MINS `;
        }

        if (seconds >= 0)
        {
            formattedTime += `<span class="bold">${seconds}</span> SECS`;
        }

        return formattedTime;
    };

    return (
        <header className="navbar">
            <div className="navbar-top">
                <span className="left-bar">20% discount offer on all products</span>
                <div
                    className="navbar-top-timer right-bar"
                    dangerouslySetInnerHTML={{ __html: formatTime(time) }}
                />
            </div>
            <div className="navbar-main">
                <div className="logo">URBAN CLOTHE</div>
                <div className="navbar-actions">
                    <select className="currency-selector">
                        <option value="PKR">Rs PKR</option>
                        {/* Add other currencies if needed */}
                    </select>
                    <a href="/cart" className="cart">
                        Cart <span className="cart-count">1</span>
                    </a>
                    <a href="/account">My account</a>
                    <a href="/wishlist">Wishlist</a>
                </div>
            </div>
            <div className="navbar-lower">
                {/* Flexbox layout for lower navbar */}
                <div className="navbar-bottom">
                    <nav className="navbar-links">
                        <a href="/home">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/shop">Shop</a>
                        <a href="/contact">Contact</a>
                        <a href="/blog">Blog</a>
                    </nav>
                    <div className="navbar-search">
                        <input type="text" placeholder="Search..." />
                        <button className="search-btn">🔍</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
