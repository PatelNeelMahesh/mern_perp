// Topic 2: Middleware

// Middleware in Express.js

// Middleware functions are an integral part of Express.js. They are functions that have access to the request (req) and response (res) objects in an Express application's request-response cycle. Middleware functions can perform tasks such as authentication, logging, modifying the request or response objects, and more. They are executed in the order they are defined in your Express application.

// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Middleware function
const logger = (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next(); // Calls the next middleware in the chain
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

// In this example:

// We define a custom middleware function logger. It logs the request URL and then calls next(), which passes control to the next middleware or route handler in the chain.

// We use app.use(logger) to apply the middleware to all routes. This means that every incoming request will pass through the logger middleware.

// When you access http://localhost:8000/, the middleware logs the request URL in the console before proceeding to the route handler.