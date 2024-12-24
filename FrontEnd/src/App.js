import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useColorModes } from "@coreui/react";
import "./scss/style.scss";

// Containers
import DefaultLayout from "./layout/DefaultLayout";

// Pages
import Login from "./views/pages/login/Login";
import Register from "./views/pages/register/Register";
import Page404 from "./views/pages/page404/Page404";
import Page500 from "./views/pages/page500/Page500";
import Home from "./User/pages/Home/Home.jsx";

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes(
    "coreui-free-react-admin-template-theme",
  );
  const storedTheme = useSelector((state) => state.theme);

  useEffect(() => {
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
        {/* Default route redirects to /test */}
        <Route path="/" element={<Navigate to="/test" replace />} />
        <Route exact path="/test" name="Home" element={<Home />} />
        <Route exact path="/login" name="Login Page" element={<Login />} />
        <Route
          exact
          path="/register"
          name="Register Page"
          element={<Register />}
        />
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
