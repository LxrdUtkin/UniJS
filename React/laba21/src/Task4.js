import React from 'react';

class UserList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          { name: 'Микола', surname: 'Шевченко', age: 30 },
          { name: 'Василь', surname: 'Чумак', age: 40 },
          { name: 'Петро', surname: 'Стеценко', age: 50 },
        ],
        showDetails: [true, true, true],
      };
    }
  
    handleCheckboxChange(index) {
      const newShowDetails = [...this.state.showDetails];
      newShowDetails[index] = !newShowDetails[index];
      this.setState({ showDetails: newShowDetails });
    }
  
    render() {
      const { users, showDetails } = this.state;
  
      const userList = users.map((user, index) => (
        <li key={index}>
          <label>
            <input
              type="checkbox"
              checked={showDetails[index]}
              onChange={() => this.handleCheckboxChange(index)}
            />
            {showDetails[index] && (
              <>
                {user.name} {user.surname} {user.age}
              </>
            )}
            {!showDetails[index] && user.name}
          </label>
        </li>
      ));
  
      return <ul>{userList}</ul>;
    }
  }

  export default UserList;
  