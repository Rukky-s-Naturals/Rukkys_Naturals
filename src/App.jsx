import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import HomeView from './pages';
import About from './pages/OtherPages/About';
import AllProducts from './pages/OtherPages/AllProducts';
import Blog from './pages/OtherPages/Blog';
import Booking from './pages/OtherPages/Booking';
import Contact from './pages/OtherPages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [{ index: true, element: <HomeView /> }, 
        {
        path: 'about',
        element: <About/>
      }, 

      {
        path: 'allProducts',
        element: <AllProducts/>
      }, 
      
      {
        path: 'blog',
        element: <Blog/>
      },

      {
        path: 'booking',
        element: <Booking/>
      }, 
      
      {
        path: 'contact',
        element: <Contact/>
      }, ]
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
