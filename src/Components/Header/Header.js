import "./Header.css";

function Header(props) {
  return (
    <header className="nav-bar">
      <a href="/" className="logo">
        Logo
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/team">Team</a>
        </li>
        <li>
          <a href="/events">Events</a>
        </li>
        <li>
          <a href="/sponsors">Sponsors</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
