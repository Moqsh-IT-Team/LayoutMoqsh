import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";
import "./AboutSection.scss";

import { useEffect, useCallback, useState } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import ClubCard from "./Components/ClubCards/ClubCard";
import { useRecursiveTimeout } from "../../../../hooks/useRecursiveTimeout";

// Temp
import club1 from "../../../../Assets/Images/ClubLogo1.jpeg";
import club2 from "../../../../Assets/Images/ClubLogo2.jpeg";
import club3 from "../../../../Assets/Images/ClubLogo3.jpeg";
import club4 from "../../../../Assets/Images/ClubLogo4.jpeg";
import club5 from "../../../../Assets/Images/ClubLogo5.jpg";
import club6 from "../../../../Assets/Images/ClubLogo6.jpg";

function AboutSection() {
  const AUTOPLAY_INTERVAL = 2500;
  // const [AUTOPLAY_INTERVAL, setAUTOPLAY_INTERVAL] = useState(3000);
  const [ClubsRef, ClubemblaApi] = useEmblaCarousel({ loop: true });

  const autoplay = useCallback(() => {
    if (!ClubemblaApi) return;
    if (ClubemblaApi.canScrollNext()) {
      ClubemblaApi.scrollNext();
    } else {
      ClubemblaApi.scrollTo(0);
    }
  }, [ClubemblaApi]);

  const { play,stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);
  useEffect(() => {
    play();
  }, [play]);

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

        <div className="AboutSection__Clubs" ref={ClubsRef}>
          <div
            className="AboutSection__container"
            onMouseLeave={() => {
              play()
            }}
            onMouseEnter={() => {
              stop()
            }}
          >
            <ClubCard className="AboutSection__slide" src={club1} />
            <ClubCard className="AboutSection__slide" src={club2} />
            <ClubCard className="AboutSection__slide" src={club3} />
            <ClubCard className="AboutSection__slide" src={club4} />
            <ClubCard className="AboutSection__slide" src={club5} />
            <ClubCard className="AboutSection__slide" src={club6} />
          </div>
        </div>
      </div>

      {/* <button className="AboutSection__ViewMore">
        Learn more about Moqsh and Shiv Nadar University
      </button> */}
    </section>
  );
}

export default AboutSection;
