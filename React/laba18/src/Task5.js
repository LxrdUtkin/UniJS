import React from 'react';

class Task5 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true, name: 'Иван'};
    }
  
    toggleShow = () => {
      this.setState(prevState => ({
        show: !prevState.show
      }));
    }
  
    render() {
      const greetingText = this.state.show ? 'Привіт' : 'Допобачення';
      return (
        <div>
          <p>{greetingText}, {this.state.name}!</p>
          <button onClick={this.toggleShow}>Змінити вітання</button>
        </div>
      );
    }
  }
  
  export default Task5;