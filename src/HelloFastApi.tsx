import React, { useState, useEffect } from "react";

function HelloFastApi() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/items")
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .catch((err) => console.error(err));
  }, []);
  const addUserDetail = () => {
    fetch(`http://127.0.0.1:8000/items/${newItem}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data.items);
        setNewItem("");
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>FastAPI + React Array Example</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
        placeholder="Enter new detail"
      />
      <button onClick={addUserDetail}> add detail</button>
    </div>
  );
}
export default HelloFastApi;
