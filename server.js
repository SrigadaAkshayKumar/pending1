const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const os = require("os");  // To get local IP address

const app = express();
const port = 5000;

// Middleware to parse JSON request body
app.use(express.json());
app.use(cors()); // Allow cross-origin requests from React frontend

// Set up Nodemailer transport configuration (example using Gmail)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "iamnotahuman1990@gmail.com",  // Your Gmail address
    pass: "kazl rpez tybr eium",  // Your Gmail password or app-specific password
  },
});

// Function to get the local IP address dynamically
function getLocalIpAddress() {
  const networkInterfaces = os.networkInterfaces();
  let localIp = '';

  for (const interfaceKey in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceKey];

    for (const networkInterface of interfaces) {
      if (networkInterface.family === 'IPv4' && !networkInterface.internal) {
        localIp = networkInterface.address;
        break;
      }
    }

    if (localIp) break;
  }

  return localIp || '127.0.0.1';  // Fallback to localhost if no IP is found
}

// Handle POST request to /send-email
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Log received data (for debugging purposes)
  console.log("Received form data:", req.body);

  const mailOptions = {
    from: "iamnotahuman1990@gmail.com",  // The sender's email address
    to: email,  // The recipient's email address (user's email)
    subject: `Thank you for your query, ${name}!`,
    text: `Hello ${name},\n\nThank you for reaching out to us. We will review your query and get back to you as soon as possible.\n\nBest regards,\nTeam`,
  };

  // Send email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email" }); // Return error to frontend
    }

    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully!" }); // Return success to frontend
  });
});

// Get the local IP address dynamically
const localIp = getLocalIpAddress();

// Start the server, binding it to the local IP address dynamically
app.listen(port, localIp, () => {
  console.log(`Server running on http://${localIp}:${port}`);
});
