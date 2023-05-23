import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
        inputValue: "",
      };
    }
  
    handleInputChange = (event) => {
      this.setState({ inputValue: event.target.value });
    };
  
    handleDeleteItem = () => {
      const { inputValue, items } = this.state;
      const index = parseInt(inputValue, 10) - 1;
      if (index >= 0 && index < items.length) {
        items.splice(index, 1);
        this.setState({ items });
      }
      this.setState({ inputValue: "" });
    };
  
    render() {
      const { items, inputValue } = this.state;
      return (
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Enter item number to delete"
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleDeleteItem}>Delete item</button>
        </div>
      );
    }
  }
  
export default App;
  