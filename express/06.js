// Error Handling

// In Express, you can create custom error handlers to handle errors, Here's a simple example:

const express = require("express");
const app = express();

// Define a route that throws an error
app.get("/error", (req, res, next) => {
  // Simulate an error
  const error = new Error("This is a custom error");
  error.status = 500;
  next(error); // Pass the error to the error-handling middleware
});

// Custom error-handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).send(message);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// The /error route intentionally throws an error with a custom message and status code.

// We define a custom error-handling middleware using app.use. It catches errors and sends an appropriate response with the error status and message.

// When you access http://localhost:8000/error, you'll receive a 500 Internal Server Error response with the custom error message.
