import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Lower_Banner/Lower_Banner'
import TImage from '../../components/TImage/TImage'
import AboutOne from 'components/AboutOne/AboutOne'
import { FaApple, FaAmazon, FaGoogle, FaMicrosoft } from "react-icons/fa"; // Importing company logos


const About = () => {
  return (
    <>
      <Navbar />
      <TImage
        title="About Us"
        description="Discover our story, passion, and commitment to quality fashion"
      />
      <AboutOne/>
      <>
        <section className="promise-section">
          <div className="promise-image"></div> {/* No need for <img> tag here */}
          <div className="promise-content">
            <h2>Our Promise to You</h2>
            <p>
              At Urban Clothe, we are committed to delivering not only high-quality
              products but also an exceptional customer experience. Our promise is
              simple: to offer you the best in quality, value, and service, every
              time you shop with us. We’re here to make your experience smooth,
              enjoyable, and memorable.
            </p>
            <button className="cta2-button">Get Your Place <span>→</span></button>
          </div>
        </section>
      </>

      <>
        <section className="testimonial-section">
          <div className="content-container">
            <h2 className="testimonial-heading">People Who Love Our Place</h2>
            <p className="testimonial-description">
              Thousands of satisfied customers love shopping at Urban Clothe for our
              premium <span className="bold-text">Dressing</span>, top-notch customer service, and easy
              online shopping experience. Discover why we're the go-to choice for{" "}
              <span className="bold-text">Kids and Ladies</span> today!
            </p>

            <div className="logo-grid">
              <div className="logo-card">
                <FaApple className="company-logo apple" title="Apple" />
              </div>
              <div className="logo-card">
                <FaAmazon className="company-logo amazon" title="Amazon" />
              </div>
              <div className="logo-card">
                <FaGoogle className="company-logo google" title="Google" />
              </div>
              <div className="logo-card">
                <FaMicrosoft className="company-logo microsoft" title="Microsoft" />
              </div>
            </div>
          </div>
        </section>
      </>
      <Banner />
      <Footer />
    </>
  )
}

export default About
