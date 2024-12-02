import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./YouCan.css";

const SkillsForm = () => {
  const [workDomain, setWorkDomain] = useState("");
  const [degrees, setDegrees] = useState("");
  const [certifications, setCertifications] = useState("");
  const [skillsAcquired, setSkillsAcquired] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [error, setError] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/qualification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workDomain,
          degrees,
          certifications,
          skillsAcquired,
          workExperience,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("candidate", JSON.stringify(data));
        navigate("/final-page");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit form. Please try again."); // Set error message
    }
  };

  return (
    <div className="form-container mt-5">
      <h2 style={{ color: "black" }}>Enter your qualifications</h2>
      <br />
      <form onSubmit={handleSubmit}>
        {/* Input fields for qualifications */}
        <div className="mb-3">
          <label htmlFor="workDomain" className="form-label" style={{ color: "black" }}>Work Domain</label>
          <input
            className="form-control"
            id="workDomain"
            name="workDomain"
            value={workDomain}
            onChange={(e) => setWorkDomain(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="degrees" className="form-label" style={{ color: "black" }}>Degrees</label>
          <textarea
            className="form-control"
            id="degrees"
            name="degrees"
            value={degrees}
            onChange={(e) => setDegrees(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="certifications" className="form-label" style={{ color: "black" }}>Certifications</label>
          <textarea
            className="form-control"
            id="certifications"
            name="certifications"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="skillsAcquired" className="form-label" style={{ color: "black" }}>Skills Acquired</label>
          <textarea
            className="form-control"
            id="skillsAcquired"
            name="skillsAcquired"
            value={skillsAcquired}
            onChange={(e) => setSkillsAcquired(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="workExperience" className="form-label" style={{ color: "black" }}>Work Experience</label>
          <textarea
            className="form-control"
            id="workExperience"
            name="workExperience"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
            required
          />
        </div>
        {/* Error message */}
        {error && <p className="error-message">{error}</p>}
        {/* Buttons for submission and navigation */}
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary m-4 item-center" type="submit">Submit</button>
        </div>
      </form>
      {/* Back button */}
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-secondary m-3" onClick={() => navigate("/my-profile")}>Back</button>
      </div>
    </div>
  );
};

export default SkillsForm;
