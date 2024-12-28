import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./data/Logo.png";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    gender: "",
    languages: "",
    designation: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <header className="header">
        <div className="header-content">
          <div className="header-right-content">
            <div className="logo">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="header-right">
              <nav>
                <ul>
                  <Link to="/careers">
                    <a>careers</a>
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Application Form</h2>

        <div className="field">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field">
          <label>Gender</label>
          <div className="radio-group">
            <label className="radio">
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
              />
              <span>Male</span>
            </label>
            <label className="radio">
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
              />
              <span>Female</span>
            </label>
          </div>
        </div>

        <div className="field">
          <label>Languages Known</label>
          <input
            type="text"
            name="languages"
            value={formData.languages}
            onChange={handleChange}
            placeholder="e.g., English, Hindi, Telugu"
          />
        </div>

        <div className="field">
          <label>Designation</label>
          <select
            name="designation"
            className="select-field"
            value={formData.designation}
            onChange={handleChange}
            required
          >
            <option value="">Select Designation</option>
            <option value="student">Student</option>
            <option value="btech">B.Tech</option>
            <option value="mtech">M.Tech</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="field1">
          <label>Resume</label>
          <input
            type="file"
            name="resume"
            className="file-upload"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
          />
          <p className="note">Accepted formats: PDF, DOC, DOCX</p>
        </div>

        <button type="submit" className="btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
