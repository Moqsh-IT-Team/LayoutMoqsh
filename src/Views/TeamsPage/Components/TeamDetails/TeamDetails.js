import React from "react";
import "./TeamDetails.scss";
import Team from "../../Assets/NewTeams.json";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";

function TeamDetails({ tab }) {
  let currentTeam = Team[tab];
  console.log(tab);
  return (
    <div className="TeamDetailsWrapper">
      {Object.keys(currentTeam).length === 0 ? (
        <div className="placeholder">{tab} team comming soon.</div>
      ) : (
        <>
        
          <TeamMemberCard
            Name={currentTeam.Name}
            isPresident={currentTeam.Name === "Pawan Verma"}
            isHead={true}
            currentTeam={currentTeam}
            LinkedIn={currentTeam.LinkedIn}
          />
          {currentTeam.Members.map((member, index) => (
            <TeamMemberCard
              key={index}
              Name={member.Name}
              Instagram={member.Instagram}
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
