import React from "react";
import { Route, Routes } from "react-router-dom";
import Investments from "../views/investments";
import Home from "../views/home";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Investments" element={<Investments />} />
      </Routes>
    </div>
  );
};

export default Routing;
