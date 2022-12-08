import React, { useState, useEffect } from 'react'
import '../../styles/Admin/Services.css'
import img from '../../assets/images/abc.png'
import Delete from '../../components/Admin/Delete'
import AddService from './AddService'

const data = [
  {
    userid: '1',
    img: '',
    name: 'Nhổ răng khôn',
    price: '120.000d',
    date: '01/11/2022',
    user: 'Nguyễn Văn A',
  },

  {
    userid: '2',
    img: '',
    name: 'Bọc răng sứ',
    price: '25.000.000d',
    date: '01/11/2022',
    user: 'Nguyễn Văn B',
  },

  {
    userid: '3',
    img: '',
    name: 'Tẩy trắng răng',
    price: '25.000.000d',
    date: '01/11/2022',
    user: 'Nguyễn Văn A',
  },

  {
    userid: '4',
    img: '',
    name: 'Chữa cười hở lợi',
    price: '25.000.000d',
    date: '01/11/2022',
    user: 'Nguyễn Văn A',
  },

  {
    userid: '4',
    img: '',
    name: 'Cấy ghép Implaint',
    price: '25.000.000d',
    date: '01/11/2022',
    user: 'Nguyễn Văn A',
  },

  {
    userid: '4',
    img: '',
    name: 'Niềng răng',
    price: '25.000.000d',
    date: '01/11/2022',
    user: 'Nguyễn Văn A',
  },
]

const Services = () => {
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
                <div className="panel">THÔNG TIN DỊCH VỤ</div>
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
              <div className="user-image-ser">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  className="image-book"
                ></img>
              </div>
              <div className="user-left-ser">
                <form>
                  <div className="title-v1">
                    <i class="fa fa-user"> &nbsp;</i>
                    Tên dịch vụ
                    <span className="value-v1"> {isView.name}</span>
                  </div>
                  <div className="title-v1">
                    <i class="fa fa-phone"> &nbsp;</i>
                    Giá tiền:
                    <span className="value-v1"> {isView.price}</span>
                  </div>
                </form>
              </div>
              <div className="user-right-ser">
                <div className="title-v1">
                  <i class="far fa-clock"> &nbsp;</i>
                  Ngày tạo:
                  <span className="value-v1"> {isView.date}</span>
                </div>
                <div className="title-v1">
                  <i class="fa fa-envelope"> &nbsp;</i>
                  Người tạo:
                  <span className="value-v1"> {isView.user}</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div className="panel">QUẢN LÝ DỊCH VỤ</div>
      <button
        className="openModalBtn-ser"
        onClick={() => {
          setModalOpen(true)
          setView([])
        }}
      >
        Thêm mới
      </button>
      {modalOpen && <AddService setOpenModal={setModalOpen} />}
      <table id="customers">
        <tr>
          <th>Hình ảnh</th>
          <th>Tên dịch vụ</th>
          <th>Giá</th>
          <th>Ngày tạo</th>
          <th>Người tạo</th>
          <th>Chức năng</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  className="image-ser"
                ></img>
              </td>
              <td>{val.name}</td>
              <td>{val.price}</td>
              <td>{val.date}</td>
              <td>{val.user}</td>
              <td className="icon">
                <div>
                  <button
                    className="deleted"
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
                  <button className="deleted" onClick={() => setView(val)}>
                    <i class="fas fa-edit"></i>
                    &nbsp; Sửa
                  </button>
                </div>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Services
