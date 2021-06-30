import "./ClubCard.scss";

function ClubCard({ src }) {
  return (
    <div className="ClubCard">
      <img src={src} alt="Club" />
    </div>
  );
}

export default ClubCard;
