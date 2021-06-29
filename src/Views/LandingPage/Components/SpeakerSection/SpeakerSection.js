import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import "./SpeakerSection.scss";

import img1 from "../../../../Assets/Temp/speaker1.png";
import img2 from "../../../../Assets/Temp/speaker2.png";
import img3 from "../../../../Assets/Temp/speaker3.png";

import SpeakerCards from "./Components/SpeakerCards";


function SpeakerSection() {
  return (
    <section id="SpeakerSection" className="SpeakerSection">
      <SectionHeader text="Our Speakers" />
      <div className="SpeakerSection__Container">
        <SpeakerCards
          Name="Gaurav Sangtani"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
          src={img1}
          date="19th December"
        />
        <SpeakerCards
          Name="Rajesh Nair"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
          src={img2}
          date="19th December"
        />
        <SpeakerCards
          Name="Gurnoor Kaur Behl"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
          src={img3}
          date="19th December"
        />
      </div>
      <button className="SpeakerSection__ViewMore">View More</button>
    </section>
  );

}

export default SpeakerSection;
