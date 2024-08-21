import { useContext, useEffect } from "react";
import { MyContext } from "../../context";
import Contact from "../contact/Contact";
import ContactInfo from "../contact/ContactInfo";

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
          <div className="contact-us">
            <div className="div2">
              <Contact />
            </div>
            <div className="div1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModal;
