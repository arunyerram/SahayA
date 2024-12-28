// import React, { useState } from "react";
// import { Fab, getClient } from "@botpress/webchat";
// import Nav from "./Nav"; // Assuming you have a Nav component
// import { Link } from "react-router-dom"; // Import Link for navigation

// const clientId = "7c38442f-5f28-4617-88e9-098fce0243a5"; // Replace with your actual Botpress client ID
// const client = getClient({ clientId });

// const Chatbot = () => {
//   const [isWebchatOpen] = useState(true); // Set to true to keep the chatbot open

//   return (
//     <>
//       <div
//         style={{
//           width: "100vw",
//           height: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           backgroundColor: "#f7f7f7", // Light background color for better visibility
//         }}
//       >
//         <Nav />

//         {/* Chatbot iframe */}
//         {isWebchatOpen && (
//           <div
//             style={{
//               position: "fixed",
//               bottom: "30px",
//               right: "30px",
//               width: "1350px", // Updated width for appropriate sizing
//               height: "480px", // Updated height for appropriate sizing
//               marginBottom:"50px",
//               borderRadius: "10px",
//               overflow: "hidden",
//               zIndex: 9999,
//               animation: "fadeIn 0.5s ease",
//               boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <iframe
//               title="Botpress Webchat"
//               src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/11/07/20241211074923-A6NCKAAG.json"
//               width="100%"
//               height="100%"
//               style={{
//                 border: "none",
//                 borderRadius: "10px",
//               }}
//             ></iframe>
//           </div>
//         )}
//       </div>

//       {/* Back Button */}
//       <Link
//         to="/home"
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           left: "20px",
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
//         Back
//       </Link>

//       {/* Global CSS for animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Chatbot;






import React, { useState } from "react";
import { Fab, getClient } from "@botpress/webchat";
import Nav from "./Nav"; // Assuming you have a Nav component
import { Link } from "react-router-dom"; // Import Link for navigation

const clientId = "7c38442f-5f28-4617-88e9-098fce0243a5"; // Replace with your actual Botpress client ID
const client = getClient({ clientId });

const Chatbot = () => {
  const [isWebchatOpen] = useState(true); // Set to true to keep the chatbot open
  const [chatbotName, setChatbotName] = useState(""); // Store the chatbot name
  const [isNameSet, setIsNameSet] = useState(false); // Track if the name is set

  // Handle the name submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    setIsNameSet(true);
  };

  return (
    <>
      {/* Nav Component with Chatbot Name */}
      <Nav chatbotName={chatbotName} />

      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f7f7f7", // Light background color for better visibility
        }}
      >
        {/* Chatbot Name Input Form */}
        {!isNameSet && (
          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Enter Chatbot Name</h3>
            <form onSubmit={handleNameSubmit}>
              <input
                type="text"
                placeholder="Chatbot Name"
                value={chatbotName}
                onChange={(e) => setChatbotName(e.target.value)}
                style={{
                  padding: "10px",
                  marginRight: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                  width: "200px",
                }}
                required
              />
              <button
                type="submit"
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Set Name
              </button>
            </form>
          </div>
        )}

        {/* Chatbot iframe */}
        {isWebchatOpen && (
          <div
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              width: "1350px", // Updated width for appropriate sizing
              height: "480px", // Updated height for appropriate sizing
              marginBottom: "50px",
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

      {/* Back Button */}
      <Link
        to="/home"
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
          cursor: "pointer",
        }}
      >
        Back
      </Link>

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
    </>
  );
};

export default Chatbot;
