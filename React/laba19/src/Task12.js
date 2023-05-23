import React, { useState } from 'react';

function App() {
  const [names, setNames] = useState(['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']);
  const [newName, setNewName] = useState('');

  const handleAddName = () => {
    setNames([...names, newName]);
    setNewName('');
  }

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newName}
        onChange={e => setNewName(e.target.value)}
      />
      <button onClick={handleAddName}>Додати ім'я</button>
    </div>
  );
}

export default App;
