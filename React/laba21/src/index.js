import React from 'react';
import ReactDOM from 'react-dom/client';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import Task6 from './Task6';
import Task7 from './Task7';
import Task8 from './Task8';
import Task9 from './Task9';
import Task10 from './Task10';


class App extends React.Component {
  render() {
    return (
      <div>

        <h3>Task1:</h3>
        <Task1 />

        <h3>Task2:</h3>
        <Task2 />

        <h3>Task3:</h3>
        <Task3 />

        <h3>Task4:</h3>
        <Task4 />

        <h3>Task5:</h3>
        <Task5 />

        <h3>Task6:</h3>
        <Task6 />

        <h3>Task7:</h3>
        <Task7 />

        <h3>Task8:</h3>
        <Task8 />

        <h3>Task9:</h3>
        <p>Клікайте по назвах стовпців для сортування за ними</p>
        <Task9 />

        <h3>Task10:</h3>
        <Task10 />

      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
