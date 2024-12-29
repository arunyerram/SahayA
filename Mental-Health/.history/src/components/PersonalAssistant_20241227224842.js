import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Nav from "./Nav";
import Footer from "./Footer";
import "../css/Consultancy.css";
import { useNavigate } from "react-router-dom";

const PersonalAssistant = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [todoList, setTodoList] = useState([]);
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
      
      {/* Centering the entire content */}
      <div
        className="consultancy-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Full viewport height for centering
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h1 className="text-4xl font-bold mb-5">Personal Assistant</h1>

        {/* Grid of Cards */}
        <div className="profiles-grid mt-10 mb-10" style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', justifyItems: 'center' }}>
          {/* Card 1: Notification sending */}
          <div className="card" style={{ width: '300px', border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <img
              src="/images/notify.jpg"
              className="card-img"
              alt="Send Notifications"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Send Notifications</h5>
              <p className="card-text">Send notifications to contacts based on time.</p>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/notifications-app")}
                style={{ marginBottom: '10px' }}
              >
                Send to Mobile
              </button>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/notifications-app")}
              >
                Send to Email
              </button>
            </div>
          </div>

          {/* Card 2: To-Do List Tracker */}
          <div className="card" style={{ width: '300px', border: '1px solid #ddd', borderRadius: '10px', padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <img
              src="/images/TaskTracker_logo.png"
              className="card-img"
              alt="To-Do List Tracker"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <div className="card-body">
              <h5 className="card-title">To-Do List Tracker</h5>
              <p className="card-text">Track tasks and add new ones to stay organized.</p>
              <input
                type="text"
                id="taskInput"
                className="form-control"
                placeholder="Enter task"
                style={{ marginBottom: '10px', width: '100%' }}
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
              <ul className="mt-3" style={{ listStyle: 'none', paddingLeft: '0' }}>
                {/* Assuming you have a state called todoList */}
                {todoList.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <Link
        to="/home"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          backgroundColor: '#FF5733',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
        }}
      >
        Back
      </Link>

      <Footer />
    </>
  );
};

export default PersonalAssistant;
