import React from 'react'
import HeroSection from './LandingPage/HeroSection'
import Welcome from './LandingPage/Welcome'
import Testimonials from './LandingPage/Testimonials'
import Discovery from './LandingPage/Discovery'

const HomeView = () => {
  return (
    <div>
        <HeroSection/>
        <Welcome/>
        <Discovery/>
        <Testimonials/>

    </div>
  )
}

export default HomeView