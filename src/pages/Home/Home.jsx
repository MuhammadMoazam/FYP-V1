import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Lower_Banner/Lower_Banner'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Slider from '../components/Slider/Slider'
import ProductCategories from 'pages/components/ProductCategories/ProductCategories'
import Stats from 'pages/components/Stats/Stats'
import WhyChooseUs from 'pages/components/WhyChooseUs/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
<Slider></Slider>
      <ProductCategories></ProductCategories>
      <Stats></Stats>
      <WhyChooseUs></WhyChooseUs>

      <Footer />
    </div>
  )
}

export default Home
