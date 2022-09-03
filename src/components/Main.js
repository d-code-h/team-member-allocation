import maleProfile from '../images/maleProfile.jpg';
import femaleProfile from '../images/femaleProfile.jpg';

export default function Main({
  selectedTeam,
  employees,
  handleEmployeeClick,
  handleTeamChange,
}) {
  return (
    <div className="row justify-content-center mt-3 mb-4">
      <div className="col-8">
        <select
          aria-label="team"
          className="form-control mb-3"
          name="team"
          id="team"
          value={selectedTeam}
          onChange={handleTeamChange}
        >
          <option value="TeamA">Team A</option>
          <option value="TeamB">Team B</option>
          <option value="TeamC">Team C</option>
          <option value="TeamD">Team D</option>
        </select>

        <div className="card-collection">
          {employees.map((employee) => (
            <div
              style={{ cursor: 'pointer' }}
              key={employee.id}
              id={employee.id}
              className={
                employee.teamName === selectedTeam
                  ? 'card m-2 standout'
                  : 'card m-2'
              }
              onClick={handleEmployeeClick}
            >
              {employee.gender === 'male' ? (
                <img
                  className="card-img-top rounded-top"
                  src={maleProfile}
                  alt="maleProfile"
                />
              ) : (
                <img
                  className="card-img-top rounded-top"
                  src={femaleProfile}
                  alt="femaleProfile"
                />
              )}
              <div className="card-body">
                <h5 className="card-title">Full name: {employee.fullName}</h5>
                <p className="card-text">
                  <b>Designation:</b> {employee.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
