import React from "react";
import { Ring } from "react-cssfx-loading";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader_container">
      <Ring color="#BAFF39" width="100px" height="100px" duration="3s" />
    </div>
  );
};

export default Loader;
