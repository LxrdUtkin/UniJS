import React, { useState } from 'react';

function UserFullName() {
  const [fullName, setFullName] = useState(['', '', '']);

  const handleInputChange = (event) => {
    const { value } = event.target;
    const names = value.split(' ');
    setFullName(names);
  };

  return (
    <div>
      <label htmlFor="fullNameInput">Введіть ПІБ:</label>
      <input id="fullNameInput" type="text" onChange={handleInputChange} />

      <p>Прізвище: {fullName[0]}</p>
      <p>Ім'я: {fullName[1]}</p>
      <p>По батькові: {fullName[2]}</p>
    </div>
  );
}

export default UserFullName;
