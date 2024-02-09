import React from "react";
import { Link } from "react-router-dom";
import Aside_Component from "../componets/Aside_Component";

const HomePage = () => {
  return (
    <div>
      <div>
        <ul className="navContent">
          <li className="listStyle">
            {" "}
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="listStyle">
            <Link to="/ProductPage" className="link">
              Product
            </Link>
          </li>
          <li className="listStyle">
            <Link to="/AboutPage" className="link">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Aside_Component />
      </div>
    </div>
  );
};

export default HomePage;
