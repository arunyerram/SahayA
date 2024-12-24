import React from 'react';
import Nav from "./Nav.js";
import '../css/About.css';

const about = () => {
  return (
    <>
      <Nav />
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            We are dedicated to creating solutions that support mental health awareness. Our system aims to provide real-time support by detecting early signs of mental health issues like anxiety and depression through intelligent conversations.
          </p>
          <p className="about-text">
            Our chatbot uses advanced conversational AI to recognize patterns, respond empathetically, and suggest professional help when necessary. Through cutting-edge AI, we strive to make mental health support accessible and effective.
          </p>
        </div>
      </div>
    </>
  );
};

export default about;
