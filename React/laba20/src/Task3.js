import React, { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        Показати абзац
      </label>
      {isChecked && <p>Абзац</p>}
    </div>
  );
}

export default App;
