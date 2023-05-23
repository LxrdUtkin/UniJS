import React from 'react';

class Task2 extends React.Component {
    showMessage() {
      alert('hello');
    }
  
    render() {
      return (
        <div>
          <button onClick={() => this.showMessage()}>Click me</button>
        </div>
      );
    }
  }

export default Task2;