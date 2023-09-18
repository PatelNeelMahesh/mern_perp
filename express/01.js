// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server and listen on port 8000
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
