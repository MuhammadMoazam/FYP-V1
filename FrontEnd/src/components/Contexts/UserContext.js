import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from 'js-cookie';

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user data
  const [loggedIn, setLoggedIn] = useState(false); // Track login status
  const [loading, setLoading] = useState(true); // Track loading status

  useEffect(() => {
    // Check for existing session
    const token = Cookies.get('session');
    if (token && user) {
      setLoggedIn(true);
    }
    setLoading(false);
  }, [user]);

  const login = (userData) => {
    if (!userData || typeof userData !== 'object') {
      console.error('Invalid user data provided to login');
      return false;
    }

    setUser(userData); // Set user data when logged in
    setLoggedIn(true);
    return true;
  };

  const logout = async () => {
    try {
      // Clear session cookie
      Cookies.remove('session');
      // Clear user state
      setUser(null); // Remove user data when logged out
      setLoggedIn(false);
      return true;
    } catch (error) {
      console.error('Error during logout:', error);
      return false;
    }
  };

  const updateUserData = (newData) => {
    if (!user) {
      console.error('Cannot update user data: No user is logged in');
      return false;
    }

    setUser({ ...user, ...newData });
    return true;
  };

  const value = {
    user,
    loggedIn,
    loading,
    login,
    logout,
    updateUserData
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
