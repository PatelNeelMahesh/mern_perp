const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://edyoda:FSRIP280823@cluster0.cvzsbzi.mongodb.net/?retryWrites=true&w=majority"
);

// Create a model for our items
const Names = mongoose.model("Names", {
  name: String,
});

// GET request to get all items
app.get("/api/items", async (req, res) => {
  const items = await Names.find();
  res.send(items);
});

// POST request to create a new item
app.post("/api/items", async (req, res) => {
  const item = new Names({
    name: req.body.name,
  });
  await item.save();
  res.send(item);
});

// PATCH request to update an item by ID
app.patch("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  // Find the item by ID
  const item = await Names.findById(id);

  // If the item does not exist, return a 404 Not Found status code
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  // Update the item data
  item.name = name;
  // Save the updated item to the database
  await item.save();

  res.status(200).json(item);
});

// DELETE request to delete an item by ID
app.delete("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  const item = await Names.findById(id);

  // If the item does not exist, return a 404 Not Found status code
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  // Delete the item from the database
  await item.deleteOne();

  // Return a 204 No Content status code
  res.status(204).send();
});

// Start the server
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
