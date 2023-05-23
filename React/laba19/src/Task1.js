import React, { Component } from 'react';

class App extends Component {
  state = {
    names: ['Коля', 'Василь', 'Петро', 'Іван', 'Дмитро']
  };

  render() {
    const { names } = this.state;
    return (
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    );
  }
}

export default App;