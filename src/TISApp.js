import { Route, Routes } from "react-router-dom";
import "./TISApp.css";
import Investments from "./views/investments";
import Home from "./views/home";
import Navbar from "./components/navbar";

const TISApp = () => {
  return (
    <div className="TISApp">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Investments" element={<Investments />} />
      </Routes>
    </div>
  );
};

export default TISApp;
