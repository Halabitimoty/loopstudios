import React from "react";
import "./Creation.css";
import { useState } from "react";
import { imagesdesktop } from "../../utils/desktopImage";
// import imagesmobile from "../../utils/mobileImage";

function Creation() {
  const [desktopImage, setDesktopImage] = useState(imagesdesktop);
  const desktopDisplay = desktopImage.map((e) => {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12 p-2">
        <div className="Creation__Stack">
          <img src={e.image} alt="" className="Creation__Stack__Image" />
          <p className="Creation__Stack__P">{e.title}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="Creation">
      <div className="Creation__Head">
        <p>OUR CREATIONS</p>
        <button>SEE ALL</button>
      </div>
      <div className="Creation__Body">
        <div className="row">{desktopDisplay}</div>
      </div>
    </div>
  );
}

export default Creation;
