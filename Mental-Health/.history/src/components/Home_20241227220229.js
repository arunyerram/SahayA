










import React, { useState } from "react";
import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import Nav from "./Nav.js";
// import { useNavigate } from "react-router-dom";
import Character from "./Character.js";
import "../css/Home.css";
import Footer from "./Footer.js";
const Home = () => {
  const navigate = useNavigate();
  const [currentAnimation, setCurrentAnimation] = useState("Idle");
  const [chatbotName, setChatbotName] = useState(""); // State to store the chatbot name
  const [nameSubmitted, setNameSubmitted] = useState(false); // State to check if the name is submitted

  const handleNameChange = (e) => {
    setChatbotName(e.target.value); // Update the chatbot name state
  };

  // const navigate = useNavigate();

  const handleNameSubmit = () => {
    if (chatbotName.trim() !== "") {
      setNameSubmitted(true); // Set name as submitted
    }
  };

  return (
    <>

      <Nav chatbotName={chatbotName || "Chatbot"} /> {/* Pass chatbot name to Nav */}

      {/* Hero Section */}
      <motion.h1
        style={{ textAlign: "center", marginTop: "20px 0", paddingTop: "20px", color:"black" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Our Support Platform! 💡
      </motion.h1>

      {/* Chatbot Name Input */}
      {!nameSubmitted && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <input
            type="text"
            placeholder="Enter your chatbot's name"
            value={chatbotName}
            onChange={handleNameChange}
            onBlur={handleNameSubmit}
            style={{
              padding: "10px",
              fontSize: "1rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "250px",
              backgroundColor: "#333",
              color: "#fff",
            }}
          />
        </div>
      )}

    

    {/* Cards Section */}
<div className="card-container">
  <div
    className="banner"
    style={{
      marginTop: "720px",
      paddingTop: "20px",
    }}
  >
    <div className="slider" style={{ "--quantity": 4 }}>
      <a href="/chatbot" className="item" style={{ "--position": 1 }}>
        <div className="card">
          <img src="/images/Chatbot.jpg" alt="Chatbot" className="card-image" height= "30px" width="6px" />
          <div className="card-content">
            <h3>Chatbot</h3>
            <p>Interact with our advanced chatbot for your queries.</p>
          </div>
        </div>
      </a>
      <a href="/personal-assistant" className="item" style={{ "--position": 2 }}>
        <div className="card">
          <img src="images/personlassistant.jpg" alt="Personal Assistant" className="card-image" height="30px" width="6px" />
          <div className="card-content">
            <h3>Personal Assistance</h3>
            <p>Get personalized assistance for your needs.</p>
          </div>
        </div>
      </a>
      <a href="/consultancy" className="item" style={{ "--position": 3 }}>
        <div className="card">
          <img src="images/consultancy.jpg" alt="Personal Guidance" className="card-image"  height="30px" width="6px"/>
          <div className="card-content">
            <h3>Personal Guidance</h3>
            <p>Receive expert guidance for your personal growth.</p>
          </div>
        </div>
      </a>
      <a href="/tasksDone" className="item" style={{ "--position": 4 }}>
        <div className="card">
          <img src="images/Todo.webp" alt="Todo Tracker" className="card-image" height= "30px" width="6px" />
          <div className="card-content">
            <h3>Todo-Tracker</h3>
            <p>Organize your tasks and stay on top of your to-do list.</p>
          </div>
        </div>
      </a>
    </div>

    {/* SAHAYA Header */}
    <div className="content">
      <h1
        data-content="SAHAYA"
        style={{
          color: "White",
          marginTop: "20px",
          display: "flex",
        }}
      >
        {['S', 'A', 'H', 'A', 'Y', 'A'].map((letter, index) => (
          <span
            key={index}
            style={{
              opacity: 0, // Initial opacity for fade-in effect
              animation: `shine 2s ${index * 0.3}s forwards, colorChange 1.5s ${index * 0.3}s infinite`, // Animation for shine and color change
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
      <div className="author">
        {/* <h2>Sahaya</h2> */}
      </div>
    </div>
  </div>
</div>

      {/* Character Section */}
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px 0 5px 0",
        }}
      >
        <Canvas style={{ height: "600px", width: "500px",marginTop:"40px", marginBottom: "4px" }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Character currentAnimationName={currentAnimation} />
        </Canvas>
      </div> */}

      {/* Emoji Section */}

      <div style={{ textAlign: "center", marginBottom: "80px", margin: "20px" }}>
  <h2 style={{ marginBottom: "40px", color: "Black" ,fontsize:"300px"}}>Express Your Feelings</h2>
  <motion.div
    style={{
      fontSize: "3rem", // Increased font size for larger icons
      display: "flex",
      justifyContent: "center",
      gap: "20px", // Adjust gap between icons if necessary
    }}
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
  >
 <img
          src="/images/notes.jpg"
          alt="Notepad"
          title="Notepad"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={() => navigate("/notes")}
        />
        <img
          src="/images/scribble.png"
          alt="Scribble Pad"
          title="Scribble Pad"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
          onClick={() => navigate("/scribblepad")}
        />
    <FaRobot
      style={{ color: "gray", cursor: "pointer" }}
      title="Need Help"
      onClick={() => setCurrentAnimation("Help")}
    />
    <FaHandshake
      style={{ color: "green", cursor: "pointer" }}
      title="Professional Help"
      onClick={() => setCurrentAnimation("Handshake")}
    />
  </motion.div>
</div>

      {/* Call-to-Action Buttons */}
      {/* <motion.div
        style={{
          textAlign: "center",
          margin: "40px 0",
          display: "flex",
          justifyContent: "space-between", // Adjust spacing between buttons
          gap: "10px", // Or use gap for uniform spacing
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      > */}
        {/* <button onClick={() => navigate("/chatbot")}>Chatbot</button>
        <button onClick={() => navigate("/consultancy")}>Assistance</button>
        <button onClick={() => navigate("/home")}>Get Help</button> */}
      {/* </motion.div> */}


      {/* Feedback Link */}
      <Link
        className="feedback-link"
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

      <Footer />
    </>
  );
};

export default Home;















// import React, { useState, useEffect } from "react";
// import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Nav from "./Nav.js";
// // import Character from "./Character.js";
// import "../css/Home.css";



// const Home = () => {
//   const navigate = useNavigate();
//   const [currentAnimation, setCurrentAnimation] = useState("Idle");
//   const [chatbotName, setChatbotName] = useState(""); // State to store the chatbot name
//   const [showModal, setShowModal] = useState(false); // State to control modal visibility

//   // Check if the chatbot name exists in localStorage on page load
//   useEffect(() => {
//     const storedName = localStorage.getItem("chatbotName");
//     if (storedName) {
//       setChatbotName(storedName); // Set the stored name if it exists
//     } else {
//       setShowModal(true); // Show the modal if there's no stored name
//     }
//   }, []);

//   const handleNameChange = (e) => {
//     setChatbotName(e.target.value); // Update chatbot name when user types
//   };

//   const handleNameSubmit = () => {
//     if (chatbotName.trim() !== "") {
//       localStorage.setItem("chatbotName", chatbotName); // Store the name in localStorage
//       setShowModal(false); // Close the modal
//     }
//   };

//   const handleClick = () => {
//     // Navigate to the Chatbot route
//     navigate("/Chatbot");
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("chatbotName"); // Remove the name from localStorage on logout
//     setChatbotName(""); // Reset the chatbot name in state
//     setShowModal(true); // Show the modal again for the next login
//   };

//   return (
//     <>
//       {/* Pass the chatbotName to the Nav component */}

//       <Nav chatbotName={chatbotName || "Chatbot"} style={{position:"fixed"}}/> {/* Display the chatbot name in Navbar */}

//       {/* <div className="banner">
//         <div className="slider" style="--quantity: 4">
//             <a href="page1.html" className="item" style="--position: 1">
//                 <div className="card">Card 1</div>
//             </a>
//             <a href="page2.html" className="item" style="--position: 2">
//                 <div className="card">Card 2</div>
//             </a>
//             <a href="page3.html" className="item" style="--position: 3">
//                 <div className="card">Card 3</div>
//             </a>
//             <a href="page4.html" className="item" style="--position: 4">
//                 <div className="card">Card 4</div>
//             </a>
//         </div>
//         <div className="content">
//             <h1 data-content="CSS ONLY">SAHAYA</h1>
//             <div className="author">
//                 <h2>Sahaya</h2>
//             </div>
//         </div>
//     </div> */}

//       {/* Modal for Name Input */}
//       {showModal && (
//         <div
//           style={{
//             position: "fixed",
//             top: "0",
//             left: "0",
//             width: "100%",
//             height: "100px",
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: "1000", // To ensure it stays on top
//           }}
//         >
//           <div
//             style={{
//               backgroundColor: "#333",
//               padding: "20px",
//               borderRadius: "10px",
//               color: "white",
//               textAlign: "center",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <h2 style={{ marginTop:"180px",marginBottom: "20px" }}>Enter Chatbot's Name</h2>
//             <input
//               type="text"
//               value={chatbotName}
//               onChange={handleNameChange}
//               placeholder="Enter name"
//               style={{
//                 padding: "10px",
//                 fontSize: "1rem",
//                 borderRadius: "5px",
//                 width: "250px",
//                 marginBottom: "10px",
//                 backgroundColor: "#555", // Dark input background
//                 color: "#fff", // White text
//                 border: "1px solid #ccc",
//               }}
//             />
//             <div>
//               <button
//                 style={{
//                   backgroundColor: "#4CAF50",
//                   color: "white",
//                   padding: "10px 20px",
//                   fontSize: "1rem",
//                   cursor: "pointer",
//                   borderRadius: "5px",
//                   marginTop: "10px",
//                 }}
//                 onClick={handleNameSubmit}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animated Title */}
//       <motion.h1
//         style={{ textAlign: "center", margin: "5px" ,marginTop: "400px"}}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to Our Support Platform! 💡
//       </motion.h1>

//       Character Section
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "500px 0 5px 0", // Added extra space from the navbar
//         }}
//       >
//         <Canvas style={{ height: "1500px", width: "1000px", marginBottom: "10px" }}>
//           <OrbitControls enableZoom={false} />
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[10, 10, 5]} intensity={1} />
//           <Character currentAnimationName={currentAnimation} />
//         </Canvas>
//       </div>

//       {/* Emoji Section */}
//       <div style={{ textAlign: "center", margin: "02px 0" }}>
//         <h2 >Express Your Feelings</h2>
//         <motion.div
//           style={{
//             fontSize: "2rem",
//             display: "flex",
//             justifyContent: "center",
//             gap: "10px", // Reduced gap between emojis
//           }}
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaSmile
//             style={{ color: "gold", cursor: "pointer" ,fontSize: "90px"}}
//             title="Happy"
//             // onClick={() => setCurrentAnimation("Happy")}
//             onClick={handleClick}
//           />
//           <FaRegSadCry
//             style={{ color: "blue", cursor: "pointer",fontSize: "90px" }}
//             title="Sad"
//             // onClick={() => setCurrentAnimation("Sad")}
//             onClick={handleClick}
//           />
//           <FaRobot
//             style={{ color: "gray", cursor: "pointer",fontSize: "90px" }}
//             title="Need Help"
//             // onClick={() => setCurrentAnimation("Help")}
//             onClick={handleClick}
//           />
//           <FaHandshake
//             style={{ color: "green", cursor: "pointer",fontSize: "90px" }}
//             title="Professional Help"
//             // onClick={() => setCurrentAnimation("Handshake")}
//             onClick={handleClick}
//           />
//         </motion.div>
//       </div>

//       Call-to-Action Buttons
//       <motion.div
//         style={{ textAlign: "center", margin: "40px 0" }}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <button
//           style={{
//             backgroundColor: "#4CAF50",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             fontSize: "1rem",
//             margin: "10px",
//             cursor: "pointer",
//             borderRadius: "5px",
//             transition: "background-color 0.3s",
//           }}
//           onClick={() => navigate("/chatbot")}
//         >
//           Chatbot
//         </button>
//         <button
//           style={{
//             backgroundColor: "#4CAF50",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             fontSize: "1rem",
//             margin: "10px",
//             cursor: "pointer",
//             borderRadius: "5px",
//             transition: "background-color 0.3s",
//           }}
//           onClick={() => navigate("/consultancy")}
//         >
//           Assistance
//         </button>
//         <button
//           style={{
//             backgroundColor: "#4CAF50",
//             color: "white",
//             border: "none",
//             padding: "10px 20px",
//             fontSize: "1rem",
//             margin: "10px",
//             cursor: "pointer",
//             borderRadius: "5px",
//             transition: "background-color 0.3s",
//           }}
//           onClick={() => navigate("/home")}
//         >
//           Get Help
//         </button>
//       </motion.div>

//       {/* Feedback Section */}
//       <Link
//         classNameName="feedback-link"
//         to="/Feedback"
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           backgroundColor: "#FF5733",
//           color: "white",
//           padding: "10px 15px",
//           borderRadius: "30px",
//           textDecoration: "none",
//           fontSize: "1rem",
//           fontWeight: "bold",
//           boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//           cursor: "pointer",
//         }}
//       >
//         Feedback
//       </Link>

//       {/* Logout Button */}
//       {/* <button
//         onClick={handleLogout}
//         style={{
//           position: "absolute",
//           top: "20px",
//           right: "20px",
//           backgroundColor: "#f44336",
//           color: "white",
//           padding: "10px 20px",
//           fontSize: "1rem",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         Logout
//       </button> */}
//     </>
//   );
// };

// export default Home;
