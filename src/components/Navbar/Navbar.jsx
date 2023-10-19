import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="wrapper" id="Navbar">
      {/* left */}
      <div className="left">
        <div className="name">Darsana</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="right">
        <div className="list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
