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
                            <label style={{ fontWeight: 'bold', fontFamily: 'cursive', color: 'gray' }}> {loginOrRegister ? 'Username or email address' : 'Email address'} <label style={{ color: 'red' }}>*</label></label>
                            <input type={loginOrRegister ? 'text' : 'email'} style={{ width: '80%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '10px', marginBottom: '10px' }} />
                        </div>
                        <div className='input-container'>
                            <label style={{ fontWeight: 'bold', fontFamily: 'cursive', color: 'gray' }}>Password <label style={{ color: 'red' }}>*</label></label>
                            <input type='password' style={{ width: '80%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginTop: '10px', marginBottom: '10px' }} />
                        </div>
                        {
                            loginOrRegister ? (
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'start', height: '50px' }}>
                                    <label style={{ fontWeight: 'bold', fontSize: '12px', fontFamily: 'monospace', color: '#3b4fe4' }}> Forgot Your Password? </label>

                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <input type="checkbox" name="remember" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                                        <label style={{ fontWeight: 'bold', fontSize: '15px', fontFamily: 'monospace', color: 'gray' }}>Remember me</label>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ width: '500px' }}>
                                    <label style={{ width: '10px', fontWeight: 'bold', fontFamily: 'monospace', color: 'gray' }}>
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