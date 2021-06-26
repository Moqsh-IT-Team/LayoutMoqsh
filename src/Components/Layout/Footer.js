import "./Footer.css";
import logo from "./../../Assets/Images/logo.jpg";
import { IoLogoInstagram } from "react-icons/io";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { MdEmail, MdCall } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="one-fourth">
          <img src={logo} alt="" />
        </div>
        <div className="one-half">
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed
            elementum sapien. Etiam neque sapien, tristique at imperdiet ut,
            sodales eget nisi. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Vestibulum dignissim, lectus at dictum eleifend, nisi
            nibh volutpat nulla, at suscipit tortor diam eu nunc. Sed fringilla
            fermentum maximus. Donec aliquet ornare nulla in sagittis. Nam vel
            consequat nisl. Donec massa nunc, tristique id malesuada ac,
            venenatis ut orci. Praesent nec ipsum sit amet dui scelerisque
            mattis eu sit amet ipsum. Proin scelerisque arcu vitae maximus
            bibendum. Nam porttitor quam non hendrerit egestas. Aliquam ac
            commodo urna.
          </p>
        </div>
        <div className="one-fourth">
          <h1>Connect </h1>
          <div className="icon">
            <ul>
              <li>
                <a href="/1">
                  <IoLogoInstagram size="3em" />
                </a>
              </li>
              <li>
                <a href="/2">
                  <AiFillFacebook size="3em" />
                </a>
              </li>
              <li>
                <a href="/3">
                  <AiFillLinkedin size="3em" />
                </a>
              </li>
            </ul>
          </div>

          <div className="contact">
            <div>
              <MdEmail size="2em" /> <p>lorem@lorem</p>
            </div>
            <div>
              <MdEmail size="2em" /> <p>lorem@lorem</p>
            </div>
            <div>
              <MdCall size="2em" /> <p>+91 12345 67890</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
