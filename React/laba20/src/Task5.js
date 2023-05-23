import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: ''
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="radio"
            value="1"
            checked={this.state.selectedOption === '1'}
            onChange={this.handleOptionChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={this.state.selectedOption === '2'}
            onChange={this.handleOptionChange}
          />
          Option 2
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={this.state.selectedOption === '3'}
            onChange={this.handleOptionChange}
          />
          Option 3
        </label>
        <p>Selected option: {this.state.selectedOption}</p>
      </div>
    );
  }
}

export default App;
