import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: '#000000',
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleColorChange(event) {
    this.setState({
      selectedColor: event.target.value,
    });
  }

  render() {
    const { selectedColor } = this.state;
    const style = {
      color: selectedColor,
    };
    return (
      <div>
        <select onChange={this.handleColorChange}>
          <option value="#000000">Black</option>
          <option value="#FF0000">Red</option>
          <option value="#00FF00">Green</option>
          <option value="#0000FF">Blue</option>
        </select>
        <p style={style}>Text</p>
      </div>
    );
  }
}

export default App;

