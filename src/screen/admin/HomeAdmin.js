import React from 'react'
import Navbar from '../../components/Admin/Navbar'
import { Outlet } from 'react-router'

const HomeAdmin = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default HomeAdmin
