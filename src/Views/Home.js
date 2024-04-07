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
                We're dedicated to offering top-notch service to restore your
                property safely and efficiently. As a family-owned business
                started in 2020, we bring over 18 years of experience in fire,
                cleaning, and restoration services. We treat our customers with
                the care and respect we'd want for ourselves—anything less isn't
                an option. We know the importance of not just fixing properties,
                but also supporting the people impacted.
              </p>

              <div className="showMore text-white">
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
                  <div class="space-y-2">
                    <p class="text-base font-medium">Brooklyn</p>
                    <p class="text-base">New York, 11204</p>
                  </div>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <h4>Contact</h4>
                  </div>
                  <div class="space-y-2">
                    <p class="text-base font-medium">718-455-0353</p>
                    <p class="text-base">
                      primocleaningandrestoration@gmail.com
                    </p>
                  </div>
                </div>

                <div className="column">
                  <div className="heading">
                    <FontAwesomeIcon icon={faClock} />
                    <h4>Working Hours</h4>
                  </div>
                  <div class="space-y-4">
                    <p class="text-base font-semibold text-orange-500">
                      24/7 Service Available
                    </p>
                  </div>
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
