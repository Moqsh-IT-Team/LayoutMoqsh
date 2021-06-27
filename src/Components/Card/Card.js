import "./Card.scss";

function Card({ className, ImgSrc,title }) {
  return (
    <div className={`Card ${className}`}>
      <div className="Card__title">{title}</div>
      <div className="Card__image">
        <img src={ImgSrc} alt="EventLogo" />
      </div>
      <button className="Card__ViewMore">View More</button>
    </div>
  );
}

export default Card;
