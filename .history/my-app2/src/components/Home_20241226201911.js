
import React, { useState, useEffect } from "react";
import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nav from "./Nav.js";
// import Character from "./Character.js";
// import "../css/Home.css"
import "./style.css";


const Home = () => {
  const cards = [
    { href: "page1.html", text: "Card 1" },
    { href: "page2.html", text: "Card 2" },
    { href: "page3.html", text: "Card 3" },
    { href: "page4.html", text: "Card 4" },
  ];

  return (
    <>
      <Nav />
      <div className="banner">
      <div className="slider" style={{ "--quantity": cards.length }}>
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.href}
            className="item"
            style={{ "--position": index + 1 }}
          >
            <div className="card">{card.text}</div>
          </a>
        ))}
      </div>
      <div className="content">
        <h1 data-content="CSS ONLY">SAHAYA</h1>
        <div className="author">
          <h2>Sahaya</h2>
        </div>
      </div>
    </div>

      
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
