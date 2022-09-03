import Card from './main/Card';
import PickTeam from './main/PickTeam';

export default function Main({
  selectedTeam,
  employees,
  handleEmployeeClick,
  handleTeamChange,
}) {
  return (
    <div className="row justify-content-center mt-3 mb-4">
      <div className="col-8">
        <PickTeam
          selectedTeam={selectedTeam}
          handleTeamChange={handleTeamChange}
        />

        <div className="card-collection">
          {employees.map((employee) => (
            <Card
              selectedTeam={selectedTeam}
              employee={employee}
              handleEmployeeClick={handleEmployeeClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
