import React, { Component } from 'react';

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { name: 'Микола', age: 30 },
        { name: 'Василь', age: 40 },
        { name: 'Петро', age: 50 },
      ],
      isEditing: Array(3).fill(false),
      tempUser: {
        name: '',
        age: '',
      },
    };
  }

  handleEdit(index) {
    const isEditing = [...this.state.isEditing];
    isEditing[index] = true;
    this.setState({ isEditing });
  }

  handleSave(index) {
    const users = [...this.state.users];
    users[index] = { ...this.state.tempUser };
    const isEditing = [...this.state.isEditing];
    isEditing[index] = false;
    this.setState({ users, isEditing });
  }

  handleCancel(index) {
    const isEditing = [...this.state.isEditing];
    isEditing[index] = false;
    this.setState({ isEditing });
  }

  handleChange(e) {
    const { name, value } = e.target;
    const tempUser = { ...this.state.tempUser };
    tempUser[name] = value;
    this.setState({ tempUser });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Вік</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users.map((user, index) => (
            <tr key={index}>
              <td>
                {this.state.isEditing[index] ? (
                  <input
                    type="text"
                    name="name"
                    value={this.state.tempUser.name}
                    onChange={(e) => this.handleChange(e)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {this.state.isEditing[index] ? (
                  <input
                    type="text"
                    name="age"
                    value={this.state.tempUser.age}
                    onChange={(e) => this.handleChange(e)}
                  />
                ) : (
                  user.age
                )}
              </td>
              <td>
                {this.state.isEditing[index] ? (
                  <div>
                    <button onClick={() => this.handleSave(index)}>Зберегти</button>
                    <button onClick={() => this.handleCancel(index)}>Скасувати</button>
                  </div>
                ) : (
                  <button onClick={() => this.handleEdit(index)}>Редагувати</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default UserTable;
