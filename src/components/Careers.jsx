import React from "react";

function Careers() {
  const jobs = [
    {
      title: "Front-End Developer",
      location: "Remote",
      description:
        "Looking for a skilled front-end developer to join our team.",
    },
    {
      title: "Back-End Developer",
      location: "New York, NY",
      description:
        "Seeking an experienced back-end developer with expertise in Node.js.",
    },
    {
      title: "UI/UX Designer",
      location: "San Francisco, CA",
      description:
        "Creative designer needed to craft amazing user experiences.",
    },
  ];

  return (
    <div className="careers-container">
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
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;
