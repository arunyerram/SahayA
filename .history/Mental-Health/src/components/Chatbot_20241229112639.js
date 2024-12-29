


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Nav from "./Nav"; // Assuming you have a Nav component

const Chatbot = () => {
  // Get the chatbot name from localStorage if it exists, or use an empty string
  const storedChatbotName = localStorage.getItem("chatbotName");

  // State to manage the chatbot name and whether it's set
  const [chatbotName, setChatbotName] = useState(storedChatbotName || "");
  const [isNameSet, setIsNameSet] = useState(!!storedChatbotName); // If name is stored, it's set

  // Handle the name submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    // Save the chatbot name in localStorage
    localStorage.setItem("chatbotName", chatbotName);
    setIsNameSet(true);
  };

  useEffect(() => {
    // If the chatbot name is already set, update the state accordingly
    if (storedChatbotName) {
      setChatbotName(storedChatbotName);
      setIsNameSet(true);
    }
  }, [storedChatbotName]);

  return (
    <>
      {/* Nav Component with Chatbot Name */}
      <Nav chatbotName={chatbotName} />

      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f7f7f7", // Light background color for better visibility
        }}
      >
        {/* Chatbot Name Input Form */}
        {!isNameSet && (
          <div
            style={{
              position: "absolute",
              top: "80px", // Adjust this value to move the input just below the navbar
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
              zIndex: 9998, // Ensure this is above the chatbot iframe
            }}
          >
            <h3>Enter Chatbot Name</h3>
            <form onSubmit={handleNameSubmit}>
              <input
                type="text"
                placeholder="Chatbot Name"
                value={chatbotName}
                onChange={(e) => setChatbotName(e.target.value)}
                style={{
                  padding: "10px",
                  marginRight: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  width: "200px",
                }}
                required
              />
              <button
                type="submit"
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Set Name
              </button>
            </form>
          </div>
        )}

        {/* Chatbot iframe */}
        {isNameSet && (
          <div
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "1400px", // Set appropriate size
              height: "500px", // Set appropriate height
              borderRadius: "10px",
              overflow: "hidden",
              zIndex: 9999, // Make sure this is above other content
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              title="Botpress Webchat"
              src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/11/07/20241211074923-A6NCKAAG.json"
              width="100%"
              height="100%"
              style={{
                border: "none",
                borderRadius: "10px",
              }}
            ></iframe>
          </div>
        )}
      </div>

      {/* Back Button */}
      <Link
        to="/home"
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
          cursor: "pointer",
        }}
      >
        Back
      </Link>
    </>
  );
};

export default Chatbot;

