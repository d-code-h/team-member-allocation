import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Teams from './components/Teams';

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem('selectedTeam')) || 'TeamB'
  );

  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem('employeeList')) || [
      {
        id: 1,
        fullName: 'Bob Jones',
        designation: 'JavaScript Developer',
        gender: 'male',
        teamName: 'TeamA',
      },
      {
        id: 2,
        fullName: 'Jill Bailey',
        designation: 'Node Developer',
        gender: 'female',
        teamName: 'TeamA',
      },
      {
        id: 3,
        fullName: 'Gail Shepherd',
        designation: 'Java Developer',
        gender: 'female',
        teamName: 'TeamA',
      },
      {
        id: 4,
        fullName: 'Sam Reynolds',
        designation: 'React Developer',
        gender: 'male',
        teamName: 'TeamB',
      },
      {
        id: 5,
        fullName: 'David Henry',
        designation: 'DotNet Developer',
        gender: 'male',
        teamName: 'TeamB',
      },
      {
        id: 6,
        fullName: 'Sarah Blake',
        designation: 'SQL Server DBA',
        gender: 'female',
        teamName: 'TeamB',
      },
      {
        id: 7,
        fullName: 'James Bennet',
        designation: 'Angular Developer',
        gender: 'male',
        teamName: 'TeamC',
      },
      {
        id: 8,
        fullName: 'Jessica Faye',
        designation: 'API Developer',
        gender: 'female',
        teamName: 'TeamC',
      },
      {
        id: 9,
        fullName: 'Lita Stone',
        designation: 'C++ Developer',
        gender: 'female',
        teamName: 'TeamC',
      },
      {
        id: 10,
        fullName: 'Daniel Young',
        designation: 'Python Developer',
        gender: 'male',
        teamName: 'TeamD',
      },
      {
        id: 11,
        fullName: 'Adrian Jacobs',
        designation: 'Vue Developer',
        gender: 'male',
        teamName: 'TeamD',
      },
      {
        id: 12,
        fullName: 'Devin Monroe',
        designation: 'Graphic Designer',
        gender: 'male',
        teamName: 'TeamD',
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }, [employees]);

  function handleEmployeeClick(event) {
    const updatedEmployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: '' }
          : { ...employee, teamName: selectedTeam }
        : employee
    );

    setEmployees(updatedEmployees);
  }

  function handleTeamChange(event) {
    setTeam(event.target.value);
  }
  return (
    <Router>
      <div className="container">
        <Header
          selectedTeam={selectedTeam}
          selectedTeamCount={
            employees.filter((employee) => employee.teamName === selectedTeam)
              .length
          }
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                selectedTeam={selectedTeam}
                employees={employees}
                handleEmployeeClick={handleEmployeeClick}
                handleTeamChange={handleTeamChange}
              />
            }
          ></Route>
          <Route
            path="/GroupedTeamMembers"
            element={
              <Teams
                selectedTeam={selectedTeam}
                employees={employees}
                setTeam={setTeam}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
