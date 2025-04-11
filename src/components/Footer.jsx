import React from 'react'
import herbal2 from '../assets/images/herbal2.png'
import herbal4 from '../assets/images/herbal4.png'
import herbal5 from '../assets/images/herbal5.png'
import herbal11 from '../assets/images/herbal11.png'

const Footer = () => {
  return (
    <footer className='flex justify-between items-center m-20'>
      
        <div>
          <h3 className='font-bold text-lg mb-4'>Contact Us</h3>
          <p>telephone</p>
          <p>email address</p>
          <p>map</p>
        </div>

        <div>
          <h3 className='font-bold text-lg mb-4'>Social Links</h3>
          <p>facebook</p>
          <p>instagram</p>
          <p>LinkedIn</p>
        </div>

        <div>
          <h3 className='font-bold text-lg mb-4'>Gallery</h3>
          <div className='grid grid-cols-2 w-30 gap-x-4 gap-y-4'>
          <img src={herbal2} alt="picture" />
          <img src={herbal4} alt="picture" /> 
          <img src={herbal5} alt="picture" />
          <img src={herbal11} alt="picture" />
          </div>
        </div>
      
    </footer>
  )
}

export default Footer