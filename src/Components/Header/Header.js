import "./Header.scss";

import HeaderLogo from "../../Assets/Images/HeaderLogo.png";
function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContainer__Header">
        <img className="Header__logo" alt="Logo" src={HeaderLogo} />
        <div className="Header__contents">
          <div className="contents__item home">
            <p>Home</p>
          </div>
          <div className="contents__item about">
            <p>About</p>
          </div>
          <div className="contents__item events">
            <p>Events</p>
          </div>
          <div className="contents__item speakes">
            <p>Speakers</p>
          </div>
          <div className="contents__item team">
            <p>Team</p>
          </div>
          <div className="contents__item contact">
            <p>Reach Us</p>
          </div>
        </div>
      </div>

      {/* <a href="/" className="logo">
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
      </ul> */}
    </div>
  );
}
export default Header;
