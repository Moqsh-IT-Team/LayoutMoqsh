import React, { useState } from "react";
import "./TeamTabs.scss";
import TeamDetails from "../TeamDetails/TeamDetails";
import Club from "../Club/Club";

function TeamTabs() {
  const [activeTab, setActiveTab] = useState(1);

  const tabList = ["Core", "Club", "Moqsh 2021-22 Advisors"];
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
      {tabList[activeTab] === "Club" ? (
        <Club />
      ) : (
        <TeamDetails tab={tabList[activeTab]} />
      )}
    </>
  );
}

TeamTabs.propTypes = {};

TeamTabs.defaultProps = {};

export default TeamTabs;
