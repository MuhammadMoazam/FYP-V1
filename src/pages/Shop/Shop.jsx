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
        description="Browse our trendy collections and shop the latest in fashion styles."
      />
      <Banner />
    <Footer/>
    </>
  )
}

export default Shop
