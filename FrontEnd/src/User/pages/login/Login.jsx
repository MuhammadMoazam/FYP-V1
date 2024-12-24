import React, { useState } from 'react'
import './Login.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'


const Login = () => {

    const [loginOrRegister, setLoginOrRegister] = useState(true)
    const [rememberMe, setRememberMe] = useState(false)

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

                <h2> {loginOrRegister ? 'Login' : 'Register'} </h2>

                <div className='form-container'>
                    <form className='form'>
                        <div className='input-container'>
                            <label className='heading-1-style'> {loginOrRegister ? 'Username or email address' : 'Email address'} <label style={{ color: 'red' }}>*</label></label>
                            <input type={loginOrRegister ? 'text' : 'email'} className='input-style' />
                        </div>
                        <div className='input-container'>
                            <label className='heading-1-style'>Password <label style={{ color: 'red' }}>*</label></label>
                            <input type='password' className='input-style' />
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
                                    <label className='heading-2-style' style={{ width: '10px' }}>
                                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a rel="stylesheet" href="/privacy-policy" style={{ color: '#3b4fe4', textDecoration: 'none' }}>privacy policy</a>.
                                    </label>
                                </div>
                            )
                        }
                        <button type='submit' className='submit-button'> {loginOrRegister ? 'Login' : 'Register'} </button>
                    </form>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Login