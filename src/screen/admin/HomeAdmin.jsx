import React, { useState, useEffect } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import Navbar from "../../components/Admin/Navbar";
import Home from "../../components/Admin/Home";
import { useNavigate } from "react-router-dom";
// import * as All from "../../screen/admin";
const HomeAdmin = () => {
  const [component, setComponent] = useState(<Home />);
  const navigate = useNavigate();
  const handleChooses = (event, cpn) => {
    console.log(event.target);
    setComponent(cpn);
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      if (localStorage.getItem("role") !== "admin") {
        console.log("Không có quyền truy cập");
        navigate("/403");
      }
    } else {
      console.log("Vui lòng đăng nhập");
      navigate("/");
    }
  });

  return (
    <div>
      {localStorage.getItem("accessToken") ? (
        localStorage.getItem("role") == "admin" ? (
          <div>
            <div>
              <Navbar handleChooses={handleChooses} />
            </div>
            <div>{component}</div>
          </div>
        ) : null
      ) : null}
    </div>
  );
};

export default HomeAdmin;
