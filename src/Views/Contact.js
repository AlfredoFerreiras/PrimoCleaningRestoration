import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [from_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cxuy6jt", "template_70chkr8", form.current, {
        publicKey: "m6wNlk1n8sZlR00PJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

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
                <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    value={from_name}
                    name="from_name"
                    required="required"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    name="from_email"
                    required="required"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Message</label>
                  <textarea
                    placeholder="Message"
                    value={message}
                    name="message"
                    required="required"
                    id="message"
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <div className="send">
                    <button type="submit">
                      <FontAwesomeIcon icon={faPaperPlane} /> Send
                    </button>
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
