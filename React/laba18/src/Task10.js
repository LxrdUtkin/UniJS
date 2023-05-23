import React, { Component } from 'react';

class Task10 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        names: ['Коля', 'Вася', 'Петро'],
      };
    }
  
    render() {
      return (
        <ul>
          {this.state.names.map((name, index) => (
            <li key={index}>{name} - {index + 1}</li>
          ))}
        </ul>
      );
    }
  }
  
  export default Task10;
  