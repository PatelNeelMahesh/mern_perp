// Authentication Middleware

// Middleware can be used for more advanced tasks like authentication. Here's an example of an authentication middleware:

const express = require("express");
const app = express();

// Simulated user authentication
const authenticate = (req, res, next) => {
  const isAuthenticated = false; // Simulate user authentication status

  if (isAuthenticated) {
    // User is authenticated, continue to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, send a 401 Unauthorized response
    res.status(401).send("Unauthorized");
  }
};

// Use the authentication middleware for a specific route
app.get("/secure", authenticate, (req, res) => {
  res.send("This is a secure route.");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// We define an authenticate middleware that simulates user authentication. If the user is authenticated, the middleware calls next(), allowing the request to proceed to the /secure route. If not, it sends a 401 Unauthorized response.

// We use the authenticate middleware only for the /secure route. Other routes won't be affected.

// When you access http://localhost:8000/secure, the middleware checks if you're authenticated. If you are, you'll see the "This is a secure route." response; otherwise, you'll receive a 401 Unauthorized response.

// Middleware in Express.js is a powerful tool for adding functionality to your application's request-handling process. It can be used for a wide range of tasks, from simple logging to complex authentication and authorization checks.
