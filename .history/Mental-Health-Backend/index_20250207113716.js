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
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

// 📌 API to send appointment confirmation SMS
app.post("/send-message", async (req, res) => {
    const { phone, appointmentDetails } = req.body;

    if (!phone) {
        return res.status(400).json({ success: false, error: "Phone number is required!" });
    }

    try {
        const message = await client.messages.create({
            body: `Your appointment is confirmed. Details: ${appointmentDetails}`,
            from: twilioPhoneNumber,
            to: phone,
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
