import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [fullName, setFullName] = useState("");

  const handleButtonClick = () => {
    const newFullName = `${lastName} ${firstName} ${patronymic}`;
    setFullName(newFullName);
  };

  return (
    <div>
      <label>
        Ім'я:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Прізвище:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <label>
        По батькові:
        <input
          type="text"
          value={patronymic}
          onChange={(e) => setPatronymic(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleButtonClick}>Зберегти</button>
      <br />
      <p>{fullName}</p>
    </div>
  );
}

export default App;
