import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConsultancyProfiles = () => {
  const navigate = useNavigate();

  const professionals = [
    {
      id: 1,
      name: "Dr. Alice Walker",
      specialization: "Clinical Psychologist",
      experience: "12 years",
      approach: "Cognitive Behavioral Therapy (CBT)",
      age: 45,
      image: `https://picsum.photos/300/200?random=1`,
    },
    {
      id: 2,
      name: "Dr. Ben Carter",
      specialization: "Psychiatrist",
      experience: "15 years",
      approach: "Medication and Counseling",
      age: 50,
      image: `https://picsum.photos/300/200?random=2`,
    },
    {
      id: 3,
      name: "Dr. Clara Evans",
      specialization: "Child Psychologist",
      experience: "8 years",
      approach: "Play Therapy and Family Counseling",
      age: 38,
      image: `https://picsum.photos/300/200?random=3`,
    },
    {
      id: 4,
      name: "Dr. David Lee",
      specialization: "Therapist",
      experience: "10 years",
      approach: "Mindfulness and Stress Management",
      age: 42,
      image: `https://picsum.photos/300/200?random=4`,
    },
    {
      id: 5,
      name: "Dr. Emma Watson",
      specialization: "Behavioral Specialist",
      experience: "6 years",
      approach: "Behavioral Therapy and Support Groups",
      age: 35,
      image: `https://picsum.photos/300/200?random=5`,
    },
  ];

  const [selectedProfessional, setSelectedProfessional] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="text-4xl font-bold mb-5 text-center">Mental Health Experts</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {professionals.map((professional) => (
          <div
            key={professional.id}
            onClick={() => setSelectedProfessional(professional)}
            style={{
              width: "300px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#f1f1f1",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0f7fa")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#f1f1f1")}
          >
            <img
              src={professional.image}
              alt={professional.name}
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{professional.name}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem" }}>{professional.specialization}</p>
          </div>
        ))}
      </div>

      {selectedProfessional && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            width: "400px",
            padding: "20px",
          }}
        >
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
            {selectedProfessional.name}
          </h2>
          <p><strong>Specialization:</strong> {selectedProfessional.specialization}</p>
          <p><strong>Experience:</strong> {selectedProfessional.experience}</p>
          <p><strong>Approach:</strong> {selectedProfessional.approach}</p>
          <p><strong>Age:</strong> {selectedProfessional.age}</p>

          <button
            onClick={() => navigate("/book-appointment")}
            style={{
              marginTop: "15px",
              backgroundColor: "#FF5733",
              color: "white",
              padding: "10px 15px",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              display: "block",
              width: "100%",
            }}
          >
            Book Appointment
          </button>
          <button
            onClick={() => setSelectedProfessional(null)}
            style={{
              marginTop: "10px",
              backgroundColor: "#ddd",
              color: "#333",
              padding: "10px 15px",
              borderRadius: "30px",
              fontSize: "0.9rem",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
              display: "block",
              width: "100%",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Modal Overlay */}
      {selectedProfessional && (
        <div
          onClick={() => setSelectedProfessional(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        />
      )}

      <button
        onClick={() => navigate(-1)}
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
    </div>
  );
};

export default ConsultancyProfiles;
