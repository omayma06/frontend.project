import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./YouCan.css";

const PersonalInfoForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [formFilled, setFormFilled] = useState(false); // State to track if form fields are filled
  const navigate = useNavigate();

  useEffect(() => {
    // Form is filled if all fields are provided
    setFormFilled(firstName && lastName && email && phone && password);
  }, [firstName, lastName, email, phone, password]);

  const collectData = (e) => {
    e.preventDefault();

    // Check if all form fields are filled
    if (!formFilled) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    // Redirect to LoginPage.js upon successful form submission
    navigate("/LoginPage", {
      state: { email, password }, // Pass email and password to LoginPage.js
    });
  };

  return (
    <div className="form-container mt-5">
      <h2 style={{ color: "black" }}>Sign Up</h2>
      <h6 style={{ color: "black" }}>
        At 'youcan', we provide the opportunity to enter the professional world
        of employment and find a job matching your qualifications and field of
        education. To begin, please fill out this form to help us understand you
        better and to be able to contact you later once we have found a suitable
        job for you. Thank you for completing the form below. Who are you ?
      </h6>

      <form onSubmit={collectData}>
        <div className="mb-3">
          <label
            htmlFor="firstName"
            className="form-label"
            style={{ color: "black" }}
          >
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="lastName"
            className="form-label"
            style={{ color: "black" }}
          >
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ color: "black" }}
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="phone"
            className="form-label"
            style={{ color: "black" }}
          >
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
            style={{ color: "black" }}
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Button to submit the form */}
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary m-4 item-center" type="submit" onClick={() => navigate("/login")}>
            Submit
          </button>
        </div>
      </form>
      {/* Button to go back to the homepage */}
      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-secondary m-3" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
