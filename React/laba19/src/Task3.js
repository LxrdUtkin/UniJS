import { useState } from "react";

function App() {
  const [names, setNames] = useState(['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']);

  const addListItem = () => {
    setNames(prevNames => [...prevNames, 'пункт']);
  }

  const removeListItem = () => {
    setNames(prevNames => prevNames.slice(0, -1));
  }

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button onClick={addListItem}>Додати пункт</button>
      <button onClick={removeListItem}>Видалити пункт</button>
    </div>
  );
}

export default App;
