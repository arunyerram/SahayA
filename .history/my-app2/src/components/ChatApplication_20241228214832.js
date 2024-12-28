import React, { useState, useEffect } from 'react';

const ChatApplication = () => {
  const [savedPrivacy, setSavedPrivacy] = useState('');

  // Retrieve the saved privacy setting from localStorage on component mount
  useEffect(() => {
    const privacySetting = localStorage.getItem('accountPrivacy') || 'Not Set';
    setSavedPrivacy(privacySetting);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#121212', // Dark background
        color: 'white', // White text color for better contrast
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
        padding: '50px 20px',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Account Privacy Status</h1>
      <div
        style={{
          backgroundColor: '#333', // Darker card background for contrast
          color: '#fff', // White text inside the card
          padding: '20px 30px',
          borderRadius: '10px',
          maxWidth: '400px',
          margin: '0 auto',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Slight shadow for depth
        }}
      >
        <h3 style={{ fontSize: '1.5rem' }}>Current Account Privacy Setting:</h3>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', color: '#4CAF50' }}>
          {savedPrivacy === 'Not Set' ? (
            <span style={{ color: '#f44336' }}>{savedPrivacy}</span>
          ) : (
            <span>{savedPrivacy}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ChatApplication;
