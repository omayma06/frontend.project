import React, { useState, useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import "./YouCan.css";


const RequestList = () => {
  const [requests, setRequests] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is an admin
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("/api/user/role", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (response.data.role === "admin") {
            setIsAdmin(true);
            fetchRequests();
          } else {
            // Redirect to login page if not admin
            // You can replace this with a different redirection logic if needed
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Error checking user role:", error);
          // Redirect to login page on error
          navigate("/login");
        });
    } else {
      // Redirect to login page if no token
      // You can replace this with a different redirection logic if needed
      navigate("/login");
    }
  }, []);

  const fetchRequests = () => {
    // Fetch request list from backend API
    axios
      .get("/api/requests")
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching request list:", error);
      });
  };

  if (!isAdmin) {
    // Redirect if user is not admin
    return null; // Or a loading indicator, or any other UI element
  }

  return (
    <div className="form-container mt-5">
      <h1 style={{ color: "black" }}>Job Requests</h1>
      <br />
      <br />
      <h4 style={{ color: "black" }}>
        These are the job requests that have been submitted by your candidates :
      </h4>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            {/* Display personal information */}
            <div>First Name: {request.firstName}</div>
            <div>Last Name: {request.lastName}</div>
            <div>Email: {request.email}</div>
            <div>Phone: {request.phone}</div>
            <div>Password: {request.password}</div>

            {/* Display qualifications */}
            <div>Work Domain: {request.workDomain}</div>
            <div>Degrees: {request.degrees}</div>
            <div>Certifications: {request.certifications}</div>
            <div>Skills Acquired: {request.skillsAcquired}</div>
            <div>Work Experience: {request.workExperience}</div>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link to="/LoginPage">
        <button className="btn btn-secondary m-3" type="button">
          Back
        </button>
      </Link>
    </div>
  );
};

export default RequestList;
