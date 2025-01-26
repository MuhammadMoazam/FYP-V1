import React from "react";
import { UserProvider } from "./components/Contexts/UserContext";
import { ApiProvider } from "./components/Contexts/API/APIContext";
import useUser from "./components/Contexts/User/useUser.js";
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

// Main app content component
const AppContent = () => {
  const { checkForAuthentication } = useApi();

  React.useEffect(() => {
    checkForAuthentication();
  }, [checkForAuthentication]);

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
        <Route
          exact
          path="/account"
          name="Account"
          element={<AccountChecker />}
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

// Helper Component to handle authentication logic
const AccountChecker = () => {
  const { loggedIn } = useUser();
  return loggedIn ? <Account /> : <Login />;
};

// Root App component
const App = () => {
  return (
    <UserProvider>
      <ApiProvider>
        <AppContent />
      </ApiProvider>
    </UserProvider>
  );
};

export default App;
