import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import useApi from '../../../components/Contexts/API/useApi'

import OtpInput from 'react-otp-input'
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {

    const { authenticateUser, registerUser, resendOTP: resendOtpApi, verifyOTP: verifyOtpApi } = useApi()

    const navigate = useNavigate();

    const [loginOrRegister, setLoginOrRegister] = useState(true)
    const [loading, setLoading] = useState(false)
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [rememberMe, setRememberMe] = useState(false)


    async function submit(e) {
        e.preventDefault()

        try {
            setLoading(true)
            let response;

            if (loginOrRegister) {
                response = await authenticateUser(emailInput, passwordInput)
                if (response.message === 'unauthorized') {
                    alert('Invalid username or password')
                    return setLoading(false)
                }
            } else {
                response = await registerUser(emailInput, passwordInput)
                if (response.message === 'conflict') {
                    alert('Email already exists')
                    return setLoading(false)
                }
            }
            setLoading(false)

            if (response) {
                navigate('/verify-otp', { state: { email: response.email } })
            }
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <Navbar />

            <div className='container'>

                <div className='login-register'>
                    <div className='buttons-container'>
                        <div className={`selected-decoration ${loginOrRegister ? 'active' : ''}`} />
                        <button
                            className={`button ${loginOrRegister ? 'active' : ''}`}
                            onClick={() => {
                                setLoginOrRegister(true)
                            }}
                        >
                            Login
                        </button>
                        <button
                            className={`button ${!loginOrRegister ? 'active' : ''}`}
                            onClick={() => {
                                setLoginOrRegister(false)
                            }}
                        >
                            Register
                        </button>
                    </div>
                </div>

                <br />

                <h1> {loginOrRegister ? 'Login' : 'Register'} </h1>

                <div className='form-container'>
                    <form className='form' onSubmit={(e) => submit(e)}>

                        <div>
                            <div className='input-container'>
                                <label className='heading-1-style'> {loginOrRegister ? 'Username or email address' : 'Email address'} <label style={{ color: 'red' }}>*</label></label>
                                <input type={loginOrRegister ? 'text' : 'email'} value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className='input-style' />
                            </div>
                            <div className='input-container'>
                                <label className='heading-1-style'>Password <label style={{ color: 'red' }}>*</label></label>
                                <input type='password' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} className='input-style' />
                            </div>
                            {
                                loginOrRegister ? (
                                    <div className='checkbox-container' >
                                        <label className='heading-2-style' style={{ fontSize: '12px', color: '#3b4fe4' }}> Forgot Your Password? </label>

                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <input type="checkbox" name="remember" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                                            <label className='heading-1-style' style={{ fontSize: '15px' }}>Remember me</label>
                                        </div>
                                    </div>
                                ) : (
                                    <div style={{ width: '100%', maxWidth: '500px' }}>
                                        <label className='heading-2-style' >
                                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a rel="stylesheet" href="/privacy-policy" style={{ color: '#3b4fe4', textDecoration: 'none' }}>privacy policy</a>.
                                        </label>
                                    </div>
                                )
                            }
                        </div>

                        <button type='submit' className='submit-button' disabled={loading}> {
                            loading ? (<ClipLoader
                                color={'white'}
                                loading={loading}
                                size={30}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />)
                                : loginOrRegister ? 'Login' : 'Register'} </button>
                    </form>
                </div >

            </div >

            <Footer />
        </div >
    )
}

export default Login