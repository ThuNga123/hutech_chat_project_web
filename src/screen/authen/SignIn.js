import React from 'react'
import '../../styles/Authen/signIn.css'
import image from '../../assets/images/background.png'
import Home from '../staff/Home'
import { Link } from 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate()
  return (
    <div
      className="main"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}
    >
      <div className="form-input">
        <div className="header">HEALTHCARE IS WEALTH</div>
        <form className="email">
          <input
            className="input"
            placeholder="Nhập tên đăng nhập"
            type="text"
            name="name"
          />
          <input
            className="input"
            placeholder="Nhập mật khẩu"
            type="text"
            name="pass"
          />
          <div className="forgot" onClick={''}>
            Quên mật khẩu
          </div>
          <input
            onClick={() => {
              navigate('/home')
            }}
            className="submit"
            type="submit"
            value="Đăng nhập"
          />
        </form>
      </div>
    </div>
  )
}

export default SignIn
