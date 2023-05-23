import React, { Component } from 'react';

class App extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    const text = event.target.value;
    this.setState({ text });
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange}></textarea>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
