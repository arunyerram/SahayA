import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/BookAppointment.css";

const BookAppointment = () => {
    const location = useLocation();
    const professional = location.state?.professional; // Retrieve professional details

    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false); // ✅ Loading state

    const handleBookAppointment = async () => {
        const trimmedPhone = phone.trim();

        if (!trimmedPhone) {
            alert("❌ Please enter a phone number.");
            return;
        }

        if (!/^\+\d{10,15}$/.test(trimmedPhone)) {
            alert("❌ Enter a valid phone number in international format (e.g., +91XXXXXXXXXX).");
            return;
        }

        if (!professional) {
            alert("❌ No professional selected. Please go back and choose one.");
            return;
        }

        setLoading(true); // ✅ Show loading state while waiting for response

        try {
            const response = await fetch("http://localhost:4000/send-message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    phone: trimmedPhone,
                    professional: professional?.name, // Send professional's name along with phone
                }),
            });

            const result = await response.json();
            if (result.success) {
                alert(`✅ Appointment confirmed with ${professional?.name}! SMS sent.`);
                setPhone(""); // ✅ Reset input field after success
            } else {
                alert("❌ Error sending SMS: " + result.error);
            }
        } catch (error) {
            alert("❌ Failed to book appointment. Please try again later.");
            console.error("Error:", error);
        } finally {
            setLoading(false); // ✅ Hide loading state after request completes
        }
    };

    return (
        <div className="appointment-container">
            <h2>Book Your Appointment</h2>

            {professional ? (
                <div className="professional-details">
                    <h3>{professional.name}</h3>
                    <p><strong>Specialization:</strong> {professional.specialization}</p>
                    <p><strong>Experience:</strong> {professional.experience} years</p>
                    <p><strong>Approach:</strong> {professional.approach}</p>
                    <p><strong>Age:</strong> {professional.age}</p>
                </div>
            ) : (
                <p>⚠️ No professional selected.</p>
            )}

            <input
                type="text"
                placeholder="Enter phone number (e.g., +91XXXXXXXXXX)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={loading} // ✅ Disable input when loading
            />
            <button onClick={handleBookAppointment} disabled={loading}>
                {loading ? "Booking..." : "Book Appointment"}
            </button>
        </div>
    );
};

export default BookAppointment;
