import React from 'react'
import HeroSection from './LandingPage/HeroSection'
import Welcome from './LandingPage/Welcome'
import Testimonials from './LandingPage/Testimonials'
import Discovery from './LandingPage/Discovery'
import BlogFeature from './LandingPage/BlogFeature'
import Sexual from './LandingPage/sexual'

const HomeView = () => {
  return (
    <div className='bg-green-50'>
        <HeroSection/>
        <Welcome/>
        <Discovery/>
        <Testimonials/>
        <Sexual/>
        <BlogFeature/>
        
    </div>
  )
}

export default HomeView