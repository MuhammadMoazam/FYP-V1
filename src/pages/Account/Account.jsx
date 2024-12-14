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
                description="Access all your details here and get all features."
            />
            <Footer />
        </>
    )
}

export default Account
