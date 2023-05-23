import React, { useState } from 'react';

function App() {
  const [selectedOption, setSelectedOption] = useState('none');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let selectedParagraph;
  if (selectedOption === 'option1') {
    selectedParagraph = <p>Перший абзац</p>;
  } else if (selectedOption === 'option2') {
    selectedParagraph = <p>Другий абзац</p>;
  } else if (selectedOption === 'option3') {
    selectedParagraph = <p>Третій абзац</p>;
  }

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="none">--Виберіть пункт--</option>
        <option value="option1">Опція 1</option>
        <option value="option2">Опція 2</option>
        <option value="option3">Опція 3</option>
      </select>
      {selectedParagraph}
    </div>
  );
}

export default App;
