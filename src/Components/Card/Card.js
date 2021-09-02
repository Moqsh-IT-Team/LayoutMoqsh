import "./Card.scss";

function Card({ className, ImgSrc, title, src, style }) {
  return (
    <div className={`Card ${className}`}>
      <div className="Card__title">{title}</div>
      <div className="Card__image">
        <img style={style} src={ImgSrc} alt="EventLogo" />
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={src}
        className="Card__ViewMore"
      >
        View More
      </a>
    </div>
  );
}

export default Card;
