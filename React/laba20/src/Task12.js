import React, { useState } from "react";

function App() {
  const [day, setDay] = useState(new Date().getDate());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [weekday, setWeekday] = useState("");

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleButtonClick = () => {
    const date = new Date(`${year}-${month}-${day}`);
    const options = { weekday: 'long' };
    setWeekday(date.toLocaleDateString('en-US', options));
  };

  return (
    <div>
      <select value={day} onChange={handleDayChange}>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select value={month} onChange={handleMonthChange}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <select value={year} onChange={handleYearChange}>
        {Array.from({ length: 30 }, (_, i) => i + 1990).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <button onClick={handleButtonClick}>Show weekday</button>
      <p>{weekday}</p>
    </div>
  );
}

export default App;
