import "./EventSection.scss";
import Card from "../../../../Components/Card/Card";
import { useEmblaCarousel } from "embla-carousel/react";
import { useEffect } from "react";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Temp
import leftEvent from "../../../../Assets/Events/Crackthedeal.png";
import mainEvent from "../../../../Assets/Events/Bullandbear.jpg";
import rightEvent from "../../../../Assets/Events/merkit.png";
import SectionHeader from "../../../../Components/SectionHeading/SectionHeading";

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
              //title="CONSULTAR"
              ImgSrc={mainEvent}
            />
            <Card
              className="embla__slide selected"
              //title="CONSULTAR"
              ImgSrc={leftEvent}
            />
            <Card
              className="embla__slide"
              //title="CONSULTAR"
              ImgSrc={rightEvent}
            />
            <Card
              className="embla__slide"
              //title="CONSULTAR"
              ImgSrc={rightEvent}
            />
            <Card
              className="embla__slide"
              //title="CONSULTAR"
              ImgSrc={rightEvent}
            />
            <Card
              className="embla__slide"
              //title="CONSULTAR"
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
