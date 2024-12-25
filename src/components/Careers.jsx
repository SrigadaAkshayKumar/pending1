import React from "react";
import jobs from "./internsips.json";
import Logo from "./data/Logo.png";
import { Link } from "react-router-dom";

function Careers() {
  return (
    <div className="careers-container">
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
      <div className="careers-page">
        <h1>Careers</h1>
        <p>Join our team and help us build amazing solutions!</p>
        <div className="job-listings">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <h2>{job.title}</h2>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>{job.description}</p>
              <button type="submit">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Careers;
