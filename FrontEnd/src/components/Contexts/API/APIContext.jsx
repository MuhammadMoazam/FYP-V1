import React, { createContext, useContext } from 'react';
import axios from 'axios';
import useUser from '../User/useUser';
import Cookies from 'js-cookie'

const serverURL = 'http://localhost:5000'

export const ApiContext = createContext(undefined);

const ApiContextProvider = ({ children }) => {

    const { login } = useUser()

    const forgotPassword = async (email) => {
        try {
            const response = await axios.post(`${serverURL}/api/forgotPassword`, { email })
            if (response.status === 200) {
                return true
            }
            return false
        } catch (error) {
            console.log("🚀 ----------------------------------🚀")
            console.log("🚀 ~ forgotPassword ~ error:", error)
            console.log("🚀 ----------------------------------🚀")
            return false
        }
    }

    const registerUser = async (email, password) => {
        try {
            const response = await axios.post(`${serverURL}/api/signup`, {
                email,
                password,
            })

            return response.data
        } catch (error) {
            if (error.response.status === 409) {
                return { message: 'conflict' }
            }
            console.log("🚀 --------------------------------🚀")
            console.log("🚀 ~ registerUser ~ error:", error)
            console.log("🚀 --------------------------------🚀")
            return { message: 'Server Error' };
        }
    }

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
                login({ user: apiResponse.data, token })
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
            if (response.status === 200) {
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

    // const logoutUser = async () => {
    //     try {
    //         const sessionToken = Cookies.get('session')
    //         if (sessionToken == 'loggedinasguestuser') {
    //             return true;
    //         }
    //         const response = await axios.get(`/server/api/logout`, { headers: { Authorization: sessionToken } })
    //         if (response.status != 200) {
    //             return false
    //         } else {
    //             return true
    //         }
    //     } catch (error) {
    //         console.log("🚀 ~ file: APIContext.tsx:44 ~ logoutUser ~ error:", error)
    //         return false
    //     }
    // }

    const contextValue = {
        forgotPassword,
        registerUser,
        authenticateUser,
        resendOTP,
        verifyOTP,
        checkForAuthentication,
        updateUser,
        //        logoutUser,
    };

    return (
        <ApiContext.Provider value={contextValue}>
            {children}
        </ApiContext.Provider>
    );
};

export default ApiContextProvider;