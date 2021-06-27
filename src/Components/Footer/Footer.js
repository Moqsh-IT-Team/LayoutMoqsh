import "./Footer.scss";
import QuickLinks from "./QuickLinks";
// import logo from "./../../Assets/Images/logo.jpg";
// import { IoLogoInstagram } from "react-icons/io";
// import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
// import { MdEmail, MdCall } from "react-icons/md";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__quickLinks">
        <QuickLinks />
      </div>
      <div className="footer_connect"></div>
    </div>
  );
}

export default Footer;
