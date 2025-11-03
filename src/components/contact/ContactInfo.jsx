const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-container">
        <div className="contact-info">
          <div>
            <h4>FOR QUOTATIONS, TRIPPINGS AND ONLINE PRESENTATIONS:</h4>
            <div className="contact-div">
              <i className="fa-solid fa-phone"></i>
              <p>{`(+63) 905 579 5681`}</p>
            </div>
            <div className="contact-div">
              <i className="fa-brands fa-viber"></i>
              <p>{`(+63) 905 579 5681`}</p>
            </div>
            <div className="contact-div">
              <i className="fa-brands fa-whatsapp"></i>
              <p>{`(+63) 905 579 5681`}</p>
            </div>
            <div className="contact-div">
              <i className="fa-regular fa-envelope"></i>
              <p>smdcproperty2025@gmail.com</p>
            </div>
          </div>
          <div>
            <h4>
              FOR BILLINGS AND CONCERN FOR EXISTING ACCOUNTS, PLEASE CALL:
            </h4>
            <p>+63 02 8858 0300</p>
            <p>+63 917 500 5151</p>
            <p>{`+63 999 991 SMDC (7632)`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
