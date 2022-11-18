import React from "react";
import "./Creation.css";
import { useState } from "react";
import { imagesdesktop } from "../../utils/desktopImage";
import { imagesMobile } from "../../utils/mobileImage";
import useWindowDimensions from "../../utils/screenSize";

function Creation() {
  const [desktopImage, setDesktopImage] = useState(imagesdesktop);
  const [mobileImage, setMobileImage] = useState(imagesMobile);

  const desktopDisplay = desktopImage.map((e) => (
    <div className="col-lg-3 col-md-6 col-sm-12 p-2">
      <div className="Creation__Stack" data-aos="zoom-in-up">
        <img src={e.image} alt="" className="Creation__Stack__Image" />
        <p className="Creation__Stack__P">{e.title}</p>
      </div>
    </div>
  ));

  const mobilepDisplay = mobileImage.map((e) => (
    <div className="col-lg-3 col-md-6 col-sm-12 p-2">
      <div className="Creation__Stack" data-aos="zoom-in-up">
        <img src={e.image} alt="" className="Creation__Stack__Image" />
        <p className="Creation__Stack__P">{e.title}</p>
      </div>
    </div>
  ));

  const { height, width } = useWindowDimensions();

  return (
    <div className="Creation">
      <div className="Creation__Head">
        <p>OUR CREATIONS</p>
        <button>SEE ALL</button>
      </div>
      <div className="Creation__Body">
        <div className="row">
          {width < 900 ? mobilepDisplay : desktopDisplay}
        </div>
      </div>
    </div>
  );
}

export default Creation;
