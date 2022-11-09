import React from "react";
import "./Body.css";
import Image from "../../assets/desktop/image-interactive.jpg";

function Body() {
  return (
    <div className="container">
      <div className="Leader">
        <img src={Image} alt="" />
        <div className="Leader__Head">
          <h4>THE LEADER IN INTERACTIVE VR</h4>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
