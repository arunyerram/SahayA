import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import "../css/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [emojiIndex, setEmojiIndex] = useState(0); // Track the current emoji index
  const emojis = ["😊", "😎", "🥳", "🤔", "😜", "😇"]; // Array of emojis

  // Change emoji every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 2000); // 2000ms = 2 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login route when button is clicked
  };

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
        <button className="login-button" onClick={handleLoginClick}>Login</button>

        {/* Emojis displayed at the right side with a rotating animation */}
        <div className="emoji-container">
          <span className="emoji">{emojis[emojiIndex]}</span>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
