import React, { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([
    { id: 1, firstName: "Іван", lastName: "Іваненко", salary: 5000, gender: "м" },
    { id: 2, firstName: "Оксана", lastName: "Оксаненко", salary: 6000, gender: "ж" },
    { id: 3, firstName: "Ігор", lastName: "Ігорович", salary: 4000, gender: "м" },
  ]);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    salary: "",
    gender: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleAddEmployee = () => {
    const newId = employees.length + 1;
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { id: newId, ...newEmployee },
    ]);
    setNewEmployee({
      firstName: "",
      lastName: "",
      salary: "",
      gender: "",
    });
  };

  return (
    <div>
      <h4>Працівники</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Зарплата</th>
            <th>Стать</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
              <td>{employee.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Додати працівника</h4>
      <form>
        <div>
          <label htmlFor="firstName">Ім'я:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={newEmployee.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Прізвище:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={newEmployee.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="salary">Зарплата:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={newEmployee.salary}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Стать:</label>
          <select id="gender" name="gender" onChange={handleInputChange}>
            <option value="">Оберіть стать</option>
            <option value="М">М</option>
            <option value="Ж">Ж</option>
          </select>
        </div>
        <button type="button" onClick={handleAddEmployee}>
          Додати працівника
        </button>
      </form>
    </div>
  );
}

export default App;
