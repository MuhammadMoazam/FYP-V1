import React from "react";
import { useEffect } from "react";
import { UserProvider } from './components/Contexts/UserContext';
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Term from "./pages/Terms/Terms";
import Cart from "./pages/Cart/Cart";
import Legal from "./pages/Legal/Legal";
import Account from "./pages/Account/Account";
import Wishlist from "./pages/Wishlist/Wishlist";
import Checkout from "./pages/Checkout/Checkout";
import ProductDetail from "./components/ProductDetail/ProductDetail"; // Ensure this is the correct import path
import Login from "pages/login/Login";
import useUser from "./components/Contexts/User/useUser.js";
import useApi from "./components/Contexts/API/useApi.js";

const App = () => {

  const { loggedIn } = useUser();
  const { checkForAuthentication } = useApi()

  useEffect(() => {
    checkForAuthentication()
  })

  return (
    <UserProvider>

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
        <Route
          exact
          path="/account"
          name="Account"
          element={loggedIn ? <Account /> : <Login />}
          />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  </UserProvider>
  );
};

export default App;
