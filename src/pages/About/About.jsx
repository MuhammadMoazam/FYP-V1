import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Lower_Banner/Lower_Banner'
import TImage from '../../components/TImage/TImage'

const About = () => {
  return (
    <>
      <Navbar />
      <TImage
        title="About Us"
        description="Discover our story, passion, and commitment to quality fashion"
      />
      <Banner />
      <Footer />
    </>
  )
}

export default About
