import React from 'react'
import HomeStaff from '../../styles/HomeStaff.css'

function Home() {
  var tabs = document.getElementById('tabTitle')
  var contents = document.getElementById('tabContent')

  var itemTitle = document.getElementsByClassName('itemTitle')
  var itemContent = document.getElementsByClassName('itemContent')
  for (var i = 0; i < itemTitle.length; i++) {
    itemTitle[i].addEventListener('click', function () {
      var current = document.getElementsByClassName('active')
      console.log(current)
      current[0].className = current[0].className.replace(' active', '')
      this.className += ' active'
    })
  }

  for (var i = 0; i < itemContent.length; i++) {
    itemContent[i].addEventListener('click', function () {
      var current = document.getElementsByClassName('active')
      current[0].className = current[0].className.replace(' active', '')
      this.className += ' active'
    })
  }
  return (
    <div className="homeStaff">
      <div className="table">
        <div className="profile">
          <div className="mainBox">
            <text className="profile-Name">Nguyễn Văn A</text>
            <div className="profile-Status">
              <i class="fa fa-check-circle"> &nbsp;</i>
              Online
            </div>
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt=""
              className="profile-Img"
            ></img>
            <button className="profile-Button">
              <span className="label">Nhân viên</span>
            </button>
            <hr />
            <div className="profile-Details">
              <ul className="title ">
                <i class="fa fa-user"> &nbsp;</i>
                Họ và tên:
                <span className="value"> Nguyễn Văn A</span>
              </ul>
              <ul className="title ">
                <i class="fa fa-phone"> &nbsp;</i>
                Số điện thoại:
                <span className="value"> 0987654456789</span>
              </ul>
              <ul className="title ">
                <i class="fa fa-envelope"> &nbsp;</i>
                Email:
                <span className="value"> nguyenvana@gmail.com</span>
              </ul>
              <ul className="title ">
                <i class="fa fa-home"> &nbsp;</i>
                Địa chỉ:
                <span className="value"> 123 abc, ddd, Tp.HCM</span>
              </ul>
            </div>
            <hr />
            <div className="logOut">
              {' '}
              <i class="fa fa-sign-out"> &nbsp;</i>
              Đăng xuất
            </div>
          </div>
        </div>

        <div className="content">
          <div className="mainBox">
            <div className="info">
              <div className="panel">THONG TIN BENH NHAN</div>
              <div className="user-Details">
                <div className="user-left">
                  <div className="title">
                    Họ và tên:
                    <span className="value"> Nguyễn Văn A</span>
                  </div>
                  <div className="title">
                    Số điện thoại:
                    <span className="value"> 0987654456789</span>
                  </div>
                </div>
                <div className="user-right">
                  <div className="title">
                    Email:
                    <span className="value"> nguyenvana@gmail.com</span>
                  </div>
                  <div className="title">
                    Địa chỉ:
                    <span className="value"> 123 abc, ddd, Tp.HCM</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="tabs">
              <div id="tabTitle">
                <button className="itemTitle active">active</button>
                <button className="itemTitle">friend</button>
              </div>
              <div id="tabContent">
                <div className="itemContent">abc</div>
                <div className="itemContent">dcf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
