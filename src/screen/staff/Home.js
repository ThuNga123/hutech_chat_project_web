import HomeStaff from '../../styles/Staff/HomeStaff.css'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Tabs, Tab, Content } from '../staff/tab.js'
import '../../styles/Staff/tab.css'
import ChatBody from '../../components/Staff/ChatBody'
import { confirmAlert } from 'react-confirm-alert'

function Home() {
  const [active, setActive] = useState(0)
  const [isView, setView] = useState([])
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

  const userInfo = [
    {
      userid: '1',
      name: 'Nguyen Van B',
      sex: 'Nam',
      phone: '09876545678',
      email: 'nguyenb@gmail.com',
      date: '2022/11/11',
      time: '9:30',
    },

    {
      userid: '2',
      name: 'Nguyen Van C',
      sex: 'Nam',
      phone: '09876545356786543',
      email: 'nguyenc@gmail.com',
      date: '2022/11/11',
      time: '13:30',
    },

    {
      userid: '3',
      name: 'Nguyen Thi C',
      sex: 'Nu',
      phone: '0134567543',
      email: 'nguyenc@gmail.com',
      date: '2022/11/14',
      time: '10:00',
    },
  ]

  // const [status, setStatus] = useState(false)

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
            {isView.length != 0 ? (
              <div className="info">
                {console.log(isView)}
                <div className="user-Details">
                  <div className="header">
                    <div className="panel">THONG TIN BENH NHAN</div>
                    <button
                      onClick={() => {
                        setView([])
                      }}
                      className="exit"
                    >
                      X
                    </button>
                  </div>
                  <hr />
                  <div className="user-left">
                    <div className="title-v1">
                      <i class="fa fa-user"> &nbsp;</i>
                      Họ và tên:
                      <span className="value-v1"> {isView.name}</span>
                    </div>
                    <div className="title-v1">
                      <i class="fa fa-phone"> &nbsp;</i>
                      Số điện thoại:
                      <span className="value-v1"> {isView.phone}</span>
                    </div>
                    <div className="title-v1">
                      <i class="fa fa-phone"> &nbsp;</i>
                      Ngày khám:
                      <span className="value-v1"> {isView.date}</span>
                    </div>
                  </div>
                  <div className="user-right">
                    <div className="title-v1">
                      <i class="fa fa-envelope"> &nbsp;</i>
                      Email:
                      <span className="value-v1"> {isView.email}</span>
                    </div>
                    <div className="title-v1">
                      <i class="fa fa-home"> &nbsp;</i>
                      Địa chỉ khám:
                      <span className="value-v1"> 10 CMT8, Tân Bình</span>
                    </div>
                    <div className="title-v1">
                      <i class="fa fa-home"> &nbsp;</i>
                      Thời gian:
                      <span className="value-v1"> {isView.time}</span>
                    </div>
                  </div>
                  {false ? (
                    <div className="btn">
                      <button className="confirm">Xác nhận</button>
                      <button className="cancel">Huỷ bỏ</button>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}

            <div id="tabs">
              <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                  <i class="fa fa-list"> &nbsp;</i>
                  Đặt lịch
                </Tab>

                <Tab onClick={handleClick} active={active === 2} id={2}>
                  <i class="fa fa-comments"> &nbsp;</i>
                  Tư vấn
                </Tab>
              </Tabs>
              <>
                {userInfo.map((info) => (
                  <Content active={active === 0}>
                    <div className="mainBox">
                      <div className="user-info">
                        <tr>
                          <td class="text-center">
                            <i class="fa fa-info-circle"></i>
                          </td>
                          <td>
                            {' '}
                            &nbsp; Một đăng ký khám bệnh mới từ{' '}
                            {/* <a href="#">{info.name}.</a> */}
                            {/* <a href="#" onClick={Test}>
                              {info.name}.
                            </a> */}
                            <button onClick={() => setView(info)}>
                              <a href="#">{info.name}.</a>
                              {/* {info.name} */}
                            </button>
                          </td>
                          <td className="time-">
                            &nbsp; Thời gian {info.time} {info.date}
                          </td>
                        </tr>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
