const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// GET POST PUT DELETE

app.use(bodyParser.json());

const items = [];

app.post("/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.delete("/items", (req, res) => {
  items.pop();
  res.send("Last Item Deleted.");
});

app.put("/items/", (req, res) => {
  const updateItem = req.body;
  items[0] = updateItem;
  res.json(updateItem);
});

app.get("/items/:id", (req, res) => {
  const itemID = req.params.id;
  const item = items.find((i) => i.id === itemID);

  if (!item) {
    res.status(404)._construct.send("Item not send!");
  } else {
    res.json(item);
  }
});

app.put("/items/:id", (req, res) => {
    const itemID = req.params.id;
    const item = items.find((i) => i.id === itemID);
  
    if (!item) {
      res.status(404)._construct.send("Item not send!");
    } else {
        items[id] = updateItem;
        res.json(updateItem);
    }
  });

app.listen(8000, () => {
  console.log("Server running on 8000.");
});
