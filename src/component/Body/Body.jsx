import React from "react";
import Leader from "../Leader/Leader";
import Creation from "../Creation/Creation";
import "./Body.css";

function Body() {
  return (
    <div className="container">
      <Leader />
      <Creation />
    </div>
  );
}

export default Body;
