import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./YouCan.css";

const FinalPage = () => {
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Fonction pour soumettre le commentaire
  const handleSubmit = () => {
    // Logique pour soumettre le commentaire (par exemple, l'envoyer au backend)
    // Après la soumission, effacer la zone de texte et définir submitted sur true
    setComment("");
    setSubmitted(true);
  };

  return (
    <div className="final">
      <br />
      <h2 style={{ color: "black" }}>
        Thank you for entrusting and utilizing our 'YouCan' service
        <br />
        Your job search request has been successfully submitted.
        <br />
        We will respond to you within a month.
        <br />
        Welcome aboard!
      </h2>
      <br />
      <h2>Describe your experience with the YouCan service:</h2>
      <br/>
      <br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <textarea
        placeholder="Start writing"
        rows="8"
        cols="100"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <br/>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit Comment
      </button>
      {submitted && <p>Comment submitted</p>}
      <br />
      <br/>
      <br/>
      <br/>
      <br/>
      <Link to="/my-profile">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-primary" type="button">
            Thanks
          </button>
        </div>
      </Link>
      <Link to="/skills-form">
        <div className="d-grid gap-2 col-6 mx-auto">
          <button className="btn btn-secondary" type="button">
            Back
          </button>
        </div>
      </Link>
    </div>
  );
};

export default FinalPage;
