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
            <a href="viber://chat/?number=%2B639665839308" target="_blank">
              <i className="fa-brands fa-viber"></i>
            </a>
          </div>
          <div className="modal-icon-container">
            <a href="https://wa.me/639665839308" target="_blank">
              <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
            </a>
          </div>
          <div className="modal-icon-container">
            <a href="https://fb.me/marc.mamaradlo.3" target="_blank">
              <i className="fa-brands fa-facebook-messenger"></i>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalIcons;
