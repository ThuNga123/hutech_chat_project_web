import React from 'react'
import '../styles/Staff/HomeStaff.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SignIn from '../screen/authen/SignIn'
import Home from '../screen/staff/Home'
import Navbar from '../components/Admin/Navbar'
import Book from '../screen/admin/Book'
import HomeAdmin from '../screen/admin/HomeAdmin'

function AppNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppNavigator
