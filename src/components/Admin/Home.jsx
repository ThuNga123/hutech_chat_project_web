import React, { useState, useEffect } from "react";
import "../../styles/Admin/Home.css";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { ADDRESS, URLIMG } from "../../dotenv";
import RechartsExample from "./RechartsExample";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listServiceAll, setListServiceAll] = useState([]);
  const [listAllUser, setListUser] = useState([]);
  const [listAllPersonnel, setListPersonnel] = useState([]);

  const Navigate = useNavigate();
  useEffect(() => {
    getAllService();
    getAllUser();
    getAllPersonnel();
  }, []);

  const getAllService = async () => {
    await fetch(ADDRESS + "allServices", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        setListServiceAll(data);
      });
  };

  const getAllUser = async () => {
    const tokenString = localStorage.getItem("token");
    await fetch(ADDRESS + "getAll/user", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokenString,
      },
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
        setListUser(data.data);
      });
  };

  const getAllPersonnel = async () => {
    const tokenString = localStorage.getItem("token");
    await fetch(ADDRESS + "getAll/personnel", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokenString,
      },
    })
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
        setListPersonnel(data.data);
      });
  };

  return (
    <div className="container-admin">
      <div className="charts">
        <div
          className="chart red"
          onClick={() => {
            Navigate("/services");
          }}
        >
          <IoIcons.IoIosPaper />
          &ensp;D???ch v???({listServiceAll.length})
        </div>
        <div
          className="chart green"
          onClick={() => {
            Navigate("/patient");
          }}
        >
          <FaIcons.FaCartPlus />
          &ensp;Kh??ch h??ng({listAllUser.length})
        </div>
        <div
          className="chart blue"
          onClick={() => {
            Navigate("/personnel");
          }}
        >
          <IoIcons.IoMdPeople />
          &ensp;Nh??n vi??n({listAllPersonnel.length})
        </div>
        <div
          className="chart yellow"
          onClick={() => {
            Navigate("/book");
          }}
        >
          {" "}
          <FaIcons.FaEnvelopeOpenText />
          &ensp;L???ch h???n
        </div>
      </div>
      <div className="bigChart">
        <div className="chartA">
          <RechartsExample />
          <div>
            <text>Th???ng k?? s??? l???ch ???? ?????t trong 6 ng??y tr?????c</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
