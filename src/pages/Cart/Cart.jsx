import React from 'react'
import TImage from 'components/TImage/TImage'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'
const Cart = () =>
{
    return (
        <>
            <Navbar />
            <TImage
                title="Cart"
                description="Get your all favorite products here at good price."
            />
        <Footer/>
        </>
    )
}

export default Cart
