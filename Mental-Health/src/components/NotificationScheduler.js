import React, { useState } from "react";
import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "../css/NotificationScheduler.css"; // Importing CSS file

const NotificationScheduler = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [time, setTime] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!phoneNumber || !message || !time) {
            alert("Please fill all fields");
            return;
        }

        try {
            await addDoc(collection(db, "notifications"), {
                phoneNumber,
                message,
                time, 
            });

            alert("Notification scheduled successfully!");
            setPhoneNumber("");
            setMessage("");
            setTime("");
        } catch (error) {
            console.error("Error saving notification:", error);
            alert("Error scheduling notification.");
        }
    };

    return (
      <>
        <div className="notification-container">
            <h2 className="notification-title">Set Notification</h2>
            <form onSubmit={handleSubmit} className="notification-form">
                <input 
                    type="text" 
                    placeholder="Phone Number" 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    required 
                    className="input-field"
                />
                <textarea 
                    placeholder="Reminder Message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                    className="textarea-field"
                />
                <input 
                    type="time" 
                    value={time} 
                    onChange={(e) => setTime(e.target.value)} 
                    required 
                    className="input-field"
                />
                <button type="submit" className="submit-btn">Set Reminder</button>
            </form>
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
      </>
    );
};

export default NotificationScheduler;
