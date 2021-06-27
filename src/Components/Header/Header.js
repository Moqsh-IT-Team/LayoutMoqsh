import "./Header.scss";

import HeaderLogo from "../../Assets/Images/HeaderLogo.png";
import moqsh from "../../Assets/Images/Moqsh3.jpeg";
function Header() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderContainer__Header">
        <img className="Header__logo" alt="Logo" src={HeaderLogo} />

        <input
          type="checkbox"
          id="NavBarInput"
          onChange={() => {
            if (document.getElementById("root").style.overflow === "hidden") {
              document.getElementById("root").style.overflow = "unset";
            } else {
              document.getElementById("root").style.overflow = "hidden";
            }

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
