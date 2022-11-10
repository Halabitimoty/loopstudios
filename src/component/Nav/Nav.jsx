import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Hero__Nav">
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
    </div>
  );
}

export default Nav;
