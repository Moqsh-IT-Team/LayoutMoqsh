import "./Footer.scss";
import logo from "../../Assets/Images/logo.jpg";
import {
  GrLinkedinOption,
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
} from "react-icons/gr";

import { BsMic } from "react-icons/bs";
function Footer() {
  return (
    <section id="FooterSection" className="FooterSection">
      <div className="FooterSection__Left">
        <div className="FooterSection__ContactUs">
          <span className="Heading">Contact Us</span>
          <div className="FooterSection__contactDetails--pnone">9794528793</div>
          <div className="FooterSection__contactDetails--email">
            abc123@gmail.com
          </div>
        </div>

        <div className="FooterSection__Connect">
          <span className="Heading">Connect with us</span>
          <div className="FooterSection__Icons">
            <GrLinkedinOption />
            <GrFacebookOption />
            <GrInstagram />
            <GrTwitter />
          </div>
        </div>
      </div>
      <img src={logo} alt="MoqshLogo" className="FooterSection__Right"></img>
    </section>
  );
}

export default Footer;
