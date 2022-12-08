import React from 'react'
import '../../styles/Admin/Personnel.css'
import img from '../../assets/images/abc.png'

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
  return (
    <div className="containerPatient">
      <div className="panel">QUẢN LÝ NHÂN VIÊN</div>
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
                  className="image"
                ></img>
              </td>
              <td>{val.name}</td>
              <td>{val.sex}</td>
              <td>{val.phone}</td>
              <td>{val.email}</td>
              <td>{val.address}</td>
              <td>{val.role}</td>
              <td className="icon">
                <i class="fa fa-trash" aria-hidden="true">
                  &nbsp;
                </i>
                <i class="fas fa-edit"></i>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Personnel
