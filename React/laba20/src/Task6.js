import React, { Component } from 'react';

class App extends Component {
  state = {
    texts: [],
    currentText: ''
  }

  handleTextChange = (event) => {
    this.setState({
      currentText: event.target.value
    });
  }

  handleAddText = () => {
    this.setState((prevState) => ({
      texts: [...prevState.texts, prevState.currentText],
      currentText: ''
    }));
  }

  render() {
    return (
      <div>
        <textarea value={this.state.currentText} onChange={this.handleTextChange} />
        <button onClick={this.handleAddText}>Додати текст</button>
        {this.state.texts.map((text, index) => <p key={index}>{text}</p>)}
      </div>
    );
  }
}

export default App;

