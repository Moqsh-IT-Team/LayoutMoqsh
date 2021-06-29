import "./SponsorSection.scss";
import { useEmblaCarousel } from "embla-carousel/react";
import { useEffect, useCallback } from "react";
import { useRecursiveTimeout } from "../../../../hooks/useRecursiveTimeout";
import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import SponsorCard from "./Components/SponsorCard/SponsorCard";

import media1 from "../../../../Assets/Temp/Sponsor1.png";
import media2 from "../../../../Assets/Temp/Sponsor2.png";
import media3 from "../../../../Assets/Temp/Sponsor3.png";
import media4 from "../../../../Assets/Temp/Sponsor1.png";
import media5 from "../../../../Assets/Temp/Sponsor2.png";

function SponsorSection() {
  const AUTOPLAY_INTERVAL = 2000;
  const [sponsorSectionRef, emblaApi] = useEmblaCarousel({ loop: true });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  const { play } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);
  useEffect(() => {
    play();
  }, [play]);

  return (
    <section id="SponsorSection" className="SponsorSection">
      <SectionHeader text="Our Sponsors" />
      <div className="SponsorSection__Container" ref={sponsorSectionRef}>
        <div className="SponsorSection__contentContainer">
          <SponsorCard src={media1} />
          <SponsorCard src={media2} />
          <SponsorCard src={media3} />
          <SponsorCard src={media4} />
          <SponsorCard src={media5} />
        </div>
      </div>
    </section>
  );
}

export default SponsorSection;
