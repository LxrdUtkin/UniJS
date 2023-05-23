import { useState } from "react";

function AgeToYear() {
  const [age, setAge] = useState("");
  const [birthYear, setBirthYear] = useState("");

  function handleChange(event) {
    const ageValue = event.target.value;
    setAge(ageValue);
    const currentYear = new Date().getFullYear();
    const birthYearValue = currentYear - ageValue;
    setBirthYear(birthYearValue);
  }

  return (
    <div>
      <label>
        Enter your age:
        <input type="number" value={age} onChange={handleChange} />
      </label>
      <p>Your birth year is: {birthYear}</p>
    </div>
  );
}

export default AgeToYear;