import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/BookAppointment.css";

const BookAppointment = () => {
    const location = useLocation();
    const professional = location.state?.professional; // Retrieve professional details

    const [phone, setPhone] = useState("");

    const handleBookAppointment = async () => {
        if (!phone) {
            alert("Please enter a phone number.");
            return;
        }

        const response = await fetch("http://localhost:4000/send-message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                phone,
                professional: professional?.name, // Send professional's name along with phone
            }),
        });

        const result = await response.json();
        if (result.success) {
            alert(`Appointment confirmed with ${professional?.name}! SMS sent.`);
        } else {
            alert("Error sending SMS: " + result.error);
        }
    };

    return (
        <div className="appointment-container">
            <h2>Book Your Appointment</h2>

            {professional ? (
                <div className="professional-details">
                    <h3>{professional.name}</h3>
                    <p><strong>Specialization:</strong> {professional.specialization}</p>
                    <p><strong>Experience:</strong> {professional.experience}</p>
                    <p><strong>Approach:</strong> {professional.approach}</p>
                    <p><strong>Age:</strong> {professional.age}</p>
                </div>
            ) : (
                <p>No professional selected.</p>
            )}

            <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={handleBookAppointment}>Book Appointment</button>
        </div>
    );
};

export default BookAppointment;
