import React from 'react'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import SignIn from '../screen/authen/SignIn'
import Home from '../components/Admin/Home'
import HomeAdmin from '../screen/admin/HomeAdmin'
import Forbidden from '../components/Error/403'
import NotFound from '../components/Error/404'
import Book from '../components/Admin/Book'
import Patient from '../components/Admin/Patient'
import Personnel from '../components/Admin/Personnel'
import Services from '../components/Admin/Services'

function AppNavigator() {
  return (
    <BrowserRouter>
      <HomeAdmin>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/personnel" element={<Personnel />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </HomeAdmin>
    </BrowserRouter>
  )
}

export default AppNavigator
