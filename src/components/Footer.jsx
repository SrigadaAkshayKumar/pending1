import React from "react";

import Logo from "./data/Logo.png";
import { Link } from "react-router-dom";


function Contact() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <a href="/">
          <img src={Logo} alt="Logo" /> </a>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/work">Our Work</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>
            Email  : 
            <a href="mailto:pendingofficial@gmail.com">
               pendingofficial@gmail.com
            </a>
          </p>
          <p>
            Phone : <a href="tel:+919110326779">+91 9260345779</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="foot-data">
          <p class>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
        </div>
        <p>&copy; PENDING 2024 | All rights reserved</p>
      </div>
    </footer>
  );
}

export default Contact;
