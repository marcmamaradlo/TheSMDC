const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-container">
        <div className="contact-info">
          <div>
            <h4>FOR QUOTATIONS, TRIPPINGS AND ONLINE PRESENTATIONS:</h4>
            <div className="contact-div">
              <i className="fa-solid fa-phone"></i>
              <p>(+63) 920 1234 5678</p>
            </div>
            <div className="contact-div">
              <i className="fa-brands fa-viber"></i>
              <p>(+63) 920 1234 5678</p>
            </div>
            <div className="contact-div">
              <i className="fa-brands fa-whatsapp"></i>
              <p>(+63) 920 1234 5678</p>
            </div>
            <div className="contact-div">
              <i className="fa-regular fa-envelope"></i>
              <p>example@email.com</p>
            </div>
          </div>
          <div>
            <h4>
              FOR BILLINGS AND CONCERN FOR EXISTING ACCOUNTS, PLEASE CALL:
            </h4>
            <p>02 1234 5678</p>
            <p>0920 1234 5678</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
