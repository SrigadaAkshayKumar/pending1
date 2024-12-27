// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landingpage";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import "./App.css";
import Application from "./components/Application";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/Application" element={<Application />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
