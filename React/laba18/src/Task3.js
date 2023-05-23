import React, { Component } from 'react';

class Task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Іван',
      age: 25
    };
  }

  showName = () => {
    const { name } = this.state;
    alert(name);
  };

  render() {
    return (
      <div>
        <button onClick={this.showName}>Показати ім'я</button>
      </div>
    );
  }
}

export default Task3;
