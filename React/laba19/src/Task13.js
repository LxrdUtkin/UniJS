import { useState } from "react";

function App() {
  const [names, setNames] = useState(["Коля", "Василь", "Петро", "Іван", "Дмитро"]);
  const [newName, setNewName] = useState("");

  const handleAddName = () => {
    if (newName.trim() !== "") {
      setNames([...names, newName]);
      setNewName("");
    }
  };

  const handleDeleteName = (name) => {
    setNames(names.filter((n) => n !== name));
  };

  return (
    <div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => handleDeleteName(name)}>Видалити</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleAddName}>Додати ім'я</button>
    </div>
  );
}

export default App;
