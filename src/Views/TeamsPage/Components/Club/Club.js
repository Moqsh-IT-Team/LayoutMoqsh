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
          </div>
          <div className="ClubWrapper__cardsHolder">
            {Object.values(member).map((obj, key) => (
              <>
                {key !== 0 && (
                  <TeamMemberCard
                    key={key}
                    Name={obj.Name}
                    position={Object.keys(member)[key]}
                    image={obj.Image}
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
