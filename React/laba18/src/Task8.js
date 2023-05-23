import React, { Component } from 'react';

class Task8 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTextVisible: false
    };
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText() {
    this.setState(prevState => ({
      isTextVisible: !prevState.isTextVisible
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleText}>
          {this.state.isTextVisible ? 'сховати' : 'показати'}
        </button>
        {this.state.isTextVisible && (
          <p>ім'я: Іван, вік: 25</p>
        )}
      </div>
    );
  }
}

export default Task8;
