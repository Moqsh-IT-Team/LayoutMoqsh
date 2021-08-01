import "./SpeakerCards.scss";
import Modal from "../../../../../../Components/Modal/Modal";

function SpeakerCards({ src, Name, desc, isActive, id, ...props }) {
  return (
    <>
      <div className={`SpeakerCard`}>
        <div className="SpeakerCard__content">
          <img
            className="SpeakerCard__Image"
            {...props}
            src={src}
            alt="Speaker"
          />
          <div className="SpeakerCard__About">
            <div className="SpeakerCard__Name">{Name}</div>
            <div className="SpeakerCard__SmallDesc">
              <p>{desc}</p>
            </div>
          </div>
        </div>
        { /*<button
          // onClick={() => {
          //   document.querySelector(`.Modal${id}`).style.display = "block";
          //   document.getElementById("root").style.overflow = "hidden";
          //   document.querySelector("html").style.overflow = "hidden";
          // }}
          className="SpeakerCard__ViewMore"
        >
          View More
        </button>*/}
      </div>
      <Modal id={id} name={Name} src={src} desc={desc} />
    </>
  );
}

export default SpeakerCards;
