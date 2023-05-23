import React, { useState } from 'react';

const employees = [
  { id: 1, firstName: 'Іван', lastName: 'Іванович', salary: 10000 },
  { id: 2, firstName: 'Ігор', lastName: 'Ігорович', salary: 15000 },
  { id: 3, firstName: 'Василь', lastName: 'Васильович', salary: 20000 },
];

const EmployeeTable = () => {
  const [selectedIds, setSelectedIds] = useState([]);

  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedIds([...selectedIds, value]);
    } else {
      setSelectedIds(selectedIds.filter((id) => id !== value));
    }
  };

  const selectedEmployees = employees.filter((employee) =>
    selectedIds.includes(employee.id.toString())
  );

  const totalSalary = selectedEmployees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Зарплата</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
              <td>
                <input
                  type="checkbox"
                  value={employee.id}
                  checked={selectedIds.includes(employee.id.toString())}
                  onChange={handleCheckboxChange}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Сума: {totalSalary}</p>
    </div>
  );
};

export default EmployeeTable;
