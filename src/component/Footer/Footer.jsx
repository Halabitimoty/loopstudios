import React from "react";
import "./Footer.css";
import Nav from "./../Nav/Nav";
import Logo from "./../Logo/Logo";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

function Footer() {
  return (
    <div className="container-fluid p-0 m-0 F-Bg">
      <div className="container">
        <div className="Footer">
          <div className="Footer__H">
            <Logo />
            <Nav />
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
