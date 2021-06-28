import "./Footer.scss";
import logo from "../../Assets/Images/logo.jpg";
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineDollarCircle,
} from "react-icons/ai";

import {
  GrLinkedinOption,
  GrFacebookOption,
  GrInstagram,
} from "react-icons/gr";

import { BsMic } from "react-icons/bs";
function Footer() {
  return (
    <section id="FooterSection" className="FooterSection">
      <div className="FooterSection__Left">
        <div className="FooterSection__Description">
          <span className="Heading">Moqsh</span>
          <p className="Description">
            “MOQSH... The Change Starts With Us.” What could be more exciting
            than all your ideas coming true at one platform? MOQSH, the annual
            management fest of Shiv Nadar University is back with an exciting
            theme “Building Possibilities From Limitation” for this year along
            with a series of events that will blow your mind! Stay tuned for
            further updates..
          </p>
        </div>
        <div className="FooterSection__QuickLinks">
          <span className="Heading">QuickLinks</span>
          <div className="QuickLinks">
            <div className="QuickLinks__Home">
              <AiOutlineHome />
              <span>Home</span>
            </div>
            <div className="QuickLinks__Event">
              <AiOutlineCalendar />
              <span>Events</span>
            </div>
            <div className="QuickLinks__Sponsor">
              <AiOutlineDollarCircle />
              <span>Sponsor</span>
            </div>
            <div className="QuickLinks__Speaker">
              <BsMic />
              <span>Speakers</span>
            </div>
          </div>
        </div>
        <div className="FooterSection__Connect">
          <span className="Heading">Connect with us</span>
          <div className="FooterSection__Icons">
            <GrLinkedinOption />
            <GrFacebookOption />
            <GrInstagram />
          </div>
        </div>
      </div>
      <img src={logo} alt="MoqshLogo" className="FooterSection__Right"></img>
    </section>
  );
}

export default Footer;
