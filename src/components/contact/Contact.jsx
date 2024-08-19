const Contact = () => {
  return (
    <>
      <form>
        <div className="label-input">
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Henry Gokongwei" id="name" />
        </div>
        <div className="label-input">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="example@email.com" id="email" />
        </div>
        <div className="label-input">
          <label htmlFor="mobile">Number</label>
          <div className="form-number">
            <input type="text" placeholder="+63" />
            <input
              type="number"
              placeholder="9665839308"
              id="mobile"
              className="no-spinner"
            />
          </div>
        </div>
        <div className="label-input">
          <label htmlFor="country">Country</label>
          <input type="text" placeholder="Philippines" id="country" />
        </div>
        <div className="label-input">
          <label htmlFor="message">Message</label>
          <textarea type="text" placeholder="Message" id="message" />
        </div>
        <div className="form-button">
          <button>SUBMIT</button>
        </div>
      </form>
    </>
  );
};

export default Contact;
