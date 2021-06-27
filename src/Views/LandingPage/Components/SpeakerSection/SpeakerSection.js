import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import "./SpeakerSection.scss";
import Card1 from './Comp/Cards';

function SpeakerSection() {
  return (
    <section id="SpeakerSection" className="SpeakerSection">
      <SectionHeader text="Our Speakers" />
      <Card1/>
    </section>
  );

}

export default SpeakerSection;
