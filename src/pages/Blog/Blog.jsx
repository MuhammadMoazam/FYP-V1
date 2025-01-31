import React from 'react'
import './Blog.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Lower_Banner/Lower_Banner'
import TImage from '../../components/TImage/TImage'
const Blog = () => {
  return (
    <>
      <Navbar />
      <TImage
        title="Our Blogs"
        description="Stay updated with fashion tips, trends, and news."
      />
      <Banner />
    <Footer/>
    </>
  )
}

export default Blog
