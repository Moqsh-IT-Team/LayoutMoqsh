import "./QuickLinks.scss";
import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { ImCalendar } from "react-icons/im";
import { IconContext } from "react-icons";
const QuickLinks = () => {
  return (
    <IconContext.Provider value={{ size: "2.5vw" }}>
      <div className="fCard">
        <AiFillHome />
        <a href="#LandingSection"> Home</a>
      </div>
      <div className="fCard">
        <BiTimer />
        <a href="#CountdownSection"> Countdown</a>
      </div>
      <div className="fCard">
        <AiOutlineInfoCircle />
        <a href="#AboutSection"> About</a>
      </div>
      <div className="fCard">
        <BsMic />
        <a href="#SpeakerSection"> Speakers</a>
      </div>
      <div className="fCard">
        <ImCalendar />
        <a href="#EventSection"> Events</a>
      </div>
      <div className="fCard">
        <AiFillHome />
        <a href="#SponsorsSection"> Sponsors</a>
      </div>
    </IconContext.Provider>
  );
};
export default QuickLinks;
