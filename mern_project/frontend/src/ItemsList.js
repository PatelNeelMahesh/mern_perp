import React, { useState, useEffect } from "react";
import axios from "axios";

function ItemsList() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(
        "https://mern-45ip.onrender.com/api/items"
      );
      console.log(response.data);
      setItems(response.data);
    };
    fetchItems();
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item._id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemsList;
