import React, { useState, useEffect } from 'react';

const ChatApplication = () => {
  const [privacyStatus, setPrivacyStatus] = useState('');
  const [isPrivacySet, setIsPrivacySet] = useState(false);

  // Retrieve the saved privacy setting from localStorage on component mount
  useEffect(() => {
    const savedPrivacy = localStorage.getItem('accountPrivacy');
    if (savedPrivacy) {
      setPrivacyStatus(savedPrivacy);
      setIsPrivacySet(true);
    }
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem('accountPrivacy', choice); // Save to localStorage
    setPrivacyStatus(choice); // Set privacy status in the state
    setIsPrivacySet(true); // Mark privacy as set
  };

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
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>
        Account Privacy Status
      </h1>

      {!isPrivacySet ? (
        // Show the prompt to choose privacy if not set
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
          <h3 style={{ fontSize: '1.5rem' }}>
            Choose Your Account Privacy Setting:
          </h3>
          <button
            onClick={() => handleChoice('Private')}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '10px',
              fontSize: '16px',
            }}
          >
            Private
          </button>
          <button
            onClick={() => handleChoice('Public')}
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              margin: '10px',
              fontSize: '16px',
            }}
          >
            Public
          </button>
        </div>
      ) : (
        // Once the privacy is set, show the status
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
          <h3 style={{ fontSize: '1.5rem' }}>Your Current Privacy Setting:</h3>
          <p style={{ fontSize: '1.2rem', marginTop: '10px', color: '#4CAF50' }}>
            {privacyStatus}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatApplication;
