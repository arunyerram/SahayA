// import React, { useEffect } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import About from "./components/About";
// import Chatbot from "./components/Chatbot";
// import Consultancy from "./components/Consultancy";
// import ContactUs from "./components/ContactUs";
// import Feedback from "./components/Feedback";
// import { auth } from "./components/Firebase";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Navbar from "./components/Nav";
// import Profile from "./components/Profile";
// import SignUp from "./components/Register";
// import Footer from "./components/Footer";
// import UserInfoForm from "./components/UserInfoForm";
// import Tasks from "./components/TasksDone";
// // import Character from "./components/Character";
// // import SigninwithGoogle from "./components/signInWIthGoogle";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ChatApplication from "./components/ChatApplication";
// import { useState } from "react";

// function App() {
//   const [user, setUser] = useState();
//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   });
//   return (
//     <Router>
//         {/* <Navbar /> */}

//       <div className="App">
//         {/* <div className="auth-wrapper"> */}
//           {/* <div className = "auth-inner"> */}
//             <Routes>
//               <Route path="/" element={user ? <Navigate to="/login" /> : <Login />}/>
//               <Route path="/about" element={<About />} />
//               <Route path="/chatbot" element={<Chatbot />} />
//               <Route path="/consultancy" element={<Consultancy />} />
//               <Route path="/contactUs" element={<ContactUs />} />  
//               {/* <Route  */}
//               <Route path="/chatApplication" element={<ChatApplication />} />
//               <Route path="/feedback" element={<Feedback />} />
//               <Route path="/home" element={<Home />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/navbar" element={<Navbar />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/register" element={<SignUp />} />
//               <Route path="/footer" element={<Footer />} />
//               <Route path="/UserInfoForm" element={<UserInfoForm />} />
//               <Route path="/tasksDone"element={<Tasks/>}/>
//               {/* <Route path="/sign-in-with-google" element={<SigninwithGoogle />} /> */}
//             </Routes>
            
//             <ToastContainer />
//           {/* </div> */}
//         {/* </div> */}
//       </div>
//       {/* <Footer/> */}
//     </Router>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./css/App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import About from "./components/About";
// import Chatbot from "./components/Chatbot";
// import Consultancy from "./components/Consultancy";
// import ContactUs from "./components/ContactUs";
// import Feedback from "./components/Feedback";
// import { auth } from "./components/Firebase";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Navbar from "./components/Nav";
// import Profile from "./components/Profile";
// import SignUp from "./components/Register";
// import Footer from "./components/Footer";
// import UserInfoForm from "./components/UserInfoForm";
// import Tasks from "./components/TasksDone";
// import PersonalAssistant from "./components/PersonalAssistant";
// import LandingPage from "./components/LandingPage";
// // import Character from "./components/Character";
// // import SigninwithGoogle from "./components/signInWIthGoogle";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ChatApplication from "./components/ChatApplication";

// function App() {
//   const [user, setUser] = useState();
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//   });

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <Router>
//       <Route path="/" element={user ? <Navigate to="/landing-page" /> : <LandingPage/>} />
//       {/* <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}> */}
//         {/* <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> */}
//         {/* <div className="app-content"> */}
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/chatbot" element={<Chatbot />} />
//             <Route path="/consultancy" element={<Consultancy />} />
//             <Route path="/contactUs" element={<ContactUs />} />
//             <Route path="/chatApplication" element={<ChatApplication />} />
//             <Route path="/feedback" element={<Feedback />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/navbar" element={<Navbar />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/register" element={<SignUp />} />
//             <Route path="/footer" element={<Footer />} />
//             <Route path="/UserInfoForm" element={<UserInfoForm />} />
//             <Route path="/tasksDone" element={<Tasks />} />
//             <Route path="/personal-assistant" element={<PersonalAssistant />} />
//             {/* <Route path="/sign-in-with-google" element={<SigninwithGoogle />} /> */}
//           </Routes>
//         {/* </div> */}
//         <ToastContainer />
//       {/* </div> */}
//     </Router>
//   );
// }

// export default App;



// import React, { useEffect, useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./css/App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import About from "./components/About";
// import Chatbot from "./components/Chatbot";
// import Consultancy from "./components/Consultancy";
// import ContactUs from "./components/ContactUs";
// import Feedback from "./components/Feedback";
// import { auth } from "./components/Firebase";
// import Home from "./components/Home";
// import Login from "./components/Login";
// // import Navbar from "./components/Nav";
// import Profile from "./components/Profile";
// import SignUp from "./components/Register";
// // import Footer from "./components/Footer";
// import UserInfoForm from "./components/UserInfoForm";
// import Tasks from "./components/TasksDone";
// import PersonalAssistant from "./components/PersonalAssistant";
// import LandingPage from "./components/LandingPage";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import ChatApplication from "./components/ChatApplication";

// function App() {
//   const [user, setUser] = useState();
//   // const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUser(user);
//     });
//     return () => unsubscribe();
//   }, []);

//   // const toggleDarkMode = () => {
//   //   setDarkMode(!darkMode);
//   // };

//   return (
//     <Router>
//       <Routes>
//         {/* Default Route */}
//         <Route path="/" element={<Navigate to="/landing-page" element={<LandingPage />}/>} />
//         {/* Landing Page Route */}
//         <Route path="/landing-page" element={<LandingPage />} />
//         {/* Login Route */}
//         <Route path="/login" element={<Login />} />
//         {/* Other Routes */}
//         <Route path="/about" element={<About />} />
//         <Route path="/chatbot" element={<Chatbot />} />
//         <Route path="/consultancy" element={<Consultancy />} />
//         <Route path="/contactUs" element={<ContactUs />} />
//         <Route path="/chatApplication" element={<ChatApplication />} />
//         <Route path="/feedback" element={<Feedback />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/register" element={<SignUp />} />
//         <Route path="/UserInfoForm" element={<UserInfoForm />} />
//         <Route path="/tasksDone" element={<Tasks />} />
//         <Route path="/personal-assistant" element={<PersonalAssistant />} />
//       </Routes>
//       <ToastContainer />
//     </Router>
//   );
// }

// export default App;







import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Consultancy from "./components/Consultancy";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import { auth } from "./components/Firebase";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import SignUp from "./components/Register";
import Notes from "./components/Notes";
import UserInfoForm from "./components/UserInfoForm";
import Tasks from "./components/TasksDone";
import PersonalAssistant from "./components/PersonalAssistant";
import LandingPage from "./components/LandingPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatApplication from "./components/ChatApplication";

// Importing the Notification components
import { NotificationForm } from "./components/NotificationForm";
import { NotificationList } from "./components/NotificationList";
import { formatDateTime } from "./components/DateUtils";
import Notiapp from "./components/NotiApp";


function App() {
  const [user, setUser] = useState();
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = (phoneNumber, message, scheduledTime) => {
    const newNotification = {
      id: Date.now().toString(),
      phoneNumber,
      message,
      scheduledTime,
      isActive: true,
    };
    setNotifications([...notifications, newNotification]);
  };

  const handleToggle = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, isActive: !notification.isActive }
          : notification
      )
    );
  };

  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/landing-page" />} />
        {/* Landing Page Route */}
        <Route path="/landing-page" element={<LandingPage />} />
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
        {/* Other Routes */}
        <Route path="/about" element={<About />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route
          path="/consultancy"
          element={
            <Consultancy>
              {/* Notification Scheduler inside Consultancy */}
              <div className="bg-white p-6 mt-500 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">New Notification</h2>
                <NotificationForm onSubmit={handleSubmit} />
              </div>
              {notifications.length > 0 && (
                <div className="mt-80">
                  <h2 className="text-xl font-semibold mb-4">Scheduled Notifications</h2>
                  <NotificationList
                    notifications={notifications}
                    onToggle={handleToggle}
                  />
                </div>
              )}
            </Consultancy>
          }
        />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/chatApplication" element={<ChatApplication />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/home" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/UserInfoForm" element={<UserInfoForm />} />
        <Route path="/tasksDone" element={<Tasks />} />
        <Route path="/personal-assistant" element={<PersonalAssistant />} />
        <Route path="/notifications-app" element={<Notiapp/>} />
        <Route path="/form-date" element={<formatDateTime/>} />
        
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
