// import React from "react";
// import { Link } from "react-router-dom";
// import { auth } from "./firebase";

// const Nav = () => {
//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       window.location.href = "/login";
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   return (
//     <>
//       <nav 
//         className="navbar navbar-expand-lg fixed-top"
//         style={{ backgroundColor: "brown", zIndex: 1000 }}
//       >
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/home" style={{ color: "white" }}>
//             Sahaya
//           </Link>
//           {/* <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button> */}
//           {/* <div className="collapse navbar-collapse"> */}
//             {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0"> */}
//               {/* <li className="nav-item"> */}
//                 {/* <Link className="navbar-brand" aria-current="page" to="/home" style={{ color: "white" }}>
//                   Home
//                 </Link> */}
//               {/* </li> */}
//               {/* <li className="navbar-brand"> */}
//                 {/* <Link className="navbar-brand" to="/about" style={{ color: "white" }}>
//                   About
//                 </Link> */}
//               {/* </li> */}
//               {/* <li className="nav-item"> */}
//                 <Link className="navbar-brand" to="/Chatbot" style={{ color: "white" }}>
//                   Chatbot
//                 </Link>
//               {/* </li> */}
//               {/* <li className="nav-item"> */}
//                 {/* <Link className="navbar-brand" to="/Feedback" style={{ color: "white" }}>
//                   Feedback
//                 </Link> */}
//               {/* </li> */}
//               {/* <li className="nav-item"> */}
//                 <Link className="navbar-brand" to="/Consultancy" style={{ color: "white" }}>
//                   Consultancy
//                 </Link>
//               {/* </li> */}
//               {/* <li className="nav-item"> */}
//                 {/* <Link className="navbar-brand" to="/ContactUs" style={{ color: "white" }}>
//                   Contact Us
//                 </Link> */}
//               {/* </li> */}
//             {/* </ul> */}
//             {/* <form className="d-flex">
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 style={{ backgroundColor: "#6c757d", color: "white", border: "none" }}
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form> */}
//             <button className="btn btn-primary ms-3" onClick={handleLogout}>
//               Logout
//             </button>
//           {/* </div> */}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { auth } from "./firebase";

// const Nav = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       window.location.href = "/login";
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   return (
//     <>
//       <nav
//         className="navbar navbar-expand-lg fixed-top"
//         style={{ backgroundColor: "brown", zIndex: 1000 }}
//       >
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/home" style={{ color: "white", marginRight: "380px" }}>
//             Sahaya
//           </Link>

//           <div className="navbar-nav">
//             <Link className="navbar-brand" to="/Chatbot" style={{ color: "white", marginRight: "340px" }}>
//               Chatbot
//             </Link>
//             <Link className="navbar-brand" to="/Consultancy" style={{ color: "white", marginRight: "200px" }}>
//               Consultancy
//             </Link>
//           </div>

//           <div className="dropdown ms-auto">
//             <button
//               className="btn btn-secondary dropdown-toggle"
//               onClick={toggleDropdown}
//               style={{ backgroundColor: "#6c757d", border: "none" }}
//             >
//               Profile
//             </button>

//             {showDropdown && (
//               <div
//                 className="dropdown-menu dropdown-menu-end"
//                 style={{ display: "block", position: "absolute" }}
//               >
//                 <Link
//                   className="dropdown-item"
//                   to="/profile"
//                   onClick={() => setShowDropdown(false)}
//                 >
//                   Profile Settings
//                 </Link>
//                 <button
//                   className="dropdown-item"
//                   onClick={() => {
//                     setShowDropdown(false);
//                     handleLogout();
//                   }}
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Nav;




// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { auth } from "./Firebase.js";

// const Nav = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       window.location.href = "/login";
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav
//       className="navbar navbar-expand-lg fixed-top"
//       style={{ backgroundColor: "brown", zIndex: 1000 }}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/home" style={{ color: "white", marginRight: "380px" }}>
//           Sahaya
//         </Link>

//         <div className="navbar-nav">
//           <Link className="navbar-brand" to="/Chatbot" style={{ color: "white", marginRight: "340px" }}>
//             Chatbot
//           </Link>
//           <Link className="navbar-brand" to="/Consultancy" style={{ color: "white", marginRight: "180px" }}>
//             Consultancy
//           </Link>
//         </div>

//         <div className="dropdown ms-auto" ref={dropdownRef}>
//           <button
//             className="btn btn-secondary dropdown-toggle"
//             onClick={toggleDropdown}
//             style={{ backgroundColor: "#6c757d", border: "none" }}
//           >
//             {/* Replace Profile text with logo */}
//             <img
//               src="" 
//               alt="Profile"
//               style={{ width: "50px", height: "30px", borderRadius: "80%" }}
//             />
//           </button>

//           {showDropdown && (
//             <div
//               className="dropdown-menu dropdown-menu-end"
//               style={{ display: "block", position: "absolute" }}
//             >
//               <Link
//                 className="dropdown-item"
//                 backgroundColor="{{ backgroundColor: 'blue', border: 'none' }}"
//                 to="/UserInfoForm"
//                 onClick={() => setShowDropdown(false)}
//               >
//                 Profile Settings
//               </Link>
//               <button
//                 className="dropdown-item"
//                 onClick={() => {
//                   setShowDropdown(false);
//                   handleLogout();
//                 }}
//               >
//                 Logout
//               </button>
//               <Link
//                 className="dropdown-item"
//                 backgroundColor="{{ backgroundColor: 'blue', border: 'none' }}"
//                 to="/tasksDone"
//                 onClick={() => setShowDropdown(false)}
//               >
//                 Tasks List
//               </Link>

//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;











// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { auth } from "./Firebase.js";

// const Nav = ({ chatbotName }) => {  // Added chatbotName as a prop
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleLogout = async () => {
//     try {
//       await auth.signOut();
//       window.location.href = "/login";
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };

//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav
//       className="navbar navbar-expand-lg fixed-top"
//       style={{ backgroundColor: "brown", zIndex: 1000 }}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/home" style={{ color: "white", marginRight: "380px" }}>
//           Sahaya
//         </Link>

//         <div className="navbar-nav">
//           <Link className="navbar-brand" to="/Chatbot" style={{ color: "white", marginRight: "340px" }}>
//             {chatbotName}  {/* Display the chatbot name here */}
//           </Link>
//           <Link className="navbar-brand" to="/Consultancy" style={{ color: "white", marginRight: "180px" }}>
//             Consultancy
//           </Link>
//         </div>

//         <div className="dropdown ms-auto" ref={dropdownRef}>
//           <button
//             className="btn btn-secondary dropdown-toggle"
//             onClick={toggleDropdown}
//             style={{ backgroundColor: "#6c757d", border: "none" }}
//           >
//             {/* Replace Profile text with logo */}
//             <img
//               src="data:image/png;base64,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"
//               alt="Profile"
//               style={{ width: "50px", height: "30px", borderRadius: "80%" }}
//             />
//           </button>

//           {showDropdown && (
//             <div
//               className="dropdown-menu dropdown-menu-end"
//               style={{ display: "block", position: "absolute" }}
//             >
//               <Link
//                 className="dropdown-item"
//                 backgroundColor="{{ backgroundColor: 'blue', border: 'none' }}"
//                 to="/UserInfoForm"
//                 onClick={() => setShowDropdown(false)}
//               >
//                 Profile Settings
//               </Link>
//               <button
//                 className="dropdown-item"
//                 onClick={() => {
//                   setShowDropdown(false);
//                   handleLogout();
//                 }}
//               >
//                 Logout
//               </button>
//               <Link
//                 className="dropdown-item"
//                 backgroundColor="{{ backgroundColor: 'blue', border: 'none' }}"
//                 to="/tasksDone"
//                 onClick={() => setShowDropdown(false)}
//               >
//                 Tasks List
//               </Link>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;





import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase.js";
import { FaMoon, FaSun } from 'react-icons/fa';  // Import icons for dark/light mode

const Nav = ({ chatbotName }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [darkMode, setDarkMode] = useState(false);  // State for dark mode
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Add dark mode class to body element based on the state
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`} style={{ zIndex: 1000 }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home" style={{ color: darkMode ? 'white' : 'black', marginRight: "380px" }}>
          Sahaya
        </Link>

        <div className="navbar-nav">
          <Link className="navbar-brand" to="/Chatbot" style={{ color: darkMode ? 'white' : 'black', marginRight: "340px" }}>
            {chatbotName}
          </Link>
          <Link className="navbar-brand" to="/Consultancy" style={{ color: darkMode ? 'white' : 'black', marginRight: "180px" }}>
            Consultancy
          </Link>
        </div>

        {/* Dark Mode Toggle Button between Consultancy and Profile */}
        <button
          onClick={toggleDarkMode}
          className="btn btn-outline-secondary"
          style={{ backgroundColor: "transparent", border: "none", color: darkMode ? 'white' : 'black' }}
        >
          {darkMode ? <FaSun /> : <FaMoon />} {/* Display Sun icon for light mode, Moon icon for dark mode */}
        </button>

        {/* Profile Link */}
        <Link className="navbar-brand" to="/Profile" style={{ color: darkMode ? 'white' : 'black' }}>
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
