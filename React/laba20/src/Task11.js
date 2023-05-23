import React, { Component } from 'react';

class App extends Component {
  state = {
    isChecked: false
  };

  handleCheckboxChange = (event) => {
    this.setState({ isChecked: event.target.checked });
  };

  render() {
    const { isChecked } = this.state;

    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleCheckboxChange}
          />
          Розблокувати інпут
        </label>
        <br />
        <input type="text" disabled={!isChecked} />
      </div>
    );
  }
}

export default App;
