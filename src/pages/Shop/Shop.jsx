import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Lower_Banner/Lower_Banner'
import TImage from '../../components/TImage/TImage'
import './Shop.css'
const Shop = () => {
  return (
    <>
      <Navbar />
      <TImage
        title="Shop"
        description="Explore our latest collection of stylish clothing and accessories."
      />
      <Banner />
    <Footer/>
    </>
  )
}

export default Shop
