import React from "react";
import "./Footer.css";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container-fluid p-0 m-0 F-Bg">
      <div className="container p-0">
        <div className="Footer">
          <div className="Footer__H">
            <div className="Hero__Logo">loopstudios</div>
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
          </div>
          <div className="Footer__B">
            <div className="Footer__B__SocialMedia">
              <a href="link">
                <img src={facebook} alt="" />
              </a>
              <a href="link">
                <img src={twitter} alt="" />
              </a>
              <a href="link">
                <img src={pinterest} alt="" />
              </a>
              <a href="link">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className="Footer__B__Hero">
              © 2021 Loopstudios. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
