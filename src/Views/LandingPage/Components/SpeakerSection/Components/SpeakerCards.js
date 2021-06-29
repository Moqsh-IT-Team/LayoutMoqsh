import "./SpeakerCards.scss";

function SpeakerCards({ src, date, Name, desc }) {
  return (
    <div className="SpeakerCard">
      <div className="SpeakerCard__Date">{date}</div>
      <div className="SpeakerCard__content">
        <img className="SpeakerCard__Image" src={src} alt="Speaker" />
        <div className="SpeakerCard__About">
          <div className="SpeakerCard__Name">{Name}</div>
          <div className="SpeakerCard__SmallDesc">
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <button className="SpeakerCard__ViewMore">View More</button>
    </div>
  );
}

export default SpeakerCards;
