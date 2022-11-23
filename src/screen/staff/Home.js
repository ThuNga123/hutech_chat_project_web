import HomeStaff from '../../styles/Staff/HomeStaff.css'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Tabs, Tab, Content } from '../staff/tab.js'
import '../../styles/Staff/tab.css'
import ChatBody from '../../components/Staff/ChatBody'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)
  const [isView, setView] = useState([])
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }

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
              <div className="left">
                <ul className="title ">
                  <i class="fa fa-user"> &nbsp;</i>
                  Họ và tên:
                </ul>
                <ul className="title ">
                  <i class="fa fa-phone"> &nbsp;</i>
                  SDT:
                </ul>
                <ul className="title ">
                  <i class="fa fa-envelope"> &nbsp;</i>
                  Email:
                </ul>
                <ul className="title ">
                  <i class="fa fa-home"> &nbsp;</i>
                  Địa chỉ:
                </ul>
              </div>
              <div className="right">
                <ul className="title ">Nguyễn Văn A</ul>
                <ul className="title ">0987654456789</ul>
                <ul className="title ">nguyenvana@gmail.com</ul>
                <ul className="title ">123 abc, ddd, Tp.HCM</ul>
              </div>
            </div>
            <hr />
            <button
              className="logOut"
              onClick={() => {
                navigate('/')
              }}
            >
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
                    <div className="panel">THÔNG TIN BỆNH NHÂN</div>
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
                    <div className="left">
                      <div className="title-v1">
                        <i class="fa fa-user"> &nbsp;</i>
                        Họ và tên:
                      </div>
                      <div className="title-v1">
                        <i class="fa fa-phone"> &nbsp;</i>
                        Số điện thoại:
                      </div>
                      <div className="title-v1">
                        <i class="	far fa-calendar-alt"> &nbsp;</i>
                        Ngày khám:
                      </div>
                    </div>
                    <div className="right">
                      <div className="title-v1">{isView.name}</div>
                      <div className="title-v1">{isView.phone}</div>
                      <div className="title-v1">{isView.date}</div>
                    </div>
                  </div>
                  <div className="user-right">
                    <div className="left">
                      <div className="title-v1">
                        <i class="fa fa-envelope"> &nbsp;</i>
                        Email:
                      </div>
                      <div className="title-v1">
                        <i class="fa fa-home"> &nbsp;</i>
                        Địa chỉ khám:
                      </div>
                      <div className="title-v1">
                        <i class="far fa-clock"> &nbsp;</i>
                        Thời gian:
                      </div>
                    </div>
                    <div className="right">
                      <div className="title-v1">{isView.email}</div>
                      <div className="title-v1">
                        10 CMT8 phường 10, Tân Bình
                      </div>
                      <div className="title-v1">{isView.time}</div>
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
                            <a onClick={() => setView(info)}>
                              <a href="#">{info.name}.</a>
                            </a>
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
