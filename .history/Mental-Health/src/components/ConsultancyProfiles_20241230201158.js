import React from 'react'
import { useNavigate } from "react-router-dom";
const ConsultancyProfiles = () => {
  const navigate = useNavigate();
  return (
    <>



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
    </>
  )
}

export default ConsultancyProfiles;
