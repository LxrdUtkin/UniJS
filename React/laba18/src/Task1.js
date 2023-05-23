import React from 'react';

class Task1 extends React.Component {

  state = { name: "Ivan", age: 24};

    render() {
      return (
        <div>
          <p>Name: {this.state.name}, age: {this.state.age}</p>
        </div>
      );
    }
  }

  export default Task1;