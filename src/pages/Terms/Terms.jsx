import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Lower_Banner/Lower_Banner'
import TImage from '../../components/TImage/TImage'
import './Terms.css'
const Term = () =>
{
  return (
    <>
      <Navbar />
      <TImage
        title="Terms and Conditions"
        description="Please read our terms and conditions before using our services."
      />
      <Banner />
      <Footer />
    </>
  )
}

export default Term
