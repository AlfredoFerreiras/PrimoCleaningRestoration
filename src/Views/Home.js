import React from "react";

//Styles
import "./Home.scss";

//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
  faPaperPlane,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";

//Components
import Carousel from "../Components/Carousel";
import PortfolioSlider from "../Components/PortfolioSlider";

//Certificate paths
import ISO9001 from "../Img/Certificates/iso9001.jpg";
import ISO14001 from "../Img/Certificates/iso14001.jpg";
import ISO18001 from "../Img/Certificates/iso18001.jpg";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";
import Circle from "../Icons/Circle";
import { Link } from "react-router-dom";
import PortfolioItemSlider from "../Components/PortfolioItemSlider";

function Home(props) {
  return (
    <div className="homeView">
      <Carousel />

      <div className="container">
        <div className="aboutUs section ">
          <h2 className="text-white">
            About Primo <Dots />
          </h2>

          <div className="container-inner text-white">
            <h4>Primo Construction Services</h4>
            <div className="text text-white">
              <p>
                Primo Construction Services was founded in 2004. Since then, we
                have completed dozens of construction projects of various types.
                Our goal is always to fully satisfy the requirements and needs
                of our customers.
              </p>

              <div className="showMore">
                <Link to="/about">
                  Show More{" "}
                  <span>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <Square />
        </div>

        {/* <div className="certificates section">
          <h2>
            Certificates <Dots />
          </h2>

          <div className="container-inner">
            <div className="card-container">
              <div className="card">
                <h4>ISO 9001</h4>
                <p>Quality Certificate</p>
                <img src={ISO9001} alt="ISO9001 Certificate" />

                <div className="box">
                  <Link to="">Learn More</Link>

                  <div className="showMore">
                    <Link to="">
                      View Certificate{" "}
                      <span>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <h4>ISO 14001</h4>
                <p>Environment Certificate</p>
                <img src={ISO14001} alt="ISO14001 Certificate" />

                <div className="box">
                  <Link to="">Learn More</Link>

                  <div className="showMore">
                    <Link to="">
                      View Certificate{" "}
                      <span>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <h4>OHSAS 18001</h4>
                <p>Safety Certificate</p>
                <img src={ISO18001} alt="ISO18001 Certificate" />

                <div className="box">
                  <Link to="">Learn More</Link>

                  <div className="showMore">
                    <Link to="">
                      View Certificate{" "}
                      <span>
                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="portfolio section text-white">
          <h2>
            Portfolio <Dots />
          </h2>

          <div className="container-inner">
            <h4>Our Latest Works</h4>

            <Square />
            <PortfolioItemSlider />
          </div>
        </div>
      </div>

      <div className="allWorks">
        <Circle />

        <div className="container">
          <h3>Want to see all our works? </h3>
          <Link to="/services" onClick={() => props.scrollToTop()}>
            View All Services
          </Link>
        </div>
      </div>

      <div className="contact section">
        <div className="container text-white">
          <h2>
            Contact Primo <Dots />
          </h2>

          <div className="container-inner">
            <div className="wrapper">
              <div className="info">
                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <h4>Where We Are</h4>
                  </div>

                  <p>Brooklyn</p>
                  <p>New York, 11204</p>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <h4>Contact</h4>
                  </div>
                  <p>0900 000 000</p>
                  <p>email@primoconstruction.com</p>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faClock} />
                    <h4>Working Hours</h4>
                  </div>
                  <p>Monday - Friday</p>
                  <p>8:00 AM - 6:00 PM</p>
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

export default Home;
