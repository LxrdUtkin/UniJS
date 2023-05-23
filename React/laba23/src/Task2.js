import React from 'react';

function User(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.age}</td>
      <td>
        <a href="index.js" onClick={props.showMessage}>Показати повідомлення</a>
      </td>
    </tr>
  );
}

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {firstName: 'Іван', lastName: 'Іваненко', age: 25},
        {firstName: 'Василь', lastName: 'Василенко', age: 30},
        {firstName: 'Марія', lastName: 'Шевченко', age: 22}
      ]
    };
  }

  showMessage() {
    alert('!');
  }

  render() {
    const userComponents = this.state.users.map((user, index) => (
      <User
        key={index}
        firstName={user.firstName}
        lastName={user.lastName}
        age={user.age}
        showMessage={this.showMessage}
      />
    ));

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
          {userComponents}
        </tbody>
      </table>
    );
  }
}

export default UserList;

