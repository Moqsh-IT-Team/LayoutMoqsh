import React from "react";
import PropTypes from "prop-types";
import "./TeamMemberCard.scss";

// import InstagramImage from "../../../../Assets/Images/instagram.png";
// import TwitterImage from "../../../../Assets/Images/twitter.png";
import LinkedInImage from "../../../../Assets/Images/linkedin.png";

function TeamMemberCard({
  Name,
  Instagram,
  Twitter,
  isPresident,
  LinkedIn,
  currentTeam,
  isHead,
}) {
  return (
    <div className="TeamMemberCardWrapper">
      <div className="TeamMemberCardWrapper__Role">
        {isPresident ? "Moqsh President" : isHead ? "Head" : "Member"}
        {/* {isHead ? "Head" : "Member"} */}
      </div>
      <img
        src={
          Object.keys(currentTeam).includes("Image")
            ? currentTeam.Image
            : `https://avatars.dicebear.com/api/male/${Name + Instagram}.svg`
        }
        alt="Profile"
        className="TeamMemberCardWrapper__Image"
      />
      <div className="TeamMemberCardWrapper__Name">{Name}</div>
      <div className="TeamMemberCardWrapper__Social">
        {/* {Instagram !== "" && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.instagram.com/${Instagram}`}
          >
            <img src={InstagramImage} alt="Instagram" />
          </a>
        )}
        {Twitter !== "" && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/${Twitter}`}
          >
            <img src={TwitterImage} alt="Twitter" />
          </a>
        )} */}
        {LinkedIn !== "" && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.linkedin.com/in/${LinkedIn}`}
          >
            <img src={LinkedInImage} alt="LinkedIn" />
          </a>
        )}
      </div>
    </div>
  );
}

TeamMemberCard.propTypes = {
  Name: PropTypes.string.isRequired,
  isHead: PropTypes.bool,
  Instagram: PropTypes.string,
  Twitter: PropTypes.string,
  LinkedIn: PropTypes.string,
};

TeamMemberCard.defaultProps = {
  isHead: false,
  Instagram: "",
  Twitter: "",
  LinkedIn: "",
};

export default TeamMemberCard;
