import React, { useState } from 'react';

function App() {
  const [names, setNames] = useState(['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']);

  const addNewItem = () => {
    setNames([...names, 'пункт']);
  };

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={addNewItem}>Додати пункт</button>
    </div>
  );
}

export default App;
