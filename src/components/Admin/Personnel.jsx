import React, { useState, useEffect } from 'react'
import '../../styles/Admin/Personnel.css'
import img from '../../assets/images/abc.png'
import AddPersonnel from '../../components/Admin/AddPersonnel'
import Delete from '../../components/Admin/Delete'
import { Button } from 'react-scroll'

const data = [
  {
    userid: '1',
    img: '',
    name: 'Nguyen Van B',
    sex: 'Nam',
    phone: '09876545678',
    email: 'nguyenb@gmail.com',
    address: '23/27 Bùi Thế Mỹ, phường 10 quận Tân Bình',
    role: 'Nhân viên',
  },

  {
    userid: '2',
    img: '',
    name: 'Nguyen Van C',
    sex: 'Nam',
    phone: '09876545356786543',
    email: 'nguyenc@gmail.com',
    address: '21 Mai Lão Bạng phường 13 quận Tân Bình',
    role: 'Nhân viên',
  },

  {
    userid: '3',
    img: '',
    name: 'Nguyen Thi C',
    sex: 'Nu',
    phone: '0134567543',
    email: 'nguyenc@gmail.com',
    address: '32 Nguyễn Huệ phường 10 quận 1',
    role: 'Bác sĩ',
  },
]

const Personnel = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalDele, setModalDele] = useState(false)
  const [isView, setView] = useState([])
  return (
    <div className="containerPatient">
      <div>
        {isView.length != 0 ? (
          <div className="info-p">
            {console.log(isView)}
            <div className="user-Details">
              <div className="header">
                <div className="panel">THÔNG TIN NHÂN VIÊN</div>
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
              <div className="user-image-per">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  className="image-book"
                ></img>
              </div>
              <div className="user-left-per">
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
              <div className="user-right-per">
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
                  <i class="fa fa-users"> &nbsp;</i>
                  Chức vụ:
                  <span className="value-v1">{isView.role}</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="panel">QUẢN LÝ NHÂN VIÊN</div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true)
        }}
      >
        Thêm mới
      </button>
      {modalOpen && <AddPersonnel setOpenModal={setModalOpen} />}
      <table id="customers">
        <tr>
          <th>Hình ảnh</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Chức vụ</th>
          <th>Chức năng</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  className="image-per"
                ></img>
              </td>
              <td>{val.name}</td>
              <td>{val.sex}</td>
              <td>{val.phone}</td>
              <td>{val.email}</td>
              <td>{val.address}</td>
              <td>{val.role}</td>
              <div>
                <button
                  className="dele"
                  onClick={() => {
                    setModalDele(true)
                    setView([])
                  }}
                >
                  <i class="fa fa-trash" />
                  &nbsp; Xoá
                </button>
                {modalDele && <Delete setDeleModal={setModalDele} />}
                &nbsp;
                <button className="dele" onClick={() => setView(val)}>
                  <i class="fas fa-edit"></i>
                  &nbsp; Sửa
                </button>
              </div>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Personnel
