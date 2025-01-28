import React from "react";
import { UserProvider, useUser } from "./components/Contexts/User/UserContext";
import { ApiProvider } from "./components/Contexts/API/APIContext";
import { CartProvider } from "./components/Contexts/Cart/CartContext";
import useApi from "./components/Contexts/API/useApi.js";

import "./index.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Login from "./pages/login/Login";
import VerifyOTP from "./pages/VerifyOTP/VerifyOTP";

// Helper Component to handle authentication logic
const AccountChecker = () => {
  const { loggedIn, loading } = useUser();

  if (loading) {
    return <div>Loading...</div>;
  }

  return loggedIn ? <Account /> : <Navigate to="/login" replace />;
};

// Routes component
const AppRoutes = () => {
  const { checkForAuthentication } = useApi();
  const { loading } = useUser();

  React.useEffect(() => {
    checkForAuthentication();
  }, [checkForAuthentication]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/terms" element={<Term />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<AccountChecker />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

// Root App component
const App = () => {
  return (
    <Router>
      <UserProvider>
        <ApiProvider>
          <CartProvider>
            <AppRoutes />
          </CartProvider>
        </ApiProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
