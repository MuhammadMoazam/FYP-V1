import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Lower_Banner/Lower_Banner'
import TImage from '../../components/TImage/TImage'
import Legalcomp from 'components/Legalcomp/Legalcomp'
import './Legal.css'
const Legal = () =>
{
  return (
    <>
      <Navbar />
      <TImage
        title="Legal "
        description="Read our privacy policy, terms, and legal disclaimers."
      />
      <Legalcomp />
      <Banner />
    <Footer/>
    </>
  )
}

export default Legal
