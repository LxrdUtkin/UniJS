import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'text 1',
        'text 2',
        'text 3',
        'text 4',
        'text 5',
      ],
      checkboxes: Array(5).fill(true),
    };
  }

  handleCheckboxChange = (index) => {
    const { checkboxes } = this.state;
    checkboxes[index] = !checkboxes[index];
    this.setState({ checkboxes });
  };

  render() {
    const { items, checkboxes } = this.state;

    return (
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={checkboxes[index]}
              onChange={() => this.handleCheckboxChange(index)}
            />
            {checkboxes[index] && <p>{item}</p>}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
