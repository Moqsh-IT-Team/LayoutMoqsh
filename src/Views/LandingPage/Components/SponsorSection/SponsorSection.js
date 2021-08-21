import "./SponsorSection.scss";
import { useEmblaCarousel } from "embla-carousel/react";
import { useEffect, useCallback } from "react";
import { useRecursiveTimeout } from "../../../../hooks/useRecursiveTimeout";
import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import SponsorCard from "./Components/SponsorCard/SponsorCard";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../../../Assets/Sponsors', false, /\.(png|jpe?g|svg)$/));

const itemsToRender = [];
for (let x in images) {
  itemsToRender.push(<SponsorCard key={x} src={images[x].default} />);
}

function SponsorSection() {
  const AUTOPLAY_INTERVAL = 2000;
  const [sponsorSectionRef, emblaApi] = useEmblaCarousel({
    loop: true,
    containScroll: "keepSnaps",
    dragFree: true,
  });

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
        <div className="SponsorSection__contentContainer">{itemsToRender}</div>
      </div>
    </section>
  );
}

export default SponsorSection;
