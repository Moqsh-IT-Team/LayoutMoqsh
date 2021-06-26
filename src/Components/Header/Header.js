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
    </div>
  );
}
export default Header;
