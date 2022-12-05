import React from 'react'
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom'
import SignIn from '../screen/authen/SignIn'
import Home from '../screen/staff/Home'
import HomeAdmin from '../screen/admin/HomeAdmin'
import Forbidden from '../components/Error/403'
import NotFound from '../components/Error/404'

function AppNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeAdmin" element={<HomeAdmin />} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} /> */}

        <Route path="/homeAdmin" element={<HomeAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppNavigator
