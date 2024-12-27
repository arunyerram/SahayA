import React, { useState, useEffect } from "react";
import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nav from "./Nav.js";
import Character from "./Character.js";
import "../css/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [currentAnimation, setCurrentAnimation] = useState("Idle");
  const [chatbotName, setChatbotName] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("chatbotName");
    if (storedName) {
      setChatbotName(storedName);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleNameChange = (e) => {
    setChatbotName(e.target.value);
  };

  const handleNameSubmit = () => {
    if (chatbotName.trim() !== "") {
      localStorage.setItem("chatbotName", chatbotName);
      setShowModal(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("chatbotName");
    setChatbotName("");
    setShowModal(true);
  };

  return (
    <>
      <Nav chatbotName={chatbotName || "Chatbot"} />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Enter Chatbot's Name</h2>
            <input
              type="text"
              value={chatbotName}
              onChange={handleNameChange}
              placeholder="Enter name"
            />
            <button onClick={handleNameSubmit}>Submit</button>
          </div>
        </div>
      )}

      <motion.h1
        className="welcome-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Our Support Platform! 💡
      </motion.h1>

      <div className="character-with-emojis">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Character currentAnimationName={currentAnimation} />
        </Canvas>

        <div className="emoji-container">
          <motion.div
            className="emoji smiley"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <FaSmile />
          </motion.div>
          <motion.div
            className="emoji sad"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <FaRegSadCry />
          </motion.div>
          <motion.div
            className="emoji robot"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <FaRobot />
          </motion.div>
          <motion.div
            className="emoji handshake"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            <FaHandshake />
          </motion.div>
        </div>
      </div>

      <motion.div className="button-group">
        <button onClick={() => navigate("/chatbot")} className="action-button">
          Chatbot
        </button>
        <button onClick={() => navigate("/consultancy")} className="action-button">
          Assistance
        </button>
        <button onClick={() => navigate("/home")} className="action-button">
          Get Help
        </button>
      </motion.div>

      <Link className="feedback-link" to="/Feedback">
        Feedback
      </Link>

      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </>
  );
};

export default Home;
