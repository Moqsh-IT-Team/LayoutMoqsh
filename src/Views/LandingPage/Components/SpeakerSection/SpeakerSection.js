import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import "./SpeakerSection.scss";

import img1 from "../../../../Assets/Temp/speaker1.png";
import img2 from "../../../../Assets/Temp/speaker2.png";
import img3 from "../../../../Assets/Temp/speaker3.png";

import SpeakerCards from "./Components/SpeakerCards/SpeakerCards";
import Accordion from "../../../../Components/Accordion/Accordion";

function SpeakerSection() {
  return (
    <section id="SpeakerSection" className="SpeakerSection">
      <SectionHeader text="Our Speakers" />
      <div className="SpeakerSection__Container">
        <div className="SpeakerSection__preview">
          <SpeakerCards
            id="1"
            Name="Gaurav Sangtani"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
            src={img1}
            date="19th Dec."
            isActive=""
            style={{ height: "125px", width: "128px" }}
          />
          <SpeakerCards
            id="2"
            Name="Rajesh Nair"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
            src={img2}
            date="19th Dec."
            isActive=""
            style={{ height: "125px", width: "128px" }}
          />
          <SpeakerCards
            id="3"
            Name="Gurnoor Kaur Behl"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
            src={img3}
            date="19th Dec."
            isActive=""
            style={{ height: "110px", width: "110px" }}
          />
        </div>
        {/* <Accordion heading="View More">
          Add last 2 card in preview to accordion as well so it can be in accordion as it dissapears from preview
          <SpeakerCards
            id="4"
            Name="Rajesh Nair"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
            src={img2}
            date="19th Dec."
            isActive=""
            style={{ height: "125px", width: "128px" }}
          />
          <SpeakerCards
            id="5"
            Name="Gurnoor Kaur Behl"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
            src={img3}
            date="19th Dec."
            isActive=""
            style={{ height: "110px", width: "110px" }}
          />

          <SpeakerCards
            id="6"
            Name="Rajesh Nair"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
            src={img2}
            date="19th Dec."
            isActive=""
            style={{ height: "125px", width: "128px" }}
          />
          <SpeakerCards
            id="7"
            Name="Gurnoor Kaur Behl"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
            src={img3}
            date="19th Dec."
            isActive=""
            style={{ height: "110px", width: "110px" }}
          />
          <SpeakerCards
            id="8"
            Name="Rajesh Nair"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
            src={img2}
            date="19th Dec."
            isActive=""
            style={{ height: "125px", width: "128px" }}
          />
          <SpeakerCards
            id="9"
            Name="Gurnoor Kaur Behl"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, blanditiis nulla harum facilis ea voluptate expedita provident id odio vitae!"
            src={img3}
            date="19th Dec."
            isActive=""
            style={{ height: "110px", width: "110px" }}
          />
        </Accordion> */}
      </div>
      {/* <button className="SpeakerSection__ViewMore">View More</button> */}
    </section>
  );
}

export default SpeakerSection;
