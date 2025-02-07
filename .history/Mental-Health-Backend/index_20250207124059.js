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

// // Twilio Credentials from .env
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER; // Ensure this is your Twilio SMS number

// const client = twilio(accountSid, authToken);


// app.post("/send-message", async (req, res) => {
//   console.log("📩 Incoming Request:", req.body); // Log full request data

//   const { phone, appointmentDetails } = req.body;

//   if (!phone || !appointmentDetails) {
//       return res.status(400).json({ success: false, error: "Missing phone number or appointment details!" });
//   }

//   try {
//       const messageBody = `
//       Your appointment is confirmed!
//       Consultant: ${appointmentDetails.consultantName}
//       Date: ${appointmentDetails.date}
//       Time: ${appointmentDetails.time}
//       Location: ${appointmentDetails.location}
//       Specialization: ${appointmentDetails.specialization}
//       Experience: ${appointmentDetails.experience} years
//       `;

//       const message = await client.messages.create({
//           body: messageBody,
//           from: twilioPhoneNumber,
//           to: phone,
//       });

//       console.log("✅ SMS Sent:", message.sid);
//       res.json({ success: true, message: "SMS sent successfully!" });
//   } catch (error) {
//       console.error("❌ Twilio Error:", error);
//       res.status(500).json({ success: false, error: error.message });
//   }
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
const admin = require("firebase-admin");
const cron = require("node-cron");

// Initialize Firebase Admin SDK
const serviceAccount = require("./serviceAccountKey.json"); // Ensure this file exists
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

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

// Function to send SMS
async function sendMessage(phone, message) {
  try {
    const sms = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: phone,
    });
    console.log(`✅ SMS Sent to ${phone}:`, sms.sid);
  } catch (error) {
    console.error(`❌ Error sending SMS to ${phone}:`, error.message);
  }
}

// 📌 API to Send Immediate SMS
app.post("/send-message", async (req, res) => {
  console.log("📩 Incoming Request:", req.body);

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

    await sendMessage(phone, messageBody);
    res.json({ success: true, message: "SMS sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 📌 API to Schedule Notification
app.post("/schedule-notification", async (req, res) => {
  const { phone, message, scheduledTime } = req.body;

  if (!phone || !message || !scheduledTime) {
    return res.status(400).json({ success: false, error: "Missing required fields!" });
  }

  try {
    await db.collection("notifications").add({
      phone,
      message,
      scheduledTime,
      isActive: true,
    });

    res.status(200).json({ success: true, message: "Notification scheduled successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 📌 Cron Job to Send Scheduled Notifications (Runs Every Minute)
cron.schedule("* * * * *", async () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const snapshot = await db.collection("notifications").where("isActive", "==", true).get();
  snapshot.forEach(async (doc) => {
    const { phone, message, scheduledTime } = doc.data();
    const scheduleDate = new Date(scheduledTime);

    if (scheduleDate.getHours() === currentHour && scheduleDate.getMinutes() === currentMinute) {
      sendMessage(phone, message);

      // Optional: Mark notification as sent (delete or update)
      await db.collection("notifications").doc(doc.id).update({ isActive: false });
    }
  });
});

// Start the Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

