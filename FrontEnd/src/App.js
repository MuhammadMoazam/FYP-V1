import React from "react";
import { UserProvider, useUser } from "./components/Contexts/UserContext";
import { ApiProvider } from "./components/Contexts/API/APIContext";
import useApi from "./components/Contexts/API/useApi.js";

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
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Login from "./pages/login/Login";

// Helper Component to handle authentication logic
const AccountChecker = () => {
  const { loggedIn } = useUser();
  return loggedIn ? <Account /> : <Login />;
};

// Routes component
const AppRoutes = () => {
  const { checkForAuthentication } = useApi();

  React.useEffect(() => {
    checkForAuthentication();
  }, [checkForAuthentication]);

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
      <Route 
        path="/login" 
        element={
          <UserProvider>
            <ApiProvider>
              <Login />
            </ApiProvider>
          </UserProvider>
        } 
      />
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
          <AppRoutes />
        </ApiProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
