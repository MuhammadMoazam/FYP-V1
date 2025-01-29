import React, { createContext, useContext } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const serverURL = 'http://localhost:5000';

export const ApiContext = createContext(undefined);

const ApiContextProvider = ({ children, user }) => {

    const forgotPassword = async (email) => {
        try {
            const response = await axios.post(`${serverURL}/api/forgotPassword`, { email });
            if (response.status === 200) {
                return true;
            }
            return false;
        } catch (error) {
            console.log("🚀 ----------------------------------🚀");
            console.log("🚀 ~ forgotPassword ~ error:", error);
            console.log("🚀 ----------------------------------🚀");
            return false;
        }
    };

    const registerUser = async (email, password) => {
        try {
            const response = await axios.post(`${serverURL}/api/signup`, {
                email,
                password,
            });
            return response.data;
        } catch (error) {
            console.error('Error registering user:', error);
            throw error;
        }
    };

    const authenticateUser = async (userName, password) => {
        try {
            const apiResponse = await axios.post(`${serverURL}/api/signin`, { userName, password });

            return apiResponse.data
        } catch (error) {
            if (error.response.status === 401) {
                return { message: 'unauthorized' }
            }
            console.log("🚀 ------------------------------------🚀")
            console.log("🚀 ~ authenticateUser ~ error:", error)
            console.log("🚀 ------------------------------------🚀")
            return { message: 'Server Error' };
        }
    };

    const checkForAuthentication = async () => {
        try {
            const token = Cookies.get('session')
            if (token) {
                const apiResponse = await axios.get(`${serverURL}/api/getUserData`, { headers: { Authorization: token } })
                return apiResponse.data
            };
        } catch (error) {
            if (error.response.status === 401) {
                return { message: 'unauthorized' }
            }
            console.log("🚀 ------------------------------------------🚀")
            console.log("🚀 ~ checkForAuthentication ~ error:", error)
            console.log("🚀 ------------------------------------------🚀")
            return { message: 'Server Error', email: '' };
        }
    };

    const resendOTP = async (email) => {
        try {
            const response = await axios.post(`${serverURL}/api/resendOTP`, { email })
            if (response.status === 201) {
                return true
            }
            return false
        } catch (error) {
            console.log("🚀 ------------------------------🚀")
            console.log("🚀 ~ resendOTP ~ error:", error)
            console.log("🚀 ------------------------------🚀")
            return false
        }
    }

    const verifyOTP = async (email, otp) => {
        try {
            const response = await axios.post(`${serverURL}/api/verifyOTP`, { email, otp })
            if (response.status === 200) {
                return response.data
            }
            return false
        } catch (error) {
            console.log("🚀 ------------------------------🚀")
            console.log("🚀 ~ verifyOTP ~ error:", error)
            console.log("🚀 ------------------------------🚀")
            return false
        }
    }

    const updateUser = async ({ userName, names, passwords, email }) => {
        try {
            const token = Cookies.get('session')
            const response = await axios.post(`${serverURL}/api/updateUser`, { userName, names, passwords, email }, { headers: { Authorization: token } })

            return response.data
        } catch (error) {
            if (error.response.status === 403) {
                return { message: error.response.data.message }
            }
            if (error.response.status === 409) {
                return { message: error.response.data.message }
            }
            console.log("🚀 ------------------------------🚀")
            console.log("🚀 ~ updateUser ~ error:", error)
            console.log("🚀 ------------------------------🚀")
            return null
        }
    }

    const contextValue = {
        forgotPassword,
        registerUser,
        authenticateUser,
        resendOTP,
        verifyOTP,
        checkForAuthentication,
        updateUser,
        user
    };

    return (
        <ApiContext.Provider value={contextValue}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => {
    const context = useContext(ApiContext);
    if (context === undefined) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};

export { ApiContextProvider as ApiProvider };
