import React from 'react'
import Home from '../screen/staff/Home'
import '../styles/Staff/HomeStaff.css'
import Nav from '../components/Staff/Nav'
import SignIn from '../screen/authen/SignIn'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomeAdmin from '../screen/admin/HomeAdmin'
import Test from '../screen/admin/Test'
import Sidebar from '../components/Admin/Sidebar'
import App from '../App'

function AppNavigator() {
  const navigate = useNavigate()

  const navigateSidebar = () => {
    navigate('/test')
  }

  const navigateSignIn = () => {
    navigate('/')
  }

  const navigateToHomeStaff = () => {
    navigate('/homeStaff')
  }

  const navigateToHomeAdmin = () => {
    navigate('/homeAdmin')
  }

  const navigateToTest = () => {
    navigate('/test')
  }

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/homeStaff" element={<Home />} />
      <Route path="/homeAdmin" element={<HomeAdmin />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}

export default AppNavigator
