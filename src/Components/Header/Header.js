import "./Header.scss";

import HeaderLogo from "../../Assets/Images/HeaderLogo.png";
function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContainer__Header">
        <img className="Header__logo" alt="Logo" src={HeaderLogo} />
        <div className="Header__contents">
          <div className="contents__item home">
            <a href="#LandingSection">Home</a>
          </div>
          <div className="contents__item about">
            <a href="#AboutSection">About</a>
          </div>
          <div className="contents__item events">
            <a href="#SpeakerSection">Events</a>
          </div>
          <div className="contents__item speakers">
            <a href="#SpeakerSection">Speakers</a>
          </div>
          <div className="contents__item team">
            <a href="#SpeakerSection">Team</a>
          </div>
          <div className="contents__item contact">
            <a href="#SpeakerSection">Reach Us</a>
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
