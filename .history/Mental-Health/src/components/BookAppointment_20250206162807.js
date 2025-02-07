import { useState } from "react";

const BookAppointment = () => {
    const [phone, setPhone] = useState("");

    const handleBookAppointment = async () => {
        if (!phone) {
            alert("Please enter a phone number.");
            return;
        }

        const response = await fetch("http://localhost:3000/send-message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone }),
        });

        const result = await response.json();
        if (result.success) {
            alert("Appointment confirmed! SMS sent.");
        } else {
            alert("Error sending SMS: " + result.error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Book Your Appointment</h2>
            <input
                type="text"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{ padding: "10px", margin: "10px", width: "250px" }}
            />
            <br />
            <button 
                onClick={handleBookAppointment} 
                style={{ padding: "10px 20px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>
                Book Appointment
            </button>
        </div>
    );
};

export default BookAppointment;
