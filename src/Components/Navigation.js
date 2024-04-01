import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoAna from "../Img/Logo/LogoAna.PNG";
import Logotest from "../Img/Logo/LogoAna-removebg-preview.png";

function Navigation(props) {
  return (
    <nav className="overflow-x-hidden py-6">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo z-10 mr-4">
            <img src={Logotest} alt="ana" className="h-auto max-h-28" />
          </div>

          <div className="menu hidden md:block ml-4">
            <ul className="flex">
              <li className="mr-4">
                <Link
                  to="/"
                  className="text-white hover:text-red-500"
                  activeClassName="active">
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  to="/about"
                  className="text-white hover:text-red-500"
                  activeClassName="active">
                  About Us
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  to="/services"
                  className="text-white hover:text-red-500"
                  activeClassName="active">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-red-500"
                  activeClassName="active">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="mobile-menu-icon md:hidden"
            onClick={() => props.openMobileMenu()}>
            <FontAwesomeIcon icon={faBars} className="text-black text-2xl" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
