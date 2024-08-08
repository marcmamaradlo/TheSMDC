const Contact = () => {
  return (
    <>
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
    </>
  );
};

export default Contact;
