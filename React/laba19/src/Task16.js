import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          { name: "Коля", age: 30 },
          { name: "Василь", age: 40 },
          { name: "Петро", age: 50 },
        ],
        newName: "",
        newAge: "",
      };
    }
  
    handleNameChange = (event) => {
      this.setState({ newName: event.target.value });
    };
  
    handleAgeChange = (event) => {
      this.setState({ newAge: event.target.value });
    };
  
    handleAddUser = () => {
      const newUser = {
        name: this.state.newName,
        age: this.state.newAge,
      };
      this.setState((prevState) => ({
        users: [...prevState.users, newUser],
        newName: "",
        newAge: "",
      }));
    };
  
    handleRemoveUser = (index) => {
      this.setState((prevState) => ({
        users: prevState.users.filter((user, i) => i !== index),
      }));
    };
  
    render() {
      return (
        <div>
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
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>
                    <button onClick={() => this.handleRemoveUser(index)}>
                      Видалити
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <input
              type="text"
              placeholder="Ім'я"
              value={this.state.newName}
              onChange={this.handleNameChange}
            />
            <input
              type="number"
              placeholder="Вік"
              value={this.state.newAge}
              onChange={this.handleAgeChange}
            />
            <button onClick={this.handleAddUser}>Додати</button>
          </div>
        </div>
      );
    }
  }
  
export default App;
  