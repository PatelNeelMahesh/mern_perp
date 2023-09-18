// CRUD (Create, Read, Update, Delete) example using Express.js.

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// In-memory storage for items (replace with a database in a real application)
const items = [];

// Create an item (POST)
app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read all items (GET)
app.get("/items", (req, res) => {
  res.json(items);
});

// Read a single item by ID (GET)
app.get("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = items.find((i) => i.id === itemId);
  if (!item) {
    res.status(404).send("Item not found");
  } else {
    res.json(item);
  }
});

// Update an item by ID (PUT)
app.put("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  const itemIndex = items.findIndex((i) => i.id === itemId);
  if (itemIndex === -1) {
    res.status(404).send("Item not found");
  } else {
    items[itemIndex] = updatedItem;
    res.json(updatedItem);
  }
});

// Delete an item by ID (DELETE)
app.delete("/items/:id", (req, res) => {
  const itemId = req.params.id;
  const itemIndex = items.findIndex((i) => i.id === itemId);
  if (itemIndex === -1) {
    res.status(404).send("Item not found");
  } else {
    items.splice(itemIndex, 1);
    res.send("Item deleted");
  }
});

// Start the server and listen on port 8000
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

// This code demonstrates the basic CRUD operations (Create, Read, Update, Delete) using Express.js. We store items in memory (you'd typically use a database in a real application) and create routes to interact with them.

// We use the body-parser middleware to parse JSON data in the request body.
// The items array stores our data. In a real application, this would be replaced with a database.
// We define routes for creating, reading (all and by ID), updating, and deleting items.

// Create a new item (POST):
// POST http://localhost:8000/items
// {"id": "1", "name": "Item 1"}

// Read all items (GET):
// GET http://localhost:8000/items

// Read a single item by ID (GET):
// GET http://localhost:8000/items/1

// Update an item by ID (PUT):
// http://localhost:8000/items/1
// {"id": "1", "name": "Updated Item 1"}

// Delete an item by ID (DELETE):
// DELETE http://localhost:8000/items/1
