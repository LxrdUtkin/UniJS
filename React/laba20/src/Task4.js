import React, { Component } from 'react';

class CitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: '',
      cities: ['Київ', 'Львів', 'Харків', 'Дніпро', 'Одеса'],
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event) {
    this.setState({ selectedCity: event.target.value });
  }

  render() {
    return (
      <div>
        <select value={this.state.selectedCity} onChange={this.handleSelectChange}>
          {this.state.cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        <p>Ви обрали місто {this.state.selectedCity}</p>
      </div>
    );
  }
}

export default CitySelector;
