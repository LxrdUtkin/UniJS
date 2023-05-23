import React, { Component } from 'react';

class Task11 extends React.Component {
    state = {
      hrefs: [
        {href: '1.html', text: 'посилання 1'},
        {href: '2.html', text: 'посилання 2'},
        {href: '3.html', text: 'посилання 3'},
      ]
    };
  
    render() {
      return (
        <ul>
          {this.state.hrefs.map(({href, text}) => (
            <li key={href}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      );
    }
  }
  
  export default Task11;