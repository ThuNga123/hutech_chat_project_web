import React from 'react'
import '../../styles/Admin/Personnel.css'
import img from '../../assets/images/abc.png'

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
  return (
    <div className="containerPatient">
      <div className="panel">QUẢN LÝ DỊCH VỤ</div>
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
                  className="image"
                ></img>
              </td>
              <td>{val.name}</td>
              <td>{val.price}</td>
              <td>{val.date}</td>
              <td>{val.user}</td>
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

export default Services
