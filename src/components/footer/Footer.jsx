import { useContext } from "react";
import SMDCLogo from "../../assets/NewSMDCLogo.jpg";
import { MyContext } from "../../context";

const Footer = () => {
  const context = useContext(MyContext);
  const helpfulLinks = context.helpfulLinks;
  const locationLinks = context.locationLinks;

  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img src={SMDCLogo} alt="SMDC Logo" />
          <div className="footer-icons">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-viber"></i>
            <i className="fa-brands fa-whatsapp"></i>
          </div>
        </div>
        <div className="footer-div">
          <h4>HELPFUL LINKS</h4>
          <div className="footer-links">
            <ol>{helpfulLinks()}</ol>
          </div>
        </div>
        <div className="footer-div">
          <h4>LOCATION</h4>
          <div className="footer-links">
            <ol>{locationLinks()}</ol>
          </div>
        </div>
        <div className="footer-div">
          <h4>FOR QUOTATIONS, TRIPPINGS AND ONLINE PRESENTATIONS:</h4>
          <div className="footer-contact">
            <i className="fa-solid fa-phone"></i>
            <p>(+63) 920 1234 5678</p>
          </div>
          <div className="footer-contact">
            <i className="fa-brands fa-viber"></i>
            <p>(+63) 920 1234 5678</p>
          </div>
          <div className="footer-contact">
            <i className="fa-brands fa-whatsapp"></i>
            <p>(+63) 920 1234 5678</p>
          </div>
          <div className="footer-contact">
            <i className="fa-regular fa-envelope"></i>
            <p>example@email.com</p>
          </div>
          <p className="w600">
            FOR BILLINGS AND CONCERN FOR EXISTING ACCOUNTS, PLEASE CALL:
          </p>
          <p>02 1234 5678</p>
          <p>0920 1234 5678</p>
        </div>
        <div className="footer-div">
          <h4>DISCLAIMER</h4>
          <p>
            To promote SMDC Projects and increase Sales and Marketing of SMDC
            Condominiums, all information stated are intended to give a general
            overview of the project only and does not constitute any part of an
            offer or contract.{" "}
            <a className="smdc-blue" href="https://smdc.com/">
              www.smdc.com
            </a>{" "}
            is the official website of SMDC.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
