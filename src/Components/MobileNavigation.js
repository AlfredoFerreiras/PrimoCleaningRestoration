import React from "react";

//React-router-dom
import { Link } from "react-router-dom";
import LogoAna from "../Img/Logo/LogoAna.PNG";

//Styles
import "./MobileNavigation.scss";

function MobileNavigation(props) {
  return (
    <div className="mobileMenu">
      <div className="container">
        <div className="logo">
          {" "}
          <img src={LogoAna} alt="ana" />
        </div>

        <ul>
          <li>
            <Link
              to="/"
              exact
              activeClassName="active"
              onClick={() => props.closeMobileMenu()}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              exact
              activeClassName="active"
              onClick={() => props.closeMobileMenu()}>
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              exact
              activeClassName="active"
              onClick={() => props.closeMobileMenu()}>
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              exact
              activeClassName="active"
              onClick={() => props.closeMobileMenu()}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavigation;
