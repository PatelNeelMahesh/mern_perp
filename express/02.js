// Topic 1: Routing and URL Parameters

// Import the Express module
const express = require("express");

// Create an instance of the Express application
const app = express();

// Define a route with URL parameters
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});

// Start the server and listen on port 8000
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// Explanation: In this code, we define a route with a URL parameter :id. When a user accesses a URL like /users/123, the req.params.id contains the value 123.

// Example: If you access http://localhost:8000/users/123, you'll see the response "User ID: 123."
