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
      <div className="FooterSection__Top">
        <div className="FooterSection__Top__Contact">
          <span className="FooterSection__Top__Contact--heading">Mail</span>
          <span className="FooterSection__Top__Contact--text first">
            Pawan Verma - <i>Moqsh President</i> <br /> pv635@snu.edu.in
          </span>
          <span className="FooterSection__Top__Contact--heading">Phone</span>
          <span className="FooterSection__Top__Contact--text">
            Pawan Verma - <i>Moqsh President</i> <br /> 9793798823
          </span>
        </div>

        <img src={logo} alt="MoqshLogo" />
        <div className="FooterSection__Top__empty"></div>
      </div>
      <div className="FooterSection__Bottom">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="FooterSection__Icons--Linkedin"
          href="https://www.linkedin.com/in/sme%20-moqsh-321226150/"
        >
          <GrLinkedinOption />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="FooterSection__Icons--Facebook"
          href="http://www.facebook.com/SMEMOQSH/"
        >
          <GrFacebookOption />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="FooterSection__Icons--Instagram"
          href="https://www.instagram.com/smemoqsh/"
        >
          <GrInstagram />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="FooterSection__Icons--Twitter"
          href="https://twitter.com/smemoqsh?lang=en"
        >
          <GrTwitter />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="FooterSection__Icons--call tooltip"
          href="tel:9793798823"
        >
          <span className="tooltiptext">
            Pawan: <br />
            9793798823
          </span>
          <GrPhone />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="FooterSection__Icons--mail tooltip"
          href="mailto:pv635@snu.edu.in"
        >
          <span className="tooltiptext">Pawan: pv635@snu.edu.in</span>

          <GrMailOption />
        </a>
      </div>
    </section>
  );
}

export default Footer;
