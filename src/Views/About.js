import React from "react";

//Styles
import "./About.scss";

//Icons
import Building from "../Icons/about/Building";
import Excavator from "../Icons/about/Excavator";
import Wrench from "../Icons/about/Wrench";
import Painter from "../Icons/about/Painter";
import Spray from "../Icons/about/Spray";
import Shield from "../Icons/about/Shield";
import Standard1 from "../Icons/about/Standard1";
import Standard2 from "../Icons/about/Standard2";
import Standard3 from "../Icons/about/Standard3";
import Standard4 from "../Icons/about/Standard4";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";
import Circle from "../Icons/Circle";
import Triangle from "../Icons/Triangle";

function About() {
  return (
    <div className="aboutView">
      <div className="container">
        <div className="aboutUs section ">
          <h2 className=" text-white">
            About Primo <Dots />
          </h2>

          <div className="container-inner text-white">
            <h4>
              Primo is a company specializing in Fire Restoration & Cleaning
            </h4>
            <br />
            <div className="text text-white">
              <p>
                We are a family-owned company that has been in business since
                2020 with 18 plus years of experience in the fire, cleaning and
                restoration business. Being a small business, we understand the
                concern for not only your property but the wellbeing of those
                affected directly.
              </p>
              <br />
              <p>
                Our priority is to provide exceptional service restoring your
                property and making sure everything is safe and well upon
                returning to your home. We are committed to threat our customers
                exactly how we would want to be treated, anything less would be
                unacceptable.
              </p>
              <p></p>
            </div>
          </div>

          <Triangle />
          <Square />
        </div>

        <div className="whatWeDo section text-white">
          <h2>
            What We Do <Dots />
          </h2>
          <h3> Water Damage & Fire Restoration</h3>
          <div className="container-inner">
            <div className="card-container">
              <div className="card">
                <Building />
                <p>Dehumidification</p>
              </div>

              <div className="card">
                <Spray />
                <p>Cleaning & Disinfection</p>
              </div>

              <div className="card">
                <Shield />
                <p>Water Extraction</p>
              </div>

              <div className="card">
                <Painter />
                <p>Water Damage Clean-Up</p>
              </div>
            </div>
          </div>

          <Square />
          <Circle />
        </div>

        <div className="whatWeDo section text-white">
          <h2>
            What We Do <Dots />
          </h2>
          <h3> Emergency Services 24/7</h3>
          <div className="container-inner">
            <div className="card-container">
              <div className="card">
                <Building />
                <p>Soot & Smoke removal</p>
              </div>

              <div className="card">
                <Excavator />
                <p>Pack-out/in And Storage</p>
              </div>

              <div className="card">
                <Wrench />
                <p>Secure Board-Up</p>
              </div>

              <div className="card">
                <Painter />
                <p>Structural Drying</p>
              </div>
            </div>
          </div>

          <Square />
          <Circle />
        </div>

        <div className="ourStandards section text-white">
          <h2>
            Our Standards <Dots />{" "}
          </h2>

          <div className="container-inner">
            <div className="text">
              <p>
                In all our company activities, we take measures to limit waste
                generation, apply environmentally friendly procedures, and
                protect life and health at work.
              </p>
            </div>

            <div className="standard-container">
              <div className="standard">
                <Standard1 />
                <div className="standard-text">
                  <h4>Excellent Services</h4>
                  <p>
                    You can rely on the high quality of our work and adherence
                    to agreed deadlines and prices.
                  </p>
                </div>
              </div>

              <div className="standard">
                <Standard2 />
                <div className="standard-text">
                  <h4>High Standards</h4>
                  <p>
                    When providing our services, we always strive to comply with
                    ISO and national standards requirements.
                  </p>
                </div>
              </div>

              <div className="standard">
                <Standard3 />
                <div className="standard-text">
                  <h4>Professional Team</h4>
                  <p>
                    Our customers can always count on the high expertise and
                    professionalism of our employees.
                  </p>
                </div>
              </div>

              <div className="standard">
                <Standard4 />
                <div className="standard-text">
                  <h4>Creative Solutions</h4>
                  <p>
                    Since our inception, we have undertaken dozens of
                    construction projects of various kinds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
