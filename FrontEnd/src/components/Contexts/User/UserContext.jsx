import React, { createContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export const UserContext = createContext(undefined);

const UserContextProvider = ({ children }) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const login = (data) => {
        //set cookie
        Cookies.set('session', data.token, { expires: 7 })
        //set user data
        setUser(data.user)

        setLoggedIn(true)
    }

    const logout = () => {
        Cookies.remove('session')
        setUser(null)
        setLoggedIn(false)
    }

    const updateUserData = (data) => {
        console.log('updateUserData', data);
        setUser(data)
        console.log('updatedUserData', user);
    }

    const contextValue = {
        loggedIn,
        user,
        login,
        logout,
        updateUserData,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;