import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import './Contact.css'
const Contact = () =>
{
  return (
    <>
      <Navbar />
      <section class="hero-section">
        <div class="hero-content">
          <h1 class="hero-heading">Welcome to Our Website</h1>
          <p class="hero-description">Explore the world of endless possibilities and amazing content.</p>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact
