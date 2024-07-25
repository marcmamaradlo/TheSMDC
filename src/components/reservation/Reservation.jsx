import { useContext } from "react";
import { MyContext } from "../../context";

import StaticBanner from "../banner-carousel/StaticBanner";
import Contact from "../contact/Contact";

const Reservation = () => {
  const context = useContext(MyContext);
  const state = context.state;
  const allProperties = state.allProperties;

  const investorImage = {
    backgroundImage: `url('${allProperties[5].bannerImage}')`,
    backgroundRepear: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "20rem",
    width: "100%",
  };

  const foreignImage = {
    backgroundImage: `url('${allProperties[10].bannerImage}')`,
    backgroundRepear: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "20rem",
    width: "100%",
  };

  const bankImage = {
    backgroundImage: `url('${allProperties[3].bannerImage}')`,
    backgroundRepear: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    width: "auto",
    margin: "0rem 1rem",
    borderRadius: "3px",
  };

  return (
    <>
      <StaticBanner
        style={`page-banner`}
        text={`Start your SMDC - The Good Life Journey`}
      />
      <div className="component reservation">
        <div className="investor">
          <div className="investor-details">
            <h3>For Investors based in the Philippines</h3>
            <p>Steps:</p>
            <ol>
              <li>
                Contact us directly, for unit availability, showroom and site
                tripping for pre-selling units and actual and mock unit viewing
                for RFO units.
              </li>
              <li>Choose your preferred unit and payment terms. </li>
              <li>
                Duly fill-out SMDC forms (Download here) (hardcopy will be given
                on the tripping)
              </li>
              <li>2-Government issued ID's with signature</li>
              <li>Reservation Fee</li>
              <li>
                You may call us at your most convenient time for inquiries and
                assistance
              </li>
            </ol>
            <p>Links:</p>
            <ol>
              <li>BDO Bills Payment (Over the counter)</li>
              <li>BDO Online Bills Payment</li>
              <li>Dragon Pay - gw.dragonpay.ph</li>
              <li>Aqwire - http://pay.aqwire.io/smdc</li>
              <li>Ipay88 - (Request for SMDC Payment link)</li>
              <li>Gcash - https://gcashapp.page.link/realestatebill</li>
              <li>BPI Online payment</li>
              <li>Chinabank Online payment</li>
              <li>PNB Online payment</li>
              <li>RCBC Online payment</li>
            </ol>
            <ol></ol>
          </div>
          <div style={{ ...investorImage }}></div>
        </div>
      </div>
      <div className="component">
        <div className="foreign-details">
          <h3>For OFW's and Foreign Investors.</h3>
          <p>Steps:</p>
          <ol>
            <li>
              Contact us directly for your online presentation for your desired
              project, reservation and SMDC account Manager orientation.
            </li>
            <li>Choose your preferred unit and payment terms.</li>
            <li>
              SMDC duly fill-out forms (Download here) (We will give a hardcopy
              on the tripping)
            </li>
            <li>2 Government issued ID's with signature</li>
            <li>Reservation Fee</li>
            <li>
              You may call us at your most convenient time for inquiries and
              assistance
            </li>
          </ol>
          <p>Links:</p>
          <ol>
            <li>BDO Bills Payment (Over the counter)</li>
            <li>BDO Online Bills Payment</li>
            <li>Dragon Pay - gw.dragonpay.ph</li>
            <li>Aqwire - http://pay.aqwire.io/smdc</li>
            <li>Ipay88 - (Request for SMDC Payment link)</li>
            <li>Gcash - https://gcashapp.page.link/realestatebill</li>
            <li>BPI Online payment</li>
            <li>Chinabank Online payment</li>
            <li>PNB Online payment</li>
            <li>RCBC Online payment</li>
          </ol>
        </div>
        <div style={{ ...foreignImage }}></div>
      </div>
      <div style={{ ...bankImage }}>
        <div className="bank">
          <div className="bank-details">
            <h3>Get Bank Loan Assistance!</h3>
            <p>
              Your new home is waiting! As we are almost done on your monthly
              payment and it is now the turn to process your Bank Financing to
              complete your payment for your unit. We are here to help and guide
              you on your bank loan.
            </p>
            <p>
              For your awareness, here are the list of partner-banks of SMDC for
              which you can avail upon applying a bank housing loan to pay for
              your remaining balance:
            </p>
            <ol>
              <li>Banko De Oro</li>
              <li>China Bank</li>
              <li>Bank of the Philippine Islands</li>
              <li>Security Bank</li>
              <li>Union Bank</li>
              <li>Robinsons Bank</li>
              <li>Maybank</li>
              <li>PS Bank and more...</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="component">
        <p>
          For your reference, your application form will be provided and the
          list of requirements for employed and self-employed clients.
        </p>
        <div className="employment">
          <h4>Employed</h4>
          <ol>
            <li>Application Form</li>
            <li>COE with compensation</li>
            <li>Income Tax Return / 2316</li>
            <li>Valid IDs</li>
            <li>Married Certificate (if married)</li>
            <li>Bank Statements / Payslips</li>
          </ol>
        </div>
        <div className="employment">
          <h4>Employed Abroad</h4>
          <ol>
            <li>Proof of Billing (electric, water or phone bill)</li>
            <li>Photocopy of Passport and Working Visa</li>
            <li>Certificate of Employment (OFW)</li>
            <li>Latest 2 successive Payslip if applicable</li>
            <li>Married Certificate (if married)</li>
            <li>Retirement Funding Documents</li>
            <li>Proof of Remittance</li>
          </ol>
        </div>
        <div className="employment">
          <h4>Self-employed / Business</h4>
          <ol>
            <li>Application Form</li>
            <li>
              Photocopy of Audited financial for the last 2 years with BIR stamp
            </li>
            <li>
              Single Proprietorship - Certificate of Business Registration (DTI)
            </li>
            <li>Bank Statement or photocopy for the last 3 months</li>
            <li>Proof of income</li>
            <li>
              Lease contract and Copy of title (for income derived from rental)
            </li>
            <li>Articles of Incorporation and By-laws</li>
            <li>Company profile</li>
            <li>
              Photocopy of 2 government issued IDs (signatories) affix 3
              specimen signatures
            </li>
          </ol>
        </div>
        <div className="employment">
          <h4>Self-employed Abroad / Business</h4>
          <ol>
            <li>Latest 2 year comparative Financial Statements</li>
            <li>Latest Tax Declaration Overseas</li>
            <li>
              Latest Bank Statement or Certificate of Deposit stating 6 mos. ADB
            </li>
          </ol>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Reservation;
