export default function Hero({ selectedTeam, selectedTeamCount }) {
  return (
    <div className="row justify-content-center mt-3 mb-4">
      <hgroup className="col-8">
        <h1>Team Member Allocation</h1>
        <h5>
          {selectedTeam} has {selectedTeamCount}
          {selectedTeamCount === 1 ? ' member' : ' members'}
        </h5>
      </hgroup>
    </div>
  );
}
