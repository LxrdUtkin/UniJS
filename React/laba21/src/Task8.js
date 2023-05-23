import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');

  const addNote = () => {
    const currentDate = new Date();
    const note = {
      title: `Нотатка ${notes.length + 1}`,
      text: noteText,
      time: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
    };
    setNotes([...notes, note]);
    setNoteTitle('');
    setNoteText('');
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const editNote = (index, newText) => {
    const updatedNotes = [...notes];
    updatedNotes[index].text = newText;
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h2>Створення нотаток</h2>
      <div>
        <label>Заголовок:</label>
        <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
      </div>
      <div>
        <label>Текст:</label>
        <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)}></textarea>
      </div>
      <button onClick={addNote}>Створити нотатку</button>

      <h2>Нотатки</h2>
      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          <div>{note.text}</div>
          <p>{note.time}</p>
          <div>
            <button onClick={() => deleteNote(index)}>Видалити</button>
            <br></br>
            <button onClick={() => editNote(index, prompt('Введіть новий текст нотатки', note.text))}>Редагувати</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
