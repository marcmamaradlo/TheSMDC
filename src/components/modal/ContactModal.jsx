import { useContext } from "react";
import { MyContext } from "../../context";
import Contact from "../contact/Contact";

const ContactModal = () => {
  const context = useContext(MyContext);
  const handleContactModalState = context.handleContactModalState;

  return (
    <>
      <div className="modal-container">
        <div className="component">
          <i
            className="fa-solid fa-xmark"
            onClick={handleContactModalState}
          ></i>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default ContactModal;
