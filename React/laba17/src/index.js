import React from 'react';
import ReactDOM from 'react-dom/client';

//
class Task1 extends React.Component {
  render() {
    return (
      <div>
        text
      </div>
    );
  }
}
//

//
class Task2 extends React.Component {
  render() {
    const text = 'текст';
    return (
      <div>
        {text}
      </div>
    );
  }
}
//

//
class Task3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '<p>текст</p>'
    };
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.text}}></div>
    );
  }
}
//

//
const text1 = '<p>текст1</p>';
const text2 = '<p>текст2</p>';

function Task4() {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: text1 }}></div>
      <p>!!!</p>
      <div dangerouslySetInnerHTML={{ __html: text2 }}></div>
    </div>
  );
}
//

//
class Task5 extends React.Component {
  render() {
    const attr = "block";
    return (
      <div id={attr}>
        текст
      </div>
    );
  }
}
//

//
class Task6 extends React.Component {
  render() {
    const str = 'block';
    return (
      <div className={` ${str}`}>
        текст
      </div>
    );
  }  
}
//

//
class Task7 extends React.Component {
  render() {
    const text = 'текст';
    return (
      <div dangerouslySetInnerHTML={{ __html: text }} style={{ backgroundColor: 'green', borderRadius: '30px' }}></div>
    );
  }
}
//

//
class Task8 extends React.Component {
  render() {
    const show = false;
    return (
      <div>
        {show ? <p>текст 1</p> : <p>текст 2</p>}
      </div>
    );
  }
}
//

//
class Task9 extends React.Component {
  render() {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    const listItems = arr.map((item) => <li>{item}</li>);
    return <ul>{listItems}</ul>;
  }
}
//

//
class Task10 extends React.Component {
  getText() {
    return '<p>текст</p>';
  }

  render() {
    const text = this.getText();

    return (
      <div dangerouslySetInnerHTML={{__html: text}}></div>
    );
  }
}
//

//
class Task11 extends React.Component {
  getNum1() {
    return 1;
  }

  getNum2() {
    return 2;
  }

  render() {
    const sum = this.getNum1() + this.getNum2();
    return (
      <div>
        <p>текст {sum}</p>
      </div>
    );
  }
}

//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Task1 />);
root.render(<Task2 />);
root.render(<Task3 />);
root.render(<Task4 />);
root.render(<Task5 />);
root.render(<Task6 />);
root.render(<Task7 />);
root.render(<Task8 />);
root.render(<Task9 />);
root.render(<Task10 />);
root.render(<Task11 />);