const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

const MONGODB_URI = "mongodb://127.0.0.1:27017/edyoda";

// Connect to MongoDB
const mongoClient = new MongoClient(MONGODB_URI);
mongoClient.connect();

// Create a database object
const db = mongoClient.db();

// Create a GET API endpoint to return the document with the name `details`
app.get("/details", async (req, res) => {
  // Get the document from MongoDB
  const document = await db
    .collection("details")
    .findOne({ name: "Acme Corporation" });

  // Send the document back to the client
  res.send(document);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
