import "./EventSection.scss";
import Card from "../../../../Components/Card/Card";
import { useEmblaCarousel } from "embla-carousel/react";
import { useEffect } from "react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";

import Kautilya from "../../../../Assets/Images/ClubLogo1.jpeg";
import Ideonator from "../../../../Assets/Images/ClubLogo7.png";
import Markitact from "../../../../Assets/Images/ClubLogo2.jpeg";
import Bizvilla from "../../../../Assets/Images/ClubLogo4.jpeg";
import Externix from "../../../../Assets/Temp/EventLeft.png";
import HRythm from "../../../../Assets/Images/ClubLogo3.jpeg";
import Moqsh from "../../../../Assets/Images/logo.jpg";

function EventSection() {
  let options = { loop: true, startIndex: 1 };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("scroll", () => {
        emblaApi.slideNodes().forEach((obj, index) => {
          obj.classList.remove("selected");
        });
        emblaApi
          .slideNodes()
          [emblaApi.selectedScrollSnap()].classList.add("selected");
      });
    }
  }, [emblaApi]);

  return (
    <section id="EventSection" className="EventSection">
      <SectionHeader text="Events" />
      <div className="EventSection__CarouselContainer">
        <AiOutlineLeft
          onClick={() => {
            emblaApi.scrollPrev();
          }}
        />
        <div className="EventSection__Carousel embla" ref={emblaRef}>
          <div className="embla__container">
            <Card
              className="embla__slide"
              title="KAUTILYA"
              src="https://dare2compete.com/competition/kautilya-2021-trend-analysis-and-auctions-moqsh-2020-shiv-nadar-university-snu-greater-noida-197580"
              ImgSrc={Kautilya}
            />
            <Card
              className="embla__slide selected"
              title="Ideonator 6.0"
              // style={{ width: "90%", height: "auto" }}
              src="https://dare2compete.com/competition/ideonator-60-moqsh-2021-22-shiv-nadar-university-snu-greater-noida-196995"
              ImgSrc={Ideonator}
            />
            <Card
              className="embla__slide"
              title="Bizvilla 6.0"
              src="https://dare2compete.com/competition/bizvilla-60-moqsh-2021-22-shiv-nadar-university-snu-greater-noida-196991"
              ImgSrc={Bizvilla}
            />
            <Card
              className="embla__slide"
              title="The Ultimate Marketer 6.0"
              src="https://dare2compete.com/competition/the-ultimate-marketer-60-moqsh-2021-22-shiv-nadar-university-snu-greater-noida-196993"
              ImgSrc={Markitact}
            />
            <Card
              className="embla__slide"
              title="Externix 5.0"
              src="https://dare2compete.com/competition/externix-50-moqsh-2020-shiv-nadar-university-snu-greater-noida-135409"
              ImgSrc={Externix}
            />
            <Card
              className="embla__slide"
              title="HRythm 6.0"
              src="https://dare2compete.com/competition/hrythm-moqsh-2020-shiv-nadar-university-snu-greater-noida-196989"
              ImgSrc={HRythm}
            />
            <Card
              className="embla__slide"
              title="Transcend'21-22"
              src="https://dare2compete.com/conference/transcend21-the-corporate-talk-shiv-nadar-university-snu-greater-noida-196983"
              ImgSrc={Moqsh}
            />
          </div>
        </div>
        <AiOutlineRight
          onClick={() => {
            emblaApi.scrollNext();
          }}
        />
      </div>
    </section>
  );
}

export default EventSection;
