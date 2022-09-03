import maleProfile from '../../images/maleProfile.jpg';
import femaleProfile from '../../images/femaleProfile.jpg';

export default function Card({ selectedTeam, employee, handleEmployeeClick }) {
  return (
    <div
      style={{ cursor: 'pointer' }}
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2'
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
  );
}
