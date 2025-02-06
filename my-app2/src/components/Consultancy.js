import React, { useState } from "react";
import Nav from "./Nav.js";
import "./Consultancy.css";
import Footer from "./Footer.js"; 
const psychologists = [
  {
    id: 1,
    name: "Dr. John Doe",
    bio: "Experienced psychologist specializing in cognitive therapy.",
    contact: "john.doe@example.com",
    mobile: "+1 123-456-7890",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    bio: "Child and adolescent psychology expert.",
    contact: "jane.smith@example.com",
    mobile: "+1 987-654-3210",
  },
  {
    id: 3,
    name: "Dr. Emily White",
    bio: "Focused on mindfulness and stress management.",
    contact: "emily.white@example.com",
    mobile: "+1 555-123-4567",
  },
  {
    id: 4,
    name: "Dr. Robert Brown",
    bio: "Expert in behavioral therapy and emotional well-being.",
    contact: "robert.brown@example.com",
    mobile: "+1 111-222-3333",
  },
  {
    id: 5,
    name: "Dr. Robert",
    bio: "Expert in behavioral therapy and emotional well-being.",
    contact: "robert.brown@example.com",
    mobile: "+1 111-222-3333",
  },
  {id: 6,
    name: "Dr. John Dare",
    bio: "Experienced psychologist specializing in cognitive therapy.",
    contact: "john.doe@example.com",
    mobile: "+1 123-456-7890",
  },
];

const Consultancy = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

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
        <h1>Consultancy Profiles</h1>
        <div className="profiles-grid mt-8 mb-8">
          {psychologists.map((psychologist) => (
            <div key={psychologist.id} className="card">
              <img
                src={`https://picsum.photos/300/200?random=${psychologist.id}`}
                className="card-img-top"
                alt={psychologist.name}
              />
              <div className="card-body">
                <h5 className="card-title">{psychologist.name}</h5>
                <p className="card-text">{psychologist.bio}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleViewProfile(psychologist)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
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
                <p><strong>Name:</strong> {selectedProfile.name}</p>
                <p><strong>Bio:</strong> {selectedProfile.bio}</p>
                <p><strong>Email:</strong> {selectedProfile.contact}</p>
                <p><strong>Mobile:</strong> {selectedProfile.mobile}</p>
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

      <Footer/>
    </>
  );
};

export default Consultancy;
