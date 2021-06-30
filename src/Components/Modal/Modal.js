import "./Modal.scss";

function Modal({ id, name, src, desc }) {
  return (
    <div id="Modal" className={`Modal Modal${id}`}>
      <div className="Modal__Container">
        <div className="Modal__header">
          <h2>{name}</h2>
          <span
            onClick={() => {
              document.querySelector(`.Modal${id}`).style.display = "none";
              document.getElementById("root").style.overflow = "unset";
              document.querySelector("html").style.overflow = "unset";
            }}
            className="Modal__close"
          >
            &times;
          </span>
        </div>

        <div className="Modal__content">
          <img src={src} alt="speaker" />
          <p className="Modal__desc">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
