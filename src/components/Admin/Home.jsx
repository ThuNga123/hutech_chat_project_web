import React, { useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { SidebarData } from "./SidebarData";
import "../../styles/Admin/Home.css";
// import { IconContext } from "react-icons";

function Home() {
  return (
    <div style={{ backgroundColor: "#F0F8FF", height: "100vh" }}>
      <div className="title">
        <h3> Quản lý </h3>
      </div>
      <hr />

      <div className="charts">
        <div className="chart"></div>
        <div className="chart"></div>
        <div className="chart"></div>
        <div className="chart"></div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
