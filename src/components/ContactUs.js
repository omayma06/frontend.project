import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faSnapchat,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./YouCan.css";

const ContactUs = () => {
  return (
    <div className="final">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{ color: "black" }}>Contact Us:</h1>
      <br />
      <div className="social-icons">
        <a
          className="social-icon"
          href="https://www.facebook.com/azmi.abdelkhalek"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          className="social-icon"
          href="https://www.instagram.com/abdelkhalek_azmi/"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/azmi-abdelkhalek-8a8188282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="social-icon"
          href="https://www.snapchat.com/add/azmyabdelkhalek?share_id=2Mxr7jpZqG8&locale=en-US"
        >
          <FontAwesomeIcon icon={faSnapchat} />
        </a>
        <a className="social-icon" href="https://github.com/AZMY-ABDELKHALEK">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <br />
      <br />
      <br />
      <h1 style={{ color: "black" }}>Phone number: +216 28 421 925</h1>
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
      <Link to="/">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-secondary" type="button">
            Back
          </button>
        </div>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
};

export default ContactUs;
