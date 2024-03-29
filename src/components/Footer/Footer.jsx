import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { Link } from "react-scroll";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>darsanaunni777@gmail.com</span>
        <div className="f-icons">
          <Link to="Navbar"><Insta color="white" size={"3rem"} /></Link>
          <Link to="Navbar"><Facebook color="white" size={"3rem"} /></Link>
          <Link to="Navbar"><Gitub color="white" size={"3rem"} /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
