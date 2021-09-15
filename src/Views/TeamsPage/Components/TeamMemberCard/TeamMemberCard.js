import React from "react";
import PropTypes from "prop-types";
import "./TeamMemberCard.scss";

import SNUImage from "../../../../Assets/SNULogo.png";

import LinkedInImage from "../../../../Assets/Images/linkedin.png";

function TeamMemberCard({
  Name,
  Instagram,
  LinkedIn,
  image,
  position,
  profilePage,
}) {
  return (
    <div className="TeamMemberCardWrapper">
      <div className="TeamMemberCardWrapper__Role">
        {/* {isPresident ? "Moqsh President" : isHead ? "Head" : "Member"} */}
        {position}
      </div>
      <img
        src={
          image
            ? "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=" +
              encodeURIComponent(image)
            : `https://avatars.dicebear.com/api/male/${Name + Instagram}.svg`
        }
        alt="Profile"
        className="TeamMemberCardWrapper__Image"
      />
      <div className="TeamMemberCardWrapper__Name">{Name}</div>
      <div className="TeamMemberCardWrapper__Social">
        {LinkedIn !== "" && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.linkedin.com/in/${LinkedIn}`}
          >
            <img src={LinkedInImage} alt="LinkedIn" />
          </a>
        )}
        {profilePage !== "" && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={profilePage}
          >
            <img src={SNUImage} alt="LinkedIn" />
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
  image: PropTypes.string,
  position: PropTypes.string,
  profilePage: PropTypes.string,
};

TeamMemberCard.defaultProps = {
  isHead: false,
  Instagram: "",
  Twitter: "",
  LinkedIn: "",
  image: "",
  position: "",
  profilePage: "",
};

export default TeamMemberCard;
