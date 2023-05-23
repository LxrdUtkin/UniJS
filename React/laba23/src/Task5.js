import React, { useState } from "react";

function UserTable({ users, deleteUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Вік</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>
            <button onClick={() => deleteUser(user.id)}>
                Видалити
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [users, setUsers] = useState([
    {firstName: 'Іван', lastName: 'Іваненко', age: 25},
    {firstName: 'Василь', lastName: 'Василенко', age: 30},
    {firstName: 'Марія', lastName: 'Шевченко', age: 22}
  ]);

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <UserTable users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
