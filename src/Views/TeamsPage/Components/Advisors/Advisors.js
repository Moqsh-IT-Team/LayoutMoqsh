import React from "react";
// import PropTypes from "prop-types";
import "./Advisors.scss";
import AdvisorList from "./AdvisorList.json";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";

function Advisors() {
  return (
    <div className="AdvisorsWrapper">
      {Object.values(AdvisorList).map((obj) => (
        <div className="AdvisorsWrapper__section">
          {obj.map((advisor, key) => (
            <TeamMemberCard
              key={key}
              Name={advisor.Name}
              image={advisor.Image}
              position={advisor.Position}
              profilePage={advisor.Profile}
              LinkedIn={advisor.LinkedIn}
            />
          ))}
          {/* <pre>{JSON.stringify(obj, null, 2)}</pre> */}
        </div>
      ))}
    </div>
  );
}

Advisors.propTypes = {};

Advisors.defaultProps = {};

export default Advisors;
