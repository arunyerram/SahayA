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
        <div className="navbar">
          <div className="container">
            <div className="logo">
              <h2>logo</h2>
              {/* <img src="http://placehold.it/50x50" alt="logo" /> */}
            </div>
            <div className="menu">
              <ul>
                <li>LOGIN</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
