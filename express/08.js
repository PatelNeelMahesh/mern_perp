// Working with JSON Data

// In Express, you can easily handle JSON data. Here's an example of a route that receives JSON data in a POST request:

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Handle JSON data in a POST request
app.post("/json", (req, res) => {
  const jsonData = req.body;
  res.json(jsonData);
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// We use the body-parser middleware with app.use(bodyParser.json()) to parse JSON data sent in a POST request.

// The /json route handles the POST request, retrieves the JSON data from req.body, and sends it back as a JSON response.

// When you send a POST request with JSON data to http://localhost:8000/json, you'll receive the same JSON data in the response.
