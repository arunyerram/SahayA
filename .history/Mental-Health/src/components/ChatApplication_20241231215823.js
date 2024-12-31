import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const ChatApplication = () => {
  const [privacyStatus, setPrivacyStatus] = useState(null);
  const navigate = useNavigate();

  // Check the current status from localStorage on initial load
  useEffect(() => {
    const savedPrivacy = localStorage.getItem('accountPrivacy');
    if (savedPrivacy) {
      setPrivacyStatus(savedPrivacy);
    }
  }, []);

  // Handle the change in privacy status (Public/Private)
  const handlePrivacyChange = (status) => {
    setPrivacyStatus(status);
    localStorage.setItem('accountPrivacy', status);
  };

  return (
    <>
    
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#f2f2f2' }}>
      
      {privacyStatus && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '550px',
            backgroundColor: '#ffffff',
            padding: '15px 20px',
            borderRadius: '10px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
            fontSize: '16px',
            fontWeight: 'bold',
            color: privacyStatus === 'Private' ? '#f44336' : '#4CAF50',
          }}
        >
          {privacyStatus === 'Private' ? 'Private Account' : 'Public Account'}
        </div>
      )}

      {/* If the privacyStatus is not set, show the options */}
      {privacyStatus === null && (
        <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
          <h2 style={{ color: '#333', fontSize: '24px', marginBottom: '20px' }}>Select Account Privacy</h2>
          <button
            onClick={() => handlePrivacyChange('Private')}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              padding: '12px 25px',
              margin: '10px',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            Private
          </button>
          <button
            onClick={() => handlePrivacyChange('Public')}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px 25px',
              margin: '10px',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              border: 'none',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            Public
          </button>
        </div>
      )}
    </div>

    <button
      onClick={() => navigate(-1)} // Navigate to the previous route
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "#FF5733",
        color: "white",
        padding: "10px 15px",
        borderRadius: "30px",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        border: "none",
        cursor: "pointer",
      }}
    >
      Back
    </button>

    </>
  );
};

export default ChatApplication;
