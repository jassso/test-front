import "./TISApp.css";
import Navbar from "./components/navbar";
import Routing from "./components/routing";

const TISApp = () => {
  return (
    <div className="TISApp">
      <Navbar />
      <Routing />
    </div>
  );
};

export default TISApp;
