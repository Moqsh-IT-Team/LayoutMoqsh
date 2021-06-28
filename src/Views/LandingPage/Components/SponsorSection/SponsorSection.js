import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import "./SponsorSection.scss";

import EmblaCarousel from "./Components/EmblaCarousel";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

function SponsorSection() {
    return (
      <section id="SponsorSection" className="SponsorSection">
        <SectionHeader text="Our Sponsors" />
        <EmblaCarousel slides={slides} />
      </section>
    );
  
  }

export default SponsorSection;