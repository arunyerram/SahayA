// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../css/BookAppointment.css";

// const BookAppointment = () => {
//     const location = useLocation();
//     const professional = location.state?.professional; // Retrieve professional details

//     const [phone, setPhone] = useState("");
//     const [date, setDate] = useState("");
//     const [time, setTime] = useState("");
//     const [locationAddress, setLocationAddress] = useState("");
//     const [loading, setLoading] = useState(false);

    
//     const handleBookAppointment = async () => {
//         const trimmedPhone = phone.trim();
    
//         if (!trimmedPhone) {
//             alert("❌ Please enter a phone number.");
//             return;
//         }
    
//         if (!/^\+\d{10,15}$/.test(trimmedPhone)) {
//             alert("❌ Enter a valid phone number in international format (e.g., +91XXXXXXXXXX).");
//             return;
//         }
    
//         if (!professional) {
//             alert("❌ No professional selected. Please go back and choose one.");
//             return;
//         }
    
//         const appointmentDetails = {
//             consultantName: professional.name,
//             specialization: professional.specialization,
//             experience: professional.experience,
//             date: "2024-09-05",  // Replace with actual user input
//             time: "10:00 AM",     // Replace with actual user input
//             location: "Clinic XYZ, City Center",  // Replace with actual user input
//         };
    
//         console.log("📩 Sending to Backend:", { phone: trimmedPhone, appointmentDetails }); // ✅ Debugging log
    
//         try {
//             const response = await fetch("http://localhost:4000/send-message", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ phone: trimmedPhone, appointmentDetails }),
//             });
    
//             const result = await response.json();
//             if (result.success) {
//                 alert(`✅ Appointment confirmed with ${professional.name}! SMS sent.`);
//                 setPhone("");
//             } else {
//                 alert("❌ Error sending SMS: " + result.error);
//             }
//         } catch (error) {
//             alert("❌ Failed to book appointment. Please try again later.");
//             console.error("Error:", error);
//         }
//     };
    

//     return (
//         <div className="appointment-container">
//             <h2>Book Your Appointment</h2>

//             {professional ? (
//                 <div className="professional-details">
//                     <h3>{professional.name}</h3>
//                     <p><strong>Specialization:</strong> {professional.specialization}</p>
//                     <p><strong>Experience:</strong> {professional.experience}</p>
//                     <p><strong>Approach:</strong> {professional.approach}</p>
//                     <p><strong>Age:</strong> {professional.age}</p>
//                 </div>
//             ) : (
//                 <p>No professional selected.</p>
//             )}

//             <input
//                 type="text"
//                 placeholder="Enter phone number (+91XXXXXXXXXX)"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//             />
//             <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//             />
//             <input
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Enter appointment location"
//                 value={locationAddress}
//                 onChange={(e) => setLocationAddress(e.target.value)}
//             />

//             <button onClick={handleBookAppointment} disabled={loading}>
//                 {loading ? "Booking..." : "Book Appointment"}
//             </button>
//         </div>
//     );
// };

// export default BookAppointment;









