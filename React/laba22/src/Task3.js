import React, { useState } from 'react';

const employees = [
  { id: 1, firstName: 'Іван', lastName: 'Іваненко', salary: 5000 },
  { id: 2, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 3, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 4, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 5, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 6, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 7, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 8, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 9, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 10, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 11, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
  { id: 12, firstName: 'Іван', lastName: 'Іваненко', salary: 5000  },
];

const EmployeesTable = ({ employees }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedEmployees = employees.slice(startIndex, endIndex);

  const pageCount = Math.ceil(employees.length / itemsPerPage);
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);

  const handlePageClick = (pageNum) => {
    setPage(pageNum);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {displayedEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        {pageNumbers.map((pageNum) => (
          <button key={pageNum} onClick={() => handlePageClick(pageNum)}>
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return <EmployeesTable employees={employees} />;
};

export default App;
