/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useColorModes } from "@coreui/react";
import "./scss/style.scss";

// Containers
import DefaultLayout from "./layout/DefaultLayout";

// Pages
import Login from "./User/pages/login/Login";
import VerifyOTP from "./User/pages/VerifyOTP/VerifyOTP.jsx";
import Register from "./views/pages/register/Register";
import Page404 from "./views/pages/page404/Page404";
import Page500 from "./views/pages/page500/Page500";
import Home from "./User/pages/Home/Home.jsx";
import About from "./User/pages/About/About.jsx";
import Account from "./User/pages/Account/Account.jsx";
import Blog from "./User/pages/Blog/Blog.jsx";
import Cart from "./User/pages/Cart/Cart.jsx";
import Checkout from "./User/pages/Checkout/Checkout.jsx";
import Contact from "./User/pages/Contact/Contact.jsx";
import Legal from "./User/pages/Legal/Legal.jsx";
import Shop from "./User/pages/Shop/Shop.jsx";
import Wishlist from "./User/pages/Wishlist/Wishlist.jsx";
import Terms from "./User/pages/Terms/Terms.jsx";

import useUser from "./components/Contexts/User/useUser.js";
import useApi from "./components/Contexts/API/useApi.js";

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme"
  );
  const storedTheme = useSelector((state) => state.theme);

  const { loggedIn } = useUser()
  const { checkForAuthentication } = useApi()

  useEffect(() => {
    checkForAuthentication()

    const urlParams = new URLSearchParams(window.location.href.split("?")[1]);
    const theme =
      urlParams.get("theme") &&
      urlParams.get("theme").match(/^[A-Za-z0-9\s]+/)[0];
    if (theme) {
      setColorMode(theme);
    }

    if (isColorModeSet()) {
      return;
    }

    setColorMode(storedTheme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route exact path="/home" name="Home" element={<Home />} />
        <Route exact path="/about" name="About" element={<About />} />
        <Route exact path="/account" name="Account" element={loggedIn ? <Account /> : <Login />} />
        <Route exact path="/verify-otp" name="OTP Verification" element={<VerifyOTP />} />
        <Route exact path="/blog" name="Blog" element={<Blog />} />
        <Route exact path="/cart" name="Cart" element={<Cart />} />
        <Route exact path="/checkout" name="Checkout" element={<Checkout />} />
        <Route exact path="/contact" name="Contact" element={<Contact />} />
        <Route exact path="/legal" name="Legal" element={<Legal />} />
        <Route exact path="/shop" name="Shop" element={<Shop />} />
        <Route exact path="/wishlist" name="Wishlist" element={<Wishlist />} />
        <Route exact path="/terms" name="Terms" element={<Terms />} />
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
        {/* Fallback to Default Layout */}
        <Route path="*" name="Default" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
