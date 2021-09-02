import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import "./SpeakerSection.scss";

import img1 from "../../../../Assets/Speakers/Roshni_Nadar.jpg";
import img2 from "../../../../Assets/Speakers/Bianca_Ghose.jpg";
import img3 from "../../../../Assets/Speakers/Apurva_Chamaria.jpg";

import SpeakerCards from "./Components/SpeakerCards/SpeakerCards";
// import Accordion from "../../../../Components/Accordion/Accordion";

function SpeakerSection() {
  return (
    <section id="SpeakerSection" className="SpeakerSection">
      <SectionHeader text="Our Speakers" />
      <div className="SpeakerSection__Container">
        <div className="SpeakerSection__preview">
          <SpeakerCards
            id="1"
            Name="Roshni Nadar Malhotra"
            desc="Indian businesswoman,Chairperson of HCL
            Technologies and First woman to lead a listed IT company in India.In 2020, she
            was ranked 55th on the Forbes World&#39;s 100 Most Powerful Women."
            src={img1}
            date="19th Dec."
            isActive=""
          />
          <SpeakerCards
            id="2"
            Name="Bianca Ghose"
            desc="First Chief Storyteller for global technology firm, Wipro. She works with
            marketing and communications teams to improve brand permissions across 35
            countries."
            src={img2}
            date="19th Dec."
            isActive=""
          />
          <SpeakerCards
            id="3"
            Name="Apurva Chamaria"
            desc="SVP at Tech Mahindra, a 5.3 Bn US$ global IT major. He is the
            Chief of Staff to the CEO &amp; MD and leads grow initiatives around Cloud, AI and Wave
            4 businesses."
            src={img3}
            date="19th Dec."
            isActive=""
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
        <a
          href="https://www.instagram.com/smemoqsh/"
          target="_blank"
          rel="noopener noreferrer"
          className="SpeakerSection__ViewMore"
        >
          View More
        </a>
      </div>
    </section>
  );
}

export default SpeakerSection;
