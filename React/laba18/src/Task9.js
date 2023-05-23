import React, { Component } from 'react';

class Task9 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        names: ['Коля', 'Вася', 'Петя']
      };
    }
  
    render() {
      const listItems = this.state.names.map((name) =>
        <li>{name}</li>
      );
      return (
        <ul>
          {listItems}
        </ul>
      );
    }
  }
  
  export default Task9;