import React, { useState } from "react";
import { FaClosedCaptioning } from "react-icons/fa";
import Navbar from "../../components/Admin/Navbar";
import Home from "../../components/Admin/Home";
// import * as All from "../../screen/admin";
const HomeAdmin = () => {
  const [component, setComponent] = useState(<Home />);

  const handleChooses = (event, cpn) => {
    console.log("hahah");
    console.log(event.target);
    setComponent(cpn);
  };

  return (
    <div>
      <div>
        <Navbar handleChooses={handleChooses} />
      </div>
      <div>{component}</div>
    </div>
  );
};

export default HomeAdmin;
