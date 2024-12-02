import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./YouCan.css";

const MyProfile = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [qualifications, setQualifications] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user's personal information and qualifications from the backend
    axios.get("/api/user/profile")
      .then(response => {
        setPersonalInfo(response.data.personalInfo);
        setQualifications(response.data.qualifications);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching user profile:", error);
        setLoading(false);
      });
  }, []);

  const handleEditProfile = () => {
    // Logic to navigate to the edit profile page
  };

  const handleDeleteAccount = () => {
    // Logic to delete the user's account
  };

  const handleEditRequest = () => {
    // Logic to navigate to the edit request page
  };

  const handleDeleteRequest = () => {
    // Logic to delete the user's request
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="mt-4">
          <Link to="/skills-form" className="btn btn-primary me-2">
            Looking for a job
          </Link>
          <Link to="/education-domain-selector" className="btn btn-primary">
            Looking for training
          </Link>
        </div>
        <br />
        <h3>My Profile</h3>
        <div className="card-body">
          <p className="card-text">
            <strong>First Name:</strong> {personalInfo.firstName}
          </p>
          <p className="card-text">
            <strong>Last Name:</strong> {personalInfo.lastName}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {personalInfo.email}
          </p>
          <p className="card-text">
            <strong>Phone:</strong> {personalInfo.phone}
          </p>
          <p className="card-text">
            <strong>Password:</strong> {personalInfo.password}
          </p>

          <div className="mt-3">
            <button className="btn btn-primary me-2" onClick={handleEditProfile}>
              Edit Profile
            </button>
            <button className="btn btn-danger" onClick={handleDeleteAccount}>
              Delete Account
            </button>
          </div>
          <br/>

          <h3>My Requests</h3>
          <br/>
          <p className="card-text">
            <strong>Work Domain:</strong> {qualifications.workDomain}
          </p>
          <p className="card-text">
            <strong>Degrees:</strong> {qualifications.degrees}
          </p>
          <p className="card-text">
            <strong>Certifications:</strong> {qualifications.certifications}
          </p>
          <p className="card-text">
            <strong>Skills Acquired:</strong> {qualifications.skillsAcquired}
          </p>
          <p className="card-text">
            <strong>Work Experience:</strong> {qualifications.workExperience}
          </p>

          <div className="mt-3">
            <button className="btn btn-primary me-2" onClick={handleEditRequest}>
              Edit Request
            </button>
            <button className="btn btn-danger" onClick={handleDeleteRequest}>
              Delete Request
            </button>
            <br />
            <br />
            <Link to="/login">
              <button className="btn btn-secondary m-3" type="button">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
