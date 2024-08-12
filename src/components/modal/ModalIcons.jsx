import { useContext } from "react";
import { MyContext } from "../../context";

const ModalIcons = () => {
  const context = useContext(MyContext);
  const modalEmailOnClick = context.modalEmailOnClick;
  const activeModal = context.state.activeModal;

  return (
    <>
      {activeModal ? null : (
        <div className="modal-icons">
          <div className="modal-icon-container" onClick={modalEmailOnClick}>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="modal-icon-container">
            <i className="fa-brands fa-viber"></i>
          </div>
          <div className="modal-icon-container">
            <i className="fa-brands fa-whatsapp"></i>
          </div>
          <div className="modal-icon-container">
            <i className="fa-brands fa-facebook-messenger"></i>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalIcons;
