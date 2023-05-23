import { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('output').textContent = text;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <p id="output"></p>
    </div>
  );
}

export default App;
