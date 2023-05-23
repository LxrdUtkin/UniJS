import React, { useState } from 'react';

function App() {
  const [selectOptions, setSelectOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddOption = () => {
    if (inputValue) {
      setSelectOptions([...selectOptions, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddOption}>Add Option</button>
      <select>
        {selectOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
