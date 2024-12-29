import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const [emojiIndex, setEmojiIndex] = useState(0);

  const emojis = ['😊', '😃', '😍', '🥰', '😎', '🤔', '😜', '😇'];

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="main">
      <div className="backgroundImage"></div>
      <div className="content">
        <div className="text">
          <span style={{ fontFamily: "sans-serif" }}>BRO!<br />HOW ARE YOU?</span>

          <h3 className="light" style={{ marginTop: "20px", fontSize: "100px", fontFamily: 'commissioner' }}>SAHAYA

          <h3 style={{fontSize: 30}}>THE AI THAT UNDERSTANDS YOU!</h3>
          </h3>

                
                <button 
              onClick={() => navigate("/register")} 
              style={{
                backgroundColor: "green", 
                color: "white", 
                marginTop: "30px", 
                fontFamily: "poppins",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px"
              }}
            >
              Willing to Share?
          </button>


        </div>
      </div>

      <div className="navbar">
        <div className="container">
          <div className="logo">
            <img src="images/SahayA.jpg" alt="Logo" className="logo-image" style={{ height: '100px', width: '200px' }} />
          </div>

        </div>
      </div>

      <button className="login-button" onClick={handleLoginClick}>Login</button>

      <div className="emoji-container">
        <div className="emoji" style={{ fontSize: "150px" }}>{emojis[emojiIndex]}</div>
      </div>
    </div>
  );
};

export default LandingPage;