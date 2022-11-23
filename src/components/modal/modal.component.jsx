import { useModal } from "../../contexts/modal.context";
import "./modal.styles.css";

function Modal({ name, closeIcon = true, transparent = true, children }) {
  const { setModal } = useModal();

  return (
    <div className="align-center modal flex">
      <div className="modal__content">
        {closeIcon && (
          <div
            className="close-icon-wrapper"
            onClick={() => setModal({ modal: name, show: false })}
          >
            <span className="close-icon">X</span>
          </div>
        )}

        <div className="flex">{children}</div>
      </div>
      <div
        className={`modal__shadow-bg${transparent ? " transparent" : ""}`}
        onClick={() => setModal({ modal: name, show: false })}
      ></div>
    </div>
  );
}

export default Modal;

 

 