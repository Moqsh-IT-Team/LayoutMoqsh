import React from "react";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
// import PropTypes from "prop-types";
import "./Club.scss";
import Members from "./Members.json";

function Club() {
  return (
    <div className="ClubWrapper">
      {Object.values(Members).map((member, key) => (
        <div className="ClubWrapper">
          <div className="ClubWrapper__clubHeader">
            {Object.keys(Members)[key].replace("_", " ")}
            {Object.values(member)[0] !== "" && (
              <span className="ClubWrapper__clubMail">
                (
                <a href={`mailTo:${Object.values(member)[0]}`}>
                  <i>{Object.values(member)[0]}</i>
                </a>
                )
              </span>
            )}
          </div>
          <div className="ClubWrapper__cardsHolder">
            {Object.values(member).map((obj, key) => (
              <>
                {key !== 0 && (
                  <TeamMemberCard
                    key={key}
                    Name={obj.Name}
                    position={Object.keys(member)[key].replace("_", "")}
                    image={obj.Image}
                    profilePage={obj.Profile}
                    LinkedIn={obj.LinkedIn}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

Club.propTypes = {};

Club.defaultProps = {};

export default Club;
