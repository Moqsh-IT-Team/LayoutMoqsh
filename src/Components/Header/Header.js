import "./Header.scss";

import HeaderLogo from "../../Assets/Images/HeaderLogo.png";
import { Link, useLocation } from "react-router-dom";
import Form from "../../Assets/Images/Form.png";

function Header() {
  let location = useLocation();

  console.log(location.pathname);
  return (
    <div className="HeaderContainer">
      <div className="HeaderContainer__Header">
        <a className="HeaderContainer__redirect" href="/">
          <img className="Header__logo" alt="Logo" src={HeaderLogo} />
          <span>Moqsh</span>
        </a>

        <input
          type="checkbox"
          id="NavBarInput"
          onChange={() => {
            if (
              document
                .querySelector(".Header__contents")
                .classList.contains("Header__ShowNav")
            ) {
              document
                .querySelector(".Header__contents")
                .classList.remove("Header__ShowNav");
            } else {
              document
                .querySelector(".Header__contents")
                .classList.add("Header__ShowNav");
            }
          }}
        />
        <div className="hamButton">
          <label className="HamMenu" htmlFor="NavBarInput">
            <span className="span HL1" />
            <span className="span HL2" />
            <span className="span HL3" />
          </label>
        </div>

        <div className="Header__contents">
          <div
            onClick={() => {
              document.getElementById("NavBarInput").click();
            }}
            className="contents__item home"
          >
            <a href="/#LandingSection">Home</a>
          </div>
          <div
            onClick={() => {
              document.getElementById("NavBarInput").click();
            }}
            className="contents__item about"
          >
            <a href="/#AboutSection">About</a>
          </div>
          <div
            onClick={() => {
              document.getElementById("NavBarInput").click();
            }}
            className="contents__item events"
          >
            <a href="/#EventSection">Events</a>
          </div>
          <div
            onClick={() => {
              document.getElementById("NavBarInput").click();
            }}
            className="contents__item speakers"
          >
            <a href="/#SpeakerSection">Speakers</a>
          </div>
          <div
            onClick={() => {
              document.getElementById("NavBarInput").click();
            }}
            className="contents__item team"
          >
            {/* <a href="/team">Team</a> */}
            <Link to="/team">Team</Link>
          </div>
          <div
            onClick={() => {
              document.getElementById("NavBarInput").click();
            }}
            className="contents__item contact"
          >
            <a href="/#FooterSection">Reach Us</a>
          </div>
        </div>

        {location.pathname === "/" && (
          <a
            href="https://forms.gle/34wydLJicE8UdWg99"
            target="_blank"
            rel="noopener noreferrer"
            className="Header__GoogleForm"
          >
            <img src={Form} alt="Google form" />
          </a>
        )}
      </div>
    </div>
  );
}
export default Header;
