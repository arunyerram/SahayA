// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const twilio = require("twilio");

// const app = express();
// const port = process.env.PORT || 4000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // ✅ Validate and Initialize Twilio Client
// const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

// if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER) {
//     console.error("❌ Twilio credentials are missing. Check your .env file.");
//     process.exit(1);
// }

// const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// // 📌 API to send appointment confirmation SMS
// app.post("/send-message", async (req, res) => {
//     const { phone, appointmentDetails } = req.body;

//     console.log("📩 Incoming Request:", { phone, appointmentDetails });

//     if (!phone || !phone.match(/^\+\d{10,15}$/)) {
//         return res.status(400).json({ success: false, error: "Invalid phone number format!" });
//     }

//     try {
//         const message = await client.messages.create({
//             body: `Your appointment is confirmed. Details: ${appointmentDetails}`,
//             from: TWILIO_PHONE_NUMBER,
//             to: phone,
//         });

//         console.log("✅ SMS Sent:", message.sid);
//         res.json({ success: true, message: "SMS sent successfully!" });
//     } catch (error) {
//         console.error("❌ Twilio API Error:", error);
//         res.status(500).json({ success: false, error: "Failed to send SMS. Check Twilio logs." });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`🚀 Server running on http://localhost:${port}`);
// });












require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const twilio = require("twilio");

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Twilio Credentials from .env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Ensure this is your Twilio SMS number

const client = twilio(accountSid, authToken);

// 📌 API to send appointment confirmation SMS
app.post("/send-message", async (req, res) => {
    const { phone, professional, date, time, location } = req.body;

    if (!phone) {
        return res.status(400).json({ success: false, error: "Phone number is required!" });
    }
    
    if (!professional || !date || !time || !location) {
        return res.status(400).json({ success: false, error: "Missing appointment details!" });
    }

    try {
        const messageBody = `📅 *Appointment Confirmation* 📅\n
        ✅ Your appointment with ${professional} is confirmed!\n
        🗓 Date: ${date}\n
        ⏰ Time: ${time}\n
        📍 Location: ${location}\n
        Thank you!`;

        const message = await client.messages.create({
            body: messageBody,
            from: twilioPhoneNumber,
            to: phone, // ✅ Sending SMS
        });

        console.log("SMS sent:", message.sid);
        res.json({ success: true, message: "SMS sent successfully!" });
    } catch (error) {
        console.error("Twilio Error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
