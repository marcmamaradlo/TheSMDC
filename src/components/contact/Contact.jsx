const Contact = () => {
  return (
    <>
      <div className="component">
        <h4>Your Dream Home Awaits. Get a quote from us!</h4>
        <p>
          Whether you're looking for a new home, invest property, or just
          curious about our developments. We are here.
        </p>
        <form>
          <div className="label-input">
            <label>Full Name</label>
            <input type="text" placeholder="Henry Gokongwei" />
          </div>
          <div className="label-input">
            <label>Email</label>
            <input type="email" placeholder="example@email.com" />
          </div>
          <div className="label-input">
            <label>Number</label>
            <div className="form-number">
              <input type="text" placeholder="+63" />
              <input type="number" placeholder="9665839308" />
            </div>
          </div>
          <div className="label-input">
            <label>Country</label>
            <input type="text" placeholder="Philippines" />
          </div>
          <div className="label-input">
            <label>Message</label>
            <textarea type="text" placeholder="Message" />
          </div>
          <div className="form-button">
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
