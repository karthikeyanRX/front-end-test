import React from "react";
import Footer_componet from "../componets/Footer_componet";
import { Link } from "react-router-dom";
import WarrantyComponent from "../componets/WarrantyComponent";

const AboutPage = () => {
  return (
    <div>
      <div>
        <ul className="navContent">
          <li className="listStyle"> {" "} <Link to="/" className="link"> Home </Link> </li>
          
          <li className="listStyle"> <Link to="/ProductPage" className="link"> Product </Link></li>


          <li className="listStyle">
            <Link to="/AboutPage" className="link">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <WarrantyComponent />
      </div>
      <div>
        <Footer_componet />
      </div>
    </div>
  );
};

export default AboutPage;
