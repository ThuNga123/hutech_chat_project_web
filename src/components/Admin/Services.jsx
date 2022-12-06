import React from "react";
import "../../styles/Admin/Services.css";

const Reports = () => {
  const data = [
    {
      img: "",
      name: "Nhổ răng khôn",
      createAt: "01/11/2019",
    },
    {
      img: "",
      name: "Bọc răng sứ",
      createAt: "01/11/2019",
    },
    {
      img: "",
      name: "Tẩy trắng răng",
      createAt: "01/11/2019",
    },
    {
      img: "",
      name: "Chữa cười hở lợi",
      createAt: "01/11/2019",
    },
    {
      img: "",
      name: "Cấy ghép Implaint",
      createAt: "01/11/2019",
    },
    {
      img: "",
      name: "Niềng răng",
      createAt: "01/11/2019",
    },
  ]
  return (
    <div className="containerServices">
      <div className="title">
        <h2 className="text">QUẢN LÝ DỊCH VỤ</h2>
      </div>
      <div className="contentsv">
      <div className="nameColumn">
          <div className="column">abc
          </div>
          <div className="column">ccc</div>
          <div className="column">dd</div>
          <div className="column">eee</div>
        </div>
      </div>
    </div>
  ); 
};

export default Reports; 
