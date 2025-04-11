import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
   <nav className='flex flex-row justify-between items-center p-5 font-bold font-sans'>

    <p className='font-serif font-extrabold text-2xl border-2 p-2 rounded-2xl border-green-800 text-green-900 '>Rukky'<span className='text-red-700'>s</span> <br /> <span className='text-red-700'>Nat</span>urals</p>

    <ul className='flex flex-row gap-2 border-1  border-gray-400 rounded-4xl shadow-2xl p-4 w-200 justify-evenly'>
      <NavLink to='/'><li>Home</li></NavLink> 
      <NavLink to='about'><li>About</li></NavLink> 
      <NavLink to='allproducts'><li>Products</li></NavLink> 
      <NavLink to='blog'><li>Blog</li></NavLink> 
      <NavLink to='booking'><li>Consultation</li></NavLink>
      <NavLink to='contact'><li>Contact</li></NavLink>
    </ul>
    
    <Link to='allproducts'>
        <button className=' flex border-2 rounded-4xl w-30 p-3 bg-green-900 text-white'>Get Started</button>
    </Link>
   </nav>




   
  )
}

export default Navbar