const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 8000;

// MongoDB Connection URI (Replace with your MongoDB connection string)
const uri = "mongodb://127.0.0.1:27017/edyoda";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API route to retrieve data from MongoDB
app.get("/api/company", async (req, res) => {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access the edyoda database and the details collection
    const db = client.db("edyoda");
    const collection = db.collection("details");

    // Query the MongoDB collection to retrieve data
    const data = await collection.findOne();

    // Send the retrieved data as a JSON response
    res.json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    // Close the MongoDB connection
    client.close();
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
