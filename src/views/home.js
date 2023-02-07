import React from "react";
import "../styles/home.css";
import welcome from "../assets/welcome.jpg";

const Home = () => {
  return (
    <div className="homeParent">
      <img src={welcome} height="100%" width="100%" alt="" />
    </div>
  );
};

export default Home;
