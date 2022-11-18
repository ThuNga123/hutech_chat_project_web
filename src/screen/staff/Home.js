import HomeStaff from '../../styles/Staff/HomeStaff.css'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Tabs, Tab, Content } from '../staff/tab.js'
import '../../styles/Staff/tab.css'
import ChatBody from '../../components/Staff/ChatBody'

function Home() {
  //   var tabs = document.getElementById('tabTitle')
  //   var contents = document.getElementById('tabContent')

  //   var itemTitle = document.getElementsByClassName('itemTitle')
  //   var itemContent = document.getElementsByClassName('itemContent')
  //   for (var i = 0; i < itemTitle.length; i++) {
  //     itemTitle[i].addEventListener('click', function () {
  //       var current = document.getElementsByClassName('active')
  //       console.log(current)
  //       current[0].className = current[0].className.replace(' active', '')
  //       this.className += ' active'
  //     })
  //   }

  //   for (var i = 0; i < itemContent.length; i++) {
  //     itemContent[i].addEventListener('click', function () {
  //       var current = document.getElementsByClassName('active')
  //       current[0].className = current[0].className.replace(' active', '')
  //       this.className += ' active'
  //     })
  //   }
  const [active, setActive] = useState(0)
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }

  const chatRoom = [
    {
      roomId: '1',
      room: 'Nguyen Van B',
      lastMess:
        'A string is any series of characters that are interpreted literally by a script. For example. A string is any series of characters that are interpreted literally by a script. For example',
      time: ' 2022/11/11 12:08',
    },

    {
      roomId: '2',
      room: 'Nguyen Van C',
      lastMess:
        'A string is any series of characters that are interpreted literally by a script. For example. A string is any series of characters that are interpreted literally by a script. For example',
      time: ' 2022/11/11 12:08',
    },

    {
      roomId: '3',
      room: 'Nguyen Van D',
      lastMess:
        'A string is any series of characters that are interpreted literally by a script. For example. A string is any series of characters that are interpreted literally by a script. For example',
      time: ' 2022/11/11 12:08',
    },
  ]

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
            <button className="logOut">
              {' '}
              <i class="fa fa-sign-out"> &nbsp;</i>
              Đăng xuất
            </button>
          </div>
        </div>

        <div className="content">
          <div className="mainBox">
            <div className="info">
              <div className="user-Details">
                <div className="panel">THONG TIN BENH NHAN</div>
                <hr />
                <div className="user-left">
                  <div className="title-v1">
                    <i class="fa fa-user"> &nbsp;</i>
                    Họ và tên:
                    <span className="value-v1"> Nguyễn Văn A</span>
                  </div>
                  <div className="title-v1">
                    <i class="fa fa-phone"> &nbsp;</i>
                    Số điện thoại:
                    <span className="value-v1"> 0987654456789</span>
                  </div>
                </div>
                <div className="user-right">
                  <div className="title-v1">
                    <i class="fa fa-envelope"> &nbsp;</i>
                    Email:
                    <span className="value-v1"> nguyenvana@gmail.com</span>
                  </div>
                  <div className="title-v1">
                    <i class="fa fa-home"> &nbsp;</i>
                    Địa chỉ:
                    <span className="value-v1"> 123 abc, ddd, Tp.HCM</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="tabs">
              <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                  <i class="fa fa-list"> &nbsp;</i>
                  Đặt lịch
                </Tab>

                <Tab onClick={handleClick} active={active === 1} id={1}>
                  <i class="fa fa-comment"> &nbsp;</i>
                  Lịch sử
                </Tab>

                <Tab onClick={handleClick} active={active === 2} id={2}>
                  <i class="fa fa-comments"> &nbsp;</i>
                  Tư vấn
                </Tab>
              </Tabs>
              <>
                <Content active={active === 0}>
                  <div className="mainBox">
                    <tr>
                      <td class="text-center">
                        <i class="fa fa-comment"></i>
                      </td>
                      <td>
                        John Doe posted a comment in{' '}
                        <a href="#">Avengers Initiative</a> project.
                      </td>
                      <td>2014/08/08 12:08</td>
                    </tr>
                  </div>
                </Content>

                {chatRoom.map((roomDetail) => (
                  <Content active={active === 1}>
                    <div className="chat-History">
                      <div className="room-Chat">
                        <div className="room-Title">
                          <div className="room-Icons">
                            <i class="fa fa-comment"></i>
                          </div>
                          <div className="room-Name">{roomDetail.room}</div>
                          <div className="room-Time">{roomDetail.time}</div>
                        </div>
                        <div className="room-LastMess">
                          {roomDetail.lastMess}
                        </div>
                      </div>
                    </div>
                  </Content>
                ))}
                <Content active={active === 2}>
                  <div className="">
                    <ChatBody />
                  </div>
                </Content>
              </>

              {/* <div id="tabTitle">
                <button className="itemTitle active">active</button>
                <button className="itemTitle">friend</button>
              </div>
              <div id="tabContent">
                <div className="itemContent">abc</div>
                <div className="itemContent">dcf</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
