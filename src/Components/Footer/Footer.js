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
            <a
              className="FooterSection__Icons--Linkedin"
              href="https://www.linkedin.com/in/sme%20-moqsh-321226150/"
            >
              <GrLinkedinOption />
            </a>
            <a
              className="FooterSection__Icons--Facebook"
              href="http://www.facebook.com/SMEMOQSH/"
            >
              <GrFacebookOption />
            </a>
            <a
              className="FooterSection__Icons--Instagram"
              href="https://www.instagram.com/smemoqsh/"
            >
              <GrInstagram />
            </a>
            <a
              className="FooterSection__Icons--Twitter"
              href="https://twitter.com/smemoqsh?lang=en"
            >
              <GrTwitter />
            </a>
            <a
              className="FooterSection__Icons--call tooltip"
              href="tel:9793798823"
            >
              <span class="tooltiptext">
                Pawan: <br />
                9793798823
              </span>
              <GrPhone />
            </a>
            <a
              className="FooterSection__Icons--mail tooltip"
              href="mailto:pv635@snu.edu.in"
            >
              <span class="tooltiptext">Pawan: pv635@snu.edu.in</span>

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
