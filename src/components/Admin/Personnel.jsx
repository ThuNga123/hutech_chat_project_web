import React from 'react'
import '../../styles/Admin/Personnel.css'

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

const Personnel = () => {
  return (
    <div className="containerPatient">
      <div className='panel'>QUẢN LÝ KHÁCH HÀNG</div>
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
              <td className='icon'>
                <i class="fa fa-trash" aria-hidden="true">&nbsp;</i>
                <i class="fas fa-edit" ></i>
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Personnel
