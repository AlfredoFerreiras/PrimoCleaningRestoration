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
            <h4>Primo is a company specializing in Fire Restoration</h4>

            <div className="text text-white">
              <p>
                Primo was founded in 2004. Since its inception, we have
                undertaken dozens of construction projects of various kinds. Our
                goal in all our activities is to fully satisfy the requirements
                and needs of our customers.
              </p>

              <p>
                In all our company activities, we take measures to limit waste
                generation and apply environmentally friendly and
                energy-efficient technological procedures. We communicate and
                cooperate with public authorities and other stakeholders on
                environmental and occupational health and safety issues.
              </p>

              <p>
                We always strive to ensure that all our activities comply with
                ISO and national standards requirements. For all specialized
                activities, we possess the necessary certificates,
                authorizations, and qualifications. In preparing construction
                projects, we proceed in such a way that all risks and hazards
                are identified in advance, and we implement measures to prevent
                endangering the health of our employees.
              </p>
            </div>
          </div>

          <Triangle />
          <Square />
        </div>

        <div className="whatWeDo section text-white">
          <h2>
            What We Do <Dots />
          </h2>

          <div className="container-inner">
            <div className="card-container">
              <div className="card">
                <Building />
                <p>Construction and reconstruction of buildings</p>
              </div>

              <div className="card">
                <Excavator />
                <p>Preparation, earthworks, and demolition</p>
              </div>

              <div className="card">
                <Wrench />
                <p>Repair and restoration of engineering structures</p>
              </div>

              <div className="card">
                <Painter />
                <p>Hydro insulation coatings</p>
              </div>

              <div className="card">
                <Spray />
                <p>Graffiti removal and anti-graffiti coatings</p>
              </div>

              <div className="card">
                <Shield />
                <p>Comprehensive anti-corrosion protection</p>
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
