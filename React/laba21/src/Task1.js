import React, { useState } from "react";

function App() {
  const [items] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
  ]);
  const [checkedItems, setCheckedItems] = useState(new Map());

  const handleChange = (event) => {
    const item = event.target.name;
    const isChecked = event.target.checked;
    setCheckedItems((prev) => new Map(prev).set(item, isChecked));
  };

  const listItems = items.map((item) => (
    <li key={item}>
      <label>
        <input
          type="checkbox"
          name={item}
          checked={checkedItems.get(item) || false}
          onChange={handleChange}
        />
        <span
          style={{
            textDecoration: checkedItems.get(item) ? "line-through" : "none",
          }}
        >
          {item}
        </span>
      </label>
    </li>
  ));

  return <ul>{listItems}</ul>;
}

export default App;
