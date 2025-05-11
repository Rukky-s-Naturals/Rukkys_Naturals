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
import SingleProduct from './pages/OtherPages/SingleProduct';
import Cart from './cart/Cart'
import Checkout from './cart/Checkout';
import Payment from './cart/Payment';
import PaymentSuccess from './cart/PaymentSuccess';
import Article1 from './Blog/article1';
import Article2 from './Blog/article2';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [{ index: true, element: <HomeView /> }, 

      {path: 'about', element: <About/>}, 

      {path: 'allProducts', element: <AllProducts/>}, 
      
      {path: 'blog', element: <Blog/>},

      {path: 'booking', element: <Booking/>}, 
      
      {path: 'contact', element: <Contact/>},

      {path: 'allProducts/:id', element: <SingleProduct/>},

      {path: 'cart', element: <Cart/>},

      {path: 'checkout', element: <Checkout/>},

      {path: 'payment', element: <Payment/>},

      {path: 'paymentSuccess', element: <PaymentSuccess/>},

      {path: 'article1', element: <Article1/>},

      {path: 'article2', element: <Article2/>},


    ]

    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
