import React from 'react';

const About = () => {
    const data = [
        {
          userid: "1",
          name: "Nguyen Van B",
          sex: "Nam",
          phone: "09876545678",
          email: "nguyenb@gmail.com",
          date: "2022/11/11",
          time: "9:30",
        },
      
        {
          userid: "2",
          name: "Nguyen Van C",
          sex: "Nam",
          phone: "09876545356786543",
          email: "nguyenc@gmail.com",
          date: "2022/11/11",
          time: "13:30",
        },
      
        {
          userid: "3",
          name: "Nguyen Thi C",
          sex: "Nu",
          phone: "0134567543",
          email: "nguyenc@gmail.com",
          date: "2022/11/14",
          time: "10:00",
        },
      ];
      
    return (
        <div className="container">
      <div className="containerPatient">
      <table id="customers">
        <tr>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <th>Chức năng</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.sex}</td>
              <td>{val.phone}</td>
              <td>{val.email}</td>
              <td className="fun">
                <i class="fa fa-trash" aria-hidden="true">
                  {" "}
                  &nbsp;
                </i>
                <i class="fas fa-edit"></i>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
    </div>
    );
};

export default About;