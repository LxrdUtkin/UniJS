import React, { Component } from 'react';

class Task7 extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showText: !prevState.showText
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Натисни на мене</button>
        {this.state.showText && <p>ім'я: Іван, вік: 25</p>}
      </div>
    );
  }
}

export default Task7;
