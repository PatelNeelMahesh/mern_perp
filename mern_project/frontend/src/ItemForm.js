import React, { useState, useEffect } from "react";

function ItemForm() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    // Fetch the list of items when the component mounts
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch("https://mern-45ip.onrender.com/api/items");
      if (!response.ok) {
        throw new Error("Failed to fetch items");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!itemName) {
      alert("Please enter an item name.");
      return;
    }

    try {
      if (selectedItemId) {
        // Update an existing item
        const response = await fetch(
          `https://mern-45ip.onrender.com/api/items/${selectedItemId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: itemName }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update item");
        }
      } else {
        // Create a new item
        const response = await fetch(
          "https://mern-45ip.onrender.com/api/items",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: itemName }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to create item");
        }
      }

      // Clear the form and fetch the updated list of items
      setItemName("");
      setSelectedItemId(null);
      fetchItems();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEditItem = (id, name) => {
    // Set the selected item for editing
    setSelectedItemId(id);
    setItemName(name);
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await fetch(
        `https://mern-45ip.onrender.com/api/items/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      // Fetch the updated list of items after deletion
      fetchItems();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Item Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={handleItemNameChange}
        />
        <button type="submit">
          {selectedItemId ? "Update Item" : "Add Item"}
        </button>
      </form>

      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.name}
            <button onClick={() => handleEditItem(item._id, item.name)}>
              Edit
            </button>
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemForm;
