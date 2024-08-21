import Contact from "./Contact";
import ContactInfo from "./ContactInfo";
import HeadingTwo from "./HeadingTwo";
import ContactHero from "./ContactHero";

const ContactUs = () => {
  return (
    <>
      <ContactHero />
      <div className="banner-hero" style={bgImg}></div>
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
    </>
  );
};

export default ContactUs;
