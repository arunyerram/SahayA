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








{/* <button
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
</button> */}