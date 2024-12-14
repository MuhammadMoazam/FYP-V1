import React from 'react'
import TImage from 'components/TImage/TImage'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
const Wishlist = () =>
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

export default Wishlist
