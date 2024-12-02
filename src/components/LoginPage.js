import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./YouCan.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState(""); // État local pour stocker l'e-mail
  const [password, setPassword] = useState(""); // État local pour stocker le mot de passe
  const [loginSuccess, setLoginSuccess] = useState(false); // État local pour indiquer si la connexion a réussi
  const [errorMessage, setErrorMessage] = useState(""); // État local pour stocker les messages d'erreur
  const navigate = useNavigate(); // Hook de navigation pour rediriger l'utilisateur après la connexion

  // Fonction de gestion de la soumission du formulaire de connexion
  const handleLogin = async (e) => {
    e.preventDefault();

    // Envoi des données de connexion au backend pour validation
    try {
      let result = await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();

      if (result.success) {
        // Si la connexion réussit, stocker le token JWT dans le stockage local et rediriger vers la page du profil
        const token = result.token;
        localStorage.setItem("token", token);
        setLoginSuccess(true);
        navigate("/MyProfile");
      } else {
        // Si les informations de connexion sont incorrectes, afficher un message d'erreur
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="form-container mt-5">
      <h2 style={{ color: "black" }}>Login & Confirm</h2>
      <br />
      {/* Formulaire de connexion */}
      <form onSubmit={handleLogin}>
        {/* Champ d'e-mail */}
        <div className="mb-3">
          <label
            htmlFor="email"
            className="form-label"
            style={{ color: "black" }}
          >
            Email
          </label>
          <br />
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
        {/* Champ de mot de passe */}
        <div className="mb-3">
          <label
            htmlFor="password"
            className="form-label"
            style={{ color: "black" }}
          >
            Password
          </label>
          <br />
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
        <br />
        <br />
        {/* Bouton pour démarrer le processus de connexion */}
        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn btn-primary m-4 item-center"
            type="submit" // Utilisez 'submit' pour soumettre le formulaire
          >
            Start
          </button>
          {/* Lien pour retourner à la page d'inscription */}
          <div className="d-grid gap-2 col-6 mx-auto"></div>
          {/* Lien pour retourner à la page d'accueil */}
          <Link to="/">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-secondary m-3" type="button">
                Back
              </button>
            </div>
            <br />
          </Link>
        </div>
        <br />
        {/* Messages pour l'utilisateur en fonction de l'état de la connexion */}
        {loginSuccess ? (
          <p className="success-message">Logged in with success</p>
        ) : (
          <p className="error-message">{errorMessage}</p>
        )}
      </form>
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
    </div>
  );
};

export default LoginPage;
