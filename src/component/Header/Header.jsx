import React from "react";
import "./Header.css";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <div className="container-fluid Hero p-0 m-0">
      <div className="container">
        <div className="Hero__Head">
          <Nav />
        </div>
        <div className="Hero__Body">
          <p>IMMERSIVE</p>
          <p>EXPERIENCES</p>
          <p>THAT DELIVER</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
