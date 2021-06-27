import "./SectionHeading.scss";

function SectionHeader({ text }) {
  return (
    <div className="SectionHeading">
      <p className="SectionHeading__text">{text}</p>
      <div className="SectionHeading__line" />
    </div>
  );
}

export default SectionHeader;
