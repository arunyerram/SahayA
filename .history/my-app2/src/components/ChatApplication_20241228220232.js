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
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f2f2f2' }}>
      {/* If the privacyStatus is not set, show the options */}
      {privacyStatus === null ? (
        <div>
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
      ) : (
        // Once the status is set, display the current privacy setting
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '30px 40px',
            borderRadius: '10px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
            maxWidth: '500px',
            margin: '0 auto',
          }}
        >
          <h2 style={{ color: '#4CAF50', fontSize: '24px', marginBottom: '20px' }}>Your Account Privacy Status</h2>
          <h3
            style={{
              color: privacyStatus === 'Private' ? '#f44336' : '#4CAF50',
              fontSize: '22px',
              fontWeight: 'bold',
              padding: '10px 0',
            }}
          >
            {privacyStatus}
          </h3>
        </div>
      )}
    </div>
  );
};

export default App;
