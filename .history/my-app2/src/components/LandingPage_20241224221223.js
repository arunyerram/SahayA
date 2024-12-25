// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; 
// import "../css/LandingPage.css";

// const LandingPage = () => {
//   const navigate = useNavigate(); // Initialize the navigate hook
//   const [emojiIndex, setEmojiIndex] = useState(0);
  
//   // Array of emojis
//   const emojis = ['😊', '😃', '😍', '🥰', '😎', '🤔', '😜', '😇'];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length); // Update emoji index every 2 seconds
//     }, 2000); // 2 seconds interval

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   const handleLoginClick = () => {
//     navigate("/login"); // Navigate to login route when button is clicked
//   };

//   return (
//     <>
//       <div className="main">
//         <div className="backgroundImage"></div>
//         <div className="content">
//           <div className="text">
//             HELLO!<br />HOW ARE YOU?

//             <h1 style={{ marginTop: "20px" ,fontsize: "100px"}}>SAHAYA</h1>
//             <p>
//               THE AI THAT UNDERSTANDS YOU!
//             </p>
//             <button onClick={() => navigate("/register")} style={{ marginTop: "30px" }}>Will you share?</button>
//           </div>
//         </div>

//         <div className="navbar">
//           <div className="container">
//             <div className="logo">
//               <img src="images/SahayA.jpg" alt="Logo" className="logo-image" style={{ height: '100px', width: '200px' }}  />
//             </div>
//             {/* <div className="menu">
//               <ul>
//                 <li>LOGIN</li>
//               </ul>
//             </div> */}
//           </div>
//         </div>


//         {/* Login Button at Top Right */}
//         <button className="login-button" onClick={handleLoginClick}>Login</button>

//         {/* Emojis at Right Bottom */}
//         <div className="emoji-container">
//         <div className="emoji" style={{ fontSize: "150px" }}>{emojis[emojiIndex]}</div>
//         </div>
//       </div>
//     </>
//   );
// };


// export default LandingPage;



import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../css/LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize the navigate hook
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [emojiSize, setEmojiSize] = useState(150); // State for emoji size
  
  // Array of emojis
  const emojis = ['😊', '😃', '😍', '🥰', '😎', '🤔', '😜', '😇'];

  // Update emoji index and size
  useEffect(() => {
    const emojiInterval = setInterval(() => {
      setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length); // Update emoji index every 2 seconds
    }, 2000);

    const sizeInterval = setInterval(() => {
      setEmojiSize((prevSize) => prevSize + 10); // Increase emoji size by 10px every 2 seconds
    }, 2000);

    return () => {
      clearInterval(emojiInterval);
      clearInterval(sizeInterval);
    };
  }, []);

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login route when button is clicked
  };

  return (
    <>
      <div className="main">
        <div className="backgroundImage"></div>
        <div className="content">
          <div className="text">
            HELLO!<br />HOW ARE YOU?
            <h1 style={{ marginTop: "20px", fontSize: "100px" }}>SAHAYA</h1>
            <p>THE AI THAT UNDERSTANDS YOU!</p>
            <button onClick={() => navigate("/register")} style={{ marginTop: "30px" }}>Will you share?</button>
          </div>
        </div>

        <div className="navbar">
          <div className="container">
            <div className="logo">
              <img src="images/SahayA.jpg" alt="Logo" className="logo-image" style={{ height: '100px', width: '200px' }} />
            </div>
          </div>
        </div>

        {/* Login Button at Top Right */}
        <button className="login-button" onClick={handleLoginClick}>Login</button>

        {/* Emojis at Right Bottom with dynamic size */}
        <div className="emoji-container">
          <div className="emoji" style={{ fontSize: `${emojiSize}px` }}>
            {emojis[emojiIndex]}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
