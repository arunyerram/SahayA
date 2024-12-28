import React, { useState, useEffect } from 'react';
// import './App.css'; // Create a separate CSS file for styling

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

  const handleToggle = (choice) => {
    localStorage.setItem('accountPrivacy', choice); // Save to localStorage
    setPrivacyStatus(choice); // Set privacy status in the state
    setIsPrivacySet(true); // Mark privacy as set
  };

  return (
    <div
      style={{
        background: 'linear-gradient(45deg, #FF6F61, #6B9AC4, #FFD700, #FF6347)', // Colorful animated gradient
        backgroundSize: '400% 400%', // Smooth gradient animation
        animation: 'gradientAnimation 15s ease infinite', // Animation speed and effect
        color: 'white', // White text color for better contrast
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
        padding: '50px 20px',
        minHeight: '100vh',
      }}
    >
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      {/* Display the current privacy status as a button at the top */}
      {isPrivacySet && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#4CAF50', // Green for visible status
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            cursor: 'pointer',
          }}
        >
          Current Privacy: {privacyStatus}
        </div>
      )}

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

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20px',
            }}
          >
            {/* Toggle switch for privacy setting */}
            <div
              onClick={() => handleToggle('Private')}
              style={{
                background: privacyStatus === 'Private' ? '#4CAF50' : '#ddd', // Green for private
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                width: '120px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: privacyStatus === 'Private' ? 'flex-start' : 'flex-end',
              }}
            >
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  width: '30px',
                  height: '30px',
                  transition: 'all 0.3s ease',
                }}
              ></div>
              <span
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  left: privacyStatus === 'Private' ? '10px' : 'auto',
                  right: privacyStatus === 'Public' ? '10px' : 'auto',
                  fontSize: '14px',
                  fontWeight: 'bold',
                }}
              >
                {privacyStatus === 'Private' ? 'Private' : 'Public'}
              </span>
            </div>
          </div>
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
