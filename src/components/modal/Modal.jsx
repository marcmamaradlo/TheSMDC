import { useEffect, useContext } from "react";
import ContactModal from "./ContactModal";

const Modal = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <ContactModal />
    </>
  );
};

export default Modal;
