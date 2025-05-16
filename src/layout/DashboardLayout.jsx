import React from 'react'
import DashNavbar from '../components/DashNavbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router'

const DashboardLayout = () => {
  return (
    <div>
       <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-col flex-grow">
        {/* DashNav */}
        <DashNavbar />

        {/* Dashboard Content */}
        <main className="p-6 flex-grow overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
    </div>
  )
}

export default DashboardLayout