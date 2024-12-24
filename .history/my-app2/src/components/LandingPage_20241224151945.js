import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="main">
      <div className="backgroundImage"></div>
      <div className="content">
        <div className="text">
          HELLO!<br />HOW ARE YOU?
          <h1>SAHAYA</h1>
          <p>THE AI THAT UNDERSTANDS YOU!</p>
          <button onClick={handleLoginClick}>Login</button>
        </div>
      </div>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <h2>logo</h2>
          </div>
          <div className="menu">
            <ul>
              <li onClick={handleLoginClick}>LOGIN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
