import React from "react";
import { Link } from "react-router-dom";
import Logo from "./data/Logo.png";

function Contact() {
  return (
    <div className="contact-container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
          </div>
          <div className="header-right">
            <nav>
              <ul>
                <Link to="/Careers">
                  <li>Careers</li>
                </Link>
                <Link to="/Contact">
                  <li>Contact us</li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div className="contact-formm">
        <div className="contact-form1">
          <h1>Contact Us</h1>
          <p>
            If you have any questions or inquiries, feel free to reach out to
            us.
          </p>
          <form className="contact-formm">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
