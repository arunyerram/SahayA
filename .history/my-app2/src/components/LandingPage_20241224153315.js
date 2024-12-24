import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="landing-page">
      <div className="main">
        <div className="backgroundImage"></div>
        <div className="content">
          <div className="text">
            <div>
              HELLO!<br />HOW ARE YOU?
            </div>
            <h1>SAHAYA</h1>
            <p>THE AI THAT UNDERSTANDS YOU!</p>
            <button onClick={handleLoginClick}>LOGIN</button>
          </div>
        </div>
        <div className="navbar">
          <div className="container">
            <div className="logo">
              <h2>Logo</h2>
            </div>
            <div className="menu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
