import React from "react";
import "./header.css";
import LeftHeader from "./LeftHeader";
import CenterHeader from "./CenterHeader";
import RigthHeader from "./RigthHeader";

const Header = () => {
  

  return (
    <div className="header_container">
      <LeftHeader  />
      <CenterHeader />
      <RigthHeader />
    </div>
  );
};

export default Header;
