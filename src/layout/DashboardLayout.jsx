import React from 'react'
import Sidebar from '../components/SideBar'
import DashNavbar from '../components/DashNavbar'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div>
        <Sidebar/>
        <DashNavbar/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout