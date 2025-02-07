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

app.post("/send-message", async (req, res) => {
  console.log("📩 Incoming Raw Request Body:", req.body); // ✅ Debugging log

  const { phone, appointmentDetails } = req.body;

  if (!phone || !appointmentDetails) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
  }

  // ✅ Properly format the SMS content
  const messageBody = `📅 Appointment Confirmation 📅\n\n` +
      `✅ Your appointment with ${appointmentDetails.consultantName} is confirmed!\n` +
      `🗓 Date: ${appointmentDetails.date}\n` +
      `⏰ Time: ${appointmentDetails.time}\n` +
      `📍 Location: ${appointmentDetails.location}\n` +
      `🎓 Specialization: ${appointmentDetails.specialization}\n` +
      `🔹 Experience: ${appointmentDetails.experience} years\n\n` +
      `Thank you for choosing our service!`;

  console.log("📨 Sending Message:", messageBody); // ✅ Debugging log

  try {
      // const message = await twilioClient.messages.create({
      //     body: messageBody,
      //     from: process.env.TWILIO_PHONE_NUMBER,
      //     to: phone,
      // });

      console.log("✅ SMS Sent Successfully:", message.sid);
      res.json({ success: true, messageId: message.sid });
  } catch (error) {
      console.error("❌ Error Sending SMS:", error);
      res.status(500).json({ success: false, error: error.message });
  }
});


// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
