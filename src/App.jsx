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
import Cart from './cart/Cart';
import Checkout from './cart/Checkout';
import Payment from './cart/Payment';
import PaymentSuccess from './cart/PaymentSuccess';
import Article1 from './Blog/article1';
import Article2 from './Blog/article2';
import DashboardLayout from './layout/DashboardLayout';
import DashProducts from './adminDashboard/DashProducts';
import Overview from './adminDashboard/Overview';
import Blogpost from './adminDashboard/BlogPost';
import Settings from './adminDashboard/Settings';
import Orders from './adminDashboard/Orders';
import Profile from './adminDashboard/Profile';
import Sales from './adminDashboard/Sales';


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

     {path: '/dashboard', 
       element: <DashboardLayout/>,
       children: [{index: true, element:<Overview/>},

       {path: 'dashProducts', element: <DashProducts/>},

       {path: 'blogPost', element: <Blogpost/>},

       {path: 'settings', element: <Settings/>},

       {path: 'orders', element: <Orders/>},

       {path: 'profile', element: <Profile/>},

       {path: 'sales', element: <Sales/>},

       ]
      },

    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
