import React from 'react'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import SignIn from '../screen/authen/SignIn'
import Home from '../components/Admin/Home'
import HomeAdmin from '../screen/admin/HomeAdmin'
import Forbidden from '../components/Error/403'
import NotFound from '../components/Error/404'
import Dashboard from '../screen/admin/Dashboard'
import Sidebar from '../components/Admin/Sidebar'
import '../App.css'
import Book from '../screen/admin/Book'
import Patient from '../screen/admin/Patient'
import Personnel from '../screen/admin/Personnel'
import Services from '../screen/admin/Services'

function AppNavigator() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes path="/homeAdmin" element={<HomeAdmin />}>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  )
}

export default AppNavigator
