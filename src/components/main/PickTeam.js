
export default function PickTeam({selectedTeam, handleTeamChange}) {
  return (
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
  );
}
