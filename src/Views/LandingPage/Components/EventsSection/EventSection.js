import "./EventSection.scss";
import Card from "../../../../Components/Card/Card";
import { useEmblaCarousel } from "embla-carousel/react";
import { useEffect } from "react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Temp
import leftEvent from "../../../../Assets/Temp/EventLeft.png";
import mainEvent from "../../../../Assets/Temp/Event1.png";
import rightEvent from "../../../../Assets/Temp/EventRight.png";
import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";

function EventSection() {
  let options = { loop: false, startIndex: 1 };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  useEffect(() => {
    if (emblaApi) {
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
        <div className="EventSection__Carousel" ref={emblaRef}>
          <div className="embla__container">
            <Card
              className="embla__slide"
              title="CONSULTAR"
              ImgSrc={mainEvent}
            />
            <Card
              className="embla__slide"
              title="CONSULTAR"
              ImgSrc={leftEvent}
            />
            <Card
              className="embla__slide"
              title="CONSULTAR"
              ImgSrc={rightEvent}
            />
            <Card
              className="embla__slide"
              title="CONSULTAR"
              ImgSrc={rightEvent}
            />
            <Card
              className="embla__slide"
              title="CONSULTAR"
              ImgSrc={rightEvent}
            />
            <Card
              className="embla__slide"
              title="CONSULTAR"
              ImgSrc={rightEvent}
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
