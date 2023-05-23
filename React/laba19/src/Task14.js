import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hrefs: [
          { href: '1.html', text: 'посилання 1' },
          { href: '2.html', text: 'посилання 2' },
          { href: '3.html', text: 'посилання 3' },
        ],
        newHref: '',
        newText: '',
      };
    }
  
    handleNewHrefChange = (event) => {
      this.setState({ newHref: event.target.value });
    };
  
    handleNewTextChange = (event) => {
      this.setState({ newText: event.target.value });
    };
  
    handleAddHref = () => {
      const newHrefs = [...this.state.hrefs];
      const newHref = { href: this.state.newHref, text: this.state.newText };
      newHrefs.push(newHref);
      this.setState({ hrefs: newHrefs, newHref: '', newText: '' });
    };
  
    render() {
      const hrefList = this.state.hrefs.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.text}</a>
        </li>
      ));
  
      return (
        <div>
          <ul>{hrefList}</ul>
          <input
            type="text"
            placeholder="href"
            value={this.state.newHref}
            onChange={this.handleNewHrefChange}
          />
          <input
            type="text"
            placeholder="text"
            value={this.state.newText}
            onChange={this.handleNewTextChange}
          />
          <button onClick={this.handleAddHref}>Add href</button>
        </div>
      );
    }
  }
  
export default App;
  