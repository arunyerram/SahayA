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


app.post("/send-message", async (req, res) => {
  console.log("📩 Incoming Request:", req.body); // Log full request data

  const { phone, appointmentDetails } = req.body;

  if (!phone || !appointmentDetails) {
      return res.status(400).json({ success: false, error: "Missing phone number or appointment details!" });
  }

  try {
      const messageBody = `
      Your appointment is confirmed!
      Consultant: ${appointmentDetails.consultantName}
      Date: ${appointmentDetails.date}
      Time: ${appointmentDetails.time}
      Location: ${appointmentDetails.location}
      Specialization: ${appointmentDetails.specialization}
      Experience: ${appointmentDetails.experience} years
      `;

      const message = await client.messages.create({
          body: messageBody,
          from: twilioPhoneNumber,
          to: phone,
      });

      console.log("✅ SMS Sent:", message.sid);
      res.json({ success: true, message: "SMS sent successfully!" });
  } catch (error) {
      console.error("❌ Twilio Error:", error);
      res.status(500).json({ success: false, error: error.message });
  }
});


// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
