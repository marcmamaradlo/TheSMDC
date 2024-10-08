import { useContext, useEffect } from "react";
import { MyContext } from "../../context";

import Contact from "./Contact";
import ContactInfo from "./ContactInfo";
import HeadingTwo from "./HeadingTwo";
import ContactHero from "./ContactHero";
import Spinner from "../features/spinner/Spinner";

const ContactUs = () => {
  useEffect(() => {
    scrollDocumentToTop();
  }, []);

  const context = useContext(MyContext);
  const contactSpinnerActive = context.state.contactSpinnerActive;
  const scrollDocumentToTop = context.scrollDocumentToTop;

  return (
    <>
      <ContactHero />
      <div className="contact-header">
        <HeadingTwo />
      </div>
      <div className="contact-us">
        <div className="div2">
          <Contact />
        </div>
        <div className="div1">
          <ContactInfo />
        </div>
      </div>
      {contactSpinnerActive ? <Spinner /> : null}
    </>
  );
};

export default ContactUs;
