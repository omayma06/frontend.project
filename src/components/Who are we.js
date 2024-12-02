// Who we are.js
import React from "react";
import { Link } from "react-router-dom";
import "./YouCan.css";

const WhoWeAre = () => {
  return (
    <div className="text-container mt-5">
      <br />
      <br />
      <h1 style={{ color: "black" }}>What is YouCan ?</h1>
      <br />
      <br />
      <div>
        <div>
          <h4 style={{ color: "black" }}>
            Hey there! Thanks for stopping by. Let me tell you about our YouCan
            app – it's like having a personal job search assistant right at your
            fingertips! Imagine this: You're looking for a job or maybe some
            training to boost your skills. YouCan is here to help. When you
            first visit our website, you'll see a warm greeting inviting you to
            explore. You'll find buttons for registering, logging in, and more.
            If you're new, hit the "Register" button, and you'll be taken to a
            simple form to fill out your basic info – things like your name,
            email, and phone number. Once you're done, just click submit, and
            you're in! Now, let's say you're back on the homepage, but this time
            as a registered user. Just click "Login," verify your details, and
            voilà – you're in! From there, you'll see your profile page where
            you can choose whether you're "Looking for a job" or "Looking for
            training." It's like having a personalized career coach right there.
            Oh, and here's the cool part – if you're looking for a job, you can
            tell us about your skills and qualifications on the "Qualifications"
            page. And if training's more your thing, no worries! Just head to
            the "Training" page to explore different fields of study. And guess
            what? As an admin (that's us), we're always here to support you.
            We've got a special dashboard where we can see all the job search
            requests. We use this info to connect job seekers with awesome
            opportunities. So, what do you think? Ready to give YouCan a try?
            We're here to make your job search journey smooth and successful.
            Let's get started!
          </h4>
        </div>
      </div>
      <br />
      <br />
      <Link to="/">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-secondary m-4 item-center" type="button">
            Back
          </button>
        </div>
      </Link>
    </div>
  );
};

export default WhoWeAre;
