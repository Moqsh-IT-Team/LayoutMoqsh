import PropTypes from "prop-types";
import "./Accordion.scss";

function Accordion({ heading, children }) {
  return (
    <div className="tabs">
      <div className="tab">
        <input type="checkbox" id="chck1" />
        <label className="tab-label" htmlFor="chck1">
          {heading}
        </label>
        <div className="tab-content">{children}</div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
