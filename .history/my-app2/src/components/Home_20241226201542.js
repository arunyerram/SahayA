
import React, { useState, useEffect } from "react";
import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nav from "./Nav.js";
// import Character from "./Character.js";
import "../css/Home.css";


const Home = () => {
  return (
    <>

      
      <Link
        classNameName="feedback-link"
        to="/Feedback"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
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
        Feedback
      </Link>
    </>
  )
}

export default Home
