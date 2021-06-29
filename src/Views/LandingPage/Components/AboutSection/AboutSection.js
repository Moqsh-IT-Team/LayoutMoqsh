import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import "./AboutSection.scss";

function AboutSection() {
  return (
    <section id="AboutSection" className="AboutSection">
      <SectionHeader text="About us" />
      <div className="AboutSection__Text">
        <h1>MOQSH... The Change Starts With Us</h1>
        <p className="AboutSection__Text__Subtext">
          MOQSH, the place where ideas have a home, is a business fest put
          together by the School of Management and Entrepreneurship, SNU to give
          students all across the country a chance to be a part of exciting
          competitions in every field. From Marketing to Human Resources, Moqsh
          encompasses all departments and puts you in real life situations with
          competitions that redefine your practical knowledge. We also build a
          panel, with eminent speakers from different fields to share their
          thoughts that tingle your antennas of curiosity. In all, we are one
          family that learns and grows together, with exciting events,
          competitions and interactions to remember for a lifetime. MOQSH, the
          annual management fest of Shiv Nadar University is back with an
          exciting theme “Building Possibilities From Limitation” for this year
          along with a series of events that will blow your mind!
        </p>
      </div>

      <button className="AboutSection__ViewMore">
        Learn more about Moqsh and Shiv Nadar University
      </button>
    </section>
  );
}

export default AboutSection;
