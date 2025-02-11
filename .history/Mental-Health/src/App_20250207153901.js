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
import ScribblePad from "./components/ScribblePad";
import { NotificationForm } from "./components/NotificationForm";
import { NotificationList } from "./components/NotificationList";
// import { formatDateTime } from "./components/DateUtils";
// import Notiapp from "./components/NotiApp";
import NotificationScheduler from './components/NotificationScheduler';
import Model from "./components/Model";
import ConsultancyProfiles from "./components/ConsultancyProfiles";
import BookAppointment from "./components/BookAppointment";
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
    <Router basename="/SahayA">
      <Routes>
        {/* Serve LandingPage at the root URL */}
        <Route path="/" element={<LandingPage />} />

        {/* Other routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route
          path="/consultancy"
          element={<Consultancy/>
          }
        />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/book-appointment"element={<BookAppointment />} />
        <Route path="/chat-application" element={<ChatApplication />} />
        <Route path="/consultancy-profiles" element={<ConsultancyProfiles />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Model" element={<Model />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/scribble-pad" element={<ScribblePad />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/UserInfoForm" element={<UserInfoForm />} />
        <Route path="/tasksDone" element={<Tasks />} />
        <Route path="/personal-assistant" element={<PersonalAssistant />} />
        {/* <Route path="/notifications-app" element={<Notiapp />} /> */}
        <Route path="/notification-scheduler" element={<NotificationScheduler />} />
        <Route path="/form-date" element={<formatDateTime />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;