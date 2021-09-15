import React from "react";
import TeamMemberCard from "../TeamMemberCard/TeamMemberCard";
import "./Core.scss";
import Structure from "./Structure.json";
function Core() {
  return (
    <div className="CoreWrapper">
      {Object.values(Structure).map((obj, key) => (
        // <div className="CoreWrapper__section">
        //   <div className="CoreWrapper__heading">{Object.keys(Structure)[key].replace("&"," & ") + " Team"}</div>
        <div className="CoreWrapper__cardHolder">
          {Object.values(obj).map((obj, key) => (
            <TeamMemberCard
              key={key}
              Name={obj.Name}
              position={obj.position}
              LinkedIn={obj.LinkedIn}
              image={obj.Image}
            />
          ))}
        </div>
        // </div>
      ))}
    </div>
  );
}

Core.propTypes = {};

Core.defaultProps = {};

export default Core;
