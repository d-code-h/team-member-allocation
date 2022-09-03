import Hero from './header/Hero';
import Nav from './header/Nav';

export default function Header({ selectedTeam, selectedTeamCount }) {
  return (
    <header>
      <Nav />
      <Hero selectedTeam={selectedTeam} selectedTeamCount={selectedTeamCount} />
    </header>
  );
}
