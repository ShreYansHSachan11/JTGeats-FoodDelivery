import React from 'react'
import Header from '../components/header'
import Cards from '../components/cards'
import Carousel from '../components/carousel'
import Video from '../components/video-section'
import Contact from '../components/contact-form'
import Footer from '../components/footer'
import Cart from '../components/Modals/cart'

const homepage = () => {
  return (
    <div>
        <Header/>
     
        <Cards/>
        <Carousel/>
        <Video/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default homepage