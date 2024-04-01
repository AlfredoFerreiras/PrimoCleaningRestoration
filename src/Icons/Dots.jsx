import React from "react";

function Dots() {
  const mainColor = "#f0412a"; // Define the main color as a constant
  return (
    <svg version="1.1" id="dots" x="0px" y="0px" viewBox="0 0 60 60">
      <circle className="st0" cx="8.29" cy="8.48" r="8.17" fill={mainColor} />
      <circle className="st0" cx="29.91" cy="8.47" r="8.17" fill={mainColor} />
      <circle className="st0" cx="51.64" cy="8.48" r="8.17" fill={mainColor} />
      <circle className="st0" cx="8.38" cy="30.26" r="8.17" fill={mainColor} />
      <circle className="st0" cx="30" cy="30.25" r="8.17" fill={mainColor} />
      <circle className="st0" cx="51.72" cy="30.27" r="8.17" fill={mainColor} />
      <circle className="st0" cx="8.29" cy="51.45" r="8.17" fill={mainColor} />
      <circle className="st0" cx="29.91" cy="51.44" r="8.17" fill={mainColor} />
      <circle className="st0" cx="51.64" cy="51.46" r="8.17" fill={mainColor} />
    </svg>
  );
}

export default Dots;
