// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Middleware function
const logger = (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
};

// Use the middleware
app.use(logger);

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Middleware!');
});

// Start the server and listen on port 8000
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});

// Explanation: Middleware functions are functions that have access to the request and response objects. They can be used to perform tasks like logging, authentication, and more. In this example, we create a simple logger middleware that logs the request URL.

// Example: When you access http://localhost:8000/, the middleware logs the request URL in the console.