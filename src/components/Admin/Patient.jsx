import React, { useState, useEffect } from 'react'
import { confirmAlert } from 'react-confirm-alert'
// import Modal from 'react-bootstrap/Modal'

import '../../styles/Admin/patient.css'

const Patient = () => {
  const data = [
    {
      userid: '1',
      name: 'Nguyen Van B',
      sex: 'Nam',
      phone: '09876545678',
      email: 'nguyenb@gmail.com',
      address: '23/27 Bùi Thế Mỹ, phường 10 quận Tân Bình',
      date: '2022/11/11',
      time: '9:30',
    },

    {
      userid: '2',
      name: 'Nguyen Van C',
      sex: 'Nam',
      phone: '09876545356786543',
      email: 'nguyenc@gmail.com',
      address: '21 Mai Lão Bạng phường 13 quận Tân Bình',
      date: '2022/11/11',
      time: '13:30',
    },

    {
      userid: '3',
      name: 'Nguyen Thi C',
      sex: 'Nu',
      phone: '0134567543',
      email: 'nguyenc@gmail.com',
      address: '32 Nguyễn Huệ phường 10 quận 1',
      date: '2022/11/14',
      time: '10:00',
    },
  ]
  const [active, setActive] = useState(0)
  const [isView, setView] = useState([])
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0)
    if (index !== active) {
      setActive(index)
    }
  }
  const [deleteId, setDeleteId] = useState('')
  const handleClickDelete = (userid) => {
    console.log(userid)
  }
  return (
    <div className="containerPatient">
      <div>
        {isView.length != 0 ? (
          <div className="info-p">
            {console.log(isView)}
            <div className="user-Details">
              <div className="header">
                <div className="panel">THÔNG TIN KHÁCH HÀNG</div>
              </div>
              <hr />
              <div className="user-left">
                <form>
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
                    <i class="far fa-calendar-alt"> &nbsp;</i>
                    Địa chỉ:
                    <span className="value-v1"> {isView.address}</span>
                  </div>
                </form>
              </div>
              <div className="user-right">
                <div className="title-v1">
                  <i class="far fa-clock"> &nbsp;</i>
                  Giới tính:
                  <span className="value-v1"> {isView.sex}</span>
                </div>
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
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div>
        <div className="header">
          <div className="panel">
            QUẢN LÝ KHÁCH HÀNG
            <div>X</div>
          </div>
        </div>
        <table id="customers">
          <tr>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.sex}</td>
                <td>{val.phone}</td>
                <td>{val.email}</td>
                <td>{val.address}</td>
                <td className="icon">
                  <i
                    class="fa fa-trash"
                    aria-hidden="true"
                    onClick={() => handleClickDelete(val.userid)}
                  >
                    &nbsp;
                  </i>
                  <i class="fas fa-edit" onClick={() => setView(val)}></i>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default Patient
