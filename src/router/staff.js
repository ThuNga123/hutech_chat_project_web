import React from 'react'
import Home from '../screen/staff/Home'
import '../styles/Staff/HomeStaff.css'
import SignIn from '../screen/authen/SignIn'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomeAdmin from '../screen/admin/HomeAdmin'

function AppNavigator() {
  // const navigate = useNavigate()

  // const navigateSignIn = () => {
  //   navigate('/')
  // }

  // const navigateToHomeStaff = () => {
  //   navigate('/home')
  // }

  // const navigateToHomeAdmin = () => {
  //   navigate('/homeAdmin')
  // }

  // const navigateToTest = () => {
  //   navigate('/test')
  // }

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/homeAdmin" element={<HomeAdmin />} />
    </Routes>
  )
}

export default AppNavigator
