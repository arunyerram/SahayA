import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import Nav from "./Nav";
import Footer from "./Footer";
import "../css/Consultancy.css";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const PersonalAssistant = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [todoList, setTodoList] = useState([]);
  const Navigate = useNavigate();
  const navigate = useNavigate();

  useEffect(() => {
    // Update the current time every minute
    const interval = setInterval(() => {
      const time = new Date();
      setCurrentTime(time.toLocaleTimeString());
    }, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, []);

  const handleSendNotification = (method) => {
    // Logic for sending notifications based on the current time
    const notificationMessage = `Notification sent at ${currentTime}`;
    alert(`${notificationMessage} via ${method}`);
  };

  const handleAddToDo = (task) => {
    setTodoList([...todoList, task]);
  };

  return (
    <>
      <Nav />
      <div className="consultancy-container ">
      <h1 className="text-4xl font-bold  text-center">Personal Assistant</h1>
        <div className="profiles-grid mt-10 mb-8">
          {/* Card 1: Notification sending */}
          <div className="card">
            <img
              src="images/notify.jpg" // Correct path from the public folder
              className="card-img"
              alt="Send Notifications"
              height=""
            />
            <div className="card-body">
              <h5 className="card-title">Send Notifications</h5>
              <p className="card-text">Send notifications to contacts based on time.</p>
              

              <button
                className="btn btn-primary"
                onClick={() => Navigate("/notifications-app") }
              >
                Send to Mobile
              </button>
              
              <button
                className="btn btn-primary "
                onClick={() => Navigate("/notifications-app") }
              >
                Send to Email
              </button>
            </div>
          </div>

          {/* Card 2: To-Do List Tracker */}
          <Link to="/tasksDone" className="card">
            <img
              src="images/TaskTracker_logo.png" // Correct path from the public folder
              className="card-img"
              alt="To-Do List Tracker"
            />
            <div className="card-body">
              <h5 className="card-title">To-Do List Tracker</h5>
              <p className="card-text">Track tasks and add new ones to stay organized.</p>
              <input
                type="text"
                id="taskInput"
                className="form-control"
                placeholder="Enter task"
              />
              <button
                className="btn btn-primary mt-2"
                onClick={() => {
                  const task = document.getElementById("taskInput").value;
                  if (task) handleAddToDo(task);
                }}
              >
                Add Task
              </button>
              <ul className="mt-3">
                {todoList.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
      </div>

            

    <button
      onClick={() => navigate(-1)} // Navigate to the previous route
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
        border: "none",
        cursor: "pointer",
      }}
    >
      Back
    </button>
      
      <Footer />
    </>
  );
};

export default PersonalAssistant;
