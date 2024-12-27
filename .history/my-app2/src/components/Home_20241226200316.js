/**
 * The `Home` component in React renders a support platform interface with sections for expressing
 * feelings, displaying emotions with images, call-to-action buttons for chatbot and assistance, and a
 * feedback link.
 * @returns The `Home` component is being returned. It includes a navigation bar, animated title, emoji
 * section with icons, feelings description section with images and text, call-to-action buttons for
 * Chatbot, Assistance, and Get Help, a feedback link, and a footer. The component also uses animations
 * for various elements and handles routing using `useNavigate` and `Link` from `react-router-dom`.
 */
// // import React from "react";
// // // import '../App.css'; // Optional: Use this for custom styles
// // import Nav from "./Nav.js";
// // // import Meditation from "./Meditation.js"; // Import the Meditation component
// // import Footer from "./footer.js"; 
// // const Home = () => {
// //   return (
// //     <>
// //       <Nav />
// //       <h1 style={{ textAlign: "center" }}>Home</h1>
      


// //       {/* <Meditation/ /> */}
// //       <Footer/>
// //     </>
// //   );
// // };

// // export default Home;




// // // Navbar:
// // // Home, About,Chatbot,
// // // Feedback 
// // // COnsultancy,Contact Us 
// // // Emoji, Speaker,Express feelings Techniques,Professional Help,Images On UI which Describes Feelings 
// // // Login,Register




// import React from "react";
// import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa"; // For icons
// import { motion } from "framer-motion"; // For animations
// import Nav from "./Nav.js";
// import Footer from "./footer.js";

// const Home = () => {
//   return (
//     <>
//       <Nav />
      
//       {/* Animated Title */}
//       <motion.h1 
//         style={{ textAlign: "center", margin: "20px 0" }}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to Our Support Platform! 💡
//       </motion.h1>

//       {/* Emoji Section with Icons */}
//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <h2>Express Your Feelings</h2>
//         <motion.div 
//           style={{ fontSize: "2rem", display: "flex", justifyContent: "center", gap: "20px" }}
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaSmile style={{ color: "gold" }} title="Happy" />
//           <FaRegSadCry style={{ color: "blue" }} title="Sad" />
//           <FaRobot style={{ color: "gray" }} title="Need Help" />
//           <FaHandshake style={{ color: "green" }} title="Professional Help" />
//         </motion.div>
//       </div>

//       {/* Section with Feelings Description */}
//       <motion.div 
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div style={{ textAlign: "center" }}>
//           <img 
//             src="https://sandbox:/mnt/data/A_grid_layout_of_three_images_that_represent_feeli.png" 
//             alt="Happy"
//             style={{ borderRadius: "10px", width: "100%" }}
//           />
//           <p>Feeling Happy? Share your joy with others! 😊</p>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <img 
//             src="https://sandbox:/mnt/data/A_grid_layout_of_three_images_that_represent_feeli.png" 
//             alt="Sad"
//             style={{ borderRadius: "10px", width: "100%" }}
//           />
//           <p>Feeling Down? Let us help you. 😢</p>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <img 
//             src="https://sandbox:/mnt/data/A_grid_layout_of_three_images_that_represent_feeli.png" 
//             alt="Need Support"
//             style={{ borderRadius: "10px", width: "100%" }}
//           />
//           <p>Need Support? Our professionals are here for you! 🤝</p>
//         </div>
//       </motion.div>

//       {/* Call-to-Action Buttons */}
//       <motion.div 
//         style={{ textAlign: "center", margin: "40px 0" }}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <button style={buttonStyle}>Chatbot</button>
//         <button style={buttonStyle}>Assistance</button>
//         <button style={buttonStyle}>Get Help</button>
//       </motion.div>

//       <Footer />
//     </>
//   );
// };

// // Button Styles
// const buttonStyle = {
//   backgroundColor: "#4CAF50",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   fontSize: "1rem",
//   margin: "10px",
//   cursor: "pointer",
//   borderRadius: "5px",
// };

// export default Home;



// import React from "react";
// import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa"; // For icons
// import { motion } from "framer-motion"; // For animations
// import Nav from "./Nav.js";
// import Footer from "./footer.js";

// const Home = () => {
//   return (
//     <>
//       <Nav />
      
//       {/* Animated Title */}
//       <motion.h1 
//         style={{ textAlign: "center", margin: "20px 0" }}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to Our Support Platform! 💡
//       </motion.h1>

//       {/* Emoji Section with Icons */}
//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <h2>Express Your Feelings</h2>
//         <motion.div 
//           style={{ fontSize: "2rem", display: "flex", justifyContent: "center", gap: "20px" }}
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaSmile style={{ color: "gold" }} title="Happy" />
//           <FaRegSadCry style={{ color: "blue" }} title="Sad" />
//           <FaRobot style={{ color: "gray" }} title="Need Help" />
//           <FaHandshake style={{ color: "green" }} title="Professional Help" />
//         </motion.div>
//       </div>

//       {/* Section with Feelings Description */}
//       <motion.div 
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div style={{ textAlign: "center" }}>
//           <img 
//             src="https://via.placeholder.com/400x300?text=Feeling+Happy" 
//             alt="Happy"
//             style={{ borderRadius: "10px", width: "100%" }}
//           />
//           <p>Feeling Happy? Share your joy with others! 😊</p>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <img 
//             src="https://via.placeholder.com/400x300?text=Feeling+Sad" 
//             alt="Sad"
//             style={{ borderRadius: "10px", width: "100%" }}
//           />
//           <p>Feeling Down? Let us help you. 😢</p>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <img 
//             src="https://via.placeholder.com/400x300?text=Need+Support" 
//             alt="Need Support"
//             style={{ borderRadius: "10px", width: "100%" }}
//           />
//           <p>Need Support? Our professionals are here for you! 🤝</p>
//         </div>
//       </motion.div>

//       {/* Call-to-Action Buttons */}
//       <motion.div 
//         style={{ textAlign: "center", margin: "40px 0" }}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <button style={buttonStyle}>Chatbot</button>
//         <button style={buttonStyle}>Assistance</button>
//         <button style={buttonStyle}>Get Help</button>
//       </motion.div>

//       <Footer />
//     </>
//   );
// };

// // Button Styles
// const buttonStyle = {
//   backgroundColor: "#4CAF50",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   fontSize: "1rem",
//   margin: "10px",
//   cursor: "pointer",
//   borderRadius: "5px",
// };

// export default Home;





// import React from "react";
// import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa"; // For icons
// import { motion } from "framer-motion"; // For animations
// import { Link } from "react-router-dom"; // To handle routing
// import Nav from "./Nav.js";
// import Footer from "./footer.js";
// import {useNavigate } from "react-router-dom"; // To handle routing

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <Nav />
//       {/* Animated Title */}
//       <motion.h1 
//         style={{ textAlign: "center", margin: "20px 0" }}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to Our Support Platform! 💡
//       </motion.h1>

//       {/* Emoji Section with Icons */}
//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <h2>Express Your Feelings</h2>
//         <motion.div 
//           style={{ fontSize: "2rem", display: "flex", justifyContent: "center", gap: "20px" }}
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaSmile style={{ color: "gold" }} title="Happy" />
//           <FaRegSadCry style={{ color: "blue" }} title="Sad" />
//           <FaRobot style={{ color: "gray" }} title="Need Help" />
//           <FaHandshake style={{ color: "green" }} title="Professional Help" />
//         </motion.div>
//       </div>

//       {/* Section with Feelings Description */}
//       <motion.div 
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div style={{ textAlign: "center" }}>
//           <img 
//             src="https://via.placeholder.com/400x300?text=Feeling+Happy" 
//             alt="Happy"
//             style={{ borderRadius: "10px", width: "100%" }}
//           />
//           <p>Feeling Happy? Share your joy with others! 😊</p>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <img 
//             src="https://via.placeholder.com/400x300?text=Feeling+Sad" 
//             alt="Sad"
//             style={{ borderRadius: "10px", width: "100%" }}
//           />
//           <p>Feeling Down? Let us help you. 😢</p>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <img 
//             src="https://via.placeholder.com/400x300?text=Need+Support" 
//             alt="Need Support"
//             style={{ borderRadius: "10px", width: "100%" }}
//           />
//           <p>Need Support? Our professionals are here for you! 🤝</p>
//         </div>
//       </motion.div>

//       {/* Call-to-Action Buttons */}
//       <motion.div 
//         style={{ textAlign: "center", margin: "40px 0" }}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <button style={buttonStyle} onClick={() => navigate("/chatbot")}>Chatbot</button>
//         <button style={buttonStyle} onClick={() => navigate("/consultancy")}>Assistance</button>
//         <button style={buttonStyle} onClick={() => navigate("/home")}>Get Help</button>
//       </motion.div>

//       {/* Feedback Section */}
//       <Link 
//         classNameName="feedback-link" 
//         to="/Feedback"
//         style={feedbackStyle}
//       >
//         Feedback
//       </Link>

//       <Footer />
//     </>
//   );
// };

// // Button Styles
// const buttonStyle = {
//   backgroundColor: "#4CAF50",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   fontSize: "1rem",
//   margin: "10px",
//   cursor: "pointer",
//   borderRadius: "5px",
// };

// // Feedback Link Styles
// const feedbackStyle = {
//   position: "fixed",
//   bottom: "20px",
//   right: "20px",
//   backgroundColor: "#FF5733",
//   color: "white",
//   padding: "10px 15px",
//   borderRadius: "30px",
//   textDecoration: "none",
//   fontSize: "1rem",
//   fontWeight: "bold",
//   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//   cursor: "pointer",
// };

// export default Home;



// import React from "react";
// import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import Nav from "./Nav.js";
// import Footer from "./Footer.js";
// import "./Home.css";

// const Home = () => {
//   const navigate = useNavigate();

//   // Helper function to generate AI image URLs
//   const generateImageURL = (emotion) => {
//     return `https://api.dalle.ai/v1/generate?prompt=${emotion}+emotion&size=512x512`;
//   };

//   return (
//     <>
//       <Nav />
//       {/* Animated Title */}
//       <motion.h1 
//         style={{ textAlign: "center", margin: "20px 0" }}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to Our Support Platform! 💡
//       </motion.h1>

//       {/* Emoji Section */}
//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <h2>Express Your Feelings</h2>
//         <motion.div 
//           style={{ fontSize: "2rem", display: "flex", justifyContent: "center", gap: "20px" }}
//           initial={{ scale: 0.8 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaSmile style={{ color: "gold" }} title="Happy" />
//           <FaRegSadCry style={{ color: "blue" }} title="Sad" />
//           <FaRobot style={{ color: "gray" }} title="Need Help" />
//           <FaHandshake style={{ color: "green" }} title="Professional Help" />
//         </motion.div>
//       </div>

//       {/* Feelings Section */}
//       <motion.div 
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//           padding: "20px",
//         }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div style={{ textAlign: "center" }}>
//           <motion.img 
//             // src={generateImageURL("happy")} 
//             src="../images/happy.png"
//             width="150"
//             height="150"
//             alt="Happy"
//             style={{ borderRadius: "10px", width: "100%" }}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//           />
//           <p>Feeling Happy? Share your joy with others! 😊</p>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <motion.img 
//             src="../images/sad.png"
//             width="150"
//             height="150"
//             alt="Sad"
//             style={{ borderRadius: "10px", width: "100%" }}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//           />
//           <p>Feeling Down? Let us help you. 😢</p>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <motion.img 
//             src="../images/angry.png"
//             width="150"
//             height="150"
//             alt="Need Support"
//             style={{ borderRadius: "10px", width: "100%" }}
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//           />
//           <p>Need Support? Our professionals are here for you! 🤝</p>
//         </div>
//       </motion.div>

//       {/* Call-to-Action Buttons */}
//       <motion.div 
//         style={{ textAlign: "center", margin: "40px 0" }}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <button style={buttonStyle} onClick={() => navigate("/chatbot")}>Chatbot</button>
//         <button style={buttonStyle} onClick={() => navigate("/consultancy")}>Assistance</button>
//         <button style={buttonStyle} onClick={() => navigate("/home")}>Get Help</button>
//       </motion.div>

//       {/* Feedback Section */}
//       <Link 
//         classNameName="feedback-link" 
//         to="/Feedback"
//         style={feedbackStyle}
//       >
//         Feedback
//       </Link>

//       <Footer />
//     </>
//   );
// };

// // Button Styles
// const buttonStyle = {
//   backgroundColor: "#4CAF50",
//   color: "white",
//   border: "none",
//   padding: "10px 20px",
//   fontSize: "1rem",
//   margin: "10px",
//   cursor: "pointer",
//   borderRadius: "5px",
// };

// // Feedback Link Styles
// const feedbackStyle = {
//   position: "fixed",
//   bottom: "20px",
//   right: "20px",
//   backgroundColor: "#FF5733",
//   color: "white",
//   padding: "10px 15px",
//   borderRadius: "30px",
//   textDecoration: "none",
//   fontSize: "1rem",
//   fontWeight: "bold",
//   boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//   cursor: "pointer",
// };

// export default Home;



// import React, { useState } from "react";
// import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Nav from "./Nav.js";
// // import Footer from "./Footer.js";
// import Character from "./Character.js";
// import "./Home.css";

// const Home = () => {
//   const navigate = useNavigate();
//   const [currentAnimation, setCurrentAnimation] = useState("Idle");

//   const buttonStyle = {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     fontSize: "1rem",
//     margin: "10px",
//     cursor: "pointer",
//     borderRadius: "5px",
//     transition: "background-color 0.3s",
//   };

//   return (
//     <>
//       <Nav />
//       {/* Animated Title */}
//       <motion.h1
//         style={{ textAlign: "center", margin: "5px" }}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to Our Support Platform! 💡
//       </motion.h1>

//       {/* Character Section */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           margin: "500px 0 5px 0", // Added extra space from the navbar
//         }}
//       >
//         <Canvas style={{ height: "1500px", width: "1000px",marginBottom:"10px" }}>
//           <OrbitControls enableZoom={false} />
//           <ambientLight intensity={0.5} />
//           <directionalLight position={[10, 10, 5]} intensity={1} />
//           <Character currentAnimationName={currentAnimation} />
//         </Canvas>
//       </div>

//       {/* Emoji Section */}
//       <div style={{ textAlign: "center", margin: "02px 0" }}>
//         <h2>Express Your Feelings</h2>
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
//             style={{ color: "gold", cursor: "pointer" }}
//             title="Happy"
//             onClick={() => setCurrentAnimation("Happy")}
//           />
//           <FaRegSadCry
//             style={{ color: "blue", cursor: "pointer" }}
//             title="Sad"
//             onClick={() => setCurrentAnimation("Sad")}
//           />
//           <FaRobot
//             style={{ color: "gray", cursor: "pointer" }}
//             title="Need Help"
//             onClick={() => setCurrentAnimation("Help")}
//           />
//           <FaHandshake
//             style={{ color: "green", cursor: "pointer" }}
//             title="Professional Help"
//             onClick={() => setCurrentAnimation("Handshake")}
//           />
//         </motion.div>
//       </div>

//       {/* Call-to-Action Buttons */}
//       <motion.div
//         style={{ textAlign: "center", margin: "40px 0" }}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <button style={buttonStyle} onClick={() => navigate("/chatbot")}>Chatbot</button>
//         <button style={buttonStyle} onClick={() => navigate("/consultancy")}>Assistance</button>
//         <button style={buttonStyle} onClick={() => navigate("/home")}>Get Help</button>
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

//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Home;







// import React, { useState } from "react";
// import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Nav from "./Nav.js";
// // import Footer from "./Footer.js";
// import Character from "./Character.js";
// import "./Home.css";

// const Home = () => {
//   const navigate = useNavigate();
//   const [currentAnimation, setCurrentAnimation] = useState("Idle");
//   const [chatbotName, setChatbotName] = useState(""); // State to store the chatbot name
//   const [nameSubmitted, setNameSubmitted] = useState(false); // State to check if the name is submitted

//   const buttonStyle = {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     fontSize: "1rem",
//     margin: "10px",
//     cursor: "pointer",
//     borderRadius: "5px",
//     transition: "background-color 0.3s",
//   };

//   const handleNameChange = (e) => {
//     setChatbotName(e.target.value); // Update the chatbot name state
//   };

//   const handleNameSubmit = () => {
//     if (chatbotName.trim() !== "") {
//       setNameSubmitted(true); // Set name as submitted
//     }
//   };

//   return (
//     <>
//       <Nav chatbotName={chatbotName} /> {/* Pass the chatbot name to Nav */}
      
//       {/* Animated Title */}
//       <motion.h1
//         style={{ textAlign: "center", margin: "5px" }}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to Our Support Platform! 💡
//       </motion.h1>

//       {/* Input for User's Desired Chatbot Name */}
//       {!nameSubmitted && (
//         <div style={{ textAlign: "center", margin: "20px 0" }}>
//           <input
//             type="text"
//             placeholder="Enter your chatbot's name"
//             value={chatbotName}
//             onChange={handleNameChange}
//             onBlur={handleNameSubmit} // Submit when the input loses focus
//             style={{
//               padding: "10px",
//               fontSize: "1rem",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               width: "250px",
//               backgroundColor: "#333", // Dark background color for the input
//               color: "#fff", // White text color
//             }}
//           />
//         </div>
//       )}

//       {/* Character Section */}
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
//         <h2>Express Your Feelings</h2>
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
//             style={{ color: "gold", cursor: "pointer" }}
//             title="Happy"
//             onClick={() => setCurrentAnimation("Happy")}
//           />
//           <FaRegSadCry
//             style={{ color: "blue", cursor: "pointer" }}
//             title="Sad"
//             onClick={() => setCurrentAnimation("Sad")}
//           />
//           <FaRobot
//             style={{ color: "gray", cursor: "pointer" }}
//             title="Need Help"
//             onClick={() => setCurrentAnimation("Help")}
//           />
//           <FaHandshake
//             style={{ color: "green", cursor: "pointer" }}
//             title="Professional Help"
//             onClick={() => setCurrentAnimation("Handshake")}
//           />
//         </motion.div>
//       </div>

//       {/* Call-to-Action Buttons */}
//       <motion.div
//         style={{ textAlign: "center", margin: "40px 0" }}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <button style={buttonStyle} onClick={() => navigate("/chatbot")}>Chatbot</button>
//         <button style={buttonStyle} onClick={() => navigate("/consultancy")}>Assistance</button>
//         <button style={buttonStyle} onClick={() => navigate("/home")}>Get Help</button>
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

//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Home;













// import React, { useState } from "react";
// import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import Nav from "./Nav.js";
// import Character from "./Character.js";
// import "./Home.css";

// const Home = () => {
//   const navigate = useNavigate();
//   const [currentAnimation, setCurrentAnimation] = useState("Idle");
//   const [chatbotName, setChatbotName] = useState(""); // State to store the chatbot name
//   const [nameSubmitted, setNameSubmitted] = useState(false); // State to check if the name is submitted

//   const buttonStyle = {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     padding: "10px 20px",
//     fontSize: "1rem",
//     margin: "10px",
//     cursor: "pointer",
//     borderRadius: "5px",
//     transition: "background-color 0.3s",
//   };

//   const handleNameChange = (e) => {
//     setChatbotName(e.target.value); // Update the chatbot name state
//   };

//   const handleNameSubmit = () => {
//     if (chatbotName.trim() !== "") {
//       setNameSubmitted(true); // Set name as submitted
//     }
//   };

//   return (
//     <>
//       <Nav chatbotName={chatbotName || "Chatbot"} /> {/* Pass the chatbot name to Nav */}

//       {/* Animated Title */}
//       <motion.h1
//         style={{ textAlign: "center", margin: "5px" }}
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Welcome to Our Support Platform! 💡
//       </motion.h1>

//       {/* Input for User's Desired Chatbot Name */}
//       {!nameSubmitted && (
//         <div style={{ textAlign: "center", margin: "20px 0" }}>
//           <input
//             type="text"
//             placeholder="Enter your chatbot's name"
//             value={chatbotName}
//             onChange={handleNameChange}
//             onBlur={handleNameSubmit} // Submit when the input loses focus
//             style={{
//               padding: "10px",
//               fontSize: "1rem",
//               borderRadius: "5px",
//               border: "1px solid #ccc",
//               width: "250px",
//               backgroundColor: "#333", // Dark background color for the input
//               color: "#fff", // White text color
//             }}
//           />
//         </div>
//       )}

//       {/* Character Section */}
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
//         <h2>Express Your Feelings</h2>
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
//             style={{ color: "gold", cursor: "pointer" }}
//             title="Happy"
//             onClick={() => setCurrentAnimation("Happy")}
//           />
//           <FaRegSadCry
//             style={{ color: "blue", cursor: "pointer" }}
//             title="Sad"
//             onClick={() => setCurrentAnimation("Sad")}
//           />
//           <FaRobot
//             style={{ color: "gray", cursor: "pointer" }}
//             title="Need Help"
//             onClick={() => setCurrentAnimation("Help")}
//           />
//           <FaHandshake
//             style={{ color: "green", cursor: "pointer" }}
//             title="Professional Help"
//             onClick={() => setCurrentAnimation("Handshake")}
//           />
//         </motion.div>
//       </div>

//       {/* Call-to-Action Buttons */}
//       <motion.div
//         style={{ textAlign: "center", margin: "40px 0" }}
//         initial={{ y: 50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <button style={buttonStyle} onClick={() => navigate("/chatbot")}>Chatbot</button>
//         <button style={buttonStyle} onClick={() => navigate("/consultancy")}>Assistance</button>
//         <button style={buttonStyle} onClick={() => navigate("/home")}>Get Help</button>
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
//     </>
//   );
// };

// export default Home;





import React, { useState, useEffect } from "react";
import { FaSmile, FaRegSadCry, FaRobot, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Nav from "./Nav.js";
// import Character from "./Character.js";
// import "../css/Home.css";



const Home = () => {
  const navigate = useNavigate();
  const [currentAnimation, setCurrentAnimation] = useState("Idle");
  const [chatbotName, setChatbotName] = useState(""); // State to store the chatbot name
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  // Check if the chatbot name exists in localStorage on page load
  useEffect(() => {
    const storedName = localStorage.getItem("chatbotName");
    if (storedName) {
      setChatbotName(storedName); // Set the stored name if it exists
    } else {
      setShowModal(true); // Show the modal if there's no stored name
    }
  }, []);

  const handleNameChange = (e) => {
    setChatbotName(e.target.value); // Update chatbot name when user types
  };

  const handleNameSubmit = () => {
    if (chatbotName.trim() !== "") {
      localStorage.setItem("chatbotName", chatbotName); // Store the name in localStorage
      setShowModal(false); // Close the modal
    }
  };

  const handleClick = () => {
    // Navigate to the Chatbot route
    navigate("/Chatbot");
  };

  const handleLogout = () => {
    localStorage.removeItem("chatbotName"); // Remove the name from localStorage on logout
    setChatbotName(""); // Reset the chatbot name in state
    setShowModal(true); // Show the modal again for the next login
  };

  return (
    <>
      {/* Pass the chatbotName to the Nav component */}

      <Nav chatbotName={chatbotName || "Chatbot"} style={{ position: "fixed" }} />



      {/* Modal for Name Input */}
      {/* {showModal && (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000", // To ensure it stays on top
          }}
        >
          <div
            style={{
              backgroundColor: "#333",
              padding: "20px",
              borderRadius: "10px",
              color: "white",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 style={{ marginTop:"180px",marginBottom: "20px" }}>Enter Chatbot's Name</h2>
            <input
              type="text"
              value={chatbotName}
              onChange={handleNameChange}
              placeholder="Enter name"
              style={{
                padding: "10px",
                fontSize: "1rem",
                borderRadius: "5px",
                width: "250px",
                marginBottom: "10px",
                backgroundColor: "#555", // Dark input background
                color: "#fff", // White text
                border: "1px solid #ccc",
              }}
            />
            <div>
              <button
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 20px",
                  fontSize: "1rem",
                  cursor: "pointer",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
                onClick={handleNameSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* Animated Title */}
      {/* <motion.h1
        style={{ textAlign: "center", margin: "5px" ,marginTop: "400px"}}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Our Support Platform! 💡
      </motion.h1> */}

      {/* Character Section
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "500px 0 5px 0", // Added extra space from the navbar
        }}
      >
        <Canvas style={{ height: "1500px", width: "1000px", marginBottom: "10px" }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Character currentAnimationName={currentAnimation} />
        </Canvas>
      </div> */}

      {/* Emoji Section */}
      {/* <div style={{ textAlign: "center", margin: "02px 0" }}>
        <h2 >Express Your Feelings</h2>
        <motion.div
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "10px", // Reduced gap between emojis
          }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaSmile
            style={{ color: "gold", cursor: "pointer" ,fontSize: "90px"}}
            title="Happy"
            // onClick={() => setCurrentAnimation("Happy")}
            onClick={handleClick}
          />
          <FaRegSadCry
            style={{ color: "blue", cursor: "pointer",fontSize: "90px" }}
            title="Sad"
            // onClick={() => setCurrentAnimation("Sad")}
            onClick={handleClick}
          />
          <FaRobot
            style={{ color: "gray", cursor: "pointer",fontSize: "90px" }}
            title="Need Help"
            // onClick={() => setCurrentAnimation("Help")}
            onClick={handleClick}
          />
          <FaHandshake
            style={{ color: "green", cursor: "pointer",fontSize: "90px" }}
            title="Professional Help"
            // onClick={() => setCurrentAnimation("Handshake")}
            onClick={handleClick}
          />
        </motion.div>
      </div>

      Call-to-Action Buttons
      <motion.div
        style={{ textAlign: "center", margin: "40px 0" }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "1rem",
            margin: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate("/chatbot")}
        >
          Chatbot
        </button>
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "1rem",
            margin: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate("/consultancy")}
        >
          Assistance
        </button>
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "1rem",
            margin: "10px",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate("/home")}
        >
          Get Help
        </button>
      </motion.div> */}

      {/* Feedback Section */}
      {/* <Link
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
      </Link> */}

      {/* Logout Button */}
      {/* <button
        onClick={handleLogout}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "#f44336",
          color: "white",
          padding: "10px 20px",
          fontSize: "1rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button> */}
    </>
  );
};


export default Home;
