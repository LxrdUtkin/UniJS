import React, { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState('uk');
  const [days, setDays] = useState([
    'Понеділок',
    'Вівторок',
    'Середа',
    'Четвер',
    'П\'ятниця',
    'Субота',
    'Неділя',
  ]);

  const handleLanguageChange = (event) => {
    const value = event.target.value;
    setLanguage(value);
    if (value === 'uk') {
      setDays([
        'Понеділок',
        'Вівторок',
        'Середа',
        'Четвер',
        'П\'ятниця',
        'Субота',
        'Неділя',
      ]);
    } else if (value === 'en') {
      setDays([
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]);
    }
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        <option value="uk">Українська</option>
        <option value="en">English</option>
      </select>
      <select>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
