import React from "react";

//Styles
import "./Contact.scss";

//React-router-dom
import { Link } from "react-router-dom";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";

function Contact() {
  return (
    <div className="contactView">
      <div className="container">
        <div className="contactForm section">
          <h2 className="text-white">
            Contact <Dots />
          </h2>
          <Square />

          <div className="container-inner">
            <div className="wrapper">
              <div className="info">
                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <h4>Where We Are</h4>
                  </div>
                  <p>Brooklyn, New York</p>
                  <p>11207</p>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <h4>Contact</h4>
                  </div>
                  <p>718-455-0353</p>
                  <p>primocleaningandrestoration@gmail.com</p>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faClock} />
                    <h4>Business Hours</h4>
                  </div>
                  <p>24 HR EMERGENCY SERVICE</p>
                </div>
              </div>

              <div className="form">
                <form>
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />

                  <textarea placeholder="Message"></textarea>

                  <div className="send">
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <Link to="">Send</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
