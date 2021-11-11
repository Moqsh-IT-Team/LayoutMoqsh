import "./LandingSection.scss";
import CountdownSection from "./CountdownSection/Countdown";
import moqsh from "../../../../Assets/Images/logo.jpg";

function LandingSection() {
  return (
    <section id="LandingSection " className="LandingSection">
      <div className="row-1 flex">
        <img className="moqsh-logo" src={moqsh} alt="Moqsh Logo" />
        <div className="row-1__title">
          <h1>MOQSH</h1>
          <em>
            <i>2021-22</i>
          </em>
        </div>
      </div>
      <div className="row-2 ">
        <h1>THE ANNUAL MANAGEMENT FEST OF SNU</h1>
        <h2>
          Redefining <span>the Impossible </span>
        </h2>
        <h2>
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
