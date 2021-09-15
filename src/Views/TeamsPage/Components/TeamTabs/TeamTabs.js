import React, { useState } from "react";
import "./TeamTabs.scss";
// import TeamDetails from "../TeamDetails/TeamDetails";
import Club from "../Club/Club";
import Core from "../Core/Core";
import Advisors from "../Advisors/Advisors";

function TeamTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const tabList = ["Core", "Club", "MOQSH 2021-22 Advisors"];
  return (
    <>
      <nav className="TeamTabsWrapper">
        {tabList.map((tab, index) => (
          <div
            key={`${index}__${tab}`}
            className={`TeamTabsWrapper__TabItem${
              activeTab === index ? "--selected" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </nav>
      {tabList[activeTab] === "Club" && <Club />}
      {tabList[activeTab] === "Core" && <Core />}
      {tabList[activeTab] === "MOQSH 2021-22 Advisors" && <Advisors/>}
      
    </>
  );
}

TeamTabs.propTypes = {};

TeamTabs.defaultProps = {};

export default TeamTabs;
