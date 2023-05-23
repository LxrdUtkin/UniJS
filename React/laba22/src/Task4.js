import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleAddCity = () => {
    if (city !== "") {
      setCityList([...cityList, city]);
      setCity("");
    }
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <input type="text" value={city} onChange={handleCityChange} />
      <button onClick={handleAddCity}>Додати місто</button>
      <select value={selectedCity} onChange={handleSelectChange}>
        <option value="">Виберіть місто</option>
        {cityList.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity !== "" && <p>Ви вибрали {selectedCity}</p>}
    </div>
  );
}

export default App;
