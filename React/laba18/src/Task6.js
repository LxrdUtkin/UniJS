import React, { Component } from 'react';

class Task6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Іван',
      age: 25,
      buttonClicked: false,
    };
  }

  handleButtonClick = () => {
    this.setState({
      buttonClicked: true,
    });
  }

  render() {
    const { name, age, buttonClicked } = this.state;
    return (
      <div>
        {buttonClicked && <p>ім'я: {name}, вік: {age}</p>}
        <button onClick={this.handleButtonClick}>Натисни на мене</button>
      </div>
    );
  }
}

export default Task6;
