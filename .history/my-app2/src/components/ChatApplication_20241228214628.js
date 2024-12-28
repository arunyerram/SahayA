import React, { useState, useEffect } from 'react';

const ChatApplication = () => {
  const [showModal, setShowModal] = useState(false);
  const [savedPrivacy, setSavedPrivacy] = useState('');

  // Retrieve the saved privacy setting from localStorage on component mount
  useEffect(() => {
    const privacySetting = localStorage.getItem('accountPrivacy') || 'Not Set';
    setSavedPrivacy(privacySetting);
  }, []);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleChoice = (choice) => {
    localStorage.setItem('accountPrivacy', choice);
    alert(`Your account privacy is set to: ${choice}`);
    setSavedPrivacy(choice); // Update the saved privacy state
    setShowModal(false);
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Chat Application</h1>
      <h3>Your Current Privacy Setting: {savedPrivacy}</h3>
      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Manage Account Privacy
      </button>

      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
              width: '300px',
            }}
          >
            <h3>Account Privacy</h3>
            <p>Do you want to keep your account private or public?</p>
            <button
              onClick={() => handleChoice('Private')}
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '10px 20px',
                margin: '10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Private
            </button>
            <button
              onClick={() => handleChoice('Public')}
              style={{
                backgroundColor: 'orange',
                color: 'white',
                padding: '10px 20px',
                margin: '10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Public
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatApplication;
