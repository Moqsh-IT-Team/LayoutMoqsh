import React from "react";
import "./TeamDetails.scss";
import Team from "../../Assets/Team.json";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";

function TeamDetails({ tab }) {
  let currentTeam = Team[tab];
  return (
    <div className="TeamDetailsWrapper">
      {Object.keys(currentTeam).length === 0 ? (
        <div className="placeholder">{tab} team comming soon.</div>
      ) : (
        <>
          <TeamMemberCard
            Name={currentTeam.Head.Name}
            isHead={true}
            Instagram={currentTeam.Head.Instagram}
            Twitter={currentTeam.Head.Twitter}
            LinkedIn={currentTeam.Head.LinkedIn}
          />
          {currentTeam.Members.map((member, index) => (
            <TeamMemberCard
              key={index}
              Name={member.Name}
              Instagram={member.Instagram}
              Twitter={member.Twitter}
              LinkedIn={member.LinkedIn}
            />
          ))}
        </>
      )}
    </div>
  );
}

TeamDetails.propTypes = {};

TeamDetails.defaultProps = {};

export default TeamDetails;
