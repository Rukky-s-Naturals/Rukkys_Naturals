import React from 'react'
import herbal4 from '../../assets/images/herbal4.png'

const Welcome = () => {
  return (
    <div className='flex flex-1/2 justify-around p-20'>
      <div className='p-20'>
        <p className='font-bold text-3xl p-5'>Welcome to Rukky's Herbal</p>
        <p>We are passionate about health and herbal living for optimal health</p>
      </div>
      <img className='rounded-4xl border max-w-140' src={herbal4} alt="herbal" />
    </div>
  )
}

export default Welcome