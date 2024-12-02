import React, { useState, useEffect } from "react";
import "./YouCan.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data from backend when component mounts
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from backend API
      const response = await fetch("/api/data");
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="loading-page container">
        {loading ? (
          <div className="boxes-container">
            <div className="boxes">
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="list-group" style={{ background: "#5bc0de" }}>
            <div className="d-flex w-100 justify-content-between text-center">
            <h1 className="m-3 text-dark text-center">
              <br/>
              <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Welcome !<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                YouCan service is yours !<br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Enjoy discovering your ideal job right here !
              </h1>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            {/* Display fetched data */}
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Liens vers les pages de connexion, d'inscription, de présentation et de contact */}
            <Link to="/login">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary m-4 item-center" type="button">
                  Login & Confirm
                </button>
              </div>
            </Link>
            <Link to="/register">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary m-4 item-center" type="button">
                  Don't have an account , Sign Up
                </button>
              </div>
            </Link>
            <Link to="/who-are-we">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary m-4 item-center" type="button">
                  Who are we ?
                </button>
              </div>
            </Link>
            <Link to="/contact-us">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary m-4 item-center" type="button">
                  Contact us
                </button>
              </div>
            </Link>
            <br/>
            <br/>
            <br/>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
