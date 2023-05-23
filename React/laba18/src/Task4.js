import React from 'react';

class Task4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Іван', age: 25 };
  }

  handleClick = () => {
    this.setState({ name: 'Коля', age: 30 });
  };

  render() {
    return (
      <div>
        <div>ім'я: {this.state.name}, вік: {this.state.age}</div>
        <button onClick={this.handleClick}>Змінити ім'я та вік</button>
      </div>
    );
  }
}

export default Task4;
