import React from 'react'
import TImage from '../../components/TImage/TImage'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
const Cart = () =>
{
    return (
        <>
            <Navbar />
            <TImage
                title="Cart"
                description="View, update, and proceed to checkout for your selected items."
            />
        <Footer/>
        </>
    )
}

export default Cart
