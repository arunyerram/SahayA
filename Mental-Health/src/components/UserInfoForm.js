import React, { useState} from "react";
import { saveUserInfo } from "./Firebase";  // Import the correct saveUserInfo function
import "../css/UserInfoForm.css";
import Footer from "./Footer";
import Navbar from "./Nav";
import { useNavigate } from "react-router-dom";

function UserInfoForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [number , setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!firstName || !lastName || !age || !address || !number) {
      setErrorMessage("All fields are required.");
      return;
    }

    try {
      // Call the function to save user data to Firestore
      await saveUserInfo(firstName, lastName, age, address,number);
      setSuccessMessage("User information saved successfully!");
      setShowPopup(true);
      setFirstName("");
      setLastName("");
      setAge("");
      setNumber("");
      setAddress("");
    } catch (error) {
      setErrorMessage("Error saving user data. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <div className="user-info-container">
        <div className="user-info-form">
          <h1 style={{ textAlign: "center", color: "black", fontSize: "30px" }}>
            Enter your details
          </h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number:</label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button className="submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <p>{successMessage}</p>
            <button className="close-button" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

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

      <Footer />
    </>
  );
}

export default UserInfoForm;


