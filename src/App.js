import React from 'react';
import './index.css'
import
  {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import About from './pages/About/About';
import Shop from './pages/Shop/Shop';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Term from './pages/Terms/Terms';
import Cart from './pages/Cart/Cart';
import Legal from './pages/Legal/Legal';
import Account from './pages/Account/Account';
import Wishlist from './pages/Wishlist/Wishlist';
import Checkout from './pages/Checkout/Checkout';


const App = () =>
{
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Term />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
