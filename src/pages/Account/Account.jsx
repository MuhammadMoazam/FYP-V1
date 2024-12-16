import React from 'react'
import TImage from 'components/TImage/TImage'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
const Account = () =>
{
    return (
        <>
            <Navbar />
            <TImage
                title="My Account"
                description="Manage your profile, orders, and settings for a seamless shopping experience."
            />
            <Footer />
        </>
    )
}

export default Account
