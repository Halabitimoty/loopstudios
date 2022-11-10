import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="" className="navbar-logo">
            loopstudios
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-links" onClick={closeMobMenu}>
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-links" onClick={closeMobMenu}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/support" className="nav-links" onClick={closeMobMenu}>
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>

    // <div className="Hero__Nav">
    //   <ul className="">
    //     <li>
    //       <Link>About</Link>
    //     </li>
    //     <li>
    //       <Link>Careers</Link>
    //     </li>
    //     <li>
    //       <Link>Events</Link>
    //     </li>
    //     <li>
    //       <Link>Products</Link>
    //     </li>
    //     <li>
    //       <Link>Support</Link>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default Nav;
