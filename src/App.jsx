import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import AllProducts from './pages/AllProducts'
import SingleProduct from './pages/SingleProduct'
import About from './pages/About'
import Booking from './pages/Booking'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
   <BrowserRouter>
   <Routes>
   {/* <  Route index={true} element={<Landing />} /> */}

      <Route path='/' element ={<Landing/>}/>
      <Route path='/landing' element ={<Landing/>}/>
      <Route path='/all-products' element={<AllProducts/>}/>
      <Route path='/single-product' element={SingleProduct}/>
      <Route path='/about' element={About}/>
      <Route path='/booking' element={Booking}/>
      <Route path='/blog' element={Blog}/>
      <Route path='/contact' element={Contact}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
