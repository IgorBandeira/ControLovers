import React from "react";
import "./footer.css";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      ControLovers © <div className="year">2023</div>
      <div className="footer-social">
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
