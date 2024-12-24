import React, { useState, useEffect } from 'react';
import "../css/LandingPage.css";

const LandingPage = () => {
  const [currentEmoji, setCurrentEmoji] = useState("🙂");

  useEffect(() => {
    const emojis = ["🙂", "😀", "😂", "😍", "😎", "🤔"];
    let emojiIndex = 0;

    const emojiInterval = setInterval(() => {
      emojiIndex = (emojiIndex + 1) % emojis.length;
      setCurrentEmoji(emojis[emojiIndex]);
    }, 2000); // Change emoji every 2 seconds

    return () => clearInterval(emojiInterval); // Cleanup on component unmount
  }, []);

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
            </div>
            <div className="menu">
              <ul>
                <li>LOGIN</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="emoji-container">
          <div className="emoji">{currentEmoji}</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
