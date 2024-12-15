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
                description="Save your favorite items here to shop later with ease."
            />
            <Footer />
        </>
    )
}

export default Wishlist
