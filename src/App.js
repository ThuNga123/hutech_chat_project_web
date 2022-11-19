import './App.css'
import Home from './screen/staff/Home.js'
import '../src/styles/Staff/HomeStaff.css'
import Nav from '../src/components/Staff/Nav'
import SignIn from './screen/authen/SignIn'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const navigateSignIn = () => {
    navigate('/')
  }

  const navigateToHome = () => {
    navigate('/home')
  }
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
