import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import "./SpeakerSection.scss";

import img1 from "../../../../Assets/Speakers/Ravi.jpg";
import img2 from "../../../../Assets/Speakers/Chandini.jpg";
import img3 from "../../../../Assets/Speakers/Rajnish.png";
import img4 from "../../../../Assets/Speakers/Akhilesh.jpg";
import img5 from "../../../../Assets/Speakers/Ravi_Venkat.JPG";
import img6 from "../../../../Assets/Speakers/Sachin.JPG";

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
            Name="Ravi Kathuria"
            desc="Sr. Vice-President & Global head of Communications, Corporate Affairs, Advocacy & Marketing, HCL Technologies | Ex- Sr.VP & Head- Global Marketing, Alliances & Business Development, Birlasoft | Ex- Director Business Consulting (South Asia & Pacific), SSA Group"
            src={img1}
            date="19th Dec."
            isActive=""
          />
          <SpeakerCards
            id="2"
            Name="Chandini Kamal "
            desc="Global Head - Diversity and Inclusion, Employee Engagement, Wellness, Employee Experience, HCL Technologies | Ex- Senior Human Resources, Motorola | Ex-Manager- Corporate HR, RR Donnelley India Outsource Pvt. Ltd."
            src={img2}
            date="19th Dec."
            isActive=""
          />
          <SpeakerCards
            id="3"
            Name="Rajnish Khare "
            desc="Digital Banking Leader | Head of Digital Transformations, HDFC Pvt. Ltd. | Ex- Chief Innovation Officer, Citibank | Ex- Head of Direct Banking & Innovation, Standard Chartered Bank | Startup Mentor & Investor"
            src={img3}
            date="19th Dec."
            isActive=""
          />
          <SpeakerCards
            id="4"
            Name="Akhilesh Tuteja"
            desc="Global Head Cyber Security Consulting business & India Head - Digital Consulting and Partner at KPMG | Business strategy, Digital transformation, Data analytics and Cyber security Consultant & Advisor"
            src={img4}
            date="19th Dec."
            isActive=""
          />
          <SpeakerCards
            id="5"
            Name="Ravi Venkatraman "
            desc="CEO & Full-Time Director of Karvy Innotech Ltd. | Ex- Director, Xerox Business Services |
            Ex- Chief Sales Officer, HCL Services Ltd |
            Ex- Head Business Development Asia Pacific, BSSG | Startup Mentor |Performance Coach "
            src={img5}
            date="19th Dec."
            isActive=""
          />
          <SpeakerCards
            id="6"
            Name="Sachin Uppal"
            desc="Founder of GetConvi | Entrepreneur | Angel Investor | Startup Mentor | Ex- CMO, Play Games24×7 Pvt. Ltd. | Ex- Marketing Director, Naseba"
            src={img6}
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
        {/*<a
          href="https://www.instagram.com/smemoqsh/"
          target="_blank"
          rel="noopener noreferrer"
          className="SpeakerSection__ViewMore"
        >
          View More
        </a>*/}
      </div>
    </section>
  );
}

export default SpeakerSection;
