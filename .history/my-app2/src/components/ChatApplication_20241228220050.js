import React, { useState, useEffect } from 'react';

const App = () => {
  const [privacyStatus, setPrivacyStatus] = useState(null);

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
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* If the privacyStatus is not set, show the options */}
      {privacyStatus === null ? (
        <div>
          <h2>Select Account Privacy</h2>
          <button
            onClick={() => handlePrivacyChange('Private')}
            style={{
              backgroundColor: 'red',
              color: 'white',
              padding: '10px 20px',
              margin: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Private
          </button>
          <button
            onClick={() => handlePrivacyChange('Public')}
            style={{
              backgroundColor: 'green',
              color: 'white',
              padding: '10px 20px',
              margin: '10px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Public
          </button>
        </div>
      ) : (
        // Once the status is set, display the current privacy setting
        <div>
          <h2>Your Account Privacy Status</h2>
          <h3>{privacyStatus}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
