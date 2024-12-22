import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Consultancy from "./components/Consultancy";
import ContactUs from "./components/ContactUs";
import Feedback from "./components/Feedback";
import { auth } from "./components/Firebase";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Nav";
import Profile from "./components/Profile";
import SignUp from "./components/Register";
import Footer from "./components/Footer";
import UserInfoForm from "./components/UserInfoForm";
import Tasks from "./components/TaskDone";
// import Character from "./components/Character";
// import SigninwithGoogle from "./components/signInWIthGoogle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Router>
        {/* <Navbar /> */}

      <div className="App">
        {/* <div className="auth-wrapper"> */}
          {/* <div className = "auth-inner"> */}
            <Routes>
              <Route path="/" element={user ? <Navigate to="/login" /> : <Login />}/>
              <Route path="/about" element={<About />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/consultancy" element={<Consultancy />} />
              <Route path="/contactUs" element={<ContactUs />} />  
              {/* <Route  */}
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/navbar" element={<Navbar />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/footer" element={<Footer />} />
              <Route path="/UserInfoForm" element={<UserInfoForm />} />
              <Route path="/TasksDone"element={<Tasks/>}/>
              {/* <Route path="/sign-in-with-google" element={<SigninwithGoogle />} /> */}
            </Routes>
            
            <ToastContainer />
          {/* </div> */}
        {/* </div> */}
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
