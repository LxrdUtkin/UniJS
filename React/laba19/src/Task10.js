import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleSum = () => {
    setSum(num1 + num2);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(parseInt(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(parseInt(e.target.value))} />
      <button onClick={handleSum}>Calculate Sum</button>
      <p>Sum: {sum}</p>
    </div>
  );
}

export default App;
