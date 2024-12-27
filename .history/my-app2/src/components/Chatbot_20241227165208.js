// // import React, { useState } from "react";
// // import { Fab, getClient } from "@botpress/webchat";
// // import Nav from "./Nav"; // Assuming you have a Nav component
// // import Footer from "./footer.js"; 
// // const clientId = "7c38442f-5f28-4617-88e9-098fce0243a5"; // Replace with your actual Botpress client ID
// // const client = getClient({ clientId });

// // const Chatbot = () => {
// //   const [isWebchatOpen, setIsWebchatOpen] = useState(false);

// //   // Toggle the visibility of the webchat
// //   const toggleWebchat = () => {
// //     setIsWebchatOpen((prevState) => !prevState);
// //   };

// //   return (
// //     <>
// //     <div
// //       style={{
// //         width: "100vw",
// //         height: "100vh",
// //         position: "relative",
// //       }}
// //     >
// //       <Nav />

// //       {/* Fab button to toggle chatbot */}
// //       <Fab
// //         onClick={toggleWebchat}
// //         style={{
// //           position: "fixed", // Fixed positioning to keep it at bottom-right
// //           bottom: "20px", // Adjust distance from bottom
// //           right: "20px", // Adjust distance from right
// //           zIndex: 1000, // Ensure it appears on top
// //         }}
// //       />

// //       {/* Conditionally render the iframe for the chatbot */}
// //       {isWebchatOpen && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             bottom: "80px", // Adjust to appear above the Fab button
// //             right: "20px",
// //             transform: "translateY(0)",
// //             width: "1400px",
// //             height: "500px",
// //             borderRadius: "8px",
// //             overflow: "hidden",
// //             zIndex: 9999,
// //           }}
// //         >
// //           <iframe
// //             title="Botpress Webchat"
// //             src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/11/07/20241211074923-A6NCKAAG.json"
// //             width="100%"
// //             height="100%"
// //             style={{
// //               border: "none",
// //             }}
// //           ></iframe>
// //         </div>
// //       )}

// //     </div>
// //     <Footer/>
// //     </>
// //   );
// // };

// // export default Chatbot;




// import React, { useState } from "react";
// import { Fab, getClient } from "@botpress/webchat";
// import Nav from "./Nav"; // Assuming you have a Nav component
// // import Footer from "./Footer.js"; 

// const clientId = "7c38442f-5f28-4617-88e9-098fce0243a5"; // Replace with your actual Botpress client ID
// const client = getClient({ clientId });

// const Chatbot = () => {
//   const [isWebchatOpen, setIsWebchatOpen] = useState(false);

//   // Toggle the visibility of the webchat
//   const toggleWebchat = () => {
//     setIsWebchatOpen((prevState) => !prevState);
//   };

//   return (
//     <>
//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           position: "relative",
//           backgroundColor: "#f7f7f7", // Light background color for better visibility
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >

//         <Nav />
        
//         {/* FAB button to toggle chatbot */}
//         <Fab
//           onClick={toggleWebchat}
//           style={{
//             position: "fixed", // Fixed positioning to keep it at bottom-right
//             bottom: "30px", // Adjust distance from bottom for better spacing
//             right: "30px", // Adjust distance from right
//             zIndex: 1000, // Ensure it appears on top
//             backgroundColor: "#007bff", // Modern blue background for visibility
//             borderRadius: "50%",
//             padding: "15px",
//             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for a floating effect
//             cursor: "pointer",
//             transition: "all 0.3s ease", // Smooth transition on hover
//           }}
//         >
//           <span
//             style={{
//               color: "#fff",
//               fontSize: "2rem",
//             }}
//           >
//             💬
//           </span>
//         </Fab>

//         {/* Conditionally render the iframe for the chatbot */}
//         {isWebchatOpen && (
//           <div
//             style={{
//               position: "fixed",
//               bottom: "100px", // Adjust to appear above the FAB button
//               right: "30px", // Right alignment
//               width: "1410px", // Reduced width for better fit on smaller screens
//               height: "500px",
//               borderRadius: "10px",
//               overflow: "hidden",
//               zIndex: 9999,
//               animation: "fadeIn 0.5s ease", // Fade-in effect
//               boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
//             }}
//           >
//             <iframe
//               title="Botpress Webchat"
//               src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/11/07/20241211074923-A6NCKAAG.json"
//               width="100%"
//               height="100%"
//               style={{
//                 border: "none",
//                 borderRadius: "10px", // Rounded corners
//               }}
//             ></iframe>
//           </div>
//         )}

//         {/* <Footer /> */}
//       </div>

//       {/* Global CSS to improve UI/UX */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Chatbot;







// import React, { useState } from "react";
// import { Fab, getClient } from "@botpress/webchat";
// import Nav from "./Nav"; // Assuming you have a Nav component
// // import Footer from "./Footer.js"; 

// const clientId = "7c38442f-5f28-4617-88e9-098fce0243a5"; // Replace with your actual Botpress client ID
// const client = getClient({ clientId });

// const Chatbot = () => {
//   const [isWebchatOpen] = useState(true); // Set to true by default to keep the chatbot open

//   return (
//     <>
//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           position: "relative",
//           backgroundColor: "#f7f7f7", // Light background color for better visibility
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Nav />
        
//         {/* Always render the iframe for the chatbot */}
//         {isWebchatOpen && (
//           <div
//             style={{
//               position: "fixed",
//               bottom: "30px", // Adjust to appear above the FAB button
//               right: "30px", // Right alignment
//               width: "1400px",
//               height: "51000px",
//               borderRadius: "10px",
//               overflow: "hidden",
//               zIndex: 9999,
//               animation: "fadeIn 0.5s ease", // Fade-in effect
//               boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
//             }}
//           >
//             <iframe
//               title="Botpress Webchat"
//               src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/11/07/20241211074923-A6NCKAAG.json"
//               width="1500px"
//               height="100%"
//               style={{
//                 border: "none",
//                 borderRadius: "10px", // Rounded corners
//               }}
//             ></iframe>
//           </div>
//         )}

//         {/* <Footer /> */}
//       </div>

//       {/* Global CSS to improve UI/UX */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           0% { opacity: 0; }
//           100% { opacity: 1; }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Chatbot;





import React, { useState } from "react";
import { Fab, getClient } from "@botpress/webchat";
import Nav from "./Nav"; // Assuming you have a Nav component

const clientId = "7c38442f-5f28-4617-88e9-098fce0243a5"; // Replace with your actual Botpress client ID
const client = getClient({ clientId });

const Chatbot = () => {
  const [isWebchatOpen] = useState(true); // Set to true to keep the chatbot open

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f7f7f7", // Light background color for better visibility
        }}
      >
        <Nav />

        {/* Chatbot iframe */}
        {isWebchatOpen && (
          <div
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "1450px", // Updated width for appropriate sizing
              height: "600px", // Updated height for appropriate sizing
              borderRadius: "10px",
              overflow: "hidden",
              zIndex: 9999,
              animation: "fadeIn 0.5s ease",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <iframe
              title="Botpress Webchat"
              src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/11/07/20241211074923-A6NCKAAG.json"
              width="100%"
              height="100%"
              style={{
                border: "none",
                borderRadius: "10px",
              }}
            ></iframe>
          </div>
        )}
      </div>

      {/* Global CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

      <h1>Notes</h1>
    </>
  );
};

export default Chatbot;
