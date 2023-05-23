import React from 'react';

// Компонент для відображення користувача
function UserRow(props) {
  const { name, surname, age } = props.user;
  return (
    <tr>
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </tr>
  );
}

// Компонент для відображення всіх користувачів
function UserTable(props) {
  const { users } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Вік</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

// Компонент, який відображає таблицю користувачів
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: 'Іван', surname: 'Іваненко', age: 25 },
        { id: 2, name: 'Василь', surname: 'Василенко', age: 30 },
        { id: 3, name: 'Марія', surname: 'Шевченко', age: 22 },
      ],
    };
  }

  render() {
    const { users } = this.state;
    return <UserTable users={users} />;
  }
}

export default App;
