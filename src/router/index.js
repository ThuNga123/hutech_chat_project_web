import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import SignIn from '../screen/authen/SignIn'
import Home from '../screen/staff/Home'
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
