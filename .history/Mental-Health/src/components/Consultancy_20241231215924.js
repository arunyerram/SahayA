import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav.js";
import "../css/Consultancy.css";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";

const profiles = [
  {
    id: 1,
    name: "Consultancy Profiles",
    bio: "Get expert consultancy services for various domains.",
    contact: "consultant@example.com",
    mobile: "+1 123-456-7890",
  },
  {
    id: 2,
    name: "Personal Assistant",
    bio: "Your virtual assistant for personal and professional tasks.",
    contact: "assistant@example.com",
    mobile: "+1 987-654-3210",
  },
  {
    id: 3,
    name: "Chat Application",
    bio: "Seamless communication at your fingertips.",
    contact: "chatapp@example.com",
    mobile: "+1 555-123-4567",
  },
];

const Consultancy = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  return (
    <>
      <Nav />
      <div className="consultancy-container">
        <h1 className="text-4xl font-bold mb-5 text-center">Consultancy Profiles</h1>
        <div className="profiles-grid mt-10 mb-10 ">
          {profiles.map((profile) =>
            profile.id === 1 ? (
              // Consultancy Profile Card - Navigate to Consultancy
              <Link
                to="/consultancy-profiles"
                key={profile.id}
                className="card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={`https://picsum.photos/300/200?random=${profile.id}`}
                  className="card-img-top"
                  alt={profile.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{profile.name}</h5>
                  <p className="card-text">{profile.bio}</p>
                </div>
              </Link>
            ) : profile.id === 2 ? (
              // Personal Assistant Profile Card - Navigate to Personal Assistant
              <Link
                to="/personal-assistant"
                key={profile.id}
                className="card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={`https://picsum.photos/300/200?random=${profile.id}`}
                  className="card-img-top"
                  alt={profile.name}
                />
                <div className="card-body ">
                  <h5 className="card-title">{profile.name}</h5>
                  <p className="card-text">{profile.bio}</p>
                </div>
              </Link>
            ) : (
              // Chat Application Profile Card - Navigate to Chat Application
              <Link
                to="/chat-application"
                key={profile.id}
                className="card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img
                  src={`https://picsum.photos/300/200?random=${profile.id}`}
                  className="card-img-top"
                  alt={profile.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{profile.name}</h5>
                  <p className="card-text">{profile.bio}</p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>

      {selectedProfile && (
        <div
          className="modal fade show"
          style={{ display: "block", background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProfile.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Name:</strong> {selectedProfile.name}
                </p>
                <p>
                  <strong>Bio:</strong> {selectedProfile.bio}
                </p>
                <p>
                  <strong>Email:</strong> {selectedProfile.contact}
                </p>
                <p>
                  <strong>Mobile:</strong> {selectedProfile.mobile}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
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
};

export default Consultancy;
