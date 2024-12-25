// server.js
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, "build")));

// Catch-all route to serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the Express server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
