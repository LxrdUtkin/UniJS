import React, { Component } from 'react';

class TouristRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routes: [
        {id: 1, name: 'Карпати'},
        {id: 2, name: 'Київ'},
        {id: 3, name: 'Львів'},
      ],
      selectedRoute: null,
    };
  }

  handleRouteSelection = (routeId) => {
    const selectedRoute = this.state.routes.find(route => route.id === routeId);
    this.setState({ selectedRoute });
  }

  render() {
    const { routes, selectedRoute } = this.state;
    return (
      <div>
        {routes.map(route => (
          <div key={route.id}>
            <input
              type="radio"
              id={`route-${route.id}`}
              name="route"
              value={route.id}
              checked={selectedRoute && selectedRoute.id === route.id}
              onChange={() => this.handleRouteSelection(route.id)}
            />
            <label htmlFor={`route-${route.id}`}>{route.name}</label>
          </div>
        ))}
        <p>Вибраний маршрут: {selectedRoute ? `${selectedRoute.name}` : 'не вибрано'}</p>
      </div>
    );
  }
}

export default TouristRoutes;

