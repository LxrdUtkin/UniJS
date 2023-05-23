import React, { useState } from 'react';

function UserTable({ users, showMessage }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Вік</th>
          <th>Дія</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>
              <button onClick={() => showMessage(user.firstName)}>
                Показати повідомлення
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [users] = useState([
    {firstName: 'Іван', lastName: 'Іваненко', age: 25},
    {firstName: 'Василь', lastName: 'Василенко', age: 30},
    {firstName: 'Марія', lastName: 'Шевченко', age: 22}
  ]);

  function showMessage(message) {
    alert(message);
  }

  return (
    <div>
      <UserTable users={users} showMessage={showMessage} />
    </div>
  );
}

export default App;
