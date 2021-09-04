import "./LandingSection.scss";
import CountdownSection from "./CountdownSection/Countdown";
import moqsh from "../../../../Assets/Images/logo.jpg";

function LandingSection() {
  return (
    <section id="LandingSection " className="LandingSection">
      <div className="row-1 flex">
        <img className="moqsh-logo" src={moqsh} alt="Moqsh Logo" />
        <h1>MOQSH</h1>
      </div>
      <div className="row-2 ">
        <h1>THE ANNUAL MANAGMENT FEST OF SNU</h1>
        <h2>
          Redefining <span>the future </span>
          <br />
          <span className="hashtag">#GrowAgainstAllTheOdds</span>
        </h2>
      </div>

      <div className="row-3 flex" aria-hidden>
        <h1>EXCITING EVENTS AND CONTESTS WITH PRIZES COMING SOON</h1>
        <CountdownSection />
      </div>
    </section>
  );
}

export default LandingSection;
