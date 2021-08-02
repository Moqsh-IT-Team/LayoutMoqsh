import "./Footer.scss";
import logo from "../../Assets/Images/logo.jpg";
import {
  GrLinkedinOption,
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrPhone,
  GrMailOption,
} from "react-icons/gr";

function Footer() {
  return (
    <section id="FooterSection" className="FooterSection">
      <div className="FooterSection__Left">
        {/*         
        // <div className="FooterSection__ContactUs">
        //   <span className="Heading">Contact Us</span>
        //   <div className="FooterSection__contactDetails--pnone">9794528793</div>
        //   <div className="FooterSection__contactDetails--email">
        //     abc123@gmail.com
        //   </div>
        // </div> */}

        <div className="FooterSection__Connect">
          <span className="Heading">Connect with us</span>{" "}
          {/* <div className="FooterSection__contactDetails--pnone">9794528793</div>
          <div className="FooterSection__contactDetails--email">
            abc123@gmail.com
          </div> */}
          <div className="FooterSection__Icons">
            <GrLinkedinOption />
            <GrFacebookOption />
            <GrInstagram />
            <GrTwitter />
            <a className="FooterSection__Icons--call" href="tel:1234567890">
              <GrPhone />
            </a>
            <a className="FooterSection__Icons--mail" href="mailto:abc123@gmail.com">
              <GrMailOption />
            </a>
          </div>
        </div>
      </div>
      <div className="FooterSection__Right">
        <img src={logo} alt="MoqshLogo" />
      </div>
    </section>
  );
}

export default Footer;
