import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import '../login/Login.css'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import useApi from '../../components/Contexts/API/useApi'
import useUser from '../../components/Contexts/User/useUser'

import OtpInput from 'react-otp-input'
import ClipLoader from "react-spinners/ClipLoader";

const VerifyOTP = () => {

    const { resendOTP: resendOtpApi, verifyOTP } = useApi()
    const { login } = useUser()

    const navigate = useNavigate();
    const location = useLocation();

    const otpEmail = location?.state?.email || null;

    const [otp, setOtp] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ message: "", type: "" })


    async function submit(e) {
        e.preventDefault()
        try {
            setLoading(true)

            const response = await verifyOTP(otpEmail, otp)

            if (response) {
                const success = login(response);
                if (success) {
                    navigate("/account");
                } else {
                    setMessage({ message: "An error occurred during login", type: "error" });
                }
            }
        } catch (error) {
            console.log(error)
            setMessage({ message: "An error occurred during login", type: "error" });
        } finally {
            setLoading(false)
            setTimeout(() => {
                setMessage({ message: "", type: "" });
            }, 2000);
        }

    }

    async function resendOtp() {
        if (!otpEmail || otpEmail === '' || loading) {
            return;
        }
        try {
            const response = await resendOtpApi(otpEmail)
            if (response) {
                setMessage({ message: 'OTP Resent!!', type: 'success' })
            }
        } catch (error) {
            console.log(error)
            setMessage({ message: 'Failed to resend OTP', type: 'error' })
        } finally {
            setTimeout(() => {
                setMessage({ message: "", type: "" });
            }, 2000);
        }
    }

    useEffect(() => {
        if (!otpEmail) {
            navigate('/login')
        }
    })


    return (
        <div>
            <Navbar />

            <div className='container'>

                <br />

                <h1> {'OTP Verification'} </h1>

                {message && message.message && (
                    <div className="error-message" style={{ backgroundColor: message.type === 'success' && 'green' }}>
                        {message.message}
                    </div>
                )}

                <div className='form-container'>
                    <form className='form' onSubmit={(e) => submit(e)}>
                        <div>
                            <h5> An OTP has been sent to your email address <label style={{ color: 'grey', fontSize: '12px', fontWeight: 'bold' }}> {otpEmail} </label> </h5>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                containerStyle={{ justifyContent: 'center', gap: '10px', marginTop: '20px' }}
                                inputStyle={{ width: '50px', height: '50px', justifyContent: 'center', border: '1px solid grey', borderRadius: '6px' }}
                                renderInput={(props) => <input {...props} />}
                            />
                            <br />
                            <label> Didn't receive the OTP? <label style={{ color: '#3b4fe4', cursor: 'pointer', fontSize: '12px' }} onClick={() => resendOtp()}> Resend OTP? </label> </label>
                        </div>

                        <button type='submit' className='submit-button' style={{ justifySelf: 'center' }} disabled={loading || otp.length !== 4 || !otpEmail}> {
                            loading ? (<ClipLoader
                                color={'white'}
                                loading={loading}
                                size={30}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />)
                                : 'Verify'} </button>
                    </form>
                </div >

            </div >

            <Footer />
        </div >
    )
}

export default VerifyOTP