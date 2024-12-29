import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { AnimatedCharacter } from "./AnimatedCharacter";
import Nav from "./Nav.js";

const Meditation = () => {
  const [emotion, setEmotion] = useState("neutral");

  const handleEmotion = (emotionType) => {
    setEmotion(emotionType);
  };

  return (
    <>
      <Nav/>
      <div className="meditation-container">
        <h1 style={{ textAlign: "center"}}>Meditation & Expression</h1>
        <div className="controls">
          <button
            onClick={() => handleEmotion("happy")}
            className="emotion-btn"
          >
            😊 Happy
          </button>
          <button
            onClick={() => handleEmotion("sad")}
            className="emotion-btn"
          >
            😢 Sad
          </button>
          <button
            onClick={() => handleEmotion("relaxed")}
            className="emotion-btn"
          >
            🧘‍♂️ Relaxed
          </button>
        </div>
        <div className="meditation-ui">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 2, 5]} />
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} />
            <AnimatedCharacter emotion={emotion} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Meditation;
