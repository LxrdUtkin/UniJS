import { useState } from 'react';

function App() {
  const [names, setNames] = useState(['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']);

  const handleDelete = (index) => {
    const newNames = names.filter((_, i) => i !== index);
    setNames(newNames);
  };

  const renderedList = names.map((name, index) => (
    <li key={index}>
      {name} <button onClick={() => handleDelete(index)}>Видалити</button>
    </li>
  ));

  const handleAdd = () => {
    setNames([...names, 'пункт']);
  };

  const handleDeleteLast = () => {
    setNames(names.slice(0, -1));
  };

  return (
    <div>
      <ul>{renderedList}</ul>
      <button onClick={handleAdd}>Додати пункт</button>
      <button onClick={handleDeleteLast}>Видалити останній пункт</button>
    </div>
  );
}

export default App;
