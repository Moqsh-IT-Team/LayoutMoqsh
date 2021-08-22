import React, { useState } from "react";
import "./TeamTabs.scss";
import TeamDetails from "../TeamDetails/TeamDetails";

function TeamTabs({ props }) {
  const [activeTab, setActiveTab] = useState(12);

  const tabList = [
    "Core",
    "Marketing",
    "HR",
    "Design",
    "Comm.",
    "Sponsorship",
    "Finance",
    "Operations",
    "Security",
    "Overall",
    "Out Reach",
    "Speaker",
    "IT",
    "Cultural",
  ];

  return (
    <>
      <nav className="TeamTabsWrapper">
        <div className={`TeamTabsWrapper__TabItem${activeTab===0 ?"--selected" :""}`} onClick={()=>setActiveTab(0)}>Core</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===1 ?"--selected" :""}`} onClick={()=>setActiveTab(1)}>Marketing</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===2 ?"--selected" :""}`} onClick={()=>setActiveTab(2)}>HR</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===3 ?"--selected" :""}`} onClick={()=>setActiveTab(3)}>Design</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===4 ?"--selected" :""}`} onClick={()=>setActiveTab(4)}>Comm.</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===5 ?"--selected" :""}`} onClick={()=>setActiveTab(5)}>Sponsorship</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===6 ?"--selected" :""}`} onClick={()=>setActiveTab(6)}>Finance</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===7 ?"--selected" :""}`} onClick={()=>setActiveTab(7)}>Operations</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===8 ?"--selected" :""}`} onClick={()=>setActiveTab(8)}>Security</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===9 ?"--selected" :""}`} onClick={()=>setActiveTab(9)}>Overall</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===10 ?"--selected" :""}`} onClick={()=>setActiveTab(10)}>Out Reach</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===11 ?"--selected" :""}`} onClick={()=>setActiveTab(11)}>Speaker</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===12 ?"--selected" :""}`} onClick={()=>setActiveTab(12)}>IT</div>
        <div className={`TeamTabsWrapper__TabItem${activeTab===13 ?"--selected" :""}`} onClick={()=>setActiveTab(13)}>Cultural</div>
      </nav>
      <TeamDetails tab={tabList[activeTab]} />
    </>
  );
}

TeamTabs.propTypes = {};

TeamTabs.defaultProps = {};

export default TeamTabs;
