import React from "react";

//Styles
import "./Portfolio.scss";

//SVG icons
import Dots from "../Icons/Dots";
import Square from "../Icons/Square";

//Components
import PortfolioItemSlider from "../Components/PortfolioItemSlider";

function Portfolio() {
  return (
    <div className="portfolioView">
      <div className="container">
        <div className="intro section text-white">
          <h2>
            Our Portfolio <Dots />
          </h2>
          <Square />

          <div className="container-inner text-white">
            <div className="text">
              <p>
                Explore some of our latest projects and see the quality of our
                work.
              </p>

              <p>
                Each project showcases our commitment to excellence and
                attention to detail.
              </p>
            </div>
          </div>
        </div>

        <div className="portfolio section">
          <div className="container-inner">
            <div className="portfolio-container">
              <div className="portfolio-item text-white">
                <h3>
                  Gut Down Jobs Services by Primo Cleaning And Restoration{" "}
                  <Square />{" "}
                </h3>

                <p>
                  Explore the range of services provided by Primo Cleaning And
                  Restoration, specializing in gut down jobs and demolition
                  projects.
                </p>

                <h3>
                  Before <Square />{" "}
                </h3>

                {/* Pass images representing services to the PortfolioItemSlider */}
                <PortfolioItemSlider />
              </div>

              <div className="portfolio-item text-white">
                <h3>
                  Ongoing Project: Bridge Construction <Square />{" "}
                </h3>

                <p>
                  Stay updated on our ongoing bridge construction project,
                  showcasing our dedication to quality and efficiency.
                </p>
                <h3>
                  After <Square />{" "}
                </h3>
                {/* Pass images representing ongoing project to the PortfolioItemSlider */}
                <PortfolioItemSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
