import "./LandingSection.scss";
import logo from "../../../../Assets/Images/logo.jpg";
import moqsh from "../../../../Assets/Images/Moqsh3.jpeg";
import Countdown from "./Countdown/Countdown.js";
function LandingSection() {
  return (
    <section id="LandingSection" className="LandingSection">
      <div className="LandingPageBody">
        <div className="LandingPageBody__img">
          <img src={logo} alt="" />
        </div>

        <div className="LandingPageBody__text">
          <div className="LandingPageBody__text__img">
            <img src={moqsh} alt="" />
          </div>
          <h1 className="LandingPageBody__text__H1A">The Change </h1>
          <h1 className="LandingPageBody__text__H1B">Starts With Us</h1>
        </div>
      </div>
      <div className="CountdownText">
        <h1>Days Until Exciting events and contests worth $2000</h1>
      </div>
      <Countdown />
    </section>
  );
}

export default LandingSection;
