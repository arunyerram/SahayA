import React from 'react';
import "../css/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="main">
        <div className="backgroundImage"></div>
        <div className="content">
          <div className="text">
            HELLO!<br />HOW ARE YOU?
            <h1>SAHAYA</h1>
            <p>
              THE AI THAT UNDERSTANDS YOU!
            </p>
            <button>Will you share?</button>
          </div>
        </div>

        {/* Navbar */}
        <div className="navbar">
          <div className="container">
            <div className="logo">
              <h2>logo</h2>
            </div>
            <div className="menu">
              <ul>
                <li>LOGIN</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Login Button at Top Right */}
        <button className="login-button">Login</button>
      </div>
    </>
  );
};

export default LandingPage;
