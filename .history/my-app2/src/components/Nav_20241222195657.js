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
