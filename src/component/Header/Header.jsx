import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid Hero p-0 m-0">
      <div className="container">
        <div className="Hero__Head">
          <div className="Hero__Logo">loopstudios</div>
          <nav className="Hero__Nav">
            <ul className="">
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Events</Link>
              </li>
              <li>
                <Link>Products</Link>
              </li>
              <li>
                <Link>Support</Link>
              </li>
            </ul>
          </nav>
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
