import "./Footer.css";
import logo from "./../../Assets/Images/logo.jpg";
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
          <h1>Connect With Us</h1>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
