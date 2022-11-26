import HomeStaff from "../../styles/Staff/HomeStaff.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../styles/Staff/tab.css";
import ChatBody from "../../components/Staff/ChatBody";
import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

function Home() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [isView, setView] = useState([]);
  const handleClick = (e) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      if (localStorage.getItem("role") !== "personnel") {
        console.log("Không có quyền truy cập");
        navigate("/403");
      }
    } else {
      console.log("Vui lòng đăng nhập");
      navigate("/");
    }
  });
  const logOut = async () => {
    localStorage.clear();
    navigate("/");
  };

  const userInfo = [
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
    <div className="homeStaff">
      {localStorage.getItem("accessToken") ? (
        localStorage.getItem("role") == "personnel" ? (
          <div className="table">
            <div className="box">
              <div className="profile">
                <div className="mainBoxProfile">
                  <div className="sq">
                    <div className="sqs"></div>
                    <text className="profile-Name">Nguyễn Văn A</text>
                  </div>
                  <div className="profile-Status">
                    <i class="fa fa-check-circle"> &nbsp;</i>
                    Online
                  </div>
                  <div className="profile-avt">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                      className="profile-Img"
                    ></img>
                    <button className="profile-Button">
                      <span className="label">Nhân viên</span>
                    </button>
                  </div>
                  <div className="infor">
                    <hr />
                    <div className="profile-Details">
                      <div className="left">
                        <ul className="title ">
                          <i class="fa fa-user"> &nbsp;</i>
                          Họ và tên
                        </ul>
                        <ul className="title ">
                          <i class="fa fa-phone"> &nbsp;</i>
                          SDT
                        </ul>
                        <ul className="title ">
                          <i class="fa fa-envelope"> &nbsp;</i>
                          Email
                        </ul>
                        <ul className="title ">
                          <i class="fa fa-home"> &nbsp;</i>
                          Địa chỉ
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
                    <div className="end">
                      <button
                        className="logOut"
                        onClick={() => {
                          logOut();
                        }}
                      >
                        <i class="fas fa-sign-out-alt"> &nbsp;</i>
                        Đăng xuất
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="mainBoxProfile">
                  <div id="tabs">
                    <>
                      <div className="">
                        <ChatBody />
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null
      ) : null}
    </div>
  );
}

export default Home;
