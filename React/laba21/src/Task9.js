import React from 'react';

class EmployeeTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        employees: [
          { name: 'Микола', surname: 'Шевченко', salary: 3000 },
          { name: 'Василь', surname: 'Чумак', salary: 4000 },
          { name: 'Петро', surname: 'Стеценко', salary: 5000 },
        ],
        sortField: '',
        sortDirection: 'asc',
      };
    }
  
    handleSortClick(field) {
      const sortDirection = this.state.sortField === field ? 
        this.state.sortDirection === 'asc' ? 'desc' : 'asc' : 
        'asc';
      this.setState({
        sortField: field,
        sortDirection,
      });
    }
  
    render() {
      const { employees, sortField, sortDirection } = this.state;
      const sortedEmployees = [...employees].sort((a, b) => {
        const fieldA = a[sortField];
        const fieldB = b[sortField];
        const direction = sortDirection === 'asc' ? 1 : -1;
        if (fieldA < fieldB) {
          return -1 * direction;
        }
        if (fieldA > fieldB) {
          return 1 * direction;
        }
        return 0;
      });
  
      const rows = sortedEmployees.map((employee, index) => (
        <tr key={index}>
          <td>{employee.name}</td>
          <td>{employee.surname}</td>
          <td>{employee.salary}</td>
        </tr>
      ));
  
      return (
        <table>
          <thead>
            <tr>
              <th onClick={() => this.handleSortClick('name')}>Ім'я</th>
              <th onClick={() => this.handleSortClick('surname')}>Прізвище</th>
              <th onClick={() => this.handleSortClick('salary')}>Зарплата</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
}

export default EmployeeTable;
