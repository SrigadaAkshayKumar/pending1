import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./data/Logo.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST", // Send as POST request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your message! We will get back to you shortly.");
        setFormData({ name: "", email: "", message: "" }); // Reset form data
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Something went wrong. Please try again later."}`);
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      alert("There was an issue sending your message. Please try again later.");
    }
  };

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
          <p>If you have any questions or inquiries, feel free to reach out to us.</p>
          <form onSubmit={handleSubmit} className="contact-formm">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
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
