import React, { useState } from 'react';

function InputWithBorder() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const inputStyle = {
    border: '3px solid',
    borderColor: text.length >= 4 && text.length <= 9 ? 'green' : 'red'
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      style={inputStyle}
    />
  );
}

export default InputWithBorder;
