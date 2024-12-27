
import React, { useState, useEffect } from "react";
import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nav from "./Nav.js";
// import Character from "./Character.js";
import "../css/Home.module.css"
// import "./style.css";



import "./Home.css"; // Updated the CSS file name

const Home = () => {
  const cards = [
    { id: 1, title: "Card 1", link: "page1.html" },
    { id: 2, title: "Card 2", link: "page2.html" },
    { id: 3, title: "Card 3", link: "page3.html" },
    { id: 4, title: "Card 4", link: "page4.html" },
  ];

  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": cards.length }}>
        {cards.map((card, index) => (
          <a
            key={card.id}
            href={card.link}
            className="item"
            style={{ "--position": index + 1 }}
          >
            <div className="card">{card.title}</div>
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
  );
};

export default Home;
