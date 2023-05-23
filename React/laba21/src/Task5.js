import React, { useState } from 'react';

function App() {
  const [list, setList] = useState(['item 1', 'item 2', 'item 3']);

  const handleItemClick = (index) => {
    const newList = [...list];
    newList[index] = prompt('Edit item', newList[index]);
    setList(newList);
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li key={index} onClick={() => handleItemClick(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default App;
